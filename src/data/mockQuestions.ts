import { PYQQuestion } from '../types';

export const SAMPLE_PYQ_QUESTIONS: PYQQuestion[] = [
  {
    id: 'pyq-polity-01',
    year: 'UPSC CSE PRELIMS 2023 RECONFIGURED',
    paper: 'General Studies Paper I',
    subject: 'Indian Polity & Governance',
    topic: 'Constitutional Morality & Basic Structure',
    question: 'Consider the following statements regarding the "Basic Structure Doctrine" of the Indian Constitution:\n\n1. The concept of "Basic Structure" is explicitly defined under Article 368 of the Constitution.\n2. The Supreme Court of India first propounded this doctrine in the landmark Kesavananda Bharati case (1973).\n3. Judicial review and free and fair elections have been held as part of the basic structure by subsequent judicial pronouncements.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctIndex: 1,
    explanation: 'Statement 1 is incorrect: The Constitution does NOT define the term "Basic Structure" anywhere; it is an organic judicial innovation. Statement 2 is correct: A 13-judge constitutional bench propounded the doctrine in Kesavananda Bharati v. State of Kerala (1973) by a 7:6 majority. Statement 3 is correct: Both Judicial Review (Minerva Mills, 1980) and Free & Fair Elections (Indira Nehru Gandhi v. Raj Narain, 1975) have been unequivocally affirmed as inviolable facets of the basic structure.',
    syllabusReference: 'Syllabus: GS Paper II · Historical Underpinnings, Evolution, Features, Amendments, Significant Provisions and Basic Structure'
  },
  {
    id: 'pyq-economy-02',
    year: 'UPSC CSE PRELIMS 2024 STANDARD',
    paper: 'General Studies Paper I',
    subject: 'Indian Economy & Financial System',
    topic: 'Monetary Policy & Inflation Targeting',
    question: 'With reference to the Monetary Policy Committee (MPC) of the Reserve Bank of India, consider the following statements:\n\n1. It determines the policy repo rate required to achieve the mandated inflation target.\n2. It is a 6-member committee comprising three members from the RBI and three appointed by the Central Government.\n3. The Governor of the RBI enjoys a casting vote in the event of a tie.\n\nHow many of the statements given above are correct?',
    options: [
      'Only one',
      'Only two',
      'All three',
      'None'
    ],
    correctIndex: 2,
    explanation: 'All three statements are correct: Under Section 45ZB of the amended RBI Act, 1934, the MPC determines the policy interest rate to maintain price stability (Statement 1). It consists of 6 members: 3 ex-officio RBI members and 3 external members nominated by the Union Government (Statement 2). Decisions are made by majority vote, and the RBI Governor has a second or casting vote in case of equal division of votes (Statement 3).',
    syllabusReference: 'Syllabus: GS Paper III · Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment'
  },
  {
    id: 'pyq-env-03',
    year: 'UPSC CSE PRELIMS 2023 PATTERN',
    paper: 'General Studies Paper I',
    subject: 'Environment & Ecology',
    topic: 'Biodiversity & Conservation Initiatives',
    question: 'Consider the following protected areas:\n\n1. Bandipur National Park\n2. Mudumalai Wildlife Sanctuary\n3. Wayanad Wildlife Sanctuary\n4. Silent Valley National Park\n\nWhich of the above are integral contiguous components of the Nilgiri Biosphere Reserve?',
    options: [
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 2 and 3 only',
      '1, 2, 3 and 4'
    ],
    correctIndex: 3,
    explanation: 'Option D is correct: The Nilgiri Biosphere Reserve was the first biosphere reserve in India established in 1986 under UNESCO MAB program. It encompasses contiguous protected areas across Tamil Nadu, Kerala, and Karnataka, including Bandipur, Mudumalai, Wayanad, Silent Valley, and Nagarhole, creating a vital elephant corridor and tiger habitat in the Western Ghats.',
    syllabusReference: 'Syllabus: GS Paper III · Conservation, Environmental Pollution and Degradation, Environmental Impact Assessment'
  }
];

export const SAMPLE_STUDY_NOTE = {
  subject: 'POLITY & CONSTITUTIONAL LAW',
  paper: 'GS PAPER II',
  title: 'Constitutional Morality & Basic Structure Doctrine',
  chapter: 'MODULE 04 // JUDICIAL REVIEWS & DOCTRINES',
  coordinates: 'VAULT · POL-REF-402',
  lastUpdated: 'Revision Cycle 2026',
  excerpt: 'Constitutional morality is not merely a legalistic adherence to the text, but a commitment to the foundational democratic values of pluralism, institutional integrity, and counter-majoritarian checks.',
  highlightPassage: 'In Kesavananda Bharati (1973), the Supreme Court reconciled parliamentary sovereignty under Article 368 with constitutional supremacy, establishing that while Parliament has wide constituent power to amend the Constitution, it cannot alter its foundational identity or destroy its basic framework.',
  keyTakeaways: [
    'Substantive limits on Article 368 amending power.',
    'Protects federal balance, secularism, and separation of powers.',
    'Operates as an unwritten canon of judicial review across commonwealth jurisprudence.'
  ],
  associatedCases: [
    'Shankari Prasad (1951) → Sajjan Singh (1965)',
    'Golaknath (1967) → Kesavananda Bharati (1973)',
    'Minerva Mills (1980) → I.R. Coelho (2007)'
  ]
};
