import { Nav }      from '@/components/Nav'
import { Hero }     from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { About }    from '@/components/About'
import { Contact }  from '@/components/Contact'
import { Footer }   from '@/components/Footer'
import { useScrollReveal }   from '@/hooks/useScrollReveal'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function Home() {
  useScrollReveal()
  useScrollProgress()

  return (
    <>
      {/* global overlays */}
      <div id="scroll-bar" />

      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
