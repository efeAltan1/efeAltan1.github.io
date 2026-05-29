import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'
import { Link } from 'react-router-dom'

const GH_SVG = (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

function Card({ children, delay }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className={`tilt-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.25)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '' }}
    >
      {children}
    </div>
  )
}

export function Projects() {
  const { lang } = useLang()
  const p = content.projects

  return (
    <section
      id="projects"
      style={{ padding: '6rem clamp(1.5rem,8vw,10rem)', position: 'relative', zIndex: 2, background: 'var(--bg)' }}
    >
      <div className="section-header reveal">
        <span className="section-num">01 //</span>
        <h2 className="section-title">{p.sectionTitle[lang]}</h2>
        <div className="section-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {p.items.map((item, i) => (
          <Card key={item.monogram} delay={(i + 1) as 1 | 2 | 3 | 4}>
            {/* top row: GitHub left, See Demo right */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                style={{
                  width: 36, height: 36, background: 'var(--bg3)',
                  border: '1px solid var(--border)', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', color: 'var(--muted)',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {GH_SVG}
              </a>

              <Link
                to={item.demo}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0 0.9rem', height: 34,
                  background: 'var(--accent-tag)', border: '1px solid var(--accent-tag-b)',
                  borderRadius: 6, fontSize: '0.78rem', fontWeight: 600,
                  color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.18)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-tag)'; e.currentTarget.style.boxShadow = '' }}
              >
                {p.demoBtn[lang]}
              </Link>
            </div>

            {/* status */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                background: item.status === 'live' ? '#4ade80' : 'var(--accent)',
                boxShadow: item.status === 'live' ? '0 0 6px #4ade80' : '0 0 6px var(--accent-glow)',
              }} />
              {item.statusLabel[lang]}
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fdf6ea', marginBottom: '0.4rem' }}>{item.name}</h3>
            <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.2rem', flex: 1 }}>{item.desc[lang]}</p>

            {/* tags — uniform style */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
              {item.tags.map(tag => (
                <span
                  key={tag.label}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', padding: '0.2rem 0.55rem',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    color: 'var(--muted2)',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </Card>
        ))}

        {/* placeholder */}
        <div
          className="reveal reveal-delay-4"
          style={{
            borderRadius: 12, border: '1px dashed var(--border)',
            background: 'transparent', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            color: 'var(--muted)', fontSize: '0.82rem', minHeight: 200,
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>+</span>
          {p.moreSoon[lang]}
        </div>
      </div>
    </section>
  )
}
