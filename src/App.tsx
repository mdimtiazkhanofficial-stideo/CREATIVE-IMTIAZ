/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  Download,
  Facebook,
  FileText,
  Film,
  Globe,
  Headphones,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  Music,
  Palette,
  PenTool,
  Phone,
  Plane,
  Search,
  Send,
  Share2,
  Star,
  TrendingUp,
  Twitter,
  User,
  X,
  Youtube,
} from 'lucide-react';

// ============================================================================
// EDITABLE PORTFOLIO & BLOG DATA CONSTANTS
// ============================================================================

export type RouteView = 'home' | 'services' | 'blog' | 'single-post';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  highlighted?: boolean;
  iconKey: 'seo' | 'facebook' | 'youtube' | 'content' | 'web' | 'graphic';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Design' | 'Mobile App' | 'Graphic Design';
  client: string;
  year: string;
  metric: string;
  summary: string;
  deliverables: string[];
  gradient: string;
  initials: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
  avatarGradient: string;
}

export interface BlogPost {
  id: number;
  title: string;
  dateDisplay: string;
  author: string;
  category: string;
  archive: string;
  excerpt: string;
  paragraphs: string[];
  quote: string;
  tags: string[];
  gradient: string;
  initials: string;
}

export interface CommentItem {
  id: string;
  author: string;
  initials: string;
  avatarGradient: string;
  date: string;
  text: string;
  replies?: CommentItem[];
}

export const PROFILE = {
  brandMark: 'H.',
  greeting: 'Hi, I am',
  name: 'Mary Hardy',
  subtitle: 'Digital Marketing Expert',
  heroIntro:
    'I help growth-focused brands turn search traffic, paid social campaigns, and conversion-driven web design into measurable revenue.',
  aboutLabel: 'My Intro',
  aboutHeading: 'About Me',
  aboutParagraph:
    'Over the past eight years, I have partnered with startups, SaaS teams, and local service leaders to build full-funnel acquisition systems. From technical SEO audits and high-ROAS Facebook ad funnels to clear brand storytelling, my focus is always on repeatable, measurable growth.',
  phone: '+1 (415) 890-4321',
  email: 'hello@maryhardy.com',
  location: 'San Francisco, CA',
  interests: [
    { label: 'Music', key: 'music' as const },
    { label: 'Travel', key: 'travel' as const },
    { label: 'Movie', key: 'movie' as const },
    { label: 'Photo', key: 'photo' as const },
  ],
  stats: [
    { value: '8 Years Job', label: 'Experience', key: 'experience' as const },
    { value: '500+ Projects', label: 'Completed', key: 'projects' as const },
    { value: 'Support Online', label: '24/7 Available', key: 'support' as const },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'SEO',
    description:
      'Technical site audits, search intent mapping, and authority link campaigns built to earn compounding organic rankings.',
    deliverables: ['Technical Crawl Audit', 'Keyword Architecture', 'On-Page Optimization'],
    iconKey: 'seo',
  },
  {
    id: 'facebook-marketing',
    title: 'Facebook Marketing',
    description:
      'Full-funnel Meta ad strategies, audience segmentation, and creative split-testing engineered for predictable return on ad spend.',
    deliverables: ['Conversion Funnel Setup', 'Ad Creative Testing', 'Retargeting Sequences'],
    highlighted: true,
    iconKey: 'facebook',
  },
  {
    id: 'youtube-marketing',
    title: 'Youtube Marketing',
    description:
      'Channel positioning, video SEO optimization, and high-retention ad placements that convert viewers into loyal subscribers.',
    deliverables: ['Video Metadata & SEO', 'In-Stream Ad Campaigns', 'Retention Hook Audits'],
    iconKey: 'youtube',
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    description:
      'Editorial blogs, landing page copy, and email nurture sequences written with clarity to persuade buyers and rank in search.',
    deliverables: ['Long-Form Editorial', 'Conversion Landing Copy', 'Email Drip Sequences'],
    iconKey: 'content',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Responsive, fast-loading marketing websites and conversion landing pages tailored for clarity, trust, and mobile usability.',
    deliverables: ['Responsive UI Systems', 'Landing Page Wireframes', 'CRO Layout Refinement'],
    iconKey: 'web',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Cohesive brand identities, social ad creatives, and presentation decks that give your marketing campaigns visual authority.',
    deliverables: ['Paid Social Ad Kits', 'Brand Visual Systems', 'Pitch & Report Decks'],
    iconKey: 'graphic',
  },
];

