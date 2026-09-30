import { profile } from '../data/portfolioData'

export default function Navbar({ theme, toggleTheme }) {
  const links = ['about', 'projects', 'skills', 'qa', 'education', 'contact']
  const isLight = theme === 'light'

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">&lt;JJ/&gt;</span>
          <span className="brand-name">{profile.name.split(' ')[0]}</span>
        </a>

        <div className="nav-right">
          <div className="nav-links">
            {links.map((link) => (
              <a key={link} href={`#${link}`}>
                {link === 'qa'
                  ? 'QA'
                  : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>

          <button
            className={`theme-toggle ${isLight ? 'is-light' : 'is-dark'}`}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          >
            <span className="theme-toggle-icon sun" aria-hidden="true">☀</span>
            <span className="theme-toggle-icon moon" aria-hidden="true">☾</span>
            <span className="theme-toggle-knob" aria-hidden="true">
              {isLight ? '☀' : '☾'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
