import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Cases } from './pages/Cases'

// Tiny path router. Internal links are plain anchors (full navigation); the Vercel
// rewrite serves index.html for every path, and this picks the page to render.
const ROUTES: Record<string, () => React.ReactNode> = {
  '/': Home,
  '/services': Services,
  '/about': About,
  '/contact': Contact,
  '/cases': Cases,
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Scroll to a hash target on load (e.g. /#calculator from the footer).
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  const Page = ROUTES[path] ?? Home

  return (
    <>
      <Nav />
      <main>
        <Page />
      </main>
      <Footer />
      <div className="grain-overlay" aria-hidden />
    </>
  )
}
