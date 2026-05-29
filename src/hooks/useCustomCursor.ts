import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    const spotlight = document.getElementById('spotlight')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      const hoverable = (e.target as Element).closest('a,button,.tilt-card')
      document.body.classList.toggle('cursor-expanded', !!hoverable)
      spotlight?.style.setProperty('--mx', mx + 'px')
      spotlight?.style.setProperty('--my', my + 'px')
    }

    const anim = () => {
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(anim)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(anim)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
