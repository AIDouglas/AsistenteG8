# 🏛️ Asistente Ciudadano con IA

Un prototipo de aplicación móvil/web para **gestión ciudadana** con inteligencia artificial, que permite:
- 💬 **Chat con IA** powered by Google Gemini para asesoría ciudadana
- 📢 Reportar incidentes (inseguridad, daños, huecos en vías, etc.)
- 📋 Consultar y gestionar trámites y servicios
- 👤 Visualizar el perfil del ciudadano y su historial de reportes
- 🚨 Acceso rápido a un botón de emergencia **SOS**
- 📱 **Diseño 100% responsive** (móvil, tablet, desktop)

## ✨ Características Principales

### 🤖 Chat con IA
- Integración con **Google Gemini AI** (gratuito)
- Respuestas formateadas con **Markdown** (negritas, listas, etc.)
- Contexto especializado en trámites y servicios de Antioquia, Colombia
- Interfaz conversacional intuitiva

### 📱 Diseño Responsive
- Adaptable a móviles (320px+), tablets y desktop
- Navegación inferior optimizada para uso con una mano
- Tipografía y espaciados adaptables
- Transiciones suaves y feedback visual

---

## 🚀 Requisitos previos

- **Node.js** >= 18.x
- **npm** como gestor de paquetes
- **Cuenta de Google** para obtener API Key de Gemini (gratis)

---

## 📦 Instalación

### 1. Clonar el proyecto

```bash
git clone <url-del-repo>
cd asistente-ciudadano
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la API Key de Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Crea una API Key (es **gratis**)
4. Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

5. Abre el archivo `.env` y pega tu API Key (sin comillas):

```env
VITE_GEMINI_API_KEY=AIzaSyAbc123def456ghi789jkl012mno345pqr
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

---

## 🏗️ Estructura del Proyecto

```
asistente-ciudadano/
├─ .env                      # Variables de entorno (API Keys)
├─ .env.example              # Plantilla de variables de entorno
├─ package.json              # Dependencias y scripts
├─ index.html                # Entrada principal
├─ postcss.config.js         # Configuración de PostCSS
├─ tailwind.config.js        # Configuración de Tailwind + Typography
├─ README.md                 # Esta documentación
├─ public/                   # Archivos estáticos
└─ src/
   ├─ main.jsx               # Punto de entrada React
   ├─ index.css              # Estilos globales + Tailwind
   ├─ App.jsx                # Navegación y pantallas principales
   └─ components/            # Componentes reutilizables
      ├─ ScreenShell.jsx     # Contenedor de pantallas
      ├─ ChatScreen.jsx      # Pantalla de chat con IA
      ├─ ChatBubble.jsx      # Burbujas de chat con Markdown
      └─ icons.jsx           # Íconos SVG
```

---

## 📱 Pantallas Disponibles

| Pantalla | Ruta | Descripción |
|----------|------|-------------|
| 🏠 **Inicio** | `/` | Pantalla de login/bienvenida |
| 📢 **Reportar** | `/report` | Formulario para reportar incidentes |
| 📋 **Trámites** | `/services` | Lista de servicios disponibles |
| 💬 **Chat IA** | `/chat` | Asistente virtual con Gemini AI |
| 👤 **Perfil** | `/profile` | Perfil del usuario e historial |
| 📷 **Cámara** | `/camera` | Simulador de cámara |
| 🗺️ **Mapa** | `/map` | Simulador de mapa |

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React 18** - Framework de UI
- ⚡ **Vite** - Build tool y dev server
- 🎨 **Tailwind CSS** - Framework de estilos
- 🤖 **Google Gemini AI** - Inteligencia artificial
- 📝 **React Markdown** - Renderizado de Markdown
- 📦 **@tailwindcss/typography** - Estilos para contenido Markdown

---

## 🎨 Características de Diseño

### Responsive Design
- **Móvil primero**: Optimizado para pantallas pequeñas (320px+)
- **Breakpoints**: `sm:640px`, `md:768px`, `lg:1024px`
- **Tipografía adaptable**: Tamaños de fuente escalables
- **Espaciados inteligentes**: Padding y margins responsivos

