export default function ChatButton({ open, onClick }) {
  return (
    <button
      className={`chat-launcher ${open ? 'open' : ''}`}
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close Ask John chatbot' : 'Open Ask John chatbot'}
    >
      <span className="chat-launcher-icon">&lt;JJ/&gt;</span>
      <span className="chat-launcher-copy">
        <strong>{open ? 'Close' : 'Ask John'}</strong>
        <small>{open ? 'Portfolio assistant' : 'Portfolio assistant'}</small>
      </span>
    </button>
  )
}
