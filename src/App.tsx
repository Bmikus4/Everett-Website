import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProofBand } from './components/ProofBand'
import { Products } from './components/Products'
import { Cycle } from './components/Cycle'
import { Calculator } from './components/Calculator'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Founder } from './components/Founder'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Watermark } from './components/Watermark'
import { ScrollSpine } from './components/ScrollSpine'

export default function App() {
  return (
    <>
      <Watermark />
      <ScrollSpine />
      <Nav />
      <main className="relative">
        <Hero />
        <ProofBand />
        <Products />
        <Cycle />
        <Calculator />
        <Testimonials />
        <Faq />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
      <div className="grain-overlay" aria-hidden />
    </>
  )
}
