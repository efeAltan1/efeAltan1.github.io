import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'

const GH_SVG = (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const linkStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.6rem 1.2rem', border: '1px solid var(--border)',
  borderRadius: 6, color: 'var(--muted2)', textDecoration: 'none',
  fontSize: '0.85rem', transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
}

export function Contact() {
  const { lang } = useLang()
  const c = content.contact

  const hover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent)'
    e.currentTarget.style.color = 'var(--accent)'
    e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)'
  }
  const unhover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.color = 'var(--muted2)'
    e.currentTarget.style.boxShadow = ''
  }

  return (
    <section
      id="contact"
      style={{ padding: '6rem clamp(1.5rem,8vw,10rem)', background: 'var(--bg)', textAlign: 'center', position: 'relative', zIndex: 2 }}
    >
      <div className="reveal" style={{ maxWidth: 480, margin: '0 auto' }}>
        <h3 style={{ fontSize: '2.2rem', fontWeight: 600, color: '#fdf6ea', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          {c.heading[lang]}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          {c.subtitle[lang]}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={`mailto:${c.email}`} style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>
            ✉ {c.email}
          </a>
          <a href={c.github} target="_blank" rel="noreferrer" style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>
            {GH_SVG} GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
