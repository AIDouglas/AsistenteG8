import React, { useState, useRef, useEffect } from 'react'
import ScreenShell from './ScreenShell'
import ChatBubble from './ChatBubble'
import { IconChat } from './icons'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default function ChatScreen({ onNavigate }) {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hola, soy el Asesor Ciudadano con IA. ¿En qué puedo ayudarte hoy? Ejemplos: "¿Cómo hago una veeduría?", "Quiero reportar un hueco".' }
  ])
  const [input, setInput] = useState('')
  const [showProjectInfo, setShowProjectInfo] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    // hacer scroll al final cuando cambian mensajes
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (text) => {
    if (!text || !text.trim()) return
    
    const userMsg = { id: Date.now(), from: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      // Verificar que la API Key esté configurada
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      
      // 🔍 LOG TEMPORAL - Depuración
      console.log('=== DEBUG GEMINI API ===')
      console.log('API Key existe:', !!apiKey)
      console.log('API Key primeros 10 chars:', apiKey ? apiKey.substring(0, 10) + '...' : 'undefined')
      console.log('Todas las env vars:', import.meta.env)
      
      if (!apiKey || apiKey === 'TU_API_KEY_AQUI' || apiKey === 'tu_api_key_aqui') {
        throw new Error('API Key no configurada')
      }

      // Inicializar Gemini AI
      console.log('Inicializando Gemini...')
      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
      console.log('Modelo creado exitosamente')
      
      // Contexto del sistema para el asistente ciudadano
      const prompt = `Eres un Asesor Ciudadano de Antioquia, Colombia. Tu objetivo es ayudar a los ciudadanos con:
- Trámites y servicios gubernamentales
- Reportes de incidentes (huecos, alumbrado, inseguridad, etc.)
- Información sobre veedurías ciudadanas
- Orientación sobre servicios públicos
- Emergencias y contactos importantes

Responde de manera clara, concisa y útil. Si el ciudadano necesita reportar algo, guíalo paso a paso.

Pregunta del ciudadano: ${text}`

      console.log('Enviando mensaje a Gemini...')
      const result = await model.generateContent(prompt)
      console.log('Respuesta recibida:', result)
      
      const response = await result.response
      const botText = response.text()
      console.log('Texto extraído:', botText.substring(0, 50) + '...')

      const botReply = {
        id: Date.now() + 1,
        from: 'bot',
        text: botText
      }
      setMessages(prev => [...prev, botReply])
    } catch (error) {
      console.error('=== ERROR COMPLETO ===')
      console.error('Error objeto:', error)
      console.error('Error mensaje:', error.message)
      console.error('Error stack:', error.stack)
      console.error('Error response:', error.response)
      
      let errorMessage = 'Lo siento, hubo un error al procesar tu mensaje.'
      
      if (error.message === 'API Key no configurada') {
        errorMessage = '⚠️ Por favor, configura tu API Key de Gemini en el archivo .env (VITE_GEMINI_API_KEY)'
      } else if (error.message?.includes('API key not valid')) {
        errorMessage = '⚠️ La API Key no es válida. Verifica que la copiaste correctamente desde https://aistudio.google.com/app/apikey'
      } else if (error.message?.includes('SAFETY')) {
        errorMessage = 'Lo siento, no puedo responder a esa pregunta por políticas de seguridad. ¿Puedo ayudarte con algo más?'
      }
      
      const errorMsg = {
        id: Date.now() + 1,
        from: 'bot',
        text: errorMessage
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const quick = (q) => {
    sendMessage(q)
  }

  return (
    <ScreenShell title="Asesor Ciudadano con IA">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-blue-50 p-2 sm:p-3 rounded-full"><IconChat className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" /></div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm sm:text-base truncate">Asesor Ciudadano con IA</div>
          <div className="text-xs text-gray-500 hidden sm:block">Multicanal · Chat conversacional · Accesible</div>
        </div>
        <div>
          <button onClick={() => setShowProjectInfo(s => !s)} className="text-xs sm:text-sm text-blue-700 px-2 py-1">Info</button>
        </div>
      </div>

      {/* Resumen del proyecto (colapsible) */}
      {showProjectInfo && (
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mt-3 text-xs sm:text-sm text-gray-800">
          <div className="font-semibold">Asesor Ciudadano con IA - Antioquia Territorio de Paz</div>
          <div className="mt-2">Acompañante digital multicanal para guiar a ciudadanos en trámites, reportes, geolocalización y participación. Enfocado en accesibilidad, inclusión y confianza institucional.</div>
          <div className="mt-2 text-xs text-gray-500">Se integrarán: chat conversacional, recomendaciones, mapas y canal de reportes.</div>
        </div>
      )}

      {/* Chat area */}
      <div ref={listRef} className="mt-3 h-56 sm:h-64 md:h-80 overflow-auto space-y-3 px-1">
        {messages.map(m => <ChatBubble key={m.id} from={m.from} text={m.text} />)}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <div className="animate-pulse">●</div>
            <div className="animate-pulse delay-100">●</div>
            <div className="animate-pulse delay-200">●</div>
            <span className="ml-2">El asistente está escribiendo...</span>
          </div>
        )}
      </div>

      {/* Quick replies */}
      <div className="mt-2 flex gap-2 overflow-x-auto py-2 scrollbar-hide">
        {['¿Cómo hago una veeduría?', 'Reportar hueco', 'Oficinas cercanas', 'Emergencia'].map((q) => (
          <button key={q} onClick={() => quick(q)} className="whitespace-nowrap bg-white border border-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors">{q}</button>
        ))}
      </div>

      {/* Input area */}
      <div className="mt-3 flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !isLoading) sendMessage(input) }}
          placeholder="Escribe tu pregunta..."
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={isLoading}
        />
        <button 
          onClick={() => sendMessage(input)} 
          className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base hover:bg-blue-700 active:bg-blue-800 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? '...' : 'Enviar'}
        </button>
      </div>

      {/* Nota para integraciones reales */}
      <div className="mt-2 sm:mt-3 text-xs text-gray-500 text-center">
        ✨ Powered by Google Gemini AI
      </div>

      <div className="mt-3 sm:mt-4 flex justify-between">
        <button onClick={() => onNavigate('home')} className="text-xs sm:text-sm text-blue-700 hover:text-blue-800">← Volver</button>
        <button onClick={() => onNavigate('services')} className="text-xs sm:text-sm text-blue-700 font-medium hover:text-blue-800">Trámites →</button>
      </div>
    </ScreenShell>
  )
}
