import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Results } from './components/Results'
import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'
import { Calculator } from './components/Calculator'
import { Guarantee } from './components/Guarantee'
import { Faq } from './components/Faq'
import { Founder } from './components/Founder'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <HowItWorks />
        <Services />
        <Results />
        <Testimonials />
        <Why />
        <Calculator />
        <Guarantee />
        <Faq />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
      <div className="grain-overlay" aria-hidden />
    </>
  )
}
