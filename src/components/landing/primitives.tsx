import { motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { company } from '@/data/company'
import { cn } from '@/lib/utils'

export function AccentText({ children }: { children: ReactNode }) {
  return <span className="text-[#00d4ff]">{children}</span>
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0.98, y: 10 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      whileInView={{ opacity: 1, y: 0 }}
      className={cn('px-5 py-24 sm:px-8 lg:px-24', className)}
    >
      {children}
    </motion.section>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-[1320px]', className)}>{children}</div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: ReactNode
  body?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-[870px]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="text-[14px] font-bold uppercase leading-[1.2] tracking-[0.18em] text-[#00d4ff]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[34px] font-bold leading-[1.16] tracking-[-0.01em] text-white sm:text-[48px]">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-[16px] leading-7 text-[#b9bdc7] sm:text-[18px]">
          {body}
        </p>
      ) : null}
    </div>
  )
}

export function GradientHero({
  eyebrow,
  title,
  accent,
  body,
  center = false,
  ctaLabel = 'Schedule A Discovery Call',
}: {
  eyebrow: string
  title: string
  accent?: string
  body: string
  center?: boolean
  ctaLabel?: string
}) {
  return (
    <section
      className={cn(
        'relative isolate min-h-[660px] overflow-hidden bg-[#061329] px-5 py-24 text-white sm:px-8 lg:px-24',
        center && 'text-center',
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_24%,rgba(0,212,255,0.5),transparent_22%),radial-gradient(circle_at_78%_76%,rgba(145,255,221,0.36),transparent_20%),linear-gradient(115deg,#041126_0%,#061b43_48%,#05080f_100%)]" />
      <div className="absolute right-[8%] top-12 -z-10 h-[560px] w-[560px] rounded-full border border-white/10 bg-white/5" />
      <Container
        className={cn(
          'flex min-h-[470px] flex-col justify-center',
          center && 'items-center',
        )}
      >
        <p className="text-[14px] font-bold uppercase leading-[1.2] tracking-[0.18em] text-[#00d4ff]">
          {eyebrow}
        </p>
        <h1 className="mt-7 max-w-[970px] text-[42px] font-bold leading-[1.07] tracking-[-0.015em] sm:text-[56px] lg:text-[64px]">
          {title} {accent ? <AccentText>{accent}</AccentText> : null}
        </h1>
        <p className="mt-7 max-w-[970px] text-base leading-7 text-white/72">
          {body}
        </p>
        <Button
          asChild
          className="mt-11 h-[52px] rounded-full bg-[#00aaff] px-8 text-[16px] font-semibold"
        >
          <a href="#contact">{ctaLabel}</a>
        </Button>
      </Container>
    </section>
  )
}

export function DarkCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Card
      className={cn(
        'rounded-[8px] border-white/10 bg-[#09111d] text-white shadow-none',
        className,
      )}
    >
      {children}
    </Card>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[14px] leading-6 text-[#b9bdc7]">
          <CheckIcon className="mt-1 size-4 shrink-0 text-[#00d4ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCard({
  service,
  index,
  showBullets = false,
}: {
  service: { title: string; description: string; bullets: string[] }
  index: number
  showBullets?: boolean
}) {
  return (
    <DarkCard
      className={cn(
        'group min-h-[300px] transition duration-300 hover:border-[#00aaff]/70 hover:shadow-[0_0_34px_rgba(0,170,255,0.18)]',
        index === 0 && 'border-[#00aaff]/80',
      )}
    >
      <CardHeader className="gap-6">
        <span className="grid size-11 place-items-center rounded-[7px] border border-[#00aaff]/25 bg-[#00aaff]/10 text-sm font-bold text-[#00d4ff]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <CardTitle className="text-[24px] font-bold leading-[1.2] text-white">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p className="text-[15px] leading-6 text-[#b9bdc7]">{service.description}</p>
        {showBullets ? <BulletList items={service.bullets} /> : null}
        <a
          href="/services"
          className="mt-auto text-[12px] font-bold uppercase tracking-[0.14em] text-[#00d4ff]"
        >
          Find out more
        </a>
      </CardContent>
    </DarkCard>
  )
}

export function CtaBand({
  eyebrow = 'Next Step',
  title,
  body,
}: {
  eyebrow?: string
  title: string
  body: string
}) {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#061329] px-5 py-20 text-center text-white sm:px-8 lg:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_92%,rgba(0,170,255,0.28),transparent_22%),radial-gradient(circle_at_90%_40%,rgba(0,212,255,0.25),transparent_18%)]" />
      <Container>
        <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#00d4ff]">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-[760px] text-[34px] font-bold leading-[1.16] sm:text-[48px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-base leading-7 text-white/72">
          {body}
        </p>
        <Button asChild className="mt-10 h-[52px] rounded-full bg-[#00aaff] px-8">
          <a href="#contact">Schedule A Discovery Call</a>
        </Button>
        <p className="mx-auto mt-5 max-w-[760px] text-[12px] leading-5 text-white/48">
          {company.companyName} · Enterprise code {company.enterpriseCode} ·{' '}
          {company.registeredHeadOffice.city}, {company.registeredHeadOffice.country}
        </p>
      </Container>
    </section>
  )
}
