import { useLang } from '@/context/LangContext'

export function Nav() {
  const { lang, setLang } = useLang()

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
        efe.dev
      </a>

      <div className="lang-toggle">
        <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
        <div className="lang-sep" />
        <button className={`lang-btn${lang === 'tr' ? ' active' : ''}`} onClick={() => setLang('tr')}>TR</button>
      </div>
    </nav>
  )
}
