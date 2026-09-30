export default function QuickQuestions({ questions, onChoose }) {
  return (
    <div className="chat-quick-questions">
      {questions.map((question) => (
        <button
          type="button"
          key={question}
          onClick={() => onChoose(question)}
        >
          {question}
        </button>
      ))}
    </div>
  )
}
