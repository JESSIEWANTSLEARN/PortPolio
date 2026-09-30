import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR LEARNING • BUILDING • COLLABORATION
          </div>

          <p className="terminal-line">
            <span>&gt;</span> initializing_portfolio.exe
          </p>

          <h1>
            Hi, I’m <span className="gradient-text">{profile.name}</span>
          </h1>

          <h2>{profile.headline}</h2>
          <p className="hero-description">{profile.shortBio}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button ghost" href="#contact">
              Contact Me
            </a>
            <a
              className="button ghost"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero-meta">
            <span>Age {profile.age}</span>
            <span>3rd Year CS</span>
            <span>Full-Stack</span>
            <span>QA</span>
            <span>Unity</span>
            <span>UI Design</span>
          </div>
        </div>

        <div className="profile-showcase reveal">
          <div className="profile-scanline" />
          <div className="profile-image-wrap">
            <img
              className="profile-image"
              src={profile.profileImage}
              alt={`${profile.name} profile`}
            />
            <div className="profile-image-ring" />
          </div>

          <div className="profile-id">
            <p className="profile-label">DIGITAL IDENTITY</p>
            <h3>{profile.name}</h3>
            <p className="profile-age">AGE {profile.age} • COMPUTER SCIENCE</p>

            <div className="profile-role-stack">
              <span>Full-Stack Developer</span>
              <span>QA & Documentation</span>
              <span>Unity Engine</span>
              <span>UI / Design</span>
            </div>
          </div>

          <div className="profile-code">
            <span>&gt; status:</span> building_and_learning
          </div>
        </div>
      </div>
    </section>
  )
}
