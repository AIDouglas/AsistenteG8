import React, { useState, useRef, useEffect } from 'react'
import ScreenShell from './ScreenShell'
import ChatBubble from './ChatBubble'
import { IconChat } from './icons'

export default function ChatScreen({ onNavigate }) {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hola, soy el Asesor Ciudadano con IA. ¿En qué puedo ayudarte hoy? Ejemplos: \"¿Cómo hago una veeduría?\", \"Quiero reportar un hueco\".' },
    { id: 2, from: 'user', text: '¿Cómo reporto un hueco en mi calle?' }
  ])
  const [input, setInput] = useState('')
  const [showProjectInfo, setShowProjectInfo] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    // hacer scroll al final cuando cambian mensajes
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = (text) => {
    if (!text || !text.trim()) return
    const userMsg = { id: Date.now(), from: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    // Placeholder: Simula respuesta del bot (aquí integrarás IA)
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        from: 'bot',
        text: `Simulación de respuesta: Para reportar un hueco, selecciona 'Reportar incidente' > Vías, adjunta foto y confirma ubicación. ¿Quieres que te guíe paso a paso? (Respuesta simulada)`
      }
      setMessages(prev => [...prev, botReply])
    }, 800)
  }

  const quick = (q) => {
    sendMessage(q)
  }

  return (
    <ScreenShell title="Asesor Ciudadano con IA">
      <div className="flex items-center gap-3">
        <div className="bg-blue-50 p-3 rounded-full"><IconChat className="w-8 h-8 text-blue-700" /></div>
        <div>
          <div className="font-semibold">Asesor Ciudadano con IA</div>
          <div className="text-xs text-gray-500">Multicanal · Chat conversacional · Accesible</div>
        </div>
        <div className="ml-auto">
          <button onClick={() => setShowProjectInfo(s => !s)} className="text-sm text-blue-700">Resumen</button>
        </div>
      </div>

      {/* Resumen del proyecto (colapsible) */}
      {showProjectInfo && (
        <div className="bg-blue-50 p-3 rounded-lg mt-3 text-sm text-gray-800">
          <div className="font-semibold">Asesor Ciudadano con IA - Antioquia Territorio de Paz</div>
          <div className="mt-2">Acompañante digital multicanal para guiar a ciudadanos en trámites, reportes, geolocalización y participación. Enfocado en accesibilidad, inclusión y confianza institucional.</div>
          <div className="mt-2 text-xs text-gray-500">Se integrarán: chat conversacional, recomendaciones, mapas y canal de reportes. (Texto resumido)</div>
        </div>
      )}

      {/* Chat area */}
      <div ref={listRef} className="mt-3 h-64 overflow-auto space-y-3 px-1">
        {messages.map(m => <ChatBubble key={m.id} from={m.from} text={m.text} />)}
      </div>

      {/* Quick replies */}
      <div className="mt-2 flex gap-2 overflow-x-auto py-2">
        {['¿Cómo hago una veeduría?', 'Reportar hueco', 'Oficinas cercanas', 'Emergencia'].map((q) => (
          <button key={q} onClick={() => quick(q)} className="whitespace-nowrap bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm shadow-sm">{q}</button>
        ))}
      </div>

      {/* Input area */}
      <div className="mt-3 flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(input) }}
          placeholder="Escribe tu pregunta... Ej: ¿Cómo reporto un servicio?"
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button onClick={() => sendMessage(input)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Enviar</button>
      </div>

      {/* Nota para integraciones reales */}
      <div className="mt-3 text-xs text-gray-500">
        Integración: Cada respuesta deberá incluir fuente, nivel de confianza y opción para pedir derivación humana en casos sensibles.
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={() => onNavigate('home')} className="text-sm text-blue-700">Volver</button>
        <button onClick={() => onNavigate('services')} className="text-sm text-blue-700 font-medium">Trámites</button>
      </div>
    </ScreenShell>
  )
}
