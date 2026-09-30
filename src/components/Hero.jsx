import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero section-anchor" id="top">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="status-pill">
            <span />
            AVAILABLE FOR LEARNING • BUILDING • COLLABORATION
          </div>

          <p className="terminal-copy">&gt; initializing_portfolio.exe</p>

          <h1>
            Hi, I’m
            <span>{profile.name}</span>
          </h1>

          <h2>{profile.headline}</h2>
          <p className="hero-summary">{profile.shortBio}</p>

          <div className="button-row">
            <a className="button primary" href="#journey">View My Journey</a>
            <a className="button secondary" href="#projects">View Projects</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>

          <div className="hero-meta">
            <span>Age {profile.age}</span>
            <span>{profile.academicLevel}</span>
            <span>Full-Stack</span>
            <span>QA</span>
            <span>Unity</span>
            <span>UI Design</span>
          </div>
        </div>

        <div className="identity-card reveal">
          <div className="identity-frame">
            <img
              src={profile.profileImage}
              alt={`${profile.name} profile`}
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.nextElementSibling.style.display = 'grid'
              }}
            />
            <div className="photo-fallback">
              <span>JJ</span>
              <small>Add public/profile.jpg</small>
            </div>
          </div>

          <div className="identity-copy">
            <p>DIGITAL IDENTITY</p>
            <h3>{profile.name}</h3>
            <span>AGE {profile.age} • COMPUTER SCIENCE</span>
          </div>

          <div className="identity-tags">
            <span>Full-Stack Developer</span>
            <span>QA & Documentation</span>
            <span>Unity Engine</span>
            <span>UI / Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}
