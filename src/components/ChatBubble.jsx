import React from 'react'

export default function ChatBubble({ text, from = 'bot' }) {
  const isUser = from === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${isUser ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'} max-w-[78%] p-3 rounded-lg shadow-sm ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}>
        <div className="text-sm whitespace-pre-wrap">{text}</div>
      </div>
    </div>
  )
}