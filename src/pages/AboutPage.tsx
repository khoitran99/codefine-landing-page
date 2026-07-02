import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BulletList,
  Container,
  CtaBand,
  DarkCard,
  GradientHero,
  Section,
  SectionHeading,
} from '@/components/landing/primitives'
import { SiteFooter } from '@/components/landing/SiteFooter'
import {
  aboutStats,
  engagementModels,
  leaders,
  testimonials,
} from '@/data/content'
import { company } from '@/data/company'

const cultureTiles = [
  {
    title: 'Product workshops',
    body: 'Scope, risks, and delivery plans aligned before sprint one.',
    src: '/assets/figma/ai-team.png',
  },
  {
    title: 'Engineering reviews',
    body: 'Architecture decisions made with production constraints in view.',
    src: '/assets/figma/services-monitor.png',
  },
  {
    title: 'Client demos',
    body: 'Working software shown early, often, and without ceremony.',
    src: '/assets/figma/case-study.png',
  },
  {
    title: 'AI-enabled delivery',
    body: 'Code, QA, and documentation workflows accelerated responsibly.',
    src: '/assets/figma/blog-card.png',
  },
  {
    title: 'Senior ownership',
    body: 'Every track has an experienced engineer accountable for outcomes.',
    src: '/assets/figma/team-member.png',
  },
  {
    title: 'Security habits',
    body: 'Reviews, deployment gates, and evidence trails built into delivery.',
  },
  {
    title: 'Remote collaboration',
    body: 'Async updates, shared boards, and tight sprint communication.',
  },
  {
    title: 'Launch support',
    body: 'Post-release monitoring and iteration from the same team.',
    src: '/assets/figma/services-monitor.png',
  },
  {
    title: 'Long-term partners',
    body: 'Average partnerships run for years because the work keeps compounding.',
    src: '/assets/figma/ai-team.png',
  },
]

