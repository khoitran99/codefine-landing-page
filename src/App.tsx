import { SiteHeader } from '@/components/landing/SiteHeader'
import { cn } from '@/lib/utils'
import { AboutPage } from '@/pages/AboutPage'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'

function getRoute(pathname: string) {
  if (pathname === '/services') return 'services'
  if (pathname === '/about') return 'about'
  return 'home'
}

function App() {
  const route = getRoute(window.location.pathname)

  return (
    <div className={cn('min-h-screen bg-[#070707] font-sans antialiased')}>
      <SiteHeader />
      {route === 'services' ? <ServicesPage /> : null}
      {route === 'about' ? <AboutPage /> : null}
      {route === 'home' ? <HomePage /> : null}
    </div>
  )
}

export default App
