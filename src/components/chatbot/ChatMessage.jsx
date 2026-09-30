export default function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.sender}`}>
      <div className="chat-bubble">
        <p>{message.text}</p>

        {message.source && (
          <span className="chat-source">
            SOURCE • {message.source}
          </span>
        )}
      </div>
    </div>
  )
}