export const PROJECT_FILTERS: Array<'All Projects' | 'Web Design' | 'Mobile App' | 'Graphic Design'> = [
  'All Projects',
  'Web Design',
  'Mobile App',
  'Graphic Design',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Northstar SaaS Conversion Redesign',
    category: 'Web Design',
    client: 'Northstar Cloud',
    year: '2025',
    metric: '+142% Demo Signups in 90 Days',
    summary:
      'Redesigned the primary acquisition website and pricing funnel with streamlined messaging, comparison tables, and faster mobile page loads.',
    deliverables: ['UX Wireframes', 'Responsive Web Design', 'A/B Tested Hero'],
    gradient: 'from-[#0e1d4f] via-[#1c3480] to-[#2e4ea8]',
    initials: 'NS',
  },
  {
    id: 'proj-2',
    title: 'PulseFit Habit & Coaching App UI',
    category: 'Mobile App',
    client: 'PulseFit Studio',
    year: '2025',
    metric: '68% 30-Day User Retention',
    summary:
      'Designed an onboarding flow and daily workout tracking interface focused on frictionless check-ins and referral sharing.',
    deliverables: ['Mobile Onboarding', 'Design System', 'Referral Flows'],
    gradient: 'from-[#ff9642] via-[#f07b1d] to-[#c85a08]',
    initials: 'PF',
  },
  {
    id: 'proj-3',
    title: 'Verdant Skincare Social Ad Suite',
    category: 'Graphic Design',
    client: 'Verdant Botanicals',
    year: '2024',
    metric: '4.3x Meta Ads ROAS',
    summary:
      'Created a modular 36-asset creative library for Facebook and Instagram carousel campaigns paired with bold product storytelling.',
    deliverables: ['Paid Social Kit', 'Carousel Templates', 'Packaging Mockups'],
    gradient: 'from-[#162a6b] via-[#27469e] to-[#ff9642]',
    initials: 'VB',
  },
  {
    id: 'proj-4',
    title: 'Harbor Legal Lead Portal',
    category: 'Web Design',
    client: 'Harbor Advisory Group',
    year: '2024',
    metric: '+88% Qualified Consultations',
    summary:
      'Built a clean, trustworthy practice-area hub and intake experience optimized for high-intent local search traffic.',
    deliverables: ['Information Architecture', 'Practice Landing Pages', 'Intake Form UX'],
    gradient: 'from-[#0b163d] via-[#193072] to-[#3b5998]',
    initials: 'HL',
  },
  {
    id: 'proj-5',
    title: 'CartWise Grocery Companion App',
    category: 'Mobile App',
    client: 'CartWise Retail',
    year: '2024',
    metric: '42k Active Weekly Shoppers',
    summary:
      'Crafted mobile loyalty rewards, coupon discovery, and push-notification triggers designed to lift repeat basket size.',
    deliverables: ['iOS & Android UI', 'Loyalty Wallet', 'Promo Card System'],
    gradient: 'from-[#e56d12] via-[#ff9642] to-[#ffb36b]',
    initials: 'CW',
  },
  {
    id: 'proj-6',
    title: 'Summit FinTech Brand Identity',
    category: 'Graphic Design',
    client: 'Summit Treasury',
    year: '2025',
    metric: '$1.8M Pipeline Attributed',
    summary:
      'Delivered an executive visual identity, annual report templates, and LinkedIn campaign graphics for a B2B treasury platform.',
    deliverables: ['Brand Guidelines', 'Executive Pitch Deck', 'LinkedIn Ad Creatives'],
    gradient: 'from-[#0e1d4f] via-[#263f8c] to-[#f07b1d]',
    initials: 'ST',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'VP of Growth',
    company: 'Northstar Cloud',
    rating: 5,
    quote:
      'Mary rebuilt our paid social and organic search funnel from the ground up. Within four months our cost per qualified demo dropped by 38% while inbound volume more than doubled.',
    initials: 'ER',
    avatarGradient: 'from-[#0e1d4f] to-[#27469e]',
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Founder',
    company: 'Verdant Botanicals',
    rating: 5,
    quote:
      'Her Facebook marketing playbook and ad creative direction transformed our seasonal launches. Every campaign had clear reporting, sharp hypotheses, and consistent 4x+ returns.',
    initials: 'MV',
    avatarGradient: 'from-[#ff9642] to-[#d9620a]',
  },
  {
    id: 'test-3',
    name: 'Clara Lin',
    role: 'Managing Partner',
    company: 'Harbor Advisory Group',
    rating: 5,
    quote:
      'Working with Mary gave our firm a modern web presence that actually converts visitors. She communicates clearly, hits every milestone, and understands real business outcomes.',
    initials: 'CL',
    avatarGradient: 'from-[#1a337e] to-[#ff9642]',
  },
  {
    id: 'test-4',
    name: 'David Okafor',
    role: 'Head of Product',
    company: 'CartWise Retail',
    rating: 5,
    quote:
      'From YouTube video hooks to mobile onboarding copy, Mary brought cohesion to our entire customer acquisition journey. Our retention metrics improved from week one.',
    initials: 'DO',
    avatarGradient: 'from-[#0e1d4f] to-[#4464bd]',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How High-Intent SEO Funnels Outperform Cold Paid Traffic',
    dateDisplay: '01 JAN 2020',
    author: 'Admin',
    category: 'Business',
    archive: 'December 2019',
    excerpt:
      'Discover how mapping search queries to buyer readiness builds compounding organic leads without inflating acquisition budgets.',
    paragraphs: [
      'Most companies approach search engine optimization as a volume game—publishing broad glossary articles and celebrating raw impression spikes. Yet impressions rarely pay the bills when visitors arrive with zero purchase intent. By restructuring content around comparison queries, implementation checklists, and problem-aware landing pages, marketing teams capture prospects at the exact moment they are evaluating solutions.',
      'In our recent audits across twelve B2B service websites, shifting just 30% of editorial effort toward mid-funnel and bottom-funnel topics increased qualified consultation requests by more than half within two quarters. Pair clear internal linking with fast page speed and concrete proof points to turn organic readers into booked calls.',
    ],
    quote:
      'Sustainable growth happens when every article answers a real buyer objection and points cleanly to the next logical step.',
    tags: ['SEO', 'Digital Marketing', 'Growth'],
    gradient: 'from-[#0e1d4f] via-[#1f3b8f] to-[#3458b8]',
    initials: 'SEO',
  },
  {
    id: 2,
    title: 'Structuring Facebook Ad Creatives for Lower Cost Per Lead',
    dateDisplay: '04 JAN 2020',
    author: 'Admin',
    category: 'Consulting',
    archive: 'December 2019',
    excerpt:
      'A practical testing matrix for hooks, social proof visuals, and landing page alignment in modern Meta campaigns.',
    paragraphs: [
      'Audience targeting algorithms have become remarkably capable, which means creative quality is now the primary lever for lowering acquisition costs on Facebook and Instagram. Instead of micro-segmenting dozens of narrow ad sets, consolidate your budget and focus on testing distinct narrative angles in the first three seconds of every visual.',
      'Start each sprint with three clear creative hypotheses: a problem-agitation visual, a customer outcome breakdown, and a direct founder-style explainer. Measure thumb-stop rate alongside downstream landing page conversion so you never optimize for cheap clicks that fail to convert.',
    ],
    quote:
      'Creative is your real targeting mechanism; great ads call out the right customer before a single demographic filter runs.',
    tags: ['Facebook Ads', 'Growth', 'Analytics'],
    gradient: 'from-[#ff9642] via-[#eb781e] to-[#c45507]',
    initials: 'FB',
  },
  {
    id: 3,
    title: 'Building Trust Through Transparent Client Case Studies',
    dateDisplay: '09 JAN 2020',
    author: 'Admin',
    category: 'Finance',
    archive: 'December 2019',
    excerpt:
      'Why specific before-and-after metrics persuade cautious buyers far better than vague five-star praise.',
    paragraphs: [
      'Prospects evaluating a marketing consultant or financial advisor have heard every sweeping promise before. What stops them from scrolling is verifiable context: where the client started, what bottleneck held them back, which specific actions were taken, and what measurable change occurred over a defined timeframe.',
      'Structure every case study into four crisp chapters—Context, Intervention, Outcome, and Key Takeaway. Even a compact three-paragraph proof card placed beside your service pricing removes hesitation and elevates perceived authority.',
    ],
    quote:
      'Specificity builds credibility. Naming the exact timeframe and metric turns a polite compliment into persuasive evidence.',
    tags: ['Branding', 'Content', 'Business'],
    gradient: 'from-[#142763] via-[#2848a1] to-[#ff9642]',
    initials: 'CS',
  },
  {
    id: 4,
    title: 'YouTube Retention Hooks That Keep Viewers Past 30 Seconds',
    dateDisplay: '14 JAN 2020',
    author: 'Admin',
    category: 'Real Estate',
    archive: 'December 2019',
    excerpt:
      'Simple scripting techniques to eliminate slow intros and align your video opening with the thumbnail promise.',
    paragraphs: [
      'Nothing tanks YouTube channel growth faster than a thirty-second animated logo bumper followed by rambling housekeeping announcements. Viewers click a thumbnail expecting immediate validation of the title promise, and every second of delay drives drop-off.',
      'Open with the core tension or visual payoff in sentence one, preview the roadmap in under ten seconds, and transition directly into step one. Whether you are showcasing real estate listings or breaking down digital strategy, respecting viewer attention earns algorithmic distribution.',
    ],
    quote:
      'Deliver the promise of your thumbnail in the first fifteen seconds, and viewers will gladly stay for the full breakdown.',
    tags: ['Content', 'Digital Marketing', 'Growth'],
    gradient: 'from-[#0e1d4f] via-[#213a85] to-[#4c6bc2]',
    initials: 'YT',
  },
  {
    id: 5,
    title: 'Designing High-Converting Landing Pages Without Visual Clutter',
    dateDisplay: '19 JAN 2020',
    author: 'Admin',
    category: 'Settlement',
    archive: 'December 2019',
    excerpt:
      'How intentional whitespace, clear typographic hierarchy, and single-focus CTAs raise conversion rates.',
    paragraphs: [
      'When teams struggle with low landing page conversions, the temptation is often to cram more badges, popups, and competing buttons above the fold. In practice, extra noise creates decision fatigue and erodes trust.',
      'Focus each section on answering one buyer question at a time. Lead with a concrete headline, reinforce it with immediate social proof, keep navigation distractions minimal on dedicated campaign pages, and let generous padding guide the eye naturally toward the primary action.',
    ],
    quote:
      'Clarity converts faster than cleverness. Remove every element that does not directly support the reader’s decision.',
    tags: ['UI Design', 'Branding', 'Analytics'],
    gradient: 'from-[#e56d12] via-[#ff9642] to-[#ffa95e]',
    initials: 'UI',
  },
  {
    id: 6,
    title: 'Local Search Checklists for Service-Based Advisory Firms',
    dateDisplay: '24 JAN 2020',
    author: 'Admin',
    category: 'Criminal',
    archive: 'December 2019',
    excerpt:
      'Essential steps for consistent citations, localized practice pages, and review velocity that win map-pack visibility.',
    paragraphs: [
      'For specialized practices—from legal defense and divorce mediation to boutique consulting—local map-pack rankings often represent the single highest-margin acquisition channel. Consistent name, address, and phone citations across directories form the foundation, but dedicated service-location pages are what differentiate leaders.',
      'Encourage satisfied clients to leave detailed reviews that naturally mention the specific service they received, and answer common local questions directly on your practice pages with structured schema markup.',
    ],
    quote:
      'Local search rewards consistency, authentic client feedback, and genuinely helpful answers tailored to your community.',
    tags: ['SEO', 'Digital Marketing', 'Business'],
    gradient: 'from-[#0b163d] via-[#1c357d] to-[#e8721a]',
    initials: 'LC',
  },
  {
    id: 7,
    title: 'Email Nurture Sequences That Turn Downloads Into Booked Calls',
    dateDisplay: '02 FEB 2020',
    author: 'Admin',
    category: 'Divorce',
    archive: 'November 2019',
    excerpt:
      'A five-email post-download cadence designed to educate hesitant prospects without feeling pushy or automated.',
    paragraphs: [
      'Downloading a checklist or guide signals curiosity, not immediate readiness to sign a contract. Sending an aggressive sales pitch ten minutes after opt-in burns goodwill before trust has been established.',
      'Instead, map out a five-part sequence spaced across two weeks: deliver the promised asset cleanly, share a relevant quick-win framework, address the biggest misconception in your niche, present a brief client story, and close with a low-friction invitation to chat.',
    ],
    quote:
      'Good email marketing feels like a thoughtful note from a trusted advisor, never a broadcast megaphone.',
    tags: ['Content', 'Growth', 'Branding'],
    gradient: 'from-[#1a3178] via-[#2b4ca8] to-[#5072cc]',
    initials: 'EM',
  },
  {
    id: 8,
    title: 'Auditing Marketing Attribution Before Scaling Ad Spend',
    dateDisplay: '08 FEB 2020',
    author: 'Admin',
    category: 'Finance',
    archive: 'November 2019',
    excerpt:
      'Fixing UTM hygiene, CRM lead source tracking, and blended CAC reporting before doubling your monthly budget.',
    paragraphs: [
      'Scaling paid campaigns on top of broken tracking is one of the fastest ways to waste capital. Platform dashboards routinely claim overlapping credit for the same conversion, painting an overly rosy picture when viewed in isolation.',
      'Before raising spend, standardize UTM naming conventions across every channel, pass source parameters cleanly into your CRM, and review blended customer acquisition cost alongside platform-reported ROAS every Monday morning.',
    ],
    quote:
      'What gets measured accurately gets scaled profitably; clean attribution protects every marketing dollar you invest.',
    tags: ['Analytics', 'Facebook Ads', 'Business'],
    gradient: 'from-[#d9610b] via-[#ff9642] to-[#f48225]',
    initials: 'AT',
  },
  {
    id: 9,
    title: 'Visual Consistency Across Paid Social and Web Destinations',
    dateDisplay: '15 FEB 2020',
    author: 'Admin',
    category: 'Consulting',
    archive: 'November 2019',
    excerpt:
      'Why matching ad typography, color cues, and headline framing to your destination page cuts bounce rates immediately.',
    paragraphs: [
      'Message match extends beyond copy—it starts the millisecond a visitor lands on your site after tapping an ad. When the landing page looks completely different in tone, color palette, or promise from the ad creative, visitors instinctively question whether they clicked the right link.',
      'Maintain a shared visual kit between your graphic designer and web developer so campaign headlines, accent hues, and focal imagery carry seamlessly from feed to checkout.',
    ],
    quote:
      'Seamless visual continuity reassures visitors in half a second that they are in exactly the right place.',
    tags: ['UI Design', 'Branding', 'Facebook Ads'],
    gradient: 'from-[#0e1d4f] via-[#234094] to-[#ff9642]',
    initials: 'VC',
  },
  {
    id: 10,
    title: 'Refreshing Evergreen Content to Reclaim Slipping Search Positions',
    dateDisplay: '21 FEB 2020',
    author: 'Admin',
    category: 'Business',
    archive: 'November 2019',
    excerpt:
      'A repeatable quarterly workflow for updating aging posts with fresh data, clearer headers, and sharper examples.',
    paragraphs: [
      'Even your strongest pillar articles lose momentum over twelve to eighteen months as competitors publish newer guides and search intent evolves. Often, updating an existing URL with URL authority already intact delivers results in weeks rather than months.',
      'Pull pages ranking in positions four through twelve, expand thin sections with current benchmarks, tighten meta titles to boost click-through rate, and re-submit for indexing.',
    ],
    quote:
      'Your next big organic traffic win is often hiding inside an article you already published two years ago.',
    tags: ['SEO', 'Content', 'Analytics'],
    gradient: 'from-[#162d73] via-[#2c4da6] to-[#4166c9]',
    initials: 'EG',
  },
  {
    id: 11,
    title: 'High-Trust Lead Forms for High-Value Real Estate Inquiries',
    dateDisplay: '26 FEB 2020',
    author: 'Admin',
    category: 'Real Estate',
    archive: 'October 2019',
    excerpt:
      'Balancing field length, micro-copy reassurance, and instant confirmation states to maximize inquiry quality.',
    paragraphs: [
      'Asking for twelve mandatory fields upfront scares off mobile prospects, while asking only for an email leaves sales teams guessing how to prioritize follow-up. Multi-step or thoughtfully grouped three-to-four-field forms strike the ideal balance.',
      'Add clear expectations right beneath the submit button—such as response time guarantees—and immediately show a helpful confirmation message outlining next steps.',
    ],
    quote:
      'Every form field is a tiny negotiation of trust; ask only for what helps you serve the inquiry better.',
    tags: ['UI Design', 'Growth', 'Digital Marketing'],
    gradient: 'from-[#e26b10] via-[#ff9642] to-[#ffb270]',
    initials: 'RE',
  },
  {
    id: 12,
    title: 'Annual Digital Marketing Planning for Lean Growth Teams',
    dateDisplay: '03 MAR 2020',
    author: 'Admin',
    category: 'Settlement',
    archive: 'October 2019',
    excerpt:
      'Prioritizing high-leverage channels, quarterly sprint themes, and realistic KPI guardrails for small teams.',
    paragraphs: [
      'Trying to be active on seven platforms simultaneously guarantees mediocre execution everywhere. Lean teams win by picking one compounding organic pillar—such as SEO or YouTube—and pairing it with one targeted paid distribution channel.',
      'Set quarterly objectives around pipeline metrics rather than vanity likes, and protect weekly review time to prune underperforming experiments early.',
    ],
    quote:
      'Focus is a force multiplier. Do fewer channels exceptionally well before expanding your footprint.',
    tags: ['Business', 'Growth', 'Digital Marketing'],
    gradient: 'from-[#0e1d4f] via-[#1c3480] to-[#d9620a]',
    initials: 'AP',
  },
];

