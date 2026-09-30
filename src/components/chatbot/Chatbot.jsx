import { useEffect, useRef, useState } from 'react'
import ChatButton from './ChatButton'
import ChatMessage from './ChatMessage'
import QuickQuestions from './QuickQuestions'
import { answerPortfolioQuestion, quickQuestions } from './chatbotEngine'

const initialMessages = [
  {
    id: 1,
    sender: 'assistant',
    text:
      "Hi! I'm John's portfolio assistant. Ask me about his projects, skills, education, hobbies, development journey, or experience.",
    source: 'Portfolio Assistant',
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const messageEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return

    window.setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }, 80)
  }, [open, messages])

  const sendQuestion = (question) => {
    const cleanQuestion = question.trim()
    if (!cleanQuestion) return

    const answer = answerPortfolioQuestion(cleanQuestion)
    const stamp = Date.now()

    setMessages((current) => [
      ...current,
      {
        id: stamp,
        sender: 'user',
        text: cleanQuestion,
      },
      {
        id: stamp + 1,
        sender: 'assistant',
        text: answer.text,
        source: answer.source,
      },
    ])

    setInput('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    sendQuestion(input)
  }

  return (
    <>
      <ChatButton open={open} onClick={() => setOpen((current) => !current)} />

      <aside className={`chat-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <header className="chat-header">
          <div className="chat-brand">
            <span>&lt;JJ/&gt;</span>
            <div>
              <strong>Ask John</strong>
              <small>PORTFOLIO ASSISTANT • ONLINE</small>
            </div>
          </div>

          <button
            className="chat-close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
          >
            ×
          </button>
        </header>

        <div className="chat-status-line">
          <span />
          Answers are based only on John's portfolio information.
        </div>

        <div className="chat-body">
          <div className="chat-messages">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messageEndRef} />
          </div>

          <QuickQuestions questions={quickQuestions} onChoose={sendQuestion} />
        </div>

        <form className="chat-input-row" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about John..."
            aria-label="Ask a portfolio question"
          />

          <button type="submit" aria-label="Send question">
            ➜
          </button>
        </form>
      </aside>
    </>
  )
}