### Accesibilidad
- Contraste de colores según WCAG
- Tamaños de texto legibles
- Áreas de toque optimizadas (mínimo 44x44px)
- Estados hover/active para feedback visual

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Compila para producción
npm run preview      # Previsualiza el build de producción
```

---

## 🤖 Uso del Chat con IA

El chat está configurado para actuar como un **Asesor Ciudadano de Antioquia**, especializado en:

- ✅ Trámites y servicios gubernamentales
- ✅ Reportes de incidentes (huecos, alumbrado, inseguridad)
- ✅ Información sobre veedurías ciudadanas
- ✅ Orientación sobre servicios públicos
- ✅ Emergencias y contactos importantes

### Ejemplos de preguntas:
- "¿Cómo reporto un hueco en mi calle?"
- "¿Qué es una veeduría ciudadana?"
- "Necesito pagar mis impuestos"
- "¿Dónde está la oficina más cercana?"

---

## 📝 Notas de Desarrollo

### Variables de Entorno
- ⚠️ **Nunca** subas el archivo `.env` al repositorio
- ✅ Usa `.env.example` como plantilla
- 🔒 Las API Keys son sensibles, protégelas

### Reiniciar después de cambios en .env
Después de modificar el archivo `.env`, debes reiniciar el servidor:

```bash
# Detener el servidor (Ctrl+C)
# Iniciar nuevamente
npm run dev
```

---

## 🚀 Próximas Mejoras

- [ ] Integración con backend real
- [ ] Autenticación de usuarios
- [ ] Persistencia de datos
- [ ] Geolocalización real
- [ ] Cámara funcional
- [ ] Notificaciones push
- [ ] Modo offline (PWA)
- [ ] Tests unitarios y e2e

---

## 📄 Licencia

Este proyecto es un prototipo educativo.

---

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📞 Soporte

Si tienes problemas con la integración de Gemini AI:

1. Verifica que tu API Key esté correctamente configurada en `.env`
2. Asegúrate de que no tiene comillas
3. Reinicia el servidor después de cambiar `.env`
4. Revisa la consola del navegador (F12) para ver logs detallados

---

**Hecho con ❤️ para Antioquia, Colombia** 🇨🇴

```
```

Instalar dependencias:

``` bash
npm install
# o con pnpm
pnpm install
```

Levantar en modo desarrollo:

``` bash
npm run dev
```

Esto abrirá la aplicación en **http://localhost:5173** (por defecto en
Vite).

Build para producción:

``` bash
npm run build
npm run preview
```

------------------------------------------------------------------------

## Tecnologías usadas

-   **React 18** -- librería de UI.
-   **Vite** -- empaquetador rápido para desarrollo.
-   **Tailwind CSS** -- framework de estilos utilitarios.
-   **PostCSS + Autoprefixer** -- compatibilidad de CSS.
-   **Estado local de React** (`useState`) -- navegación sin rutas
    externas.

------------------------------------------------------------------------

## Flujo de la aplicación

La navegación funciona por **pantallas** controladas con un estado
`route`. Cada botón cambia la pantalla visible.

### 1. Pantalla de Inicio (Login)

-   Opciones para ingresar con **cédula** o **correo**.
-   Botón *Ingresar con cédula* → lleva a **Reportar incidente**.
-   Botón *Ingresar con correo* → lleva a **Perfil ciudadano**.

------------------------------------------------------------------------

### 2. Reportar Incidente

-   Opciones para clasificar el reporte:
    -   **Reportar incidentes**
    -   **Trámites y servicios**
    -   **Inseguridad**
    -   **Otro**
-   Acciones:
    -   Tomar foto (abre simulador de cámara).
    -   Seleccionar ubicación (abre mapa simulado).
    -   Enviar reporte (UI-only, no envía).
-   Navegación:
    -   Botón *Volver* → regresa a Inicio.
    -   Botón *Trámites y servicios* → abre Trámites.

------------------------------------------------------------------------

### 3. Trámites y servicios

-   Consultar estado de trámites.
-   Pagar impuestos.
-   Generar cita.
-   Botón rojo **SOS** al centro (emergencia).
-   Acceso rápido a **Perfil ciudadano**.

------------------------------------------------------------------------

### 4. Perfil ciudadano

-   Datos básicos del ciudadano (nombre, cédula).
-   Historial de reportes:
    -   Ejemplo: "Hueco en la vía" (estado: *En proceso* o *Resuelto*).
-   Puntaje acumulado (ejemplo: 25 puntos).
-   Navegación:
    -   Botón *Trámites* → abre Trámites.
    -   Botón *Cerrar* → vuelve a Inicio.

------------------------------------------------------------------------

### 5. Cámara (simulada)

-   Área gris que simula la cámara.
-   Botón para volver a **Reportar incidente**.

------------------------------------------------------------------------

### 6. Mapa (simulado)

-   Área gris que simula un mapa.
-   Botón para volver a **Reportar incidente**.

------------------------------------------------------------------------

## Navegación inferior (Bottom Navigation)

Siempre visible en la parte inferior, permite saltar entre pantallas:

-   **Inicio**\
-   **Reportar**\
-   **Trámites**\
-   **Perfil**

El botón activo se marca con color azul y tipografía en negrita.

------------------------------------------------------------------------

## Roadmap futuro

Lo que hay pendiente es:

-   Conectar a un **backend (API REST)** para reportes y trámites
    reales.
-   Integrar cámara del dispositivo y **geolocalización real**.
-   Sistema de **login seguro con JWT**.
-   Persistencia de **historial de reportes en base de datos**.
-   Implementar un **sistema de notificaciones push**.

------------------------------------------------------------------------

## Autores

Proyecto creado como prototipo de aplicación asesor ciudadano con React +
Tailwind.\
Será la  base para desarrollo en siguientes entregas.