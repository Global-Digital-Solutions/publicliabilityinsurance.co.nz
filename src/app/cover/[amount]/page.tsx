import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

interface CoverLevel {
  slug: string;
  amount: string;
  amountShort: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  bestFor: string[];
  notRecommendedFor: string[];
  annualCost: string;
  examples: { scenario: string; outcome: string }[];
  industries: { name: string; slug: string }[];
}

const coverLevels: CoverLevel[] = [
  {
    slug: '1-million',
    amount: '$1 Million',
    amountShort: '$1M',
    metaTitle: '$1 Million Public Liability Insurance NZ | Is It Enough? | Cover4You',
    metaDescription:
      '$1M public liability insurance in New Zealand — who it suits, what it covers, and when you need more. Compare quotes from leading NZ insurers.',
    headline: '$1 Million Public Liability Insurance',
    intro:
      '$1M public liability cover is the entry-level option for low-risk NZ businesses. It provides meaningful protection against slip-and-fall claims, minor property damage, and small product liability incidents — but it may not be sufficient for trade contractors, high-footfall businesses, or anyone with a significant physical presence in client environments.',
    bestFor: [
      'Home-based sole traders with minimal public contact',
      'Tutors and coaches operating from client homes',
      'Photographers and videographers (non-event, studio-based)',
      'Consultants working remotely or from own office',
      'Low-risk online businesses with occasional client visits',
    ],
    notRecommendedFor: [
      'Trade contractors — $2M–$5M is standard',
      'Hospitality businesses — foot traffic demands higher cover',
      'Anyone entering commercial building sites',
      'Businesses with contractual requirements above $1M',
      'Retailers or service businesses with significant customer throughput',
    ],
    annualCost: '$350 – $700/year',
    examples: [
      {
        scenario: "A tutor trips over a mat at a client's house, injuring their wrist.",
        outcome: '$1M comfortably covers the medical and rehabilitation costs of approximately $30,000–$80,000.',
      },
      {
        scenario: "A photographer's tripod scratches a client's timber floor.",
        outcome: '$1M covers floor repairs estimated at $2,000–$10,000 with ease.',
      },
    ],
    industries: [
      { name: 'Tutors', slug: 'tutors' },
      { name: 'Photographers', slug: 'photographers' },
      { name: 'Dog Walkers', slug: 'dog-walkers' },
      { name: 'IT Consultants', slug: 'it-consultants' },
    ],
  },
  {
    slug: '2-million',
    amount: '$2 Million',
    amountShort: '$2M',
    metaTitle: '$2 Million Public Liability Insurance NZ | Cover4You',
    metaDescription:
      '$2M public liability insurance for NZ businesses — the standard for small to medium businesses and most residential trade contractors. Compare quotes online.',
    headline: '$2 Million Public Liability Insurance',
    intro:
      '$2M public liability cover is the most common entry level for small to medium NZ businesses with genuine public contact. It satisfies most residential landlord lease requirements and is the standard minimum for residential trade contractors. For many small hospitality businesses, personal trainers, and service providers, $2M offers solid protection at an accessible price.',
    bestFor: [
      'Residential trade contractors (plumbers, electricians, painters)',
      'Small cafes, takeaways and retail shops',
      'Personal trainers, fitness instructors and wellness practitioners',
      'Cleaners and property maintenance businesses',
      'Small event operators and market stallholders',
    ],
    notRecommendedFor: [
      'Commercial construction or infrastructure contractors',
      'Businesses with government contracts specifying $5M or higher',
      'High-footfall hospitality venues (consider $5M)',
      'Anyone working at heights or with heavy machinery',
    ],
    annualCost: '$500 – $1,200/year',
    examples: [
      {
        scenario: 'A plumber\'s work causes water damage to a client\'s home — walls, flooring, and contents.',
        outcome: '$2M covers extensive remediation estimated at $80,000–$400,000.',
      },
      {
        scenario: 'A café customer slips on a freshly mopped floor and sustains a fractured hip.',
        outcome: '$2M covers medical costs, rehabilitation, lost earnings and legal fees up to approximately $600,000.',
      },
    ],
    industries: [
      { name: 'Plumbers', slug: 'plumbers' },
      { name: 'Electricians', slug: 'electricians' },
      { name: 'Cleaners', slug: 'cleaners' },
      { name: 'Personal Trainers', slug: 'personal-trainers' },
      { name: 'Cafes', slug: 'cafes' },
    ],
  },
  {
    slug: '5-million',
    amount: '$5 Million',
    amountShort: '$5M',
    metaTitle: '$5 Million Public Liability Insurance NZ | Trade Standard | Cover4You',
    metaDescription:
      '$5M public liability insurance — the standard for commercial trade contractors in NZ. Required by most commercial clients and government contracts. Compare quotes today.',
    headline: '$5 Million Public Liability Insurance',
    intro:
      '$5M is the de facto industry standard for commercial trade contractors in New Zealand. It is specified as the minimum in most commercial construction contracts, many government procurement processes, and Auckland Transport, Waka Kotahi and other infrastructure body requirements. For hospitality venues, $5M is increasingly recommended by insurers given the potential severity of food poisoning and allergen claims.',
    bestFor: [
      'Commercial trade contractors (builders, electricians, plumbers)',
      'Businesses tendering for government or council contracts',
      'Contractors working as subcontractors to principal contractors',
      'Medium-to-large hospitality and events businesses',
      'Any business with a specific $5M contractual requirement',
    ],
    notRecommendedFor: [
      'Very low-risk sole traders (overinsured — $2M may suffice)',
      'Home-based businesses with no client site visits',
    ],
    annualCost: '$800 – $2,500/year',
    examples: [
      {
        scenario: 'A builder\'s subcontractor causes structural damage to an adjacent building during demolition work.',
        outcome: '$5M covers complex structural repairs and consequential losses potentially reaching $2–4M.',
      },
      {
        scenario: 'A caterer\'s food causes a serious allergic reaction at a large corporate event, injuring multiple guests.',
        outcome: '$5M covers multiple claims, medical costs, and legal fees across all affected parties.',
      },
    ],
    industries: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Scaffolders', slug: 'scaffolders' },
      { name: 'Roofers', slug: 'roofers' },
      { name: 'Restaurants', slug: 'restaurants' },
      { name: 'Event Planners', slug: 'event-planners' },
    ],
  },
  {
    slug: '10-million',
    amount: '$10 Million',
    amountShort: '$10M',
    metaTitle: '$10 Million Public Liability Insurance NZ | High-Risk Sectors | Cover4You',
    metaDescription:
      '$10M public liability insurance for high-risk NZ businesses — major construction, demolition, infrastructure and large events. Compare quotes from leading NZ insurers.',
    headline: '$10 Million Public Liability Insurance',
    intro:
      '$10M public liability cover is required for high-risk trade sectors and large-scale operations where a single incident could result in catastrophic losses. Major construction companies, demolition contractors, infrastructure providers, and large public event organisers typically operate at this level. It is also specified in many major government infrastructure contracts.',
    bestFor: [
      'Major construction and property development companies',
      'Demolition and hazardous work contractors',
      'Large event management companies',
      'Infrastructure and utility contractors (Waka Kotahi, Watercare etc.)',
      'Schools and education providers with significant student populations',
    ],
    notRecommendedFor: [
      'Small to medium trade contractors (typically $5M sufficient)',
      'Retail or service businesses without specific requirements',
    ],
    annualCost: '$1,500 – $6,000+/year',
    examples: [
      {
        scenario: 'A demolition contractor damages underground services during excavation, cutting power to a commercial district.',
        outcome: 'Business interruption, repairs, and consequential losses could reach $5M+. $10M cover provides essential buffer.',
      },
      {
        scenario: 'A large outdoor event has a stage collapse, injuring dozens of attendees.',
        outcome: 'Multiple serious injury claims, ongoing rehabilitation, and legal costs across a large number of claimants can easily exceed $5M total.',
      },
    ],
    industries: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Drain Layers', slug: 'drain-layers' },
      { name: 'Scaffolders', slug: 'scaffolders' },
      { name: 'Security Guards', slug: 'security-guards' },
      { name: 'Event Planners', slug: 'event-planners' },
    ],
  },
  {
    slug: '20-million',
    amount: '$20 Million',
    amountShort: '$20M',
    metaTitle: '$20 Million Public Liability Insurance NZ | Maximum Cover | Cover4You',
    metaDescription:
      '$20M public liability insurance for large enterprises, major infrastructure projects, and high-risk operations in New Zealand. Get specialist quotes today.',
    headline: '$20 Million Public Liability Insurance',
    intro:
      '$20M is the maximum standard public liability level available from most NZ insurers for a single policy. It is required for major infrastructure contracts, large-scale public works, and situations where a single catastrophic incident could affect many people or result in extraordinary property damage. At this level, insurers may layer coverage across multiple carriers.',
    bestFor: [
      'Major infrastructure and civil engineering contractors',
      'Large property developers and construction groups',
      'Public venue operators with very large-capacity events',
      'Schools and education campuses with large student populations',
      'Oil, gas or energy sector contractors (if applicable)',
    ],
    notRecommendedFor: [
      'Most SMEs — $5M–$10M is typically sufficient',
      'Residential trade contractors',
    ],
    annualCost: '$3,000 – $15,000+/year',
    examples: [
      {
        scenario: 'A civil contractor damages a major public water main, causing widespread disruption to a large urban area.',
        outcome: 'Emergency repairs, loss of supply penalties, and consequential business losses across hundreds of affected parties could reach $10–20M.',
      },
    ],
    industries: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Drain Layers', slug: 'drain-layers' },
      { name: 'Scaffolders', slug: 'scaffolders' },
    ],
  },
];