export function AboutPage() {
  return (
    <main className="bg-[#070707] text-white">
      <GradientHero
        eyebrow="About CoDefine"
        title="Your Trusted Partner In"
        accent="Custom Software Development"
        body="From new product builds to legacy modernization, our senior engineers and AI-accelerated workflows turn ambitious roadmaps into shipped software that scales."
        center
      />
      <LogoBand />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="By The Numbers"
            title="CoDefine At A Glance"
            body="Four numbers that say more about how we operate than a deck ever could. No fluff, no inflated claims, just proof points that shape every engagement."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutStats.map((stat) => (
              <DarkCard key={stat.label}>
                <CardContent className="p-8">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#989fad]">
                    {stat.eyebrow}
                  </p>
                  <p className="mt-8 text-[44px] font-bold text-[#00d4ff]">{stat.value}</p>
                  <p className="mt-2 text-[18px] font-bold">{stat.label}</p>
                  <p className="mt-3 text-[14px] leading-6 text-[#b9bdc7]">{stat.body}</p>
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[#061329]">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Company Profile"
            title={company.companyName}
            body={company.tagline}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Foreign company name', company.foreignCompanyName],
              ['Short name', company.shortName],
              ['Business status', company.businessStatus],
              ['Enterprise code', company.enterpriseCode],
              ['Legal entity type', company.legalEntityType],
              ['Establishment date', company.establishmentDateLabel],
              ['Legal representative', company.legalRepresentative],
              ['Registered head office', company.registeredHeadOffice.fullAddress],
            ].map(([label, value]) => (
              <DarkCard key={label} className="bg-[#091b32]">
                <CardContent className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00d4ff]">
                    {label}
                  </p>
                  <p className="mt-3 text-[16px] font-bold leading-6 text-white">
                    {value}
                  </p>
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <section className="bg-[linear-gradient(120deg,#070707_0%,#081329_50%,#00d4ff_140%)] px-5 py-24 text-center sm:px-8 lg:px-24">
        <h2 className="mx-auto max-w-[900px] text-[36px] font-bold leading-[1.2] sm:text-[48px]">
          We build with teams who treat shipping software as a craft, not a checkbox.
        </h2>
      </section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Three Questions, One Standard Of Delivery"
            body="Why we do this work, how we structure it, and what you actually get from partnering with us."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              ['Why We Do This', 'Our Purpose', 'We build software that businesses actually need to grow.'],
              ['How We Work', 'Our Methodology', 'Senior engineers paired with AI-accelerated workflows.'],
              ['What We Deliver', 'Our Output', 'Production-ready software shipped on the timeline we committed to.'],
            ].map(([title, subtitle, body], index) => (
              <DarkCard key={title} className={index === 0 ? 'border-[#00aaff]/80' : ''}>
                <CardContent className="p-8">
                  <span className="grid size-12 place-items-center rounded-[7px] bg-[#00aaff]/10 text-[#00d4ff]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-8 text-[28px] font-bold">{title}</h3>
                  <p className="mt-2 text-[18px] font-bold text-[#00d4ff]">{subtitle}</p>
                  <p className="mt-6 text-[15px] leading-7 text-[#b9bdc7]">{body}</p>
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand
        eyebrow="Ready When You Are"
        title="Ready To Put This Approach To Work?"
        body="If our way of working sounds like the partner you have been looking for, the next step is a 30-minute conversation."
      />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Inside CoDefine"
            title="The People And Places Behind The Work"
            body="A look at the team, the space, and the moments that shape how we ship. Real engineers, real workspaces, real builds."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {cultureTiles.map((tile, index) => (
              <figure
                key={tile.title}
                className="group relative aspect-[1.35] overflow-hidden rounded-[8px] border border-white/10 bg-[#09111d]"
              >
                {tile.src ? (
                  <img
                    src={tile.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.35),transparent_34%),linear-gradient(135deg,#061329,#07111f)]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.86))]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00d4ff]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-[16px] font-bold text-white sm:text-[18px]">
                    {tile.title}
                  </h3>
                  <p className="mt-1 hidden text-[12px] leading-5 text-white/72 sm:block">
                    {tile.body}
                  </p>
                </figcaption>
              </figure>
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
            align="left"
            eyebrow="Leadership"
            title="Company Representative"
            body={`${company.legalRepresentative} is the legal representative of ${company.companyName}.`}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map(([name, role]) => (
              <div key={name}>
                <img
                  src="/assets/figma/team-member.png"
                  alt={`${name}, ${role}`}
                  className="aspect-square w-full rounded-[8px] object-cover"
                />
                <h3 className="mt-5 text-[20px] font-bold">{name}</h3>
                <p className="text-[14px] text-[#00d4ff]">{role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[#061329]">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Our Testimonial"
            title="How CoDefine Works With Clients"
            body="Three principles guide how we define scope, build software, and work together."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <DarkCard key={item.name} className="bg-white text-[#07111f]">
                <CardContent className="p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00aaff]">
                    {item.category}
                  </p>
                  <p className="mt-8 text-[18px] font-semibold leading-7">{item.quote}</p>
                  <p className="mt-8 font-bold">{item.name}</p>
                  <p className="text-[14px] text-[#667085]">{item.role}</p>
                </CardContent>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand
        eyebrow="Next Step"
        title="Got A Roadmap That Needs Shipping?"
        body="We can pressure-test your scope, sequence the work, and show you how a senior CoDefine team would ship it."
      />
      <SiteFooter />
    </main>
  )
}

function LogoBand() {
  const items = [
    company.shortName,
    company.legalEntityType,
    company.businessStatus,
    company.enterpriseCode,
    company.registeredHeadOffice.city,
    company.registeredHeadOffice.country,
  ]
  return (
    <section className="border-y border-white/10 bg-[#070707] px-5 py-8 sm:px-8 lg:px-24">
      <Container>
        <p className="mb-5 text-center text-[14px] text-[#989fad]">
          Registered Company Information
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[14px] font-bold text-white/62">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  )
}
