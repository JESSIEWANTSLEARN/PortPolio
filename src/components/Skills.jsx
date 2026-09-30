import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">03</span>
          <div>
            <p className="kicker">MY TOOLKIT</p>
            <h2>Skills & Technologies</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