export const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c-1',
    author: 'Jonathan Pierce',
    initials: 'JP',
    avatarGradient: 'from-[#0e1d4f] to-[#28479e]',
    date: '03 JAN 2020 at 10:15 AM',
    text: 'This breakdown on separating informational keywords from high-intent buyer terms saved us months of guesswork. We restructured our core service pages last week and already see stronger engagement.',
    replies: [
      {
        id: 'c-1-reply-1',
        author: 'Mary Hardy',
        initials: 'MH',
        avatarGradient: 'from-[#ff9642] to-[#d9610b]',
        date: '03 JAN 2020 at 11:40 AM',
        text: 'Glad to hear that, Jonathan! Keep an eye on your search console click-through rates over the next 30 days—those bottom-funnel title refinements usually compound quickly.',
      },
    ],
  },
  {
    id: 'c-2',
    author: 'Sophia Bennett',
    initials: 'SB',
    avatarGradient: 'from-[#1a337e] to-[#ff9642]',
    date: '05 JAN 2020 at 04:22 PM',
    text: 'Love how practical this framework is. Adding clear proof points right beside our consultation form made an immediate difference in lead quality.',
  },
];

export const SIDEBAR_ARCHIVES = [
  { label: 'December 2019', count: 6 },
  { label: 'November 2019', count: 4 },
  { label: 'October 2019', count: 2 },
];

export const SIDEBAR_CATEGORIES = [
  'Business',
  'Consulting',
  'Criminal',
  'Divorce',
  'Finance',
  'Real Estate',
  'Settlement',
];

export const SIDEBAR_TAGS = [
  'Digital Marketing',
  'SEO',
  'Facebook Ads',
  'Branding',
  'Content',
  'Analytics',
  'UI Design',
  'Growth',
];

// ============================================================================
// HELPER RENDERERS
// ============================================================================

