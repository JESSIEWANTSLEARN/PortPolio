export default function QASection() {
  const steps = [
    ['01', 'BUILD', 'Create or integrate the feature.'],
    ['02', 'TEST', 'Check behavior, routes, APIs, and UI states.'],
    ['03', 'FIND ISSUE', 'Identify bugs, inconsistent behavior, or failed cases.'],
    ['04', 'DOCUMENT', 'Record findings, evidence, and expected behavior.'],
    ['05', 'FIX', 'Apply or coordinate the correction.'],
    ['06', 'RETEST', 'Verify that the issue is resolved.'],
  ]

  return (
    <section className="section qa-section section-anchor" id="qa">
      <div className="container">
        <div className="section-heading reveal">
          <span>05</span>
          <div>
            <p>QUALITY ASSURANCE</p>
            <h2>Test. Document. Verify.</h2>
          </div>
        </div>

        <div className="qa-flow">
          {steps.map(([number, title, description]) => (
            <article className="qa-card reveal" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
