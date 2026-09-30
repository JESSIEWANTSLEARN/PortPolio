import { education } from '../data'

export default function Education() {
  return (
    <section className="section section-anchor" id="education">
      <div className="container">
        <div className="section-heading reveal">
          <span>06</span>
          <div>
            <p>EDUCATION</p>
            <h2>Academic Timeline</h2>
          </div>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article className="education-card reveal" key={item.school}>
              <div className="timeline-dot" />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.school}</h3>
              <h4>{item.program}</h4>
              <p>{item.detail}</p>
              <small>{item.place}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
