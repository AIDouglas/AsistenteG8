# Asistente Ciudadano (UI Prototype)

Un prototipo de aplicación móvil/web para **gestión ciudadana**, que
permite: - Reportar incidentes (inseguridad, daños, otros). - Consultar
y gestionar trámites y servicios. - Visualizar el perfil del ciudadano y
su historial de reportes. - Acceso rápido a un botón de emergencia
**SOS**.

Este proyecto es **solo interfaz (UI-only)**, sin conexión a backend ni
persistencia de datos. Todo el flujo está basado en navegación por
**estado local en React**.

------------------------------------------------------------------------

## Requisitos previos

-   **Node.js** `>= 18.x`\
-   **npm** o **pnpm** como gestor de paquetes
-   Recomendado: usar **Vite** como entorno de desarrollo (ya está
    configurado).

------------------------------------------------------------------------

## Estructura de carpetas

    asistente-ciudadano/
    ├─ package.json              # Dependencias y scripts
    ├─ index.html                # Entrada principal de la app
    ├─ postcss.config.js         # Configuración de PostCSS
    ├─ tailwind.config.js        # Configuración de Tailwind
    ├─ README.md                 # Documentación
    ├─ public/                   # Archivos estáticos (ej: íconos, imágenes)
    │  └─ placeholder-avatar.png
    └─ src/
       ├─ main.jsx               # Punto de entrada React
       ├─ index.css              # Estilos globales + Tailwind
       ├─ App.jsx                # Navegación y pantallas principales
       └─ components/            # Componentes reutilizables
          ├─ ScreenShell.jsx     # Contenedor de pantallas
          └─ icons.jsx           # Íconos SVG

------------------------------------------------------------------------

## Instalación y ejecución

Clonar el proyecto y entrar en la carpeta:

``` bash
git clone <url-del-repo>
cd asistente-ciudadano
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