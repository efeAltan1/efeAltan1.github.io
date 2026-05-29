import { Nav }      from '@/components/Nav'
import { Hero }     from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { About }    from '@/components/About'
import { Contact }  from '@/components/Contact'
import { Footer }   from '@/components/Footer'
import { useCustomCursor }   from '@/hooks/useCustomCursor'
import { useScrollReveal }   from '@/hooks/useScrollReveal'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function Home() {
  useCustomCursor()
  useScrollReveal()
  useScrollProgress()

  return (
    <>
      {/* global overlays */}
      <div id="scroll-bar" />
      <div id="spotlight" />
      <div id="cursor-dot" />
      <div id="cursor-ring" />

      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
