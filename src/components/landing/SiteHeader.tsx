import { ArrowRightIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { company } from '@/data/company'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Industry', href: '/#industries' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About Us', href: '/about' },
]

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label={`${company.brandName} home`}>
      <img src={company.logoMark} alt="" className="size-9 object-contain" />
      <span className="text-[18px] font-bold tracking-[-0.01em] text-white">
        {company.brandName}
      </span>
    </a>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070707]/92 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-[#03111f] text-[#00d4ff]">
        <div className="mx-auto flex h-9 max-w-[1512px] items-center justify-between px-5 text-[11px] font-semibold sm:px-8 lg:px-24">
          <p className="hidden max-w-[55rem] truncate text-white/70 md:block">
            {company.tagline}
          </p>
          <div className="ml-auto flex items-center gap-5">
            <a href="/#insights" className="hover:text-white">
              {company.brandName} AI
            </a>
            <a href="/#insights" className="hidden hover:text-white sm:inline">
              Blog Article
            </a>
            <a href="/#insights" className="hidden hover:text-white sm:inline">
              Newsroom
            </a>
            <span className="text-white/60">EN</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[86px] max-w-[1512px] items-center justify-between px-5 sm:px-8 lg:px-24">
        <Logo />
        <nav className="hidden items-center gap-11 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] font-semibold text-white/78 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="h-[52px] rounded-full bg-[#00aaff] px-8">
            <a href="#contact">
              Contact Us
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Open menu"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 lg:hidden"
              size="icon-lg"
              variant="outline"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-white/10 bg-[#07111f] text-white">
            <SheetHeader>
              <SheetTitle className="text-white">{company.brandName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-3 rounded-full bg-[#00aaff]">
                <a href="#contact">Contact Us</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
