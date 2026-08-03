export interface LocationData {
  slug: string;
  name: string;
  region: string;
  population: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  keyIndustries: string[];
  topBusinessTypes: { name: string; slug: string }[];
  localStats: { label: string; value: string }[];
  riskProfile: string;
  coverageRecommendation: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationData[] = [
  {
    slug: 'auckland',
    name: 'Auckland',
    region: 'Auckland',
    population: '1.7 million',
    metaTitle: 'Public Liability Insurance Auckland | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Auckland businesses from $350/year. Compare quotes from NZI, Vero, QBE and more. Builders, cafes, retailers, trades and professional services covered.',
    headline: 'Public Liability Insurance for Auckland Businesses',
    intro:
      "As the country's largest city and commercial hub, Auckland businesses operate in a high-density, high-footfall environment where the risk of third-party claims is greater than almost anywhere else. Whether you run a café in Ponsonby, a building firm in South Auckland, or a retail shop on Queen Street, the right public liability insurance protects your business when things go wrong.",
    keyIndustries: [
      'Construction & Development',
      'Hospitality & Accommodation',
      'Retail & E-commerce',
      'Professional Services',
      'IT & Technology',
      'Trade Contracting',
      'Events & Entertainment',
      'Healthcare & Wellness',
    ],
    topBusinessTypes: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Electricians', slug: 'electricians' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Retail Shops', slug: 'retail-shops' },
      { name: 'Event Planners', slug: 'event-planners' },
      { name: 'Personal Trainers', slug: 'personal-trainers' },
    ],
    localStats: [
      { label: 'Businesses in Auckland', value: '90,000+' },
      { label: 'Typical PLI premium from', value: '$350/year' },
      { label: 'Most common claim', value: 'Slip & fall' },
      { label: 'Standard minimum cover', value: '$1M–$5M' },
    ],
    riskProfile:
      "Auckland's density means higher foot traffic and greater exposure to slip-and-fall claims, product liability incidents, and property damage during construction in tight urban environments. Contractors working across multiple sites face compounding risks.",
    coverageRecommendation:
      'Most Auckland SMEs should carry at least $2M cover. Trade contractors working on commercial sites typically need $5M minimum — many Auckland construction contracts require this as a baseline. High-footfall hospitality and retail businesses should consider $2M–$5M.',
    faqs: [
      {
        q: 'Is public liability insurance mandatory in Auckland?',
        a: "There is no blanket legal requirement for most Auckland businesses to hold public liability insurance. However, many commercial leases, construction contracts, and local council permits require proof of cover before work can start or a premises can be occupied. In practice, most trade contractors cannot win commercial work without it.",
      },
      {
        q: 'How much does public liability insurance cost in Auckland?',
        a: 'Premiums depend on your industry, annual turnover, and the coverage level you select. Low-risk sole traders (tutors, photographers) may pay from $350–$700/year. Trade contractors typically pay $800–$2,500/year. Hospitality and construction businesses pay more depending on size and risk profile.',
      },
      {
        q: 'Can I get public liability insurance same day in Auckland?',
        a: 'Yes. Through our quote comparison service, many policies can be arranged and confirmed within 24 hours. For standard risk profiles, same-day coverage is often achievable.',
      },
      {
        q: 'Do Auckland landlords require public liability insurance?',
        a: 'Many commercial landlords include a requirement for public liability insurance in lease agreements, particularly for ground-floor retail and hospitality tenancies. We recommend reviewing your lease before signing.',
      },
    ],
  },
  {
    slug: 'wellington',
    name: 'Wellington',
    region: 'Wellington',
    population: '440,000',
    metaTitle: 'Public Liability Insurance Wellington | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Wellington businesses from $350/year. Compare quotes from leading NZ insurers. Government contractors, trades, hospitality and professional services covered.',
    headline: 'Public Liability Insurance for Wellington Businesses',
    intro:
      "As the seat of government and a thriving professional services hub, Wellington businesses face a distinctive risk environment — from busy hospitality strips in Courtenay Place to government contract requirements in the CBD. Public liability insurance is a standard requirement for most Wellington government contractors and commercial tenants.",
    keyIndustries: [
      'Government & Public Sector Contracting',
      'Professional Services & Consulting',
      'Hospitality & Food Service',
      'Construction & Infrastructure',
      'IT & Digital Services',
      'Creative & Media',
      'Retail',
      'Health & Wellness',
    ],
    topBusinessTypes: [
      { name: 'IT Consultants', slug: 'it-consultants' },
      { name: 'Builders', slug: 'builders' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Event Planners', slug: 'event-planners' },
      { name: 'Cleaners', slug: 'cleaners' },
      { name: 'Plumbers', slug: 'plumbers' },
    ],
    localStats: [
      { label: 'Businesses in Wellington', value: '30,000+' },
      { label: 'Typical PLI premium from', value: '$350/year' },
      { label: 'Govt contracts require', value: '$2M–$10M cover' },
      { label: 'Fastest-growing sector', value: 'Tech & Digital' },
    ],
    riskProfile:
      "Wellington's government contracting market has strict insurance requirements — most government procurement processes require minimum public liability cover of $2M, with many requiring $5M or higher. The city's hospitality density along Cuba Street and Courtenay Place creates elevated slip-and-fall exposure.",
    coverageRecommendation:
      'Wellington government contractors should hold at least $5M cover. Professional services firms typically need $2M minimum. Hospitality businesses should carry $2M–$5M. For IT and digital businesses with client site visits, $2M is the practical minimum.',
    faqs: [
      {
        q: 'Do I need public liability to win Wellington government contracts?',
        a: 'Yes. Most Wellington government and local council contracts require proof of public liability insurance, typically at $2M or $5M minimum. Some larger contracts require $10M or higher. This is specified in the contract requirements and must be provided before work commences.',
      },
      {
        q: 'Is PLI required for Wellington commercial leases?',
        a: "Most commercial leases in Wellington's CBD require tenants to hold public liability insurance, typically at $2M minimum. Your landlord will usually request a copy of your certificate of currency before or shortly after you take occupancy.",
      },
      {
        q: 'What cover do Wellington trade contractors need?',
        a: 'Wellington trade contractors generally need $5M cover to meet the requirements of commercial contracts and principal contractors on building sites. Residential work may accept $2M, but $5M is increasingly standard.',
      },
    ],
  },
  {
    slug: 'christchurch',
    name: 'Christchurch',
    region: 'Canterbury',
    population: '400,000',
    metaTitle: 'Public Liability Insurance Christchurch | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Christchurch businesses from $350/year. Builders, trades, hospitality, retail and professional services. Compare NZ insurer quotes online.',
    headline: 'Public Liability Insurance for Christchurch Businesses',
    intro:
      "Christchurch's extensive post-earthquake rebuild has made it one of the most active construction markets in New Zealand, with trade contractors, builders and developers facing significant on-site liability exposure. Beyond construction, a growing hospitality and retail sector and an expanding tech industry all need reliable public liability protection.",
    keyIndustries: [
      'Construction & Rebuild',
      'Trade Contracting',
      'Hospitality & Food Service',
      'Agriculture & Rural Services',
      'Retail & Commerce',
      'Professional Services',
      'Tourism & Events',
      'Manufacturing',
    ],
    topBusinessTypes: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Electricians', slug: 'electricians' },
      { name: 'Plumbers', slug: 'plumbers' },
      { name: 'Roofers', slug: 'roofers' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Landscapers', slug: 'landscapers' },
    ],
    localStats: [
      { label: 'Christchurch businesses', value: '25,000+' },
      { label: 'Active construction projects', value: 'Ongoing rebuild' },
      { label: 'Trade contractor minimum', value: '$5M cover' },
      { label: 'Typical PLI from', value: '$500/year' },
    ],
    riskProfile:
      "The scale of Christchurch's construction activity means trade contractors face heightened on-site liability risk. Subcontractors working under principal contractors typically face contract requirements for $5M–$10M cover. The growing hospitality precinct around the container mall area and Oxford Terrace also creates elevated foot-traffic liability exposure.",
    coverageRecommendation:
      'Christchurch trade contractors should carry $5M minimum — many rebuild contracts require $10M for higher-risk work. Hospitality businesses should carry $2M–$5M. Landscapers and service businesses should carry at least $2M.',
    faqs: [
      {
        q: 'Do Christchurch rebuild contractors need special insurance?',
        a: 'All trade contractors working on Christchurch rebuild projects need public liability insurance, typically at $5M minimum and sometimes $10M for larger or higher-risk projects. The principal contractor or client will specify the minimum required before you can start on site.',
      },
      {
        q: 'Has earthquake risk affected PLI premiums in Christchurch?',
        a: 'Public liability insurance does not typically cover earthquake damage to your own property (that falls under material damage cover). However, the volume of construction work in Christchurch has maintained competitive PLI premiums as insurers actively compete for the market.',
      },
    ],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'Waikato',
    population: '180,000',
    metaTitle: 'Public Liability Insurance Hamilton | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Hamilton and Waikato businesses from $350/year. Trades, agriculture, food production, retail and professional services. Get a quote today.',
    headline: 'Public Liability Insurance for Hamilton & Waikato Businesses',
    intro:
      "Hamilton is the heart of the Waikato region — a diverse economy spanning agriculture, food manufacturing, trade services, and a growing professional services sector. Public liability insurance is essential for Hamilton businesses operating in high-contact environments, from busy CBD retailers to agricultural contractors and trade businesses.",
    keyIndustries: [
      'Agriculture & Agri-business',
      'Food Manufacturing & Processing',
      'Trade Contracting & Construction',
      'Retail & Services',
      'Healthcare & Education',
      'Transport & Logistics',
      'Professional Services',
      'Hospitality',
    ],
    topBusinessTypes: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Landscapers', slug: 'landscapers' },
      { name: 'Plumbers', slug: 'plumbers' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Cleaners', slug: 'cleaners' },
      { name: 'Retail Shops', slug: 'retail-shops' },
    ],
    localStats: [
      { label: 'Businesses in Waikato', value: '20,000+' },
      { label: 'Typical PLI premium from', value: '$350/year' },
      { label: 'Top risk sector', value: 'Agri-contracting' },
      { label: 'Average policy term', value: '12 months' },
    ],
    riskProfile:
      "Hamilton's agri-business contractors face unique liability risks — from equipment damage to injury to third parties during on-farm work. Urban trade contractors operate across a mix of residential and commercial sites. The busy retail and hospitality sectors in central Hamilton carry standard slip-and-fall and product liability risks.",
    coverageRecommendation:
      'Hamilton trade contractors should carry $2M–$5M cover. Agricultural contractors often need $2M–$5M depending on the nature of their work. Retail and hospitality businesses should carry $1M–$2M minimum.',
    faqs: [
      {
        q: 'Do Waikato farmers and agricultural contractors need public liability insurance?',
        a: 'Yes. Agri-contractors operating machinery on third-party farms face significant liability exposure if their equipment causes property damage or injury. Many farm owners require proof of PLI before allowing contractors on their property. Standard cover for agri-contractors starts at $2M.',
      },
      {
        q: 'What cover do Hamilton tradespeople typically need?',
        a: 'Most Hamilton trade contractors working on residential work carry $2M cover, while those working on commercial sites or as subcontractors to larger firms typically need $5M. The requirement will usually be specified in your contract.',
      },
    ],
  },
  {
    slug: 'tauranga',
    name: 'Tauranga',
    region: 'Bay of Plenty',
    population: '160,000',
    metaTitle: 'Public Liability Insurance Tauranga | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Tauranga and Bay of Plenty businesses from $350/year. Trades, port logistics, tourism, hospitality and retail. Compare quotes online.',
    headline: 'Public Liability Insurance for Tauranga & Bay of Plenty Businesses',
    intro:
      "Tauranga is one of New Zealand's fastest-growing cities, with a booming port economy, active construction sector, and expanding hospitality and tourism industry. Public liability insurance is essential for the city's diverse business base — from contractors working on new housing developments to tourism operators and cafes serving the growing population.",
    keyIndustries: [
      'Port & Logistics',
      'Construction & Residential Development',
      'Tourism & Hospitality',
      'Horticulture & Agriculture',
      'Trade Services',
      'Retail',
      'Healthcare & Aged Care',
      'Professional Services',
    ],
    topBusinessTypes: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Electricians', slug: 'electricians' },
      { name: 'Landscapers', slug: 'landscapers' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Event Planners', slug: 'event-planners' },
      { name: 'Personal Trainers', slug: 'personal-trainers' },
    ],
    localStats: [
      { label: 'Tauranga businesses', value: '14,000+' },
      { label: 'Fastest growing city in NZ', value: 'Top 3 by growth' },
      { label: 'Typical PLI from', value: '$350/year' },
      { label: 'Construction sector', value: 'High demand' },
    ],
    riskProfile:
      "Rapid residential development in Tauranga means significant demand for trade contractors, who face on-site liability risks across a high volume of concurrent residential projects. Tourism and hospitality businesses face elevated foot-traffic risk, particularly during peak summer periods.",
    coverageRecommendation:
      'Tauranga trade contractors typically need $2M–$5M cover. Tourism and hospitality operators should carry at least $2M. For event operators serving the busy summer tourism season, $5M is recommended.',
    faqs: [
      {
        q: 'Do Tauranga housing developers require PLI from their contractors?',
        a: 'Yes. Most Tauranga residential developers and construction project managers require trade contractors to hold $2M–$5M public liability cover before starting on site. This is typically a condition of your subcontract agreement.',
      },
      {
        q: 'What cover do Tauranga tourism operators need?',
        a: 'Tourism operators offering activities to the public — kayaking, tours, experiences — should carry at least $2M cover, and preferably $5M. Your operator permit from local council or DOC may also specify a minimum coverage level.',
      },
    ],
  },
  {
    slug: 'dunedin',
    name: 'Dunedin',
    region: 'Otago',
    population: '135,000',
    metaTitle: 'Public Liability Insurance Dunedin | Compare Quotes | Cover4You',
    metaDescription:
      'Public liability insurance for Dunedin and Otago businesses from $350/year. Trades, hospitality, education, retail and professional services. Compare NZ insurer quotes.',
    headline: 'Public Liability Insurance for Dunedin & Otago Businesses',
    intro:
      "Dunedin's economy is anchored by its two universities, a growing technology and professional services sector, and a diverse range of hospitality, retail and trade businesses. As the commercial hub of Otago, Dunedin businesses need public liability insurance that matches their risk profile — whether they're serving students on George Street or contracting on building sites around the city.",
    keyIndustries: [
      'Education & Research',
      'Health & Medical',
      'Hospitality & Retail',
      'Trade Contracting & Construction',
      'Technology & Professional Services',
      'Tourism & Events',
      'Agriculture (Otago region)',
      'Film & Creative Industries',
    ],
    topBusinessTypes: [
      { name: 'Builders', slug: 'builders' },
      { name: 'Cafes & Restaurants', slug: 'cafes' },
      { name: 'Retail Shops', slug: 'retail-shops' },
      { name: 'Cleaners', slug: 'cleaners' },
      { name: 'Personal Trainers', slug: 'personal-trainers' },
      { name: 'IT Consultants', slug: 'it-consultants' },
    ],
    localStats: [
      { label: 'Dunedin businesses', value: '9,000+' },
      { label: 'University students', value: '25,000+' },
      { label: 'Typical PLI from', value: '$350/year' },
      { label: 'Key risk sector', value: 'Student hospitality' },
    ],
    riskProfile:
      "Dunedin's large student population creates high foot-traffic in the hospitality and retail sectors, with elevated slip-and-fall and product liability exposure particularly during O-Week and university events. The broader Otago region's farming and rural services sector also generates agri-contractor liability needs.",
    coverageRecommendation:
      'Dunedin hospitality and retail businesses should carry $1M–$2M cover. Trade contractors need $2M–$5M. Agricultural contractors in Otago should carry $2M minimum. Professional services providers typically need $1M–$2M.',
    faqs: [
      {
        q: 'Do Dunedin landlords require PLI for student-facing businesses?',
        a: 'Commercial landlords in Dunedin typically require tenants operating businesses open to the public to hold public liability insurance, with $1M–$2M being the standard minimum for retail and hospitality.',
      },
      {
        q: 'What cover do Otago agricultural contractors need?',
        a: 'Agricultural and rural contractors operating in Otago typically need $2M–$5M public liability cover, depending on the nature of their work and whether they operate heavy machinery.',
      },
    ],
  },
];
