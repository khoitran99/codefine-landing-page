import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BulletList,
  Container,
  CtaBand,
  DarkCard,
  GradientHero,
  Section,
  SectionHeading,
  ServiceCard,
} from '@/components/landing/primitives'
import { SiteFooter } from '@/components/landing/SiteFooter'
import { caseStudies, engagementModels, services } from '@/data/content'
import { company } from '@/data/company'

export function ServicesPage() {
  return (
    <main className="bg-[#070707] text-white">
      <GradientHero
        eyebrow="All Services"
        title="Every Service You Need To"
        accent="Ship Software That Scales"
        body={`${company.companyName} builds AI-powered applications, product engineering systems, staff augmentation workflows, and DevOps foundations for teams that need software delivered clearly.`}
      />
      <section className="border-y border-white/10 bg-[#061329] px-5 py-10 sm:px-8 lg:px-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            [company.businessStatus, 'Business Status'],
            [company.legalEntityType, 'Legal Entity'],
            [company.registeredHeadOffice.city, 'Head Office'],
          ].map(([value, label]) => (
            <DarkCard key={label} className="bg-[#081b32]/80">
              <CardContent className="p-8">
                <p className="text-[40px] font-bold text-[#00d4ff]">{value}</p>
                <p className="mt-2 text-[18px] font-bold">{label}</p>
              </CardContent>
            </DarkCard>
          ))}
        </Container>
      </section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Built To Cover Every Stage Of Your Roadmap"
            body="Pick a single capability or mix several into a complete engagement. Whichever path you take, the senior engineers, AI-accelerated workflows, and standard of delivery stay exactly the same."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                showBullets
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-[34px] font-bold">Got A Project That Does Not Fit A Single Box?</h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[#b9bdc7]">
              Most real engagements pull from two or three of the capabilities above. Share your scope and we will show you exactly how the pieces fit together.
            </p>
            <Button asChild className="mt-8 rounded-full bg-[#00aaff]">
              <a href="#contact">Schedule a Discovery Call</a>
            </Button>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#061329]">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src="/assets/figma/services-monitor.png"
            alt="Patient monitoring dashboard shown on a laptop"
            className="rounded-[8px] object-cover"
          />
          <DarkCard className="bg-white text-[#07111f]">
            <CardHeader>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                Featured case
              </p>
              <CardTitle className="text-[30px]">Pulse Health: HIPAA-Compliant Patient Monitoring At Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[15px] leading-7 text-[#667085]">
                A secure clinical dashboard scenario for care teams to monitor patient progress across multiple clinics without adding operational overhead.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Secure', 'Multi-Site', 'Cloud-Ready'].map((value, index) => (
                  <div key={`${value}-${index}`}>
                    <p className="text-[24px] font-bold text-[#00aaff]">{value}</p>
                    <p className="text-[12px] text-[#667085]">Scenario attribute</p>
                  </div>
                ))}
              </div>
              <a href="/#case-studies" className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                Read case study <ArrowRightIcon className="size-4" />
              </a>
            </CardContent>
          </DarkCard>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Solution Scenarios"
            title="Solution Scenarios Made Possible By CoDefine"
            body="Representative delivery scenarios for teams evaluating how CoDefine can support their roadmap."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <DarkCard key={study.title} className="bg-white text-[#07111f]">
                <img src="/assets/figma/case-study.png" alt="" className="h-[210px] w-full rounded-t-[8px] object-cover" />
                <CardContent className="p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                    {study.category}
                  </p>
                  <h3 className="mt-4 text-[28px] font-bold">{study.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#667085]">{study.body}</p>
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[#061329]">
        <Container>
          <SectionHeading
            eyebrow="Engagement Models"
            title="Two Ways We Build With You"
            body="Whether you need a full team to take ownership of a new product or senior engineers embedded into yours, we structure the engagement around what your roadmap actually needs."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {engagementModels.map((model) => (
              <DarkCard key={model.title} className="bg-[#091b32]">
                <CardHeader>
                  <CardTitle className="text-[28px] text-white">{model.title}</CardTitle>
                  <p className="text-[#b9bdc7]">{model.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-8 leading-7 text-[#b9bdc7]">{model.body}</p>
                  <BulletList items={model.bullets} />
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Commitment"
            title="The Same Standard Of Care, For Every Client"
            body="Some teams need a new product owner. Some need extra senior capacity. The same team and standard apply either way."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {['Startups & Founders', 'Growth-Stage Companies', 'Mid-Market Businesses', 'Enterprises'].map((title) => (
              <DarkCard key={title}>
                <CardHeader>
                  <CardTitle className="text-[24px] text-white">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      'Senior engineers from the first sprint',
                      'Transparent roadmap and delivery cadence',
                      'Architecture decisions documented clearly',
                    ]}
                  />
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand
        eyebrow="Let's Build Together"
        title="Got A Roadmap That Needs Shipping?"
        body="We can pressure-test your scope, sequence the work, and show how a CoDefine team would ship it."
      />
      <SiteFooter />
    </main>
  )
}