function parseHashState(): { view: RouteView; postId: number; scrollToTestimonial: boolean } {
  const raw = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();

  if (!raw || raw === 'home') {
    return { view: 'home', postId: 1, scrollToTestimonial: false };
  }
  if (raw === 'testimonial' || raw === 'testimonials') {
    return { view: 'home', postId: 1, scrollToTestimonial: true };
  }
  if (raw === 'services') {
    return { view: 'services', postId: 1, scrollToTestimonial: false };
  }
  if (raw === 'blog') {
    return { view: 'blog', postId: 1, scrollToTestimonial: false };
  }
  if (raw === 'single-post' || raw === 'post') {
    return { view: 'single-post', postId: 1, scrollToTestimonial: false };
  }
  if (raw.startsWith('post/')) {
    const parsed = Number(raw.split('/')[1]);
    const valid = BLOG_POSTS.some((p) => p.id === parsed) ? parsed : 1;
    return { view: 'single-post', postId: valid, scrollToTestimonial: false };
  }

  return { view: 'home', postId: 1, scrollToTestimonial: false };
}

function ServiceIcon({ iconKey, highlighted }: { iconKey: ServiceItem['iconKey']; highlighted?: boolean }) {
  const cls = `w-6 h-6 ${highlighted ? 'text-[#e06a12]' : 'text-white'}`;
  switch (iconKey) {
    case 'seo':
      return <TrendingUp className={cls} />;
    case 'facebook':
      return <Megaphone className={cls} />;
    case 'youtube':
      return <Youtube className={cls} />;
    case 'content':
      return <PenTool className={cls} />;
    case 'web':
      return <Globe className={cls} />;
    case 'graphic':
      return <Palette className={cls} />;
  }
}

function InterestIcon({ itemKey }: { itemKey: 'music' | 'travel' | 'movie' | 'photo' }) {
  const cls = 'w-4 h-4 text-[#ff9642]';
  switch (itemKey) {
    case 'music':
      return <Music className={cls} />;
    case 'travel':
      return <Plane className={cls} />;
    case 'movie':
      return <Film className={cls} />;
    case 'photo':
      return <Camera className={cls} />;
  }
}

function countTotalComments(list: CommentItem[]): number {
  return list.reduce((sum, item) => sum + 1 + (item.replies ? countTotalComments(item.replies) : 0), 0);
}

// ============================================================================
// MAIN APPLICATION
// ============================================================================

