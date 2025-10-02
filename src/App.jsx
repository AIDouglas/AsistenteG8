import React, { useState } from 'react'
import ScreenShell from './components/ScreenShell'
import { IconUser, IconCamera, IconMapPin } from './components/icons'

/* Home / Login screen */
const HomeLogin = ({ onNavigate }) => {
  return (
    <ScreenShell>
      <div className="flex flex-col items-center justify-center gap-6 py-8">
        <div className="p-4 rounded-lg bg-blue-50">
          <IconUser />
        </div>
        <h2 className="text-3xl font-extrabold text-blue-900 text-center">ASISTENTE<br/>CIUDADANO</h2>

        <div className="w-full">
          <button
            onClick={() => onNavigate('report')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-sm"
          >
            Ingresar con cédula
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="w-full bg-blue-50 text-blue-900 py-3 rounded-lg font-medium mt-3"
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
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-sm text-center">Reportar incidentes</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M3 7h18v12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-sm text-center">Trámites y servicios</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="text-sm text-center">Inseguridad</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
          </div>
          <div className="text-sm text-center">Otro</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <button onClick={() => onNavigate('camera')} className="col-span-1 bg-blue-50 p-3 rounded-xl flex items-center gap-3">
          <IconCamera />
          <span>Tomar foto</span>
        </button>
        <button onClick={() => onNavigate('map')} className="col-span-1 bg-blue-50 p-3 rounded-xl flex items-center gap-3">
          <IconMapPin />
          <span>Ubicación</span>
        </button>
      </div>

      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">Enviar reporte</button>
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={() => onNavigate('home')} className="text-sm text-blue-700">Volver</button>
        <button onClick={() => onNavigate('services')} className="text-sm text-blue-700 font-medium">Trámites y servicios</button>
      </div>
    </ScreenShell>
  )
}

/* Services screen */
const ServicesScreen = ({ onNavigate }) => (
  <ScreenShell title="Trámites y servicios">
    <div className="space-y-3">
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-md">📄</div>
        <div>Consultar estado</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-md">💳</div>
        <div>Pagar impuestos</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-md">📅</div>
        <div>Generar cita</div>
      </div>

      <div className="mt-6 bg-blue-50 p-6 rounded-xl text-center">
        <div className="inline-block bg-red-500 text-white px-8 py-3 rounded-full font-bold">SOS</div>
      </div>

      <div className="mt-3 text-sm text-gray-600">Hola, ¿en qué puedo ayudarte?</div>

      <div className="mt-4">
        <button onClick={() => onNavigate('profile')} className="w-full bg-blue-600 text-white py-3 rounded-lg">Ir a mi perfil</button>
      </div>
    </div>
  </ScreenShell>
)

/* Profile screen */
const ProfileScreen = ({ onNavigate }) => {
  return (
    <ScreenShell title="Perfil ciudadano">
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="bg-blue-50 p-4 rounded-full">
          <IconUser />
        </div>
        <div className="text-lg font-semibold">Juan Pérez</div>
        <div className="text-sm text-gray-500">123455789</div>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl">
        <h3 className="font-semibold mb-2">Historial de reportes</h3>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
            <div>
              <div className="font-medium">Hueco en la vía</div>
              <div className="text-xs text-gray-500">En proceso</div>
            </div>
            <div className="text-xs text-blue-600">opecero</div>
          </div>

          <div className="bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
            <div>
              <div className="font-medium">Hueco en la vía</div>
              <div className="text-xs text-gray-500">Resuelto</div>
            </div>
            <div className="text-xs text-blue-600">nilro</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
          <div>Puntos</div>
          <div className="font-bold">25</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button onClick={() => onNavigate('services')} className="py-3 rounded-lg bg-blue-50">Trámites</button>
        <button onClick={() => onNavigate('home')} className="py-3 rounded-lg bg-blue-600 text-white">Cerrar</button>
      </div>
    </ScreenShell>
  )
}

/* Camera / Map stub screens */
const CameraScreen = ({ onNavigate }) => (
  <ScreenShell title="Tomar foto">
    <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">Simulador de cámara (UI only)</div>
    <div className="mt-4">
      <button onClick={() => onNavigate('report')} className="w-full bg-blue-600 text-white py-3 rounded-lg">Volver</button>
    </div>
  </ScreenShell>
)

const MapScreen = ({ onNavigate }) => (
  <ScreenShell title="Seleccionar ubicación">
    <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">Mapa (simulado)</div>
    <div className="mt-4">
      <button onClick={() => onNavigate('report')} className="w-full bg-blue-600 text-white py-3 rounded-lg">Volver</button>
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

      {/* Bottom navigation (persistent) */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-6">
        <div className="bg-white rounded-xl p-3 shadow-lg flex justify-between">
          <button onClick={() => navigate('home')} className={`flex-1 py-2 ${route==='home' ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>Inicio</button>
          <button onClick={() => navigate('report')} className={`flex-1 py-2 ${route==='report' ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>Reportar</button>
          <button onClick={() => navigate('services')} className={`flex-1 py-2 ${route==='services' ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>Trámites</button>
          <button onClick={() => navigate('profile')} className={`flex-1 py-2 ${route==='profile' ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>Perfil</button>
        </div>
      </nav>
    </div>
  )
}
