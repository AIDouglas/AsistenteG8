import React, { useState } from 'react'
import ScreenShell from './components/ScreenShell'
import { IconUser, IconCamera, IconMapPin, IconChat } from './components/icons'
import ChatScreen from './components/ChatScreen'

/* Home / Login screen */
const HomeLogin = ({ onNavigate }) => {
  return (
    <ScreenShell>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8">
        <div className="p-3 sm:p-4 rounded-lg bg-blue-50">
          <IconUser />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 text-center">ASISTENTE<br/>CIUDADANO</h2>

        <div className="w-full space-y-3">
          <button
            onClick={() => onNavigate('report')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            Ingresar con cédula
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="w-full bg-blue-50 text-blue-900 py-3 rounded-lg font-medium hover:bg-blue-100 active:bg-blue-200 transition-colors"
          >
            Ingresar con correo
          </button>
        </div>
      </div>
    </ScreenShell>
  )
}

/* Report screen */
const ReportScreen = ({ onNavigate }) => {
  return (
    <ScreenShell title="Reportar incidente">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
          <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-xs sm:text-sm text-center">Reportar incidentes</div>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
          <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M3 7h18v12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-xs sm:text-sm text-center">Trámites y servicios</div>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
          <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-xs sm:text-sm text-center">Inseguridad</div>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
          <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
          </div>
          <div className="text-xs sm:text-sm text-center">Otro</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2">
        <button onClick={() => onNavigate('camera')} className="col-span-1 bg-blue-50 p-3 rounded-xl flex items-center gap-2 sm:gap-3 hover:bg-blue-100 active:bg-blue-200 transition-colors">
          <IconCamera className="flex-shrink-0" />
          <span className="text-xs sm:text-sm">Tomar foto</span>
        </button>
        <button onClick={() => onNavigate('map')} className="col-span-1 bg-blue-50 p-3 rounded-xl flex items-center gap-2 sm:gap-3 hover:bg-blue-100 active:bg-blue-200 transition-colors">
          <IconMapPin className="flex-shrink-0" />
          <span className="text-xs sm:text-sm">Ubicación</span>
        </button>
      </div>

      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">Enviar reporte</button>
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={() => onNavigate('home')} className="text-xs sm:text-sm text-blue-700 hover:text-blue-800">← Volver</button>
        <button onClick={() => onNavigate('services')} className="text-xs sm:text-sm text-blue-700 font-medium hover:text-blue-800">Trámites →</button>
      </div>
    </ScreenShell>
  )
}

/* Services screen */
const ServicesScreen = ({ onNavigate }) => (
  <ScreenShell title="Trámites y servicios">
    <div className="space-y-2 sm:space-y-3">
      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
        <div className="p-2 bg-blue-50 rounded-md text-lg sm:text-xl">📄</div>
        <div className="text-sm sm:text-base">Consultar estado</div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
        <div className="p-2 bg-blue-50 rounded-md text-lg sm:text-xl">💳</div>
        <div className="text-sm sm:text-base">Pagar impuestos</div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer">
        <div className="p-2 bg-blue-50 rounded-md text-lg sm:text-xl">📅</div>
        <div className="text-sm sm:text-base">Generar cita</div>
      </div>

      <div className="mt-4 sm:mt-6 bg-blue-50 p-4 sm:p-6 rounded-xl text-center">
        <div className="inline-block bg-red-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-red-600 active:bg-red-700 transition-colors cursor-pointer">SOS</div>
      </div>

      <div className="mt-3 text-xs sm:text-sm text-gray-600 text-center">Hola, ¿en qué puedo ayudarte?</div>

      <div className="mt-4">
        <button onClick={() => onNavigate('profile')} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">Ir a mi perfil</button>
      </div>
    </div>
  </ScreenShell>
)

/* Profile screen */
const ProfileScreen = ({ onNavigate }) => {
  return (
    <ScreenShell title="Perfil ciudadano">
      <div className="flex flex-col items-center gap-2 sm:gap-3 py-3 sm:py-4">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-full">
          <IconUser />
        </div>
        <div className="text-base sm:text-lg font-semibold">Juan Pérez</div>
        <div className="text-xs sm:text-sm text-gray-500">123455789</div>
      </div>

      <div className="bg-blue-50 p-3 sm:p-4 rounded-xl">
        <h3 className="font-semibold mb-2 text-sm sm:text-base">Historial de reportes</h3>
        <div className="space-y-2">
          <div className="bg-white p-2 sm:p-3 rounded-md shadow-sm flex justify-between items-center hover:bg-gray-50 transition-colors">
            <div>
              <div className="font-medium text-xs sm:text-sm">Hueco en la vía</div>
              <div className="text-xs text-gray-500">En proceso</div>
            </div>
            <div className="text-xs text-blue-600">opecero</div>
          </div>

          <div className="bg-white p-2 sm:p-3 rounded-md shadow-sm flex justify-between items-center hover:bg-gray-50 transition-colors">
            <div>
              <div className="font-medium text-xs sm:text-sm">Hueco en la vía</div>
              <div className="text-xs text-gray-500">Resuelto</div>
            </div>
            <div className="text-xs text-blue-600">nilro</div>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4">
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex justify-between items-center">
          <div className="text-sm sm:text-base">Puntos</div>
          <div className="font-bold text-base sm:text-lg text-blue-600">25</div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
        <button onClick={() => onNavigate('services')} className="py-2 sm:py-3 rounded-lg bg-blue-50 hover:bg-blue-100 active:bg-blue-200 transition-colors text-sm sm:text-base">Trámites</button>
        <button onClick={() => onNavigate('home')} className="py-2 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm sm:text-base">Cerrar</button>
      </div>
    </ScreenShell>
  )
}

/* Camera / Map stub screens */
const CameraScreen = ({ onNavigate }) => (
  <ScreenShell title="Tomar foto">
    <div className="h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-sm sm:text-base text-gray-500">
      <div className="text-center">
        <div className="text-4xl sm:text-6xl mb-2">📷</div>
        <div>Simulador de cámara (UI only)</div>
      </div>
    </div>
    <div className="mt-4">
      <button onClick={() => onNavigate('report')} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">← Volver al reporte</button>
    </div>
  </ScreenShell>
)

const MapScreen = ({ onNavigate }) => (
  <ScreenShell title="Seleccionar ubicación">
    <div className="h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-sm sm:text-base text-gray-500">
      <div className="text-center">
        <div className="text-4xl sm:text-6xl mb-2">🗺️</div>
        <div>Mapa (simulado)</div>
      </div>
    </div>
    <div className="mt-4">
      <button onClick={() => onNavigate('report')} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">← Volver al reporte</button>
    </div>
  </ScreenShell>
)

/* App: routing simple */
export default function App() {
  const [route, setRoute] = useState('home')

  const navigate = (r) => setRoute(r)

  return (
    <div className="min-h-screen bg-white">
      {route === 'home' && <HomeLogin onNavigate={navigate} />}
      {route === 'report' && <ReportScreen onNavigate={navigate} />}
      {route === 'services' && <ServicesScreen onNavigate={navigate} />}
      {route === 'profile' && <ProfileScreen onNavigate={navigate} />}
      {route === 'camera' && <CameraScreen onNavigate={navigate} />}
      {route === 'map' && <MapScreen onNavigate={navigate} />}
      {route === 'chat' && <ChatScreen onNavigate={navigate} />}

      {/* Bottom navigation (persistent) */}
      <nav className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-3 sm:px-6">
        <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg flex items-center justify-between">
          <button onClick={() => navigate('home')} className={`flex-1 py-1.5 sm:py-2 text-xs sm:text-sm ${route==='home' ? 'text-blue-700 font-semibold' : 'text-gray-500'} hover:text-blue-600 transition-colors`}>Inicio</button>
          <button onClick={() => navigate('report')} className={`flex-1 py-1.5 sm:py-2 text-xs sm:text-sm ${route==='report' ? 'text-blue-700 font-semibold' : 'text-gray-500'} hover:text-blue-600 transition-colors`}>Reportar</button>
          <button onClick={() => navigate('services')} className={`flex-1 py-1.5 sm:py-2 text-xs sm:text-sm ${route==='services' ? 'text-blue-700 font-semibold' : 'text-gray-500'} hover:text-blue-600 transition-colors`}>Trámites</button>
          <button onClick={() => navigate('chat')} className={`flex-1 py-1.5 sm:py-2 text-xs sm:text-sm ${route==='chat' ? 'text-blue-700 font-semibold' : 'text-gray-500'} hover:text-blue-600 transition-colors`} title="Chat con IA">Chat</button>
          <button onClick={() => navigate('profile')} className={`flex-1 py-1.5 sm:py-2 text-xs sm:text-sm ${route==='profile' ? 'text-blue-700 font-semibold' : 'text-gray-500'} hover:text-blue-600 transition-colors`}>Perfil</button>
        </div>
      </nav>
    </div>
  )
}
