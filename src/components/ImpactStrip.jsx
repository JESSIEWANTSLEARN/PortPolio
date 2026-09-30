export default function ImpactStrip() {
  const words = ['BUILD.', 'TEST.', 'DOCUMENT.', 'DEPLOY.']

  return (
    <section className="impact-strip" aria-label="Development workflow">
      <div className="container impact-inner">
        {words.map((word, index) => (
          <div className="impact-word reveal" key={word}>
            <span>0{index + 1}</span>
            <strong>{word}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
