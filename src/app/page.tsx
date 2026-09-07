import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance NZ | Compare & Save | PublicLiability.co.nz',
  description:
    'Compare public liability insurance from up to 15 insurers. Get quotes for your business, trade, school, or venue. Fast, transparent, expert advice from licensed NZ brokers.',
  keywords:
    'public liability insurance, NZ, compare quotes, business insurance, trade insurance',
  openGraph: {
    title: 'Public Liability Insurance NZ | Compare & Save',
    description:
      'Compare public liability insurance from leading NZ providers. Get tailored quotes instantly.',
    type: 'website',
    locale: 'en_NZ',
    images: [
      {
        url: 'https://publicliability.co.nz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Public Liability Insurance Comparison',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD: Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Cover4You',
        alternateName: 'PublicLiabilityInsurance.co.nz',
        url: 'https://www.publicliabilityinsurance.co.nz',
        logo: 'https://www.publicliabilityinsurance.co.nz/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@cover4you.co.nz',
          contactType: 'customer service',
          areaServed: { '@type': 'Country', name: 'New Zealand' },
          availableLanguage: 'English',
        },
        sameAs: [],
      }) }} />

      {/* JSON-LD: InsuranceAgency (primary business type) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'PublicLiabilityInsurance.co.nz',
        description: 'Broker referral service comparing public liability insurance from up to 15 insurers for businesses, trades, schools, and public venues.',
        url: 'https://www.publicliabilityinsurance.co.nz',
        email: 'hello@cover4you.co.nz',
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        serviceType: 'Public Liability Insurance Comparison and Referral',
        priceRange: 'No fee to policyholders',
        knowsAbout: ['Public Liability Insurance', 'Business Insurance', 'Trade Insurance', 'NZ Insurance'],
      }) }} />

      {/* JSON-LD: WebSite with SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PublicLiabilityInsurance.co.nz',
        url: 'https://www.publicliabilityinsurance.co.nz',
        description: 'Compare public liability insurance from up to 15 insurers. Expert advice from licensed NZ brokers.',
        publisher: {
          '@type': 'Organization',
          name: 'Cover4You',
        },
        inLanguage: 'en-NZ',
      }) }} />

      <main className="w-full">
        {/* Hero Section */}
        <section
          className="relative min-h-[70vh] flex items-end"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-800/25 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-36 w-full">
            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['✅ FSP Registered', '🔒 Licensed NZ Brokers', '🔍 Up to 15+ Insurers', '💡 Expert Advice', '✓ No Obligation'].map(pill => (
                <span key={pill} className="px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium rounded-full">{pill}</span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight mb-4">
              Protect Your Business with the Right Public Liability Cover
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-8 leading-relaxed">
              Compare personalised public liability insurance quotes from New Zealand&apos;s leading insurers. Expert advice from licensed NZ brokers — transparent pricing, fast quotes, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="#quote-form"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl transition-colors inline-flex items-center justify-center"
              >
                Get a Quote →
              </Link>
              <Link
                href="#sectors"
                className="px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/25 transition-colors inline-flex items-center justify-center"
              >
                Explore by Sector
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">530k+</div>
                <p className="text-xs text-gray-300">Businesses in NZ need cover</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">97%</div>
                <p className="text-xs text-gray-300">Are small businesses</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">Up to 15</div>
                <p className="text-xs text-gray-300">Insurers compared</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">Same Day</div>
                <p className="text-xs text-gray-300">Quote response</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Simple Process</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How It Works</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Getting the right public liability insurance for your NZ business is simpler than you think. Four steps to fully covered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Tell Us About Your Business',
                  description: 'Fill out our quick form with your business type, location, and coverage needs. Takes just 2 minutes.',
                },
                {
                  step: '2',
                  title: 'Your Broker Approaches the Market',
                  description: 'A licensed broker approaches the insurers that suit what your business actually does, and explains what comes back.',
                },
                {
                  step: '3',
                  title: 'Receive Your Tailored Quote',
                  description: 'Get a clear, plain-English quote fast. No jargon, no hidden fees — just the right cover at the right price.',
                },
                {
                  step: '4',
                  title: 'Get Covered with Confidence',
                  description: 'Choose your policy and get covered. Your certificate is issued promptly so you can get back to running your business.',
                },
              ].map((item, idx, arr) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {idx < arr.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-9 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-800 z-0"
                      style={{ width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)' }}
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-full bg-emerald-500 text-white text-2xl font-extrabold mb-5 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/25 text-base"
              >
                Start Your Quote →
              </a>
              <p className="mt-3 text-sm text-slate-500">No obligation · Licensed NZ brokers</p>
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section id="sectors" className="w-full py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Coverage by Sector</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Coverage by Business Sector</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Every industry has unique risks. We match you with the right cover for your specific sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Businesses & Retail',
                  description: 'Retail shops, cafes, restaurants, salons, and other customer-facing businesses.',
                  href: '/sectors/businesses',
                  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Cafes', 'Restaurants', 'Retail', 'Salons'],
                },
                {
                  name: 'Trade Contractors',
                  description: 'Builders, plumbers, electricians, painters, landscapers, and construction firms.',
                  href: '/sectors/trade-contractors',
                  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Builders', 'Electricians', 'Plumbers', 'Roofers'],
                },
                {
                  name: 'Schools & Education',
                  description: 'ECE centres, primary and secondary schools, tertiary providers, and after-school programs.',
                  href: '/sectors/schools-education',
                  image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
                  tags: ['ECE Centres', 'Primary Schools', 'Secondary', 'Tertiary'],
                },
                {
                  name: 'Public Venues & Events',
                  description: 'Concert venues, sports grounds, community halls, markets, and adventure recreation.',
                  href: '/sectors/public-venues',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Venues', 'Events', 'Markets', 'Recreation'],
                },
              ].map((sector, idx) => (
                <Link key={idx} href={sector.href} className="group block">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg min-h-80 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${sector.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    {/* Dark gradient overlay — stronger at bottom for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent group-hover:from-gray-950/95 transition-all duration-300" />
                    <div className="relative p-7">
                      <h3 className="text-2xl font-extrabold text-white mb-2">{sector.name}</h3>
                      <p className="text-sm text-slate-200 mb-5 leading-relaxed">{sector.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">{tag}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-sm group-hover:text-emerald-300 transition-colors">
                        Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Public Liability Insurance — dark section for contrast */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Why It Matters</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                What Public Liability Actually Does
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Six situations it is designed to respond to. Whether any of them apply to your business is a question for a broker, not a web page.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  title: 'Legal Protection',
                  description: 'Under NZ law, businesses can be held liable for injury or property damage to customers or the public. A single claim can cost tens of thousands of dollars.',
                },
                {
                  title: 'Business Reputation',
                  description: 'A single incident can damage your reputation. Insurance ensures you can respond professionally without disrupting your operations.',
                },
                {
                  title: 'Client Requirements',
                  description: 'Many clients — especially councils and large organisations — require proof of public liability cover before awarding contracts.',
                },
                {
                  title: 'Peace of Mind',
                  description: "Know you're protected against unexpected claims. Focus on growing your business instead of worrying about financial exposure.",
                },
                {
                  title: 'Compliance',
                  description: 'Insurance is often required by site access conditions, health and safety regulations, and commercial tenancy agreements.',
                },
                {
                  title: 'Affordable Protection',
                  description: 'Premiums vary by industry and risk, but quality coverage is typically far cheaper than the cost of a single uninsured claim.',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all duration-200">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex gap-3">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">Worth knowing:</span> The Health and Safety at Work Act 2015 doesn&apos;t mandate public liability insurance, but businesses can be prosecuted for safety breaches. Having cover in place is the prudent way to manage that financial risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What public liability does not cover — the honest package message */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Worth Knowing</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                What Public Liability Does Not Cover
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Public liability answers for injury or property damage you cause to other people. It is not a
                catch-all, and the gaps catch businesses out at exactly the wrong moment. These are the covers
                that sit next to it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  gap: 'A claim about your advice or your work',
                  detail: 'If a client says your advice, design or professional service cost them money, that is a professional indemnity claim. Public liability will not respond to it.',
                  cover: 'Professional indemnity',
                },
                {
                  gap: 'A claim against you personally as a director',
                  detail: 'Allegations about how a company was run are made against directors personally, and personal assets are what is at risk. That sits with directors and officers cover.',
                  cover: "Directors' and officers'",
                },
                {
                  gap: 'A prosecution under New Zealand legislation',
                  detail: 'Defending an unintentional breach of legislation is a separate cover again. Note that Health and Safety at Work Act fines cannot be insured by anyone \u2014 sections 29 and 30 of that Act make such an indemnity of no effect.',
                  cover: 'Statutory liability',
                },
                {
                  gap: 'Injury to your own employees',
                  detail: 'ACC covers personal injury in New Zealand, which is why employers liability here is narrower than overseas. It is worth understanding what falls outside ACC rather than assuming.',
                  cover: 'Employers liability',
                },
                {
                  gap: 'Damage to your own property or stock',
                  detail: 'Public liability is third-party cover. Your own premises, plant, tools and stock are a material damage and business interruption question.',
                  cover: 'Material damage',
                },
                {
                  gap: 'A data breach or a cyber incident',
                  detail: 'Privacy Act obligations, notification costs and system recovery are not third-party injury or property damage, so they fall outside public liability entirely.',
                  cover: 'Cyber',
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">{item.cover}</div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">{item.gap}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-sm mt-8 max-w-2xl mx-auto">
              Whether any of these apply to you depends on what your business actually does, and that is a
              question for a licensed broker rather than a website. Mention what you do when you enquire and
              they will tell you which of these are worth discussing and which are not.
            </p>
          </div>
        </section>

        {/* How we choose the brokers we refer to */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">How We Choose</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                The Brokers We Send You To
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We do not refer to whoever pays the most. A small number of brokers, chosen deliberately,
                against a test we can describe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: 'We have spoken to them', d: 'Every broker we refer to is one we have dealt with directly. The test we apply is simple: would we be happy for a friend to ring them?' },
                { t: 'They are FSP registered', d: 'Listed on the Financial Service Providers Register, which is public. Ask any broker for their registration and check it yourself at fsp-register.companiesoffice.govt.nz.' },
                { t: 'They answer the phone', d: 'We watch response times. A broker who is hard to reach when you are getting a quote is a broker who will be hard to reach when you have a claim.' },
                { t: 'They will say no', d: 'A broker who pushes cover a business does not need is no use to you, and we stop referring to them.' },
                { t: 'They know the sector', d: 'Liability risk for a cafe is not liability risk for a scaffolder. We match the enquiry to someone who has written that kind of risk before.' },
                { t: 'It costs you nothing', d: 'Brokers are paid by the insurer. There is no fee to you for the referral or the conversation, and no obligation at the end of it.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4">
                  <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.t}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* FAQ */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'What does public liability insurance cover?',
                  a: "Public liability insurance covers legal costs and compensation if you're found responsible for accidentally injuring someone or damaging their property. This includes claims from customers, clients, visitors, and members of the public.",
                },
                {
                  q: 'How much coverage do I need?',
                  a: 'Coverage limits typically range from $1M to $10M or more, depending on your industry, business size, and risk profile. Higher-risk activities (construction, events) usually need higher limits. Your adviser can recommend appropriate levels.',
                },
                {
                  q: 'How long does it take to get a quote?',
                  a: "Submit our quick form and a licensed NZ broker will respond same day. If you prefer to speak with someone directly, contact us at hello@cover4you.co.nz.",
                },
                {
                  q: 'Do you charge broker fees?',
                  a: 'Our referral service is free to use. Broker fees may apply depending on the specific policy and provider you choose — these will always be disclosed upfront before you commit.',
                },
                {
                  q: 'Can I buy online immediately?',
                  a: 'For most policies, yes. Coverage can bind quickly and your certificate is emailed promptly — often within hours of your application being approved.',
                },
                {
                  q: 'Do I need public liability insurance by law?',
                  a: "It's not always legally mandatory, but it's frequently required by clients, councils, and landlords as a condition of work. The Health and Safety at Work Act 2015 also requires you to manage risks — insurance is a key part of that.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center px-6 py-5 gap-4 hover:bg-slate-50 transition-colors">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold group-open:bg-emerald-600 group-open:text-white transition-colors">▾</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 border-t-2 border-emerald-100 bg-emerald-50/50">
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="w-full py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Context & Trust */}
              <div className="lg:pt-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Referral Service</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Get Your Quote Today</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Tell us about your business and a licensed NZ broker will be in touch with tailored coverage options — same business day.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '✓', title: 'A broker who knows your sector', desc: 'They approach the insurers that suit what your business actually does' },
                    { icon: '✓', title: 'FSP registered brokers', desc: 'Listed on the public Financial Service Providers Register — check any broker yourself' },
                    { icon: '✓', title: 'Same-day response', desc: 'Quotes back within hours, not days' },
                    { icon: '✓', title: 'No fees to you', desc: 'No fees to you — brokers are paid by insurers' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-600 italic">&ldquo;Fast, professional service. Got three quotes in my inbox the same afternoon I submitted the form.&rdquo;</p>
                  <p className="text-xs font-semibold text-slate-500 mt-2">— Wellington business owner</p>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTABanner
          heading="Ready to Get Protected?"
          subtext="Over 530,000 businesses operate in New Zealand — most need public liability cover. Get yours sorted today."
        />
      </main>
    </>
  );
}
