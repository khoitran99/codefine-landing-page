import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BulletList,
  Container,
  CtaBand,
  DarkCard,
  Section,
  SectionHeading,
  ServiceCard,
} from '@/components/landing/primitives'
import { SiteFooter } from '@/components/landing/SiteFooter'
import {
  caseStudies,
  engagementModels,
  homeStats,
  industries,
  insights,
  processSteps,
  services,
  testimonials,
  trustStats,
} from '@/data/content'
import { company } from '@/data/company'
import { cn } from '@/lib/utils'

const clientLogos = [
  { name: 'HYPHEN', className: 'text-[16px] font-bold uppercase tracking-[0.28em]' },
  { name: 'Appellon', className: 'text-[18px] font-medium tracking-tight' },
  { name: 'ARTIUS GLOBAL', className: 'text-[15px] font-bold uppercase tracking-[0.12em]' },
  { name: 'CloudKinetics', className: 'text-[18px] font-semibold tracking-tight' },
  { name: 'DocMed', className: 'text-[20px] font-extrabold tracking-tight' },
  { name: 'Flycatcher', className: 'text-[18px] font-light tracking-wide' },
]

export function HomePage() {
  return (
    <main className="bg-[#070707] text-white">
      <section className="relative isolate min-h-[703px] overflow-hidden bg-[#061329] px-5 py-20 sm:px-8 lg:px-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(0,212,255,0.55),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(145,255,221,0.4),transparent_21%),linear-gradient(115deg,#041126_0%,#061b43_48%,#05080f_100%)]" />
        <div className="absolute right-[10%] top-10 -z-10 h-[560px] w-[560px] rounded-full border border-white/12 bg-white/5 blur-[1px]" />
        <Container className="flex min-h-[520px] flex-col justify-center">
          <p className="text-[16px] font-bold uppercase leading-[1.2] tracking-[0.15em] text-white/85">
            Accelerate Your Roadmap With
          </p>
          <h1 className="mt-2 max-w-[872px] text-[42px] font-bold leading-[1.05] tracking-[-0.015em] sm:text-[56px] lg:text-[64px]">
            AI-Driven IT Outsourcing & Software Development
          </h1>
          <p className="mt-7 max-w-[872px] text-base leading-7 text-white/72">
            From web and mobile applications to enterprise cloud platforms, AI
            Agents, and intelligent workflow automation, CoDefine helps
            businesses accelerate digital transformation with scalable
            technology, senior engineering expertise, and AI-powered software
            delivery.
          </p>
          <Button
            asChild
            className="mt-12 h-[52px] w-fit rounded-full bg-[#00aaff] px-8 text-[16px] font-semibold"
          >
            <a href="#contact">
              Schedule A Discovery Call
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
          <LogoStrip />
        </Container>
      </section>

      <StatsStrip stats={homeStats} />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Build - Migrate - Modernize - Scale
                <br />
                With CoDefine
              </>
            }
            body={`${company.companyName} provides focused software development, AI, cloud, and product engineering services from its registered head office in ${company.registeredHeadOffice.city}.`}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <CaseStudySection />
      <CtaBand
        title="Have a Project In Mind? Let's Talk"
        body="Strategic consulting paired with end-to-end engineering, shaped to your industry's real constraints and customer demands."
      />
      <IndustriesSection />
      <TestimonialsSection />
      <TrustSection />
      <EngagementSection />
      <ProcessSection />
      <CtaBand
        title="Map This Process To Your Project"
        body="30 minutes with our team is all it takes to know if we are the right fit. No slides, no sales pitch, just a working session on your roadmap."
      />
      <InsightsSection />
      <SiteFooter />
    </main>
  )
}

function StatsStrip({
  stats,
}: {
  stats: { value: string; label: string; body?: string }[]
}) {
  return (
    <section className="border-y border-white/10 bg-[#070707] px-5 sm:px-8 lg:px-24">
      <Container className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#070707] py-8 lg:py-10">
            <p className="text-[44px] font-bold leading-[1.15] text-[#00d4ff]">
              {stat.value}
            </p>
            <p className="mt-2 text-[18px] font-bold">{stat.label}</p>
            {stat.body ? (
              <p className="mt-2 max-w-[260px] text-[14px] leading-6 text-[#989fad]">
                {stat.body}
              </p>
            ) : null}
          </div>
        ))}
      </Container>
    </section>
  )
}

