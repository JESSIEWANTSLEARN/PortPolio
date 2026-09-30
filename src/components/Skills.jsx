import { skillGroups } from '../data'

export default function Skills() {
  const toolCount = new Set(skillGroups.flatMap((group) => group.items)).size

  return (
    <section className="section section-anchor" id="skills">
      <div className="container">
        <div className="section-heading reveal">
          <span>04</span>
          <div>
            <p>CAPABILITIES • TOOLS • PLATFORMS</p>
            <h2>Technology Ecosystem</h2>
          </div>
        </div>

        <div className="skills-summary reveal">
          <div>
            <strong>{skillGroups.length}</strong>
            <span>AREAS</span>
          </div>
          <p>
            From programming and database management to deployment, testing,
            authentication, documentation, design, and AI-assisted workflows.
          </p>
          <div>
            <strong>{toolCount}+</strong>
            <span>SKILLS & TOOLS</span>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-index">{String(index + 1).padStart(2, '0')}</div>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
