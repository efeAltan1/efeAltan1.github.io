import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'

const GH_SVG = (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export function Nav() {
  const { lang, setLang } = useLang()
  const n = content.nav

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2.5rem', height: '60px',
        background: 'rgba(12,9,5,0.88)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <a
        href="#hero"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.88rem', color: 'var(--accent)', letterSpacing: '0.05em', textDecoration: 'none' }}
      >
        {n.logo}
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
        {([ ['#projects', n.links.projects], ['#about-strip', n.links.about], ['#contact', n.links.contact] ] as const).map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{ color: 'var(--muted2)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted2)')}
            >
              {label[lang]}
            </a>
          </li>
        ))}

        <li>
          <div className="lang-toggle">
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <div className="lang-sep" />
            <button className={`lang-btn${lang === 'tr' ? ' active' : ''}`} onClick={() => setLang('tr')}>TR</button>
          </div>
        </li>
      </ul>

      {/* GitHub icon (top-right corner shortcut) */}
      <a
        href="https://github.com/efeAltan1"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
          color: 'var(--muted)', transition: 'color 0.2s', display: 'none'
        }}
      >
        {GH_SVG}
      </a>
    </nav>
  )
}
