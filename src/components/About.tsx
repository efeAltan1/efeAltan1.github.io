import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'

export function About() {
  const { lang } = useLang()
  const a = content.about

  return (
    <section
      id="about-strip"
      style={{
        padding: '6rem clamp(1.5rem,8vw,10rem)',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', zIndex: 2,
      }}
    >
      <div className="section-header reveal">
        <span className="section-num">02 //</span>
        <h2 className="section-title">{a.sectionTitle[lang]}</h2>
        <div className="section-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* text */}
        <div className="reveal">
          {a.paragraphs.map((para, i) => (
            <p key={i} style={{ color: 'var(--muted2)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              {para[lang]}
            </p>
          ))}
          <br />
          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.65rem 1.4rem', border: '1px solid var(--border)',
              color: 'var(--muted2)', fontSize: '0.8rem', fontWeight: 500,
              borderRadius: 6, textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)'; e.currentTarget.style.boxShadow = '' }}
          >
            {a.cvBtn[lang]}
          </a>
        </div>

        {/* skills grid */}
        <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
          {a.skills.map((skill, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.6rem 0.85rem', background: 'var(--bg3)',
                border: '1px solid var(--border)', borderRadius: 6,
                fontSize: '0.8rem', color: 'var(--muted2)',
                transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)'; e.currentTarget.style.boxShadow = '' }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              {skill[lang]}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
