import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'
import { projectDetails } from '@/data/projects'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const GH_SVG = (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const [readme, setReadme] = useState<string | null>(null)
  const [readmeLoading, setReadmeLoading] = useState(true)
  const [readmeError, setReadmeError] = useState(false)

  useScrollProgress()

  const project = content.projects.items.find(p => p.demo === `/projects/${slug}`)
  const detail = slug ? projectDetails[slug] : null

  useEffect(() => {
    if (!detail?.readmeUrl) { setReadmeLoading(false); return }
    setReadmeLoading(true)
    setReadmeError(false)
    fetch(detail.readmeUrl)
      .then(r => { if (!r.ok) throw new Error('not found'); return r.text() })
      .then(text => { setReadme(text); setReadmeLoading(false) })
      .catch(() => { setReadmeError(true); setReadmeLoading(false) })
  }, [detail?.readmeUrl])

  if (!project) {
    return (
      <>
        <div id="scroll-bar" />
        <Nav />
        <main style={{ paddingTop: 60, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Project not found.</p>
            <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>← Back to home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <div id="scroll-bar" />
      <Nav />

      <main style={{ paddingTop: 60, minHeight: '100vh', background: 'var(--bg)' }}>

        {/* ── BACK + HEADER ── */}
        <div style={{ padding: '3rem clamp(1.5rem,8vw,10rem) 0' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontSize: '0.82rem', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            ← Back
          </Link>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* monogram */}
            <div style={{
              width: 56, height: 56, background: 'var(--bg3)',
              border: '1px solid var(--border)', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem',
              color: 'var(--accent)', fontWeight: 500, flexShrink: 0,
            }}>
              {project.monogram}
            </div>

            <div style={{ flex: 1 }}>
              {/* status */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: project.status === 'live' ? '#4ade80' : 'var(--accent)',
                  boxShadow: project.status === 'live' ? '0 0 6px #4ade80' : '0 0 6px var(--accent-glow)',
                  flexShrink: 0,
                }} />
                {project.statusLabel[lang]}
              </div>

              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 700, color: '#fdf6ea', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                {project.name}
              </h1>

              <p style={{ fontSize: '0.95rem', color: 'var(--muted2)', lineHeight: 1.7, maxWidth: 640, marginBottom: '1.25rem' }}>
                {project.desc[lang]}
              </p>

              {/* tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag.label} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', padding: '0.2rem 0.55rem',
                    background: 'accent' in tag && tag.accent ? 'var(--accent-tag)' : 'var(--bg3)',
                    border: `1px solid ${'accent' in tag && tag.accent ? 'var(--accent-tag-b)' : 'var(--border)'}`,
                    borderRadius: 4,
                    color: 'accent' in tag && tag.accent ? 'var(--accent)' : 'var(--muted2)',
                  }}>
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* links */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.1rem', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--muted2)', fontSize: '0.82rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)' }}
                >
                  {GH_SVG} View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── GIF SECTION ── */}
        <div style={{ padding: '3rem clamp(1.5rem,8vw,10rem)' }}>
          {detail?.gifUrl ? (
            <img
              src={detail.gifUrl}
              alt={`${project.name} demo`}
              style={{ width: '100%', maxHeight: 520, objectFit: 'cover', borderRadius: 12, border: '1px solid var(--border)', display: 'block' }}
            />
          ) : (
            <div style={{
              width: '100%', height: 420, borderRadius: 12,
              border: '2px dashed var(--border)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '0.75rem', color: 'var(--muted)',
              background: 'var(--bg2)',
            }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.08em' }}>GIF COMING SOON</span>
              <span style={{ fontSize: '0.78rem' }}>Drop your demo GIF into <code style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)', fontSize: '0.72rem' }}>src/data/projects.ts → gifUrl</code></span>
            </div>
          )}
        </div>

        {/* ── README SECTION ── */}
        <div style={{ padding: '0 clamp(1.5rem,8vw,10rem) 6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>03 //</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fdf6ea' }}>README</h2>
            <div style={{ flex: 1, height: 1, background: 'var(--border)', maxWidth: 200 }} />
          </div>

          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: '2.5rem clamp(1.5rem,4vw,3rem)' }}>
            {readmeLoading && (
              <p style={{ color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>Loading README…</p>
            )}
            {readmeError && (
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
                README not found. Update the URL in <code style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)', fontSize: '0.8rem' }}>src/data/projects.ts</code>.
              </p>
            )}
            {readme && (
              <div className="readme-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
