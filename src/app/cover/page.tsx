import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Cover Amounts | $1M to $20M | Cover4You NZ',
  description:
    'Compare public liability cover levels from $1M to $20M. Find the right amount for your business type, industry, and risk profile. Trusted NZ comparison service.',
  alternates: {
    canonical: 'https://www.publicliabilityinsurance.co.nz/cover/',
  },
  openGraph: {
    title: 'Public Liability Cover Amounts | $1M to $20M | Cover4You NZ',
    description: 'Compare public liability cover levels from $1M to $20M for your NZ business.',
    type: 'website',
    locale: 'en_NZ',
  },
};

const coverLevels = [
  {
    slug: '1-million',
    amount: '$1 Million',
    bestFor: 'Low-risk sole traders and home-based businesses',
    annualCost: '$350 – $700/year',
    industries: ['Tutors', 'Photographers', 'Consultants', 'IT freelancers'],
  },
  {
    slug: '2-million',
    amount: '$2 Million',
    bestFor: 'Small businesses, residential trades, cafes and service providers',
    annualCost: '$500 – $1,200/year',
    industries: ['Cleaners', 'Plumbers', 'Electricians', 'Personal trainers', 'Cafes'],
  },
  {
    slug: '5-million',
    amount: '$5 Million',
    bestFor: 'Commercial trades and government contract holders',
    annualCost: '$800 – $2,500/year',
    industries: ['Builders', 'Scaffolders', 'Roofers', 'Restaurants', 'Event planners'],
  },
  {
    slug: '10-million',
    amount: '$10 Million',
    bestFor: 'High-risk trades, major events, infrastructure contractors',
    annualCost: '$1,500 – $6,000+/year',
    industries: ['Demolition', 'Large events', 'Infrastructure', 'Schools'],
  },
  {
    slug: '20-million',
    amount: '$20 Million',
    bestFor: 'Major construction groups, civil engineering, large-scale public works',
    annualCost: '$3,000 – $15,000+/year',
    industries: ['Civil engineering', 'Major developers', 'Large-venue operators'],
  },
];

export default function CoverPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-emerald-700 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Cover Amounts</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Much Cover Do You Need?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Public liability cover ranges from $1M for low-risk sole traders to $20M for major infrastructure contractors. Find the right level for your business below.
          </p>
        </div>
      </section>

      {/* Cover level cards */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {coverLevels.map((level) => (
            <Link
              key={level.slug}
              href={`/cover/${level.slug}/`}
              className="group flex flex-col md:flex-row md:items-center gap-6 bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0">
                <span className="text-3xl font-bold text-emerald-700">{level.amount}</span>
                <p className="text-sm text-slate-500 mt-1">{level.annualCost}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 mb-2">{level.bestFor}</p>
                <div className="flex flex-wrap gap-2">
                  {level.industries.map((ind) => (
                    <span key={ind} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 text-emerald-600 font-semibold group-hover:underline whitespace-nowrap">
                Full guide →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick guide */}
      <section className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Guide: Which Level Is Right for You?</h2>
          <p className="text-slate-600 mb-8">Not sure where to start? Use these rules of thumb:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">$1M – $2M</h3>
              <p className="text-slate-600 text-sm">Suitable if you have low public contact, work primarily from home or your own premises, and are not entering commercial building sites. Home-based sole traders, tutors, consultants, and many service providers.</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">$2M – $5M</h3>
              <p className="text-slate-600 text-sm">The standard range for most small businesses, residential trade contractors, and any business with regular customer or client contact. Required by most commercial leases and residential building contracts.</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">$5M – $10M</h3>
              <p className="text-slate-600 text-sm">Required for commercial trade work, most government contracts, and high-footfall businesses. The minimum for most Auckland Transport and Waka Kotahi infrastructure contracts.</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">$10M – $20M</h3>
              <p className="text-slate-600 text-sm">For major construction, demolition, large-scale events, and infrastructure projects where a single incident could affect many people or result in catastrophic property losses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-emerald-700 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Level You Need?</h2>
          <p className="text-emerald-100 mb-8">Get a quote and we'll match you with the right cover level from leading NZ insurers.</p>
          <Link
            href="/contact/"
            className="bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl inline-block hover:bg-emerald-50 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
