import type { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/data/locations';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance by Location | NZ Regions | Cover4You',
  description:
    'Find public liability insurance tailored to your city or region in New Zealand. Auckland, Wellington, Christchurch, Hamilton, Tauranga, Dunedin and more.',
  alternates: {
    canonical: 'https://www.publicliabilityinsurance.co.nz/locations/',
  },
  openGraph: {
    title: 'Public Liability Insurance by Location | NZ Regions',
    description: 'Find public liability insurance for your city or region in New Zealand.',
    type: 'website',
    locale: 'en_NZ',
  },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-emerald-700 to-slate-800 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-emerald-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Locations</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Public Liability Insurance by Location
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Every city has its own business landscape, risk profile, and insurance requirements. Find
            guidance tailored to your location across New Zealand.
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}/`}
              className="group bg-white rounded-2xl border border-slate-200 p-7 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 mb-1">
                {loc.name}
              </h2>
              <p className="text-sm text-slate-500 mb-3">{loc.region} · {loc.population}</p>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {loc.intro.substring(0, 120)}…
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {loc.keyIndustries.slice(0, 3).map((ind) => (
                  <span key={ind} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
                    {ind}
                  </span>
                ))}
              </div>
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">
                View {loc.name} guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Generic CTA */}
      <section className="w-full bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Not in one of these cities?
          </h2>
          <p className="text-slate-600 mb-6">
            We compare public liability insurance for businesses across all of New Zealand.
          </p>
          <Link
            href="/contact/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl inline-block transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