export default function App() {
  const initialRoute = useMemo(() => parseHashState(), []);
  const [view, setView] = useState<RouteView>(initialRoute.view);
  const [activePostId, setActivePostId] = useState<number>(initialRoute.postId);

  // Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Recent Works Filter & Detail Modal
  const [projectFilter, setProjectFilter] =
    useState<'All Projects' | 'Web Design' | 'Mobile App' | 'Graphic Design'>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Testimonials Carousel
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  // Blog State (Pagination & Filters)
  const [blogPage, setBlogPage] = useState(1);
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<string | null>(null);
  const [blogTagFilter, setBlogTagFilter] = useState<string | null>(null);
  const [blogArchiveFilter, setBlogArchiveFilter] = useState<string | null>(null);
  const [blogSearchQuery, setBlogSearchQuery] = useState('');

  // Single Post Comments State
  const [commentsByPost, setCommentsByPost] = useState<Record<number, CommentItem[]>>({
    1: INITIAL_COMMENTS,
  });
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyAuthor, setReplyAuthor] = useState('');
  const [replyText, setReplyText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentEmail, setNewCommentEmail] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  // Contact / Hire Me Modal
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('Digital Marketing Strategy');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  // Toast Notification
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  // Responsive check for testimonial carousel page count
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Hash navigation listener
  useEffect(() => {
    const handleHashChange = () => {
      const next = parseHashState();
      setView(next.view);
      setActivePostId(next.postId);
      setMobileMenuOpen(false);
      setReplyingToId(null);

      if (next.scrollToTestimonial) {
        window.setTimeout(() => {
          const el = document.getElementById('testimonial-section');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close modals on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setContactOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navigateTo = (hash: string) => {
    setMobileMenuOpen(false);
    if (window.location.hash === hash) {
      // Re-trigger scroll when clicking already-active anchor
      if (hash === '#testimonial') {
        document.getElementById('testimonial-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    window.location.hash = hash;
  };

  const openPost = (postId: number) => {
    setActivePostId(postId);
    setView('single-post');
    window.location.hash = `#post/${postId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContactModal = (defaultTopic?: string) => {
    if (defaultTopic) {
      setContactSubject(defaultTopic);
    }
    setContactSubmitted(false);
    setContactError('');
    setContactOpen(true);
  };

  const handleDownloadCV = () => {
    const cvContent = [
      'MARY HARDY — DIGITAL MARKETING EXPERT',
      'San Francisco, CA | hello@maryhardy.com | +1 (415) 890-4321',
      '==================================================================',
      '',
      'PROFILE',
      PROFILE.aboutParagraph,
      '',
      'KEY METRICS',
      '- 8 Years Job Experience in Performance & Organic Marketing',
      '- 500+ Projects Completed across SaaS, E-Commerce & Advisory Firms',
      '- 24/7 Client Campaign Monitoring & Support',
      '',
      'CORE SERVICES',
      ...SERVICES.map((s) => `- ${s.title}: ${s.description}`),
      '',
      'SELECTED CLIENT OUTCOMES',
      ...PROJECTS.map((p) => `- ${p.title} (${p.client}): ${p.metric}`),
    ].join('\n');

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mary_Hardy_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Mary Hardy CV downloaded.');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim());
    if (!contactName.trim() || !emailValid || !contactMessage.trim()) {
      setContactError('Please enter your name, a valid email address, and project details.');
      return;
    }
    setContactError('');
    setContactSubmitted(true);
    showToast('Inquiry sent! Mary will reply within 24 hours.');
  };

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    if (projectFilter === 'All Projects') return PROJECTS;
    return PROJECTS.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  // Testimonials Carousel Pagination
  const cardsPerSlide = isMobileViewport ? 1 : 2;
  const totalSlides = Math.ceil(TESTIMONIALS.length / cardsPerSlide);
  const safeSlide = Math.min(testimonialSlide, Math.max(0, totalSlides - 1));
  const visibleTestimonials = TESTIMONIALS.slice(
    safeSlide * cardsPerSlide,
    safeSlide * cardsPerSlide + cardsPerSlide
  );

  // Filtered & Paginated Blog Posts
  const filteredBlogPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (blogCategoryFilter && post.category !== blogCategoryFilter) return false;
      if (blogTagFilter && !post.tags.includes(blogTagFilter)) return false;
      if (blogArchiveFilter && post.archive !== blogArchiveFilter) return false;
      if (blogSearchQuery.trim()) {
        const q = blogSearchQuery.toLowerCase();
        const inTitle = post.title.toLowerCase().includes(q);
        const inExcerpt = post.excerpt.toLowerCase().includes(q);
        const inCat = post.category.toLowerCase().includes(q);
        if (!inTitle && !inExcerpt && !inCat) return false;
      }
      return true;
    });
  }, [blogCategoryFilter, blogTagFilter, blogArchiveFilter, blogSearchQuery]);

  const postsPerPage = 6;
  const totalBlogPages = Math.max(1, Math.ceil(filteredBlogPosts.length / postsPerPage));
  const safeBlogPage = Math.min(blogPage, totalBlogPages);
  const paginatedBlogPosts = filteredBlogPosts.slice(
    (safeBlogPage - 1) * postsPerPage,
    safeBlogPage * postsPerPage
  );

  const clearBlogFilters = () => {
    setBlogCategoryFilter(null);
    setBlogTagFilter(null);
    setBlogArchiveFilter(null);
    setBlogSearchQuery('');
    setBlogPage(1);
  };

  const activePost = useMemo(
    () => BLOG_POSTS.find((p) => p.id === activePostId) || BLOG_POSTS[0],
    [activePostId]
  );

  const currentComments = commentsByPost[activePost.id] || INITIAL_COMMENTS;
  const currentCommentCount = countTotalComments(currentComments);

  const handleAddReply = (parentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyAuthor.trim() || !replyText.trim()) return;

    const initials = replyAuthor
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || '')
      .join('');

    const newReply: CommentItem = {
      id: `reply-${Date.now()}`,
      author: replyAuthor.trim(),
      initials: initials || 'GU',
      avatarGradient: 'from-[#0e1d4f] to-[#ff9642]',
      date: 'Just now',
      text: replyText.trim(),
    };

    const updated = currentComments.map((c) => {
      if (c.id === parentId) {
        return { ...c, replies: [...(c.replies || []), newReply] };
      }
      return c;
    });

    setCommentsByPost((prev) => ({ ...prev, [activePost.id]: updated }));
    setReplyAuthor('');
    setReplyText('');
    setReplyingToId(null);
    showToast('Reply posted.');
  };

  const handleAddTopComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentAuthor.trim() || !newCommentText.trim()) return;

    const initials = newCommentAuthor
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || '')
      .join('');

    const nextComment: CommentItem = {
      id: `comment-${Date.now()}`,
      author: newCommentAuthor.trim(),
      initials: initials || 'GU',
      avatarGradient: 'from-[#162d73] to-[#3458b8]',
      date: 'Just now',
      text: newCommentText.trim(),
    };

    setCommentsByPost((prev) => ({
      ...prev,
      [activePost.id]: [...currentComments, nextComment],
    }));
    setNewCommentAuthor('');
    setNewCommentEmail('');
    setNewCommentText('');
    showToast('Comment added.');
  };

  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#post/${activePost.id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    showToast('Article link copied to clipboard.');
  };

  // ============================================================================
  // SHARED SECTIONS & COMPONENTS
  // ============================================================================

  const renderServicesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {SERVICES.map((service) => {
        const isHighlighted = Boolean(service.highlighted);
        return (
          <div
            key={service.id}
            onClick={() => openContactModal(service.title)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openContactModal(service.title);
              }
            }}
            className={`group cursor-pointer p-8 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-[3.25rem] transition-all duration-200 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e1d4f] ${
              isHighlighted
                ? 'bg-gradient-to-br from-[#e66d12] via-[#f27e24] to-[#ff9642] text-white shadow-[0_18px_40px_-15px_rgba(255,150,66,0.55)]'
                : 'bg-white text-[#334155] border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.16)] hover:shadow-[0_20px_45px_-18px_rgba(14,29,79,0.22)]'
            }`}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105 ${
                isHighlighted ? 'bg-white shadow-sm' : 'bg-[#ff9642] shadow-[0_8px_20px_-6px_rgba(255,150,66,0.6)]'
              }`}
            >
              <ServiceIcon iconKey={service.iconKey} highlighted={isHighlighted} />
            </div>

            <h3
              className={`text-xl font-bold mb-3 ${
                isHighlighted ? 'text-white' : 'text-[#0e1d4f]'
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`text-sm leading-relaxed mb-5 ${
                isHighlighted ? 'text-white/95' : 'text-slate-600'
              }`}
            >
              {service.description}
            </p>

            <div
              className={`pt-4 border-t text-xs font-medium flex items-center justify-between ${
                isHighlighted
                  ? 'border-white/25 text-white'
                  : 'border-slate-100 text-[#0e1d4f] group-hover:text-[#d9620a]'
              }`}
            >
              <span>Inquire about {service.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderBlogCard = (post: BlogPost) => (
    <article
      key={post.id}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.15)] hover:shadow-[0_22px_45px_-16px_rgba(14,29,79,0.22)] transition-all duration-200 hover:-translate-y-1 flex flex-col"
    >
      {/* Gradient / Initials Image Placeholder */}
      <button
        type="button"
        onClick={() => openPost(post.id)}
        className={`relative w-full aspect-[4/3] bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white`}
        aria-label={`Read ${post.title}`}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 25%, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2 transition-transform duration-200 group-hover:scale-105">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center">
            <span className="text-xl font-bold tracking-tight text-white">{post.initials}</span>
          </div>
          <span className="text-xs font-medium tracking-wide text-white/90">{post.category}</span>
        </div>
      </button>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs italic text-slate-500 mb-2.5">
          {post.dateDisplay} by {post.author}
        </p>

        <h3 className="text-lg font-bold text-[#0e1d4f] leading-snug mb-3 group-hover:text-[#d9620a] transition-colors">
          <button
            type="button"
            onClick={() => openPost(post.id)}
            className="text-left cursor-pointer focus-visible:outline-none focus-visible:underline"
          >
            {post.title}
          </button>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{post.excerpt}</p>

        <div>
          <button
            type="button"
            onClick={() => openPost(post.id)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e06a12] hover:text-[#0e1d4f] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Read More</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );

  // ============================================================================
  // RENDER HEADER (3-Zone Top Bar Contract)
  // ============================================================================

  const renderHeader = () => (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_20px_-12px_rgba(14,29,79,0.12)]">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Mark "H." in orange-bordered square */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('#home');
          }}
          className="w-10 h-10 border-2 border-[#ff9642] rounded-lg flex items-center justify-center text-lg font-bold text-[#0e1d4f] hover:bg-[#ff9642]/10 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9642]"
          aria-label="Mary Hardy Home"
        >
          {PROFILE.brandMark}
        </a>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0e1d4f]" aria-label="Primary">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#home');
            }}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
              view === 'home'
                ? 'border-[#ff9642] text-[#e06a12] font-semibold'
                : 'border-transparent hover:text-[#e06a12] hover:border-[#ff9642]/40'
            }`}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#services');
            }}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
              view === 'services'
                ? 'border-[#ff9642] text-[#e06a12] font-semibold'
                : 'border-transparent hover:text-[#e06a12] hover:border-[#ff9642]/40'
            }`}
          >
            Services
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              clearBlogFilters();
              navigateTo('#blog');
            }}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
              view === 'blog' || view === 'single-post'
                ? 'border-[#ff9642] text-[#e06a12] font-semibold'
                : 'border-transparent hover:text-[#e06a12] hover:border-[#ff9642]/40'
            }`}
          >
            Blog
          </a>
          <a
            href="#testimonial"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#testimonial');
            }}
            className="py-1 border-b-2 border-transparent hover:text-[#e06a12] hover:border-[#ff9642]/40 transition-colors whitespace-nowrap shrink-0"
          >
            Testimonial
          </a>
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => openContactModal('Hire Mary Hardy')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold shadow-[0_8px_20px_-8px_rgba(255,150,66,0.75)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e1d4f]"
          >
            Hire Me
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0e1d4f] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg px-4 py-4 space-y-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#home');
            }}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#0e1d4f] hover:bg-slate-50"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#services');
            }}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#0e1d4f] hover:bg-slate-50"
          >
            Services
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              clearBlogFilters();
              navigateTo('#blog');
            }}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#0e1d4f] hover:bg-slate-50"
          >
            Blog
          </a>
          <a
            href="#testimonial"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#testimonial');
            }}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#0e1d4f] hover:bg-slate-50"
          >
            Testimonial
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal('Hire Mary Hardy');
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );

  // ============================================================================
  // RENDER HOME VIEW
  // ============================================================================

  const renderHomeView = () => (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#f8f9fc] pt-14 pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-lg sm:text-xl font-semibold text-[#e06a12] mb-2">{PROFILE.greeting}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#0e1d4f] tracking-tight leading-[1.12] mb-3">
                {PROFILE.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#0e1d4f]/85 mb-5">{PROFILE.subtitle}</p>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                {PROFILE.heroIntro}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold shadow-[0_12px_28px_-10px_rgba(255,150,66,0.8)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e1d4f]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
                <button
                  type="button"
                  onClick={() => openContactModal('Project Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#0e1d4f] text-[#0e1d4f] hover:bg-[#0e1d4f] hover:text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9642]"
                >
                  <span>Contact Me</span>
                </button>
              </div>
            </div>

            {/* Right Large Circular Avatar Placeholder (Stacks below on mobile) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-white shadow-[0_25px_60px_-20px_rgba(14,29,79,0.2)] border-2 border-[#ff9642]/30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0e1d4f] via-[#1c3682] to-[#ff9642] flex flex-col items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)',
                      backgroundSize: '22px 22px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center mb-3 backdrop-blur-xs">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">MH</span>
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">Mary Hardy</span>
                    <span className="text-xs text-white/80 mt-0.5">Growth &amp; SEO Strategist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STATS PILL OVERLAPPING HERO BOTTOM */}
      <div className="relative z-20 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-full shadow-[0_20px_50px_-15px_rgba(14,29,79,0.18)] border border-slate-100 px-6 py-5 sm:px-10 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 md:divide-x md:divide-slate-100">
            <div className="flex items-center justify-center md:justify-start gap-4 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-[#ff9642] flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-[#0e1d4f]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0e1d4f] tabular-nums">
                  {PROFILE.stats[0].value}
                </p>
                <p className="text-xs text-slate-500">{PROFILE.stats[0].label}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-full bg-[#ff9642] flex items-center justify-center shrink-0 shadow-sm">
                <Briefcase className="w-5 h-5 text-[#0e1d4f]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0e1d4f] tabular-nums">
                  {PROFILE.stats[1].value}
                </p>
                <p className="text-xs text-slate-500">{PROFILE.stats[1].label}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4 md:pl-4">
              <div className="w-12 h-12 rounded-full bg-[#ff9642] flex items-center justify-center shrink-0 shadow-sm">
                <Headphones className="w-5 h-5 text-[#0e1d4f]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0e1d4f] tabular-nums">
                  {PROFILE.stats[2].value}
                </p>
                <p className="text-xs text-slate-500">{PROFILE.stats[2].label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT ME SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Photo Placeholder with Orange Border */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-4 border-[#ff9642] pointer-events-none" />
                <div className="relative z-10 aspect-[4/5] rounded-2xl border-4 border-[#ff9642] bg-gradient-to-br from-[#0e1d4f] via-[#1c357d] to-[#2c4da6] overflow-hidden shadow-lg flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-2xl bg-[#ff9642] flex items-center justify-center mb-4 shadow-md">
                    <span className="text-3xl font-bold text-[#0e1d4f]">MH</span>
                  </div>
                  <p className="text-xl font-bold text-white">{PROFILE.name}</p>
                  <p className="text-sm text-white/80 mt-1">{PROFILE.subtitle}</p>
                  <div className="mt-6 pt-5 border-t border-white/20 w-full flex items-center justify-center gap-2 text-xs text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#ff9642]" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right About Details */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#e06a12] mb-1.5">{PROFILE.aboutLabel}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1d4f] mb-5">{PROFILE.aboutHeading}</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">{PROFILE.aboutParagraph}</p>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-5 border-y border-slate-100 mb-8">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-[#ff9642] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Name</p>
                    <p className="text-sm font-semibold text-[#0e1d4f]">{PROFILE.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#ff9642] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm font-semibold text-[#0e1d4f] tabular-nums">{PROFILE.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#ff9642] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-semibold text-[#0e1d4f] break-all">{PROFILE.email}</p>
                  </div>
                </div>
              </div>

              {/* My Interests */}
              <div>
                <h3 className="text-base font-bold text-[#0e1d4f] mb-3.5">My Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {PROFILE.interests.map((interest) => (
                    <div
                      key={interest.key}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f9fc] border border-slate-200/80 text-sm font-medium text-[#0e1d4f]"
                    >
                      <InterestIcon itemKey={interest.key} />
                      <span>{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MY SERVICES SECTION */}
      <section className="py-20 lg:py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#e06a12] mb-2">Specialized Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1d4f] mb-3">My Services</h2>
            <p className="text-base text-slate-600">
              Full-funnel digital marketing disciplines tailored to turn audience attention into sustainable customer growth.
            </p>
          </div>

          {renderServicesGrid()}
        </div>
      </section>

      {/* 4. RECENT WORKS SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-[#e06a12] mb-2">My Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1d4f]">Recent Works</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-[#f8f9fc] p-1.5 rounded-xl border border-slate-100">
              {PROJECT_FILTERS.map((filter) => {
                const active = projectFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setProjectFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#ff9642] text-[#0e1d4f] font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-[#0e1d4f] hover:bg-white'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.16)] hover:shadow-[0_22px_45px_-16px_rgba(14,29,79,0.22)] transition-all duration-200 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9642]"
              >
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                >
                  <div className="flex items-center justify-between text-xs text-white/85">
                    <span>{project.category}</span>
                    <span className="tabular-nums">{project.year}</span>
                  </div>

                  <div className="my-auto flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <span className="text-2xl font-bold text-white tracking-tight">{project.initials}</span>
                    </div>
                  </div>

                  <div className="text-xs font-medium text-white/95 flex items-center justify-between">
                    <span className="tabular-nums">{project.metric}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-slate-500 mb-1">{project.client}</p>
                  <h3 className="text-lg font-bold text-[#0e1d4f] group-hover:text-[#e06a12] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimonial-section" className="py-20 lg:py-24 bg-[#f8f9fc] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-[#e06a12] mb-2">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1d4f]">My Client Saying</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTestimonialSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0e1d4f] hover:border-[#ff9642] hover:text-[#e06a12] transition-colors cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setTestimonialSlide((prev) => (prev + 1) % totalSlides)}
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0e1d4f] hover:border-[#ff9642] hover:text-[#e06a12] transition-colors cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#ff9642] text-[#ff9642]" />
                    ))}
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-7">"{item.quote}"</p>
                </div>

                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0e1d4f]">{item.name}</h3>
                    <p className="text-xs text-slate-500">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const active = idx === safeSlide;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTestimonialSlide(idx)}
                  aria-label={`Show testimonial slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    active ? 'w-8 bg-[#ff9642]' : 'w-2.5 bg-slate-300 hover:bg-[#ff9642]/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#d9610b] via-[#ef7b22] to-[#ff9642] px-8 py-12 sm:px-14 sm:py-14 shadow-[0_24px_50px_-18px_rgba(235,120,30,0.6)] flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Have a Project on Your Mind
              </h2>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                Whether you need an organic SEO roadmap, a high-ROAS Meta ad funnel, or a sharper website, let’s map out your next growth milestone.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openContactModal('New Project Inquiry')}
              className="px-7 py-3.5 rounded-lg bg-white hover:bg-[#0e1d4f] text-[#0e1d4f] hover:text-white text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS (3 BLOG PREVIEW CARDS) */}
      <section className="py-20 lg:py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-[#e06a12] mb-2">From the Blog</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1d4f]">Latest News</h2>
            </div>

            <button
              type="button"
              onClick={() => {
                clearBlogFilters();
                navigateTo('#blog');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0e1d4f] hover:text-[#e06a12] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_POSTS.slice(0, 3).map((post) => renderBlogCard(post))}
          </div>
        </div>
      </section>
    </>
  );

  // ============================================================================
  // RENDER SERVICES VIEW
  // ============================================================================

  const renderServicesView = () => (
    <>
      <section className="bg-gradient-to-r from-[#d9610b] via-[#ef7b22] to-[#ff9642] py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/90 mb-2">
            <button
              type="button"
              onClick={() => navigateTo('#home')}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>{' '}
            <span aria-hidden="true">/</span> Services
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">My Services</h1>
          <p className="text-base text-white/95 max-w-2xl mx-auto">
            Practical, ROI-focused marketing services engineered to attract qualified traffic, convert visitors, and strengthen your brand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderServicesGrid()}

          {/* Process & Conversion Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#e06a12] mb-1.5">Custom Retainers &amp; Audits</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1d4f] mb-2">
                Not sure which channel to prioritize first?
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Book a focused 30-minute audit review to identify your quickest organic and paid acquisition wins.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openContactModal('Channel Priority Audit')}
              className="px-6 py-3.5 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </section>
    </>
  );

  // ============================================================================
  // RENDER BLOG VIEW
  // ============================================================================

  const renderBlogView = () => {
    const hasActiveFilter = Boolean(
      blogCategoryFilter || blogTagFilter || blogArchiveFilter || blogSearchQuery.trim()
    );

    return (
      <>
        {/* Orange Gradient Header */}
        <section className="bg-gradient-to-r from-[#d9610b] via-[#ef7b22] to-[#ff9642] py-16 sm:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-white/90 mb-2">
              <button
                type="button"
                onClick={() => navigateTo('#home')}
                className="hover:underline cursor-pointer"
              >
                Home
              </button>{' '}
              <span aria-hidden="true">/</span> Blog
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">Blog</h1>
            <p className="text-base text-white/95 max-w-xl mx-auto">
              Actionable playbooks on SEO, paid social campaigns, conversion design, and sustainable digital growth.
            </p>
          </div>
        </section>

        {/* Blog Grid + Pagination */}
        <section className="py-16 sm:py-20 bg-[#f8f9fc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasActiveFilter && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 bg-white px-5 py-3.5 rounded-xl border border-slate-200/80">
                <p className="text-sm text-slate-600">
                  Showing <span className="font-semibold text-[#0e1d4f] tabular-nums">{filteredBlogPosts.length}</span>{' '}
                  {filteredBlogPosts.length === 1 ? 'article' : 'articles'}
                  {blogCategoryFilter ? ` in Category: ${blogCategoryFilter}` : ''}
                  {blogTagFilter ? ` tagged "${blogTagFilter}"` : ''}
                  {blogArchiveFilter ? ` from ${blogArchiveFilter}` : ''}
                  {blogSearchQuery.trim() ? ` matching "${blogSearchQuery.trim()}"` : ''}
                </p>
                <button
                  type="button"
                  onClick={clearBlogFilters}
                  className="text-sm font-semibold text-[#e06a12] hover:text-[#0e1d4f] cursor-pointer"
                >
                  Clear Filter
                </button>
              </div>
            )}

            {paginatedBlogPosts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-100">
                <p className="text-lg font-bold text-[#0e1d4f] mb-2">No matching posts found</p>
                <p className="text-sm text-slate-600 mb-6">
                  Try clearing your current filter or browsing all articles.
                </p>
                <button
                  type="button"
                  onClick={clearBlogFilters}
                  className="px-5 py-2.5 rounded-lg bg-[#ff9642] text-[#0e1d4f] text-sm font-semibold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {paginatedBlogPosts.map((post) => renderBlogCard(post))}
              </div>
            )}

            {/* Pagination: « 1 2 » */}
            {totalBlogPages > 1 && (
              <nav
                className="mt-14 flex items-center justify-center gap-2"
                aria-label="Blog pagination"
              >
                <button
                  type="button"
                  disabled={safeBlogPage === 1}
                  onClick={() => {
                    setBlogPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sm font-semibold text-[#0e1d4f] hover:border-[#ff9642] hover:text-[#e06a12] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Previous page"
                >
                  «
                </button>

                {Array.from({ length: totalBlogPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  const active = pageNum === safeBlogPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => {
                        setBlogPage(pageNum);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      aria-current={active ? 'page' : undefined}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold tabular-nums transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#ff9642] text-[#0e1d4f] shadow-sm'
                          : 'bg-white border border-slate-200 text-[#0e1d4f] hover:border-[#ff9642] hover:text-[#e06a12]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  disabled={safeBlogPage === totalBlogPages}
                  onClick={() => {
                    setBlogPage((p) => Math.min(totalBlogPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sm font-semibold text-[#0e1d4f] hover:border-[#ff9642] hover:text-[#e06a12] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Next page"
                >
                  »
                </button>
              </nav>
            )}
          </div>
        </section>
      </>
    );
  };

  // ============================================================================
  // RENDER SINGLE POST VIEW
  // ============================================================================

  const renderSinglePostView = () => (
    <>
      <section className="bg-gradient-to-r from-[#d9610b] via-[#ef7b22] to-[#ff9642] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigateTo('#blog')}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/95 hover:text-white mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>
          <h1 className="text-2xl sm:text-4xl font-bold text-white max-w-4xl leading-snug">
            {activePost.title}
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Main Article + Comments */}
            <div className="lg:col-span-8 space-y-10">
              <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                {/* Header Image Placeholder */}
                <div
                  className={`w-full aspect-[16/9] bg-gradient-to-br ${activePost.gradient} flex flex-col items-center justify-center relative p-8`}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.65) 1.5px, transparent 1.5px)',
                      backgroundSize: '26px 26px',
                    }}
                  />
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-white">{activePost.initials}</span>
                  </div>
                  <span className="relative z-10 text-sm font-medium text-white/90">
                    {activePost.category} Editorial
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-10">
                  {/* Date / Author / Category Meta Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-1.5 italic">
                      <Calendar className="w-3.5 h-3.5 text-[#ff9642]" />
                      {activePost.dateDisplay}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>by {activePost.author}</span>
                    <span aria-hidden="true">·</span>
                    <button
                      type="button"
                      onClick={() => {
                        clearBlogFilters();
                        setBlogCategoryFilter(activePost.category);
                        navigateTo('#blog');
                      }}
                      className="font-medium text-[#e06a12] hover:underline cursor-pointer"
                    >
                      {activePost.category}
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1d4f] leading-snug mb-6">
                    {activePost.title}
                  </h2>

                  <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                    {activePost.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {/* Quote Block with Orange Left Border */}
                  <blockquote className="my-8 border-l-4 border-[#ff9642] bg-[#f8f9fc] px-6 py-5 rounded-r-xl">
                    <p className="text-base sm:text-lg italic font-medium text-[#0e1d4f] leading-relaxed">
                      "{activePost.quote}"
                    </p>
                  </blockquote>

                  {/* Tags & Share Icons */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-semibold text-[#0e1d4f] mr-1">Tags:</span>
                      {activePost.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          <button
                            type="button"
                            onClick={() => {
                              clearBlogFilters();
                              setBlogTagFilter(tag);
                              navigateTo('#blog');
                            }}
                            className="text-slate-600 hover:text-[#e06a12] font-medium cursor-pointer"
                          >
                            {tag}
                          </button>
                          {i < activePost.tags.length - 1 && (
                            <span className="text-slate-300" aria-hidden="true">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#0e1d4f] mr-1 inline-flex items-center gap-1">
                        <Share2 className="w-3.5 h-3.5 text-[#ff9642]" />
                        Share:
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyShareLink}
                        className="w-8 h-8 rounded-lg bg-[#f8f9fc] hover:bg-[#ff9642] text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyShareLink}
                        className="w-8 h-8 rounded-lg bg-[#f8f9fc] hover:bg-[#ff9642] text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyShareLink}
                        className="w-8 h-8 rounded-lg bg-[#f8f9fc] hover:bg-[#ff9642] text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyShareLink}
                        className="w-8 h-8 rounded-lg bg-[#f8f9fc] hover:bg-[#ff9642] text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Copy article link"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Comments Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-2xl font-bold text-[#0e1d4f] mb-8 tabular-nums">
                  {currentCommentCount} {currentCommentCount === 1 ? 'Comment' : 'Comments'}
                </h3>

                <div className="space-y-8">
                  {currentComments.map((comment) => (
                    <div key={comment.id} className="space-y-6">
                      {/* Top-Level Comment */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${comment.avatarGradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}
                        >
                          {comment.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h4 className="text-base font-bold text-[#0e1d4f]">{comment.author}</h4>
                            <span className="text-xs text-slate-500">{comment.date}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed mb-2.5">{comment.text}</p>
                          <button
                            type="button"
                            onClick={() =>
                              setReplyingToId((curr) => (curr === comment.id ? null : comment.id))
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e06a12] hover:text-[#0e1d4f] cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{replyingToId === comment.id ? 'Cancel Reply' : 'Reply'}</span>
                          </button>

                          {/* Inline Reply Form */}
                          {replyingToId === comment.id && (
                            <form
                              onSubmit={(e) => handleAddReply(comment.id, e)}
                              className="mt-4 p-4 rounded-xl bg-[#f8f9fc] border border-slate-200 space-y-3"
                            >
                              <input
                                type="text"
                                required
                                value={replyAuthor}
                                onChange={(e) => setReplyAuthor(e.target.value)}
                                placeholder="Your Name"
                                className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                              />
                              <textarea
                                required
                                rows={2}
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder={`Write a reply to ${comment.author}...`}
                                className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                              />
                              <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-xs font-semibold cursor-pointer"
                              >
                                Post Reply
                              </button>
                            </form>
                          )}
                        </div>
                      </div>

                      {/* Nested & Indented Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-8 sm:ml-14 pl-5 border-l border-slate-200 space-y-6">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-4">
                              <div
                                className={`w-10 h-10 rounded-full bg-gradient-to-br ${reply.avatarGradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                              >
                                {reply.initials}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                  <h4 className="text-sm font-bold text-[#0e1d4f]">{reply.author}</h4>
                                  <span className="text-xs text-slate-500">{reply.date}</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed mb-2">{reply.text}</p>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setReplyingToId((curr) => (curr === comment.id ? null : comment.id))
                                  }
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e06a12] hover:text-[#0e1d4f] cursor-pointer"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>Reply</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Leave a Comment Form */}
                <form onSubmit={handleAddTopComment} className="mt-10 pt-8 border-t border-slate-100 space-y-4">
                  <h4 className="text-lg font-bold text-[#0e1d4f]">Leave a Comment</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={newCommentAuthor}
                      onChange={(e) => setNewCommentAuthor(e.target.value)}
                      placeholder="Your Name *"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                    />
                    <input
                      type="email"
                      value={newCommentEmail}
                      onChange={(e) => setNewCommentEmail(e.target.value)}
                      placeholder="Email Address (optional)"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                    />
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Share your thoughts on this article..."
                    className="w-full px-4 py-3 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post Comment</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="lg:col-span-4 space-y-7">
              {/* Search Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-lg font-bold text-[#0e1d4f] mb-4">Search</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBlogCategoryFilter(null);
                    setBlogTagFilter(null);
                    setBlogArchiveFilter(null);
                    setBlogPage(1);
                    navigateTo('#blog');
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={blogSearchQuery}
                    onChange={(e) => setBlogSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-4 pr-11 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  />
                  <button
                    type="submit"
                    aria-label="Search blog posts"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-[#ff9642] text-[#0e1d4f] flex items-center justify-center cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Latest Posts */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-lg font-bold text-[#0e1d4f] mb-5">Latest Posts</h3>
                <div className="space-y-4">
                  {BLOG_POSTS.slice(0, 4).map((post) => (
                    <button
                      key={post.id}
                      type="button"
                      onClick={() => openPost(post.id)}
                      className="w-full flex items-center gap-3.5 text-left group cursor-pointer"
                    >
                      <div
                        className={`w-16 h-14 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center shrink-0`}
                      >
                        <span className="text-xs font-bold text-white">{post.initials}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs italic text-slate-500 mb-0.5">{post.dateDisplay}</p>
                        <p className="text-sm font-semibold text-[#0e1d4f] group-hover:text-[#e06a12] transition-colors line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-lg font-bold text-[#0e1d4f] mb-4">Archives</h3>
                <ul className="space-y-2.5">
                  {SIDEBAR_ARCHIVES.map((arch) => (
                    <li key={arch.label}>
                      <button
                        type="button"
                        onClick={() => {
                          clearBlogFilters();
                          setBlogArchiveFilter(arch.label);
                          navigateTo('#blog');
                        }}
                        className="w-full flex items-center justify-between text-sm text-slate-600 hover:text-[#e06a12] transition-colors py-1 cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#ff9642]" />
                          {arch.label}
                        </span>
                        <span className="text-xs text-slate-400 tabular-nums">({arch.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-lg font-bold text-[#0e1d4f] mb-4">Categories</h3>
                <ul className="divide-y divide-slate-100">
                  {SIDEBAR_CATEGORIES.map((category) => {
                    const count = BLOG_POSTS.filter((p) => p.category === category).length;
                    return (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => {
                            clearBlogFilters();
                            setBlogCategoryFilter(category);
                            navigateTo('#blog');
                          }}
                          className="w-full flex items-center justify-between py-2.5 text-sm text-slate-600 hover:text-[#e06a12] transition-colors cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-[#ff9642]" />
                            {category}
                          </span>
                          <span className="text-xs text-slate-400 tabular-nums">({count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tags Cloud */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_12px_35px_-18px_rgba(14,29,79,0.14)]">
                <h3 className="text-lg font-bold text-[#0e1d4f] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {SIDEBAR_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        clearBlogFilters();
                        setBlogTagFilter(tag);
                        navigateTo('#blog');
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#f8f9fc] hover:bg-[#ff9642] text-xs font-medium text-[#0e1d4f] border border-slate-200/70 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );

  // ============================================================================
  // RENDER FOOTER
  // ============================================================================

  const renderFooter = () => (
    <footer className="bg-[#0e1d4f] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 border-2 border-[#ff9642] rounded-lg flex items-center justify-center font-bold text-white text-base">
              {PROFILE.brandMark}
            </span>
            <span className="text-base font-semibold tracking-tight">{PROFILE.name}</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80" aria-label="Footer">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#home');
              }}
              className="hover:text-[#ff9642] transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#services');
              }}
              className="hover:text-[#ff9642] transition-colors"
            >
              Services
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                clearBlogFilters();
                navigateTo('#blog');
              }}
              className="hover:text-[#ff9642] transition-colors"
            >
              Blog
            </a>
            <a
              href="#testimonial"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#testimonial');
              }}
              className="hover:text-[#ff9642] transition-colors"
            >
              Testimonial
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => openContactModal('Social Inquiry')}
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ff9642] hover:text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openContactModal('Social Inquiry')}
              aria-label="Twitter"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ff9642] hover:text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openContactModal('Social Inquiry')}
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ff9642] hover:text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openContactModal('Social Inquiry')}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ff9642] hover:text-[#0e1d4f] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-white/75">
          © 2026 Mary Hardy · Digital Marketing Expert
        </div>
      </div>
    </footer>
  );

  // ============================================================================
  // MAIN SHELL
  // ============================================================================

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#334155]">
      {renderHeader()}

      <main className="flex-1">
        {view === 'home' && renderHomeView()}
        {view === 'services' && renderServicesView()}
        {view === 'blog' && renderBlogView()}
        {view === 'single-post' && renderSinglePostView()}
      </main>

      {renderFooter()}

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#0e1d4f]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-br ${selectedProject.gradient} p-6 flex items-center justify-between text-white`}
            >
              <div>
                <p className="text-xs text-white/85 mb-1">
                  {selectedProject.category} · {selectedProject.client} · {selectedProject.year}
                </p>
                <h3 id="project-modal-title" className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
                aria-label="Close project preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="p-4 rounded-xl bg-[#f8f9fc] border border-slate-100">
                <p className="text-xs text-slate-500 mb-0.5">Measured Outcome</p>
                <p className="text-base font-bold text-[#e06a12] tabular-nums">{selectedProject.metric}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{selectedProject.summary}</p>

              <div>
                <p className="text-xs font-semibold text-[#0e1d4f] mb-2">Key Deliverables</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0e1d4f] bg-[#f8f9fc] px-3 py-1.5 rounded-lg border border-slate-200/70"
                    >
                      <Check className="w-3.5 h-3.5 text-[#ff9642]" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const topic = selectedProject.category;
                    setSelectedProject(null);
                    openContactModal(topic);
                  }}
                  className="px-5 py-2 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold cursor-pointer"
                >
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact / Hire Me Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0e1d4f]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setContactOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold text-[#e06a12] mb-1">Work With Mary Hardy</p>
                <h3 id="contact-modal-title" className="text-2xl font-bold text-[#0e1d4f]">
                  Start a Conversation
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="w-9 h-9 rounded-lg bg-[#f8f9fc] hover:bg-slate-100 flex items-center justify-center text-[#0e1d4f] cursor-pointer"
                aria-label="Close contact dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {contactSubmitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#ff9642]/20 text-[#e06a12] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-[#0e1d4f]">Thank You, {contactName}!</h4>
                <p className="text-sm text-slate-600">
                  Your message regarding <span className="font-semibold text-[#0e1d4f]">{contactSubject}</span> has
                  been received. Mary responds within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-lg bg-[#ff9642] text-[#0e1d4f] text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactError && (
                  <p className="text-xs font-medium text-red-600 bg-red-50 px-3.5 py-2.5 rounded-lg border border-red-200">
                    {contactError}
                  </p>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#0e1d4f] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0e1d4f] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0e1d4f] mb-1">Service Focus</label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  >
                    <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0e1d4f] mb-1">Project Brief</label>
                  <textarea
                    required
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell me about your goals, timeline, and current channels..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f9fc] border border-slate-200 text-sm text-[#0e1d4f] focus:outline-none focus:border-[#ff9642]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#ff9642] hover:bg-[#ec822d] text-[#0e1d4f] text-sm font-semibold shadow-sm transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Subtle Toast Confirmation */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 bg-[#0e1d4f] text-white px-4 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2.5"
        >
          <Check className="w-4 h-4 text-[#ff9642] shrink-0" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