export async function generateStaticParams() {
  return coverLevels.map((l) => ({ amount: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ amount: string }> }): Promise<Metadata> {
  const { amount } = await params;
  const level = coverLevels.find((l) => l.slug === amount);
  if (!level) return { title: 'Not Found' };
  return {
    title: level.metaTitle,
    description: level.metaDescription,
    alternates: {
      canonical: `https://www.publicliabilityinsurance.co.nz/cover/${amount}/`,
    },
    openGraph: {
      title: level.metaTitle,
      description: level.metaDescription,
      type: 'article',
      locale: 'en_NZ',
    },
  };
}

export default async function CoverAmountPage({ params }: { params: Promise<{ amount: string }> }) {
  const { amount } = await params;
  const level = coverLevels.find((l) => l.slug === amount);
  if (!level) notFound();

  const otherLevels = coverLevels.filter((l) => l.slug !== amount);

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-emerald-700 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/coverage/" className="hover:text-white">Coverage Guide</Link>
            <span>/</span>
            <span className="text-white">{level.amount}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{level.headline}</h1>
          <p className="text-xl text-blue-100 mb-4 max-w-3xl">{level.intro}</p>
          <p className="text-emerald-300 font-semibold text-lg">Typical annual cost: {level.annualCost}</p>
        </div>
      </section>

      {/* Best for / not for */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Best for</h2>
            <ul className="space-y-3">
              {level.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Consider higher cover if…</h2>
            <ul className="space-y-3">
              {level.notRecommendedFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Real examples */}
      <section className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How {level.amountShort} Cover Works in Practice</h2>
          <div className="space-y-6">
            {level.examples.map((ex, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">{ex.scenario}</p>
                    <p className="text-slate-600 text-sm">{ex.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry links */}
      {level.industries.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Industries That Typically Need {level.amountShort} Cover
          </h2>
          <div className="flex flex-wrap gap-4">
            {level.industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/businesses/${ind.slug}/`}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold px-5 py-3 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="w-full bg-slate-900 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Get a {level.amountShort} Cover Quote
          </h2>
          <p className="text-slate-400 text-center mb-10">
            Compare {level.amountShort} public liability insurance from leading NZ providers.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* Other cover levels */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Other Coverage Levels</h3>
        <div className="flex flex-wrap gap-3">
          {otherLevels.map((l) => (
            <Link
              key={l.slug}
              href={`/cover/${l.slug}/`}
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
            >
              {l.amount}
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
