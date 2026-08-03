import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const loc = locations.find((l) => l.slug === city);
  if (!loc) return { title: 'Not Found' };

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://www.publicliabilityinsurance.co.nz/locations/${city}/`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      type: 'website',
      locale: 'en_NZ',
      url: `https://www.publicliabilityinsurance.co.nz/locations/${city}/`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = locations.find((l) => l.slug === city);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-emerald-700 to-slate-800 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-emerald-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/locations/" className="hover:text-white">Locations</Link>
            <span>/</span>
            <span className="text-white">{loc.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{loc.headline}</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl">{loc.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/compare/"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-colors"
            >
              Compare Insurers
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full bg-slate-900 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {loc.localStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key industries */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Industries in {loc.name}</h2>
        <p className="text-slate-600 mb-8">
          Public liability insurance is relevant across all sectors in {loc.name}. Here are the industries most commonly covered through our comparison service:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {loc.keyIndustries.map((industry) => (
            <div key={industry} className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-emerald-800">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk profile + recommendation */}
      <section className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{loc.name} Risk Profile</h2>
            <p className="text-slate-600 leading-relaxed">{loc.riskProfile}</p>
          </div>
          <div className="bg-emerald-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Coverage Recommendation</h2>
            <p className="text-emerald-100 leading-relaxed">{loc.coverageRecommendation}</p>
            <Link
              href="/coverage/"
              className="inline-block mt-6 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Coverage Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Common Business Types We Cover in {loc.name}
        </h2>
        <p className="text-slate-600 mb-8">
          We have specialist coverage guides tailored to the most common {loc.name} business types:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loc.topBusinessTypes.map((bt) => (
            <Link
              key={bt.slug}
              href={`/businesses/${bt.slug}/`}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 group-hover:text-emerald-700">{bt.name}</p>
              <p className="text-sm text-emerald-600 mt-1">View coverage guide →</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/businesses/" className="text-emerald-600 font-semibold hover:underline">
            View all business types →
          </Link>
        </div>
      </section>

      {/* Quote form */}
      <section className="w-full bg-slate-900 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Get a Quote for Your {loc.name} Business
          </h2>
          <p className="text-slate-400 text-center mb-10">
            Compare public liability insurance from leading NZ providers in minutes.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          {loc.name} Public Liability Insurance FAQs
        </h2>
        <div className="space-y-5">
          {loc.faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-slate-900 list-none hover:bg-slate-50">
                {faq.q}
                <span className="flex-shrink-0 ml-4 text-emerald-600 group-open:rotate-180 transition-transform text-lg">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Other locations */}
      <section className="w-full bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Other Locations</h3>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}/`}
                  className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
