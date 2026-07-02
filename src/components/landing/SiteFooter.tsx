import { companyLinks, serviceLinks } from '@/data/content'
import { company } from '@/data/company'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 py-16 text-white sm:px-8 lg:px-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={company.logoMark} alt="" className="size-9 object-contain" />
            <span className="text-[18px] font-bold">{company.brandName}</span>
          </div>
          <p className="mt-5 max-w-[360px] text-[14px] leading-6 text-[#989fad]">
            {company.companyName}
            <br />
            {company.tagline}
          </p>
          <address className="mt-6 not-italic text-[14px] leading-7 text-[#b9bdc7]">
            Enterprise code: {company.enterpriseCode}
            <br />
            Status: {company.businessStatus}
            <br />
            {company.registeredHeadOffice.fullAddress}
          </address>
        </div>
        <FooterColumn title="Company" items={companyLinks} />
        <FooterColumn title="Our Services" items={serviceLinks} />
        <div>
          <p className="text-[16px] font-bold">Certifications</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#d0d3d9]">
            {[
              company.legalEntityType,
              company.shortName,
              `Est. ${company.establishmentDateLabel}`,
              `Rep. ${company.legalRepresentative}`,
            ].map(
              (item) => (
                <span key={item} className="rounded-[6px] border border-white/10 px-3 py-3">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[16px] font-bold">{title}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item}>
            <a href="/services" className="text-[14px] text-[#989fad] hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
