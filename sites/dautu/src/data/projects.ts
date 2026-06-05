export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  tam: string;
  status: string;
  fundingNeed: string;
  description: string;
  highlights: string[];
  risks: string[];
  milestones: { phase: string; time: string; goal: string }[];
}

export const projects: Project[] = [
  {
    slug: 'ketnoi',
    name: 'Kết Nối Muôn Nơi',
    tagline: 'Nền tảng kết nối người thật đã xác minh',
    category: 'Dating & Relationship',
    tam: '12 tỷ USD',
    status: 'Founder Review Ready',
    fundingNeed: '250K – 500K USD',
    description:
      'Nền tảng kết nối con người đã xác minh, ưu tiên sự thật, an toàn, ranh giới, chống AI giả mạo, chống lừa đảo, quan hệ có trách nhiệm.',
    highlights: [
      'Verified identity + anti-cheat',
      'Safe Date mode + gift economy',
      'AI safety assistant + moderation',
      'Multilingual (vi, en, zh, ko, ja)',
    ],
    risks: [
      'Dating app regulatory (FOSTA-SESTA, OSA)',
      'PDPL + GDPR compliance for biometric data',
      'High CAC in competitive market',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Web MVP + auth + profile + Safe Date' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'Mobile app + KYC + gift system' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Pilot 500 users + moderation' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Scale 5K users + revenue 5K/month' },
    ],
  },
  {
    slug: 'nhachung',
    name: 'Nhà Chung Muôn Nơi',
    tagline: 'Community Operating System cho cộng đồng sống thật',
    category: 'Community OS & Co-living',
    tam: '50 tỷ USD',
    status: 'Build Started (63/100)',
    fundingNeed: '300K – 600K USD',
    description:
      'Hệ điều hành cho cộng đồng sống thật — nơi con người cùng sống, học, làm, đóng góp, trưởng thành, được xác minh, có quy tắc, có lịch sử đóng góp.',
    highlights: [
      '9 phòng chức năng (Home, Identity, Rules, Learn, Work, Project, Trust, Community, Belong)',
      '6 lớp thành viên từ Public đến Builder',
      'Multi-tenant architecture',
      'Proof-of-contribution ledger',
    ],
    risks: [
      'Product scope quá rộng',
      'Dev 63/100 — chưa MVP',
      'Pháp lý đầu tư & governance',
      'Payment / chargeback',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Landing + app shell + auth + household' },
      { phase: 'M2', time: 'Tháng 4–6', goal: '9 phòng MVP + payment + points' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Multi-tenant pilot + 3 cộng đồng' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Subscription + affiliate + revenue 5K/month' },
    ],
  },
  {
    slug: 'dulich',
    name: 'Đường Muôn Nơi',
    tagline: 'Travel quest + verified local experience',
    category: 'Travel Tech',
    tam: '8 tỷ USD',
    status: 'Concept',
    fundingNeed: '150K – 300K USD',
    description:
      'Travel quest + local experience platform với verified host, verified experience, quest-based travel, digital nomad package.',
    highlights: [
      'Verified host + proof records',
      'Quest-based travel rewards',
      'Digital nomad package (stay + coworking + community)',
      'Local host tools',
    ],
    risks: [
      'COVID-like event ảnh hưởng du lịch',
      'Cạnh tranh Airbnb/Booking',
      'Giấy phép lữ hành VN',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Landing + host onboarding (Đà Lạt pilot)' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'Booking engine + 50 hosts' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Digital nomad package + 200 hosts' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Scale 3 tỉnh + revenue 10K/month' },
    ],
  },
  {
    slug: 'lamviec',
    name: 'Làm Việc Muôn Nơi',
    tagline: 'Remote work + freelance marketplace',
    category: 'Remote Work',
    tam: '4 tỷ USD',
    status: 'Concept',
    fundingNeed: '200K – 400K USD',
    description:
      'Remote work + freelance marketplace với verified freelancer, work hub, escrow, time tracking, community workspace.',
    highlights: [
      'Verified freelancer identity + skill test',
      'Project escrow + milestone payment',
      'Work hub (coworking + stay + community)',
      'Time tracking + proof of work',
    ],
    risks: [
      'Dispute resolution',
      'Cạnh tranh Upwork/Fiverr',
      'Payment cross-border VN',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: '50 verified freelancers' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'First 10 projects + escrow' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Work hub pilot + 200 freelancers' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 10K/month + 500 freelancers' },
    ],
  },
  {
    slug: 'hoctap',
    name: 'Học Tập Muôn Nơi',
    tagline: 'Cohort-based learning + verified mentor',
    category: 'EdTech',
    tam: '350 tỷ USD',
    status: 'Concept',
    fundingNeed: '150K – 300K USD',
    description:
      'Learning-in-community platform với cohort-based courses, verified mentor, project-based learning, peer review, micro-credentials.',
    highlights: [
      'Cohort-based (deadline + accountability)',
      'Verified mentor marketplace',
      'Project-based portfolio',
      'Corporate training B2B',
    ],
    risks: [
      'Quality control mentor/course',
      'Completion rate industry-low',
      'Cạnh tranh Coursera/Udemy',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: '3 cohort courses (10 students)' },
      { phase: 'M2', time: 'Tháng 4–6', goal: '30 mentors' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Corporate pilot (2 công ty) + 500 students' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 10K/month + 2K students' },
    ],
  },
  {
    slug: 'cuocsong',
    name: 'Cuộc Sống Muôn Nơi',
    tagline: 'Wellness + mindfulness bản địa',
    category: 'Lifestyle & Wellness',
    tam: '4 tỷ USD',
    status: 'Concept',
    fundingNeed: '150K – 300K USD',
    description:
      'Wellness platform với habit tracker có proof, mindfulness bản địa hóa, wellness challenges, mentor matching, mood journal.',
    highlights: [
      'Habit tracker có proof (photo, GPS, timestamp)',
      'Mindfulness tiếng Việt + văn hóa VN',
      'Wellness challenges 30 ngày',
      'Coach marketplace',
    ],
    risks: [
      'Mental health regulatory VN chưa rõ',
      'Stigma về mental health',
      'Cạnh tranh Headspace/Calm',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Habit tracker + 5 challenges' },
      { phase: 'M2', time: 'Tháng 4–6', goal: '50 coaches' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Corporate wellness (3 công ty)' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 5K/month + 5K users' },
    ],
  },
  {
    slug: 'nguoiviet',
    name: 'Người Việt Muôn Nơi',
    tagline: 'Diaspora community + cultural bridge',
    category: 'Diaspora & Community',
    tam: '2 tỷ USD',
    status: 'Concept',
    fundingNeed: '100K – 200K USD',
    description:
      'Global Vietnamese diaspora platform cho 5.3M người Việt ở nước ngoài với verified identity, local chapters, business directory, remittance.',
    highlights: [
      'Verified Vietnamese identity',
      'Local chapter management',
      'Business directory',
      'Remittance + investment channel về VN',
    ],
    risks: [
      'Multi-country legal compliance',
      'Remittance regulatory',
      'Community moderation (political)',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Landing + 3 chapters (US, AU, DE)' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'Verified + 100 business listings' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Remittance pilot + 10 chapters' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 3K/month + 50 chapters' },
    ],
  },
  {
    slug: 'plays',
    name: 'Plays Muôn Nơi',
    tagline: 'Responsible gaming + indie incubator',
    category: 'Gaming & Esports',
    tam: '200 tỷ USD',
    status: 'Concept',
    fundingNeed: '100K – 200K USD',
    description:
      'Gaming platform có trách nhiệm với responsible gaming dashboard, verified player, indie game incubator, esports league.',
    highlights: [
      'Responsible gaming dashboard',
      'Verified player identity (anti-cheat)',
      'Indie game incubator',
      'Esports league với proof',
    ],
    risks: [
      'Cạnh tranh Steam/Epic (very high)',
      'Gaming law VN',
      'Indie dev traction',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Dashboard MVP + 3 indie games' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'Verified player + first tournament' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Incubator batch 1 (5 games)' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 5K/month + 20 games' },
    ],
  },
  {
    slug: 'family',
    name: 'Family Muôn Nơi',
    tagline: 'Family Operating System',
    category: 'Family Tech',
    tam: '5 tỷ USD',
    status: 'Concept',
    fundingNeed: '200K – 400K USD',
    description:
      'Family OS với shared calendar, finance, parenting tracker, location sharing, elder care, family chat + memory album.',
    highlights: [
      'All-in-one family management',
      'Kids debit card + allowance',
      'Elder care monitoring',
      'Privacy-first (no cloud)',
    ],
    risks: [
      'Privacy children data (very high)',
      'COPPA / children data law',
      'Cạnh tranh Apple Family',
    ],
    milestones: [
      { phase: 'M1', time: 'Tháng 1–3', goal: 'Calendar + tasks + chat MVP' },
      { phase: 'M2', time: 'Tháng 4–6', goal: 'Finance + location + 500 families' },
      { phase: 'M3', time: 'Tháng 7–9', goal: 'Parenting + elder care + 2K families' },
      { phase: 'M4', time: 'Tháng 10–12', goal: 'Revenue 8K/month + 5K families' },
    ],
  },
];
