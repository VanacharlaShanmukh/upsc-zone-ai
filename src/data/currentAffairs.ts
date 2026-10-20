import { CurrentAffairsArticle } from '../types';

export const CURRENT_AFFAIRS_ARTICLES: CurrentAffairsArticle[] = [
  {
    id: 'ca-finance-commission',
    category: 'Indian Economy & Policy',
    syllabusPaper: 'GS Paper II & III · Polity & Macroeconomics',
    headline: '16th Finance Commission & Fiscal Federalism: Navigating Horizontal Devolution',
    summary: 'An editorial analysis on the balancing of demographic performance incentives against equity needs in horizontal tax devolution across Indian states.',
    readTime: '6 min read',
    date: 'ISSUE NO. 248 · OCTOBER 2026',
    coordinates: 'ATLAS SEC // 28.61°N 77.20°E',
    isFeatured: true,
    fullArticle: {
      context: 'The Constitution of India mandates the Finance Commission under Article 280 to recommend the distribution of net tax proceeds between the Union and the States (vertical devolution) and allocation between the States (horizontal devolution). The 16th Finance Commission faces the complex mandate of balancing demographic transition disparities with developmental equity.',
      keyPoints: [
        'Criteria Weightage Debate: The transition from the 1971 Census to the 2011 Census created divergence between northern states with growing populations and southern states that successfully implemented family planning.',
        'Cess and Surcharges: The growing share of non-shareable cesses and surcharges in the Union gross tax revenue (now ~18-20%) remains a core friction point in fiscal federalism.',
        'Disaster Management Financing: Revisiting state disaster relief fund allocation methodologies in light of localized climate shocks and localized resilience metrics.'
      ],
      prelimsPointer: 'Under Article 280(1), the Finance Commission is constituted by the President every five years or earlier. Its recommendations are quasi-judicial and recommendatory in nature, not legally binding on Parliament.',
      mainsAngle: 'How can the Finance Commission ensure that fiscal transfers do not penalize states demonstrating superior governance and demographic stabilization while safeguarding fiscal equalisation?',
      practiceQuestion: 'Discuss the constitutional role of the Finance Commission in promoting fiscal stability and reducing regional economic imbalances in cooperative federalism. (250 Words, 15 Marks)'
    }
  },
  {
    id: 'ca-quantum-mission',
    category: 'Science & Technology',
    syllabusPaper: 'GS Paper III · S&T and Cyber Resilience',
    headline: 'National Quantum Mission: Architecture, Cryptography & Indigenous Capability',
    summary: 'Evaluating India\'s roadmap toward fault-tolerant quantum computing, quantum key distribution (QKD) corridors, and post-quantum cryptographic standards.',
    readTime: '4 min read',
    date: 'ISSUE NO. 247 · OCTOBER 2026',
    coordinates: 'ATLAS SEC // 12.97°N 77.59°E',
    isFeatured: false,
    fullArticle: {
      context: 'Approved with a multi-year budgetary outlay, the National Quantum Mission (NQM) aims to seed, nurture, and scale scientific and industrial R&D in Quantum Technologies, establishing India as a leading nation in quantum materials, communications, and precision sensors.',
      keyPoints: [
        'Four Thematic Hubs (T-Hubs): Focus on Quantum Computing, Quantum Communication, Quantum Sensing & Metrology, and Quantum Materials & Devices.',
        'Satellite-Based QKD: Demonstrating secure quantum key distribution over 2,000 km inter-city optical ground station corridors.',
        'Post-Quantum Cryptography (PQC): Developing national standards to protect banking, defense, and critical national infrastructure against "harvest now, decrypt later" adversary postures.'
      ],
      prelimsPointer: 'Quantum superposition enables qubits to exist in multiple states simultaneously, unlike classical binary bits (0 or 1). Quantum entanglement allows instantaneous state correlations regardless of spatial distance.',
      mainsAngle: 'Examine the strategic and economic significance of quantum technology for national security. What structural bottlenecks must India address to build an indigenous quantum hardware ecosystem?',
      practiceQuestion: 'What do you understand by "Quantum Superiority"? Outline the key objectives of India\'s National Quantum Mission and its potential applications in secure governance. (150 Words, 10 Marks)'
    }
  },
  {
    id: 'ca-great-nicobar',
    category: 'Environment & Biodiversity',
    syllabusPaper: 'GS Paper III · Ecology, Coastal Zones & Tribal Rights',
    headline: 'Great Nicobar Island Development: Strategic Geography vs. Ecological Fragility',
    summary: 'Balancing maritime logistics near the Malacca Strait with the preservation of primary rainforests, the Shompen tribal reserve, and endemic coastal avifauna.',
    readTime: '5 min read',
    date: 'ISSUE NO. 246 · OCTOBER 2026',
    coordinates: 'ATLAS SEC // 06.92°N 93.85°E',
    isFeatured: false,
    fullArticle: {
      context: 'The holistic development plan for Great Nicobar Island includes an International Container Transshipment Terminal (ICTT) at Galathea Bay, an international airport, a township, and a dual-use military-civilian power plant.',
      keyPoints: [
        'Geostrategic Primacy: Galathea Bay sits barely 40 nautical miles from the East-West international shipping route navigating the Strait of Malacca, through which nearly 30% of global seaborne trade passes.',
        'Ecological Sensitivities: Great Nicobar is a designated UNESCO Biosphere Reserve hosting pristine tropical evergreen rainforests, leatherback sea turtle nesting beaches, and the Nicobar megapode.',
        'Indigenous Vulnerabilities: The island is home to Particularly Vulnerable Tribal Groups (PVTGs) including the Shompen and the Nicobarese, requiring stringent adherence to the Forest Rights Act.'
      ],
      prelimsPointer: 'Galathea National Park and Campbell Bay National Park together form the Great Nicobar Biosphere Reserve. The Indira Point on Great Nicobar represents India\'s southernmost territorial point.',
      mainsAngle: 'Analyze the trade-offs between national maritime security imperatives and fragile island ecology. How can EIA guidelines be fortified for ecologically vulnerable island ecosystems?',
      practiceQuestion: 'Island development projects present a unique confluence of strategic maritime security and ecological sustainability. Critically analyze in the context of the Great Nicobar development project. (250 Words, 15 Marks)'
    }
  }
];
