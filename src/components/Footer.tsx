import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'

export function Footer() {
  const { lang } = useLang()
  const f = content.footer

  return (
    <footer
      style={{
        padding: '1.75rem clamp(1.5rem,8vw,10rem)',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 2, position: 'relative',
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)' }}>
        {f.copy}
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)' }}>
        {f.built[lang]}
      </span>
    </footer>
  )
}