function LogoStrip() {
  return (
    <div className="mt-28 flex flex-wrap items-center gap-x-10 gap-y-6 text-white/70">
      <span className="text-[16px] text-white/70">Trusted by</span>
      {clientLogos.map((logo) => (
        <span key={logo.name} className={cn('text-white/62', logo.className)}>
          {logo.name}
        </span>
      ))}
    </div>
  )
}

function CaseStudySection() {
  return (
    <Section id="case-studies" className="bg-[#061329]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Our Portfolio"
            title="Solution Scenarios Built Around CoDefine"
            body="Representative product scenarios show how our consulting and engineering model can support regulated, data-heavy, and commerce workflows."
          />
          <Button asChild className="w-fit rounded-full bg-[#00aaff]">
            <a href="/#case-studies">View All Case Studies</a>
          </Button>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <DarkCard key={study.title} className="overflow-hidden bg-white text-[#07111f]">
              <img
                src="/assets/figma/case-study.png"
                alt=""
                className="h-[210px] w-full object-cover"
              />
              <CardContent className="p-8">
                <div className="flex justify-between gap-4">
                  <Badge className="bg-[#e6f7ff] text-[#0077b6]">{study.category}</Badge>
                  <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#667085]">
                    {study.type}
                  </span>
                </div>
                <h3 className="mt-6 text-[28px] font-bold">{study.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#667085]">{study.body}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {study.metrics.map(([value, label]) => (
                    <div key={label}>
                      <p className="text-[24px] font-bold text-[#00aaff]">{value}</p>
                      <p className="text-[12px] text-[#667085]">{label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="/#case-studies"
                  className="mt-8 inline-flex text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]"
                >
                  View case study
                </a>
              </CardContent>
            </DarkCard>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-6 text-white/50">
          <ArrowLeftIcon className="size-5" />
          <span className="h-2 w-14 rounded-full bg-[#00aaff]" />
          <ArrowRightIcon className="size-5 text-white" />
        </div>
      </Container>
    </Section>
  )
}

function IndustriesSection() {
  return (
    <Section id="industries">
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title={
            <>
              Software Built For Your
              <br />
              Industry, Not Adapted To It
            </>
          }
          body="Strategic consulting paired with end-to-end engineering, shaped to your industry's real constraints and customer demands."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <DarkCard key={industry.title} className="min-h-[320px]">
              <CardHeader>
                <span className="grid size-10 place-items-center rounded-[7px] border border-[#00aaff]/25 bg-[#00aaff]/10 text-[#00d4ff]">
                  {industry.title.slice(0, 2)}
                </span>
                <CardTitle className="text-[28px] text-white">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-[16px] font-bold text-[#00d4ff]">Our Playbook</p>
                <BulletList items={industry.bullets} />
              </CardContent>
            </DarkCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full bg-[#00aaff]">
            <a href="/services">Explore Industries</a>
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <Section className="bg-[#061329]">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Our Testimonial"
          title="How CoDefine Works With Clients"
          body="The operating principles behind our delivery model."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <DarkCard key={item.name} className="bg-white text-[#07111f]">
              <CardContent className="p-8">
                <div className="mb-8 flex justify-between">
                  <Badge variant="outline">{item.category}</Badge>
                  <QuoteIcon className="size-6 text-[#d0d3d9]" />
                </div>
                <p className="text-[18px] font-semibold leading-7">{item.quote}</p>
                <div className="mt-10 border-t border-[#e5e7eb] pt-6">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-[14px] text-[#667085]">{item.role}</p>
                  <p className="mt-2 text-[12px] font-semibold text-[#667085]">
                    {item.location}
                  </p>
                </div>
              </CardContent>
            </DarkCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function TrustSection() {
  return (
    <Section className="bg-white text-[#07111f]">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Trusted & Verified"
            title="Registered, Active, And Ready To Build"
            body={`${company.companyName} is an active Vietnamese joint stock company with a registered office in Hanoi.`}
            className="[&_h2]:text-[#07111f] [&_p:last-child]:text-[#667085]"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {trustStats.map(([value, label, body]) => (
              <div key={label}>
                <p className="text-[40px] font-bold text-[#00aaff]">{value}</p>
                <p className="mt-2 text-[18px] font-bold">{label}</p>
                <p className="mt-2 text-[14px] leading-6 text-[#667085]">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] border border-[#d0d3d9] bg-[#eff8ff] p-8">
          <img
            src={company.logoLockup}
            alt={`${company.brandName} logo`}
            className="h-auto w-full rounded-[8px] bg-white object-contain p-6"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Legal representative', company.legalRepresentative],
              ['Established', company.establishmentDateLabel],
              ['Foreign name', company.foreignCompanyName],
              ['Registered office', company.registeredHeadOffice.fullAddress],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[8px] bg-white p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#00aaff]">
                  {label}
                </p>
                <p className="mt-3 text-[14px] leading-6 text-[#667085]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function EngagementSection() {
  return (
    <Section className="bg-[#061329]">
      <Container>
        <SectionHeading
          eyebrow="Engagement Models"
          title="Two Ways We Build With You"
          body="Whether you need a full team to take ownership of a new product or senior engineers embedded into yours, we structure the engagement around what your roadmap actually needs."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {engagementModels.map((model) => (
            <DarkCard key={model.title} className="min-h-[430px] bg-[#091b32]">
              <CardHeader>
                <CardTitle className="text-[28px] text-white">{model.title}</CardTitle>
                <p className="text-[16px] text-[#b9bdc7]">{model.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-8 text-[16px] leading-7 text-[#b9bdc7]">{model.body}</p>
                <BulletList items={model.bullets} />
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#989fad]">
                    {model.meta} engagements
                  </span>
                  <a className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00d4ff]" href="#contact">
                    Start a project
                  </a>
                </div>
              </CardContent>
            </DarkCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ProcessSection() {
  return (
    <Section className="bg-white text-[#07111f]">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="Our Process"
          title="The Full Lifecycle, Owned By One Team."
          body="Six stages, one accountable team. From the first scoping call to the production deploy and everything that comes after, the same engineers and leads own your work from start to finish."
          className="[&_h2]:text-[#07111f] [&_p:last-child]:text-[#667085]"
        />
        <div className="relative flex flex-col gap-8 before:absolute before:left-7 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-[#d0d3d9]">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative grid grid-cols-[56px_1fr] gap-8">
              <span className="z-10 grid size-14 place-items-center rounded-full border border-[#00aaff]/30 bg-white text-[18px] font-bold text-[#00aaff]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="rounded-[8px] border border-[#d0d3d9] p-8">
                <h3 className="text-[22px] font-bold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function InsightsSection() {
  return (
    <Section id="insights" className="bg-white text-[#07111f]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Expertise & Insights"
            title="Notes From The Engineering Floor"
            body="Working notes, lessons learned, and honest takes on what is actually working in software, AI, and outsourcing right now."
            className="[&_h2]:text-[#07111f] [&_p:last-child]:text-[#667085]"
          />
          <Button asChild className="w-fit rounded-full bg-[#00aaff]">
            <a href="#insights">View All Case Studies</a>
          </Button>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {insights.map((post) => (
            <article key={post.title} className="rounded-[8px] border border-[#d0d3d9] bg-white">
              <img src="/assets/figma/blog-card.png" alt="" className="h-[210px] w-full rounded-t-[8px] object-cover" />
              <div className="p-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                  {post.category}
                </p>
                <h3 className="mt-4 text-[22px] font-bold leading-tight">{post.title}</h3>
                <p className="mt-4 text-[14px] leading-6 text-[#667085]">{post.body}</p>
                <a href="#insights" className="mt-8 inline-flex text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
