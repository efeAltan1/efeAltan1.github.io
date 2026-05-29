import { useEffect, useRef } from 'react'
import { useLang } from '@/context/LangContext'
import { content } from '@/data/content'

export function Hero() {
  const { lang } = useLang()
  const h = content.hero
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const twRef = useRef<HTMLSpanElement>(null)

  /* ── FIREFLIES ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const flies = Array.from({ length: 55 }, () => ({
      x:      Math.random() * canvas.width,
      y:      Math.random() * canvas.height,
      r:      Math.random() * 1.5 + 0.5,
      dx:     (Math.random() - 0.5) * 0.4,
      dy:     (Math.random() - 0.5) * 0.4,
      alpha:  Math.random(),
      dalpha: (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
    }))

    let rafId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      flies.forEach(f => {
        f.x += f.dx; f.y += f.dy; f.alpha += f.dalpha
        if (f.alpha <= 0 || f.alpha >= 1) f.dalpha *= -1
        if (f.x < 0 || f.x > canvas.width)  f.dx *= -1
        if (f.y < 0 || f.y > canvas.height) f.dy *= -1
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251,191,36,${f.alpha * 0.7})`
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(251,191,36,.5)'
        ctx.fill()
        ctx.shadowBlur = 0
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  /* ── TYPEWRITER ── */
  useEffect(() => {
    const el = twRef.current
    if (!el) return
    const phrases = h.typewriter[lang] as readonly string[]
    let pi = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const phrase = phrases[pi % phrases.length]
      if (!deleting) {
        ci++
        el.textContent = phrase.slice(0, ci)
        if (ci === phrase.length) { deleting = true; timer = setTimeout(tick, 1800); return }
      } else {
        ci--
        el.textContent = phrase.slice(0, ci)
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      timer = setTimeout(tick, deleting ? 52 : 88)
    }

    el.textContent = ''
    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [lang, h.typewriter])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        padding: '0 clamp(1.5rem,8vw,10rem)', paddingTop: '60px',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}
    >
      {/* backgrounds */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,80,200,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(251,191,36,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.03) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
          {h.tag[lang]}
        </p>

        <h1 style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fdf6ea', marginBottom: '0.5rem' }}>
          {h.name}
        </h1>

        <p style={{ fontSize: 'clamp(1.1rem,2.5vw,1.55rem)', fontWeight: 500, color: 'var(--accent)', marginBottom: '1.5rem' }}>
          <span id="tw" ref={twRef} />
        </p>

        <p style={{ maxWidth: 520, fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
          {h.bio[lang]}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <MagBtn>
            <a
              href="#projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', background: 'var(--accent)', color: '#0c0905', fontSize: '0.85rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none', transition: 'box-shadow 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 28px rgba(251,191,36,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              {h.ctaPrimary[lang]}
            </a>
          </MagBtn>
          <MagBtn>
            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', border: '1px solid var(--border)', color: 'var(--muted2)', fontSize: '0.85rem', fontWeight: 500, borderRadius: 6, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)'; e.currentTarget.style.boxShadow = '' }}
            >
              {h.ctaGhost[lang]}
            </a>
          </MagBtn>
        </div>
      </div>

      {/* scroll hint */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: 'clamp(1.5rem,8vw,10rem)', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 2, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.12em' }}>
        <span style={{ width: 40, height: 1, background: 'var(--muted)', animation: 'spulse 2s ease-in-out infinite', display: 'inline-block' }} />
        {h.scroll[lang]}
      </div>
    </section>
  )
}

function MagBtn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLAnchorElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const btn = el.querySelector('a') as HTMLAnchorElement | null
    if (!btn) return
    inner.current = btn
    btn.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 16}px,${((e.clientY - r.top) / r.height - 0.5) * 16}px)`
  }
  const onLeave = () => { if (inner.current) inner.current.style.transform = '' }

  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>
}
