export default function QASection() {
  const workflow = [
    ['01', 'TEST', 'Validate features and REST API behavior using tools such as Postman.'],
    ['02', 'DOCUMENT', 'Record test results, screenshots, findings, and reproducible steps.'],
    ['03', 'REPORT', 'Identify issues clearly and prepare concise bug or test documentation.'],
    ['04', 'VERIFY', 'Retest changes and confirm that the expected behavior works correctly.'],
  ]

  return (
    <section className="section" id="qa">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">04</span>
          <div>
            <p className="kicker">BEYOND CODING</p>
            <h2>QA & Documentation</h2>
          </div>
        </div>

        <div className="qa-layout">
          <div className="glass-card reveal">
            <p>
              I also work with software testing and project documentation. My experience
              includes REST API testing with Postman, documenting results, capturing
              testing evidence, identifying issues, preparing findings and suggestions,
              and organizing technical/system documentation for academic projects.
            </p>
          </div>

          <div className="qa-flow">
            {workflow.map(([num, title, text]) => (
              <article className="qa-step reveal" key={num}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
