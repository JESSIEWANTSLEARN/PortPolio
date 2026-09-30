import { profile } from '../data/portfolioData'

export default function Navbar() {
  const links = ['about', 'projects', 'skills', 'qa', 'education', 'contact']

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">&lt;JJ/&gt;</span>
          <span className="brand-name">{profile.name.split(' ')[0]}</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link}`}>
              {link === 'qa' ? 'QA' : link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
