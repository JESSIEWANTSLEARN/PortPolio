import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">05</span>
          <div>
            <p className="kicker">MY JOURNEY</p>
            <h2>Education</h2>
          </div>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <article className="timeline-item reveal" key={`${item.school}-${index}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <p className="timeline-place">{item.place}</p>
                <h3>{item.school}</h3>
                <strong>{item.program}</strong>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
