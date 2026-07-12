import { Hero } from '../components/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { Compare } from '../components/Compare'
import { Bridge } from '../components/Bridge'
import { Pain } from '../components/Pain'
import { Services } from '../components/Services'
import { HowItWorks } from '../components/HowItWorks'
import { Calculator } from '../components/Calculator'
import { Offer } from '../components/Offer'
import { Compliance } from '../components/Compliance'
import { Faq } from '../components/Faq'
import { Founder } from '../components/Founder'
import { FinalCta } from '../components/FinalCta'

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Compare />
      <Bridge />
      <Pain />
      <Services />
      <HowItWorks />
      <Calculator />
      <Offer />
      <Compliance />
      <Faq />
      <Founder />
      <FinalCta />
    </>
  )
}
