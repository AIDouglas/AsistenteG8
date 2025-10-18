import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ChatBubble({ text, from = 'bot' }) {
  const isUser = from === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${isUser ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'} max-w-[78%] sm:max-w-[85%] p-3 sm:p-4 rounded-lg shadow-sm ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}>
        {isUser ? (
          <div className="text-sm whitespace-pre-wrap">{text}</div>
        ) : (
          <div className="text-sm prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-headings:my-2">
            <ReactMarkdown 
              components={{
                // Personalizar componentes para mejor estilo
                strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                em: ({node, ...props}) => <em className="italic" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-1 my-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-1 my-2" {...props} />,
                li: ({node, ...props}) => <li className="ml-2" {...props} />,
                p: ({node, ...props}) => <p className="my-1" {...props} />,
                h1: ({node, ...props}) => <h1 className="text-lg font-bold my-2" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-base font-bold my-2" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-sm font-bold my-1" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline 
                    ? <code className="bg-gray-100 px-1 rounded text-xs" {...props} />
                    : <code className="block bg-gray-100 p-2 rounded my-2 text-xs overflow-x-auto" {...props} />
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}