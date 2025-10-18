import React from 'react'

export default function ScreenShell({ title, children, footer }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 py-4 sm:py-6 max-w-md mx-auto pb-24 sm:pb-28">
      <header className="mb-4">
        {title && <h1 className="text-xl sm:text-2xl font-bold text-blue-900">{title}</h1>}
      </header>
      <main className="space-y-3 sm:space-y-4">{children}</main>
      {footer && <div className="mt-4 sm:mt-6">{footer}</div>}
    </div>
  )
}
