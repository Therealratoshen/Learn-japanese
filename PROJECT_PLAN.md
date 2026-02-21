# NihonGo! - Bilingual Japanese Learning Platform

## Project Overview

A bilingual (Indonesian + English) online Japanese language learning platform, led by a teacher with 5+ years of living and working experience in Japan. The platform combines **self-paced AI-powered learning** with **live teacher video sessions**, creating a hybrid model that competitors don't offer at this price point.

**Target audience:**
- **Indonesian learners** — workers pursuing Tokutei Ginou (specified skilled worker) visa, students aiming for MEXT scholarships, professionals in Japanese companies
- **English-speaking learners** — anime/culture enthusiasts, career changers relocating to Japan, JET Programme and exchange program aspirants

---

## 1. Competitor Analysis

### Global Competitors

| Platform | Pricing | Strengths | Weaknesses |
|---|---|---|---|
| **Duolingo** | Free / $5-13/mo (Super) | Gamified, massive user base, free tier | Only reaches JLPT N5-N4, no live teacher, no cultural context, unnatural sentences |
| **JapanesePod101** | $4-23/mo | Audio-focused, JLPT-aligned, large library | No live interaction, outdated UI, overwhelming content |
| **WaniKani** | $9/mo or $299 lifetime | Excellent kanji/vocab SRS system | Kanji only - no grammar, no speaking, no teacher |
| **Bunpro** | $5/mo or $150 lifetime | Best grammar SRS, JLPT-organized | Grammar only, no speaking practice, no teacher |
| **iTalki** | $10-30/hour per tutor | Real native tutors, flexible scheduling | No structured curriculum, expensive long-term, quality varies |
| **Preply** | $15-40/hour per tutor | Professional tutors, structured plans | Very expensive, no self-study material included |
| **LingoDeer** | $12/mo or $100/year | Good Asian language focus, structured | Limited content depth, no live component |

### Indonesia-Specific Competitors

| Platform | Pricing | Strengths | Weaknesses |
|---|---|---|---|
| **Cakap** | Rp 100-300k/session | Indonesian UI, multiple languages, live tutors | Expensive per session, generic curriculum, not Japan-specialist |
| **Squline** | Rp 150-400k/session | Live 1-on-1, professional tutors | Very expensive, no self-study platform |
| **LPK/BLK Centers** | Rp 5-15M/program | Visa pathway, job placement, intensive | Offline only, rigid schedule, factory-worker focused |
| **Welearn.id** | Rp 50-200k/session | Affordable, Indonesian teachers | No structured curriculum, inconsistent quality |
| **Various Instagram/YouTube teachers** | Free-Rp 500k | Relatable content, accessible | No structure, no tracking, no certification |

### Gap in the Market

**No platform currently offers all of these together:**
1. Structured JLPT-aligned curriculum (N5 to N2)
2. AI-powered self-paced practice (conversation, grammar, kanji)
3. Live video sessions with a teacher who actually lives/works in Japan
4. Bilingual support (full platform in Bahasa Indonesia AND English)
5. Real Japanese workplace/life culture context
6. Locally-priced for Indonesian market (Rp 99k-499k/month) AND competitively priced for international market ($6.99-$29.99/month)

---

## 2. Key Differentiators

### Why This Platform Wins

1. **"From Japan, For the World"** - Teacher is actively working in Japan, providing real-world context that textbook teachers cannot. Actual workplace situations, daily life, cultural nuances — not theoretical knowledge.

2. **AI + Human Hybrid** - Self-paced LLM-powered practice 24/7 (conversation bot, grammar checker, kanji quiz) combined with scheduled live sessions for correction and motivation. No competitor offers both affordably.

3. **Bilingual Platform (Indonesian + English)** - Full UI and lesson content in both Bahasa Indonesia and English. Indonesian learners get native-language explanations with grammar comparisons (Japanese-Indonesian SOV similarities). English-speaking learners get a structured curriculum rivaling premium platforms at a fraction of the cost.

4. **Career Pathway Focus** - Not just language learning but preparation for:
   - Tokutei Ginou (Specified Skilled Worker) visa
   - MEXT scholarship applications
   - Japanese company interviews
   - JET Programme and exchange programs
   - Daily life in Japan

5. **Community-Driven** - WhatsApp/Discord groups with fellow learners and alumni who are already in Japan. Separate communities for Indonesian and English speakers.

6. **Locally Priced, Globally Accessible** - IDR pricing for Indonesian market (Rp 99k-499k/month), USD pricing for international market ($6.99-$29.99/month). Both significantly cheaper than alternatives like iTalki or Preply.

---

## 3. Platform Features (MVP → V2 → V3)

### MVP (Month 1-3) - Launch & Validate

```
Landing Page
├── Hero section (teacher intro + video)
├── Course levels (N5 → N2)
├── Pricing plans
├── Testimonials / social proof
├── FAQ
└── CTA → Register

Auth System
├── Email/password registration
├── Google OAuth
└── Phone number (Indonesian)

User Dashboard
├── Current level progress
├── Lesson modules (text + audio + quiz)
├── AI Chat Practice (LLM-powered conversation bot)
├── Schedule live session with teacher
├── Progress tracking / streaks
└── Profile settings

Admin Dashboard (Teacher)
├── Student list + progress overview
├── Schedule management
├── Content management (lessons, quizzes)
├── Revenue / subscription tracking
└── Broadcast announcements

Billing
├── Subscription plans (monthly/quarterly/yearly)
├── Payment gateway (Midtrans for Indonesian payments)
├── Invoice generation
└── Free trial (7 days)

Video Call
├── Scheduled sessions (Google Meet / Zoom integration)
├── Booking calendar
└── Session reminders (WhatsApp / email)
```

### V2 (Month 4-6) - Growth

- AI-powered speaking practice (speech-to-text + pronunciation scoring)
- Kanji writing practice (canvas-based)
- JLPT mock tests (timed, scored)
- Leaderboard & gamification (XP, badges, streaks)
- Referral system
- Mobile responsive PWA

### V3 (Month 7-12) - Scale

- Native mobile app (React Native)
- Group class sessions
- Certification system
- Corporate training packages (B2B)
- Content marketplace (other teachers can contribute)
- Advanced analytics

---

## 4. Tech Stack

### Frontend
| Component | Technology | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SEO for landing page, SSR, React ecosystem, great DX |
| Styling | **Tailwind CSS + shadcn/ui** | Fast development, consistent design, accessible components |
| Internationalization | **next-intl** | Best i18n for App Router — native Server Component support, ~2KB bundle, locale-based routing (`/id/...`, `/en/...`) |
| State | **Zustand** | Lightweight, simple, no boilerplate |
| Forms | **React Hook Form + Zod** | Type-safe validation |
| Rich Content | **MDX + Database** | MDX for static lesson templates; database-backed `lesson_translations` table for locale-specific content (Indonesian & English) |

### Backend
| Component | Technology | Why |
|---|---|---|
| Runtime | **Next.js API Routes + Server Actions** | Unified codebase, simpler deployment |
| Database | **PostgreSQL (Supabase)** | Free tier, built-in auth, realtime, storage |
| ORM | **Prisma** | Type-safe queries, great migrations |
| Auth | **Supabase Auth** | Social login, phone auth, row-level security |
| File Storage | **Supabase Storage** | Audio files, images, lesson materials |

### AI / LLM
| Component | Technology | Why |
|---|---|---|
| Conversation Bot | **Claude API (Haiku for chat, Sonnet for complex)** | Best multilingual capability, excellent Japanese + Indonesian + English, cost-effective |
| Grammar Checking | **Claude API** | Can explain grammar in both Indonesian and English context |
| Quiz Generation | **Claude API** | Dynamic quiz generation based on student level and preferred language |
| Speech-to-Text | **Web Speech API / Whisper** | Pronunciation practice (V2) |

### Payments (Dual Gateway)

The platform uses a **Payment Abstraction Layer** (Strategy Pattern) so both gateways share a common interface. Gateway selection is automatic based on user locale/region.

| Component | Technology | Market | Why |
|---|---|---|---|
| Indonesian Gateway | **Midtrans** | Indonesia (IDR) | #1 in Indonesia — bank transfer, e-wallets (GoPay, OVO, DANA), credit cards |
| International Gateway | **Stripe** | Global (USD, etc.) | Industry standard — cards, Apple Pay, Google Pay, 135+ currencies |
| Subscription | **Custom logic + gateway recurring** | Both | Indonesian payment methods don't all support auto-recurring; Stripe handles recurring natively |

**Payment API Structure:**
```
POST /api/payments/checkout        → Initiates payment, auto-selects gateway by locale
POST /api/webhooks/stripe          → Stripe webhook events
POST /api/webhooks/midtrans        → Midtrans webhook events
GET  /api/payments/[id]/status     → Transaction status check
POST /api/payments/[id]/refund     → Process refund
```

### Video Calling
| Component | Technology | Why |
|---|---|---|
| MVP | **Google Meet / Zoom links** | Zero development cost, teacher already uses it |
| V2 | **Daily.co or 100ms** | Embedded video in platform, recording, whiteboard |

### Infrastructure
| Component | Technology | Why |
|---|---|---|
| Hosting | **Vercel** | Free tier for Next.js, auto-scaling, great DX |
| Database | **Supabase (free → pro)** | Managed Postgres, starts free |
| CDN | **Vercel Edge / Cloudflare** | Global CDN included |
| Email | **Resend** | Transactional emails, free tier |
| WhatsApp | **Fonnte / Woowa API** | Indonesian WhatsApp API providers, cheap (for ID market) |
| Analytics | **Plausible or Umami** | Privacy-friendly, self-hostable |
| Monitoring | **Sentry (free tier)** | Error tracking |

---

## 5. Database Schema (Core)

The schema uses a **translation pattern** for bilingual content: base entities store language-agnostic data, while `_translations` tables store locale-specific content (Indonesian `id` and English `en`).

```
users
├── id, email, name, phone, avatar_url
├── role (student | teacher | admin)
├── preferred_locale (id | en)          ← NEW: user's language preference
├── current_level (N5 | N4 | N3 | N2)
├── subscription_status
├── streak_count, total_xp
└── created_at, updated_at

subscriptions
├── id, user_id, plan_id
├── status (active | cancelled | expired | trial)
├── started_at, expires_at
├── gateway (midtrans | stripe)         ← NEW: which payment gateway
├── gateway_transaction_id              ← RENAMED: was midtrans_transaction_id
├── currency (IDR | USD)                ← NEW: payment currency
└── payment_method

plans
├── id, name
├── price_idr, price_usd               ← UPDATED: dual currency pricing
├── duration_months
├── features (jsonb)
└── is_active

lessons (base entity — language-agnostic)
├── id, level (N5-N2), module_number
├── order_index
├── is_published
└── created_at, updated_at

lesson_translations                     ← NEW: locale-specific lesson content
├── id, lesson_id (FK → lessons)
├── locale (id | en)
├── title
├── content_mdx
├── audio_url
└── UNIQUE(lesson_id, locale)

quizzes (base entity)
├── id, lesson_id
├── passing_score
└── type (grammar | vocab | kanji | listening)

quiz_translations                       ← NEW: locale-specific quiz content
├── id, quiz_id (FK → quizzes)
├── locale (id | en)
├── questions (jsonb)                   ← instructions & explanations in locale
└── UNIQUE(quiz_id, locale)

user_progress
├── id, user_id, lesson_id
├── status (not_started | in_progress | completed)
├── quiz_score, attempts
├── completed_at
└── time_spent_seconds

ai_conversations
├── id, user_id
├── locale (id | en)                    ← NEW: conversation language
├── messages (jsonb)
├── topic, level
├── feedback_score
└── created_at

payments                                ← NEW: unified payment tracking
├── id, user_id
├── amount, currency (IDR | USD)
├── gateway (midtrans | stripe)
├── gateway_transaction_id
├── status (pending | completed | failed | refunded)
├── webhook_received (boolean)
├── metadata (jsonb)                    ← gateway-specific data
└── created_at

sessions (live video)
├── id, teacher_id, student_id
├── scheduled_at, duration_minutes
├── meeting_url
├── status (scheduled | completed | cancelled)
├── notes
└── recording_url
```

---

## 6. Cost Breakdown

### Monthly Costs - MVP Phase (0-100 users)

| Service | Cost/Month | Notes |
|---|---|---|
| **Vercel** (Hosting) | $0 | Free tier (100GB bandwidth) |
| **Supabase** (DB + Auth + Storage) | $0 | Free tier (500MB DB, 1GB storage, 50k auth users) |
| **Claude API** (AI Chat) | $10-30 | Haiku ~$0.25/1M input tokens; estimate 100 users × 30 conversations = ~$20 |
| **Midtrans** (ID Payments) | 2.9% per txn | No monthly fee, pay per transaction |
| **Stripe** (Intl Payments) | 2.9% + $0.30 per txn | No monthly fee, pay per transaction |
| **Domain** (.com) | $1-10 | .com for international reach |
| **Resend** (Email) | $0 | Free tier (100 emails/day) |
| **WhatsApp API** (Fonnte) | Rp 50k (~$3) | Basic plan, Indonesian market only |
| **Zoom/Google Meet** | $0-14 | Free tier or basic plan |
| **Total MVP** | **~$15-60/month** | + transaction fees |

### Monthly Costs - Growth Phase (100-1000 users)

| Service | Cost/Month | Notes |
|---|---|---|
| **Vercel** | $20 | Pro plan |
| **Supabase** | $25 | Pro plan (8GB DB, 100GB storage) |
| **Claude API** | $50-150 | Higher usage, cache common patterns |
| **Midtrans** (ID) | ~$20-30 | Transaction fees on IDR revenue |
| **Stripe** (Intl) | ~$20-40 | Transaction fees on USD revenue |
| **Resend** | $20 | Pro plan |
| **Daily.co** (Video) | $0-99 | If embedding video |
| **Sentry** | $0 | Free tier |
| **Total Growth** | **~$160-390/month** | |

### Monthly Costs - Scale Phase (1000+ users)

| Service | Cost/Month | Notes |
|---|---|---|
| **Infrastructure** | $200-500 | All services scaled up |
| **Claude API** | $300-800 | Optimize with caching, Haiku for simple queries |
| **Payment fees** | $100-300 | Combined Midtrans + Stripe transaction fees |
| **Total Scale** | **~$600-1,600/month** | |

### One-Time / Setup Costs

| Item | Cost | Notes |
|---|---|---|
| **Domain registration** | $10-15 | .com for international reach |
| **Logo & branding** | $50-200 | Fiverr/local designer or AI-generated |
| **SSL** | $0 | Free with Vercel/Cloudflare |
| **Initial content creation** | $0 | Teacher creates content (both ID & EN) |
| **Total Setup** | **~$60-215** | |

---

## 7. Pricing Strategy (for Students)

Dual-currency pricing: IDR for Indonesian users (via Midtrans), USD for international users (via Stripe). Priced relative to local purchasing power.

| Plan | IDR Price (Indonesia) | USD Price (International) | Features |
|---|---|---|---|
| **Free** | Rp 0 | $0 | 3 lessons, limited AI chat (5/day), no live sessions |
| **Basic** | Rp 99,000/month | $6.99/month | All lessons, unlimited AI chat, 1 group session/month |
| **Premium** | Rp 199,000/month | $12.99/month | Everything in Basic + 2 private sessions/month, JLPT mocks |
| **Intensive** | Rp 499,000/month | $29.99/month | Everything in Premium + 4 private sessions/month, priority support, career guidance |
| **Yearly discount** | 30% off | 30% off | Any plan paid annually |

> **Pricing rationale:** Indonesian prices target UMR Jakarta (~Rp 5M/month) affordability. International USD prices are competitive with Duolingo Super ($13/month) and below iTalki hourly rates, while including AI + live sessions.

**Revenue projection (conservative, dual market):**

| Timeline | Indonesian Paid Users | International Paid Users | Avg Revenue/User | Total Monthly Revenue |
|---|---|---|---|---|
| Month 3 | 40 | 10 | ~$9.50 | ~$475 |
| Month 6 | 150 | 50 | ~$10 | ~$2,000 |
| Month 12 | 350 | 150 | ~$11 | ~$5,500 |
| Month 18 | 600 | 400 | ~$12 | ~$12,000 |

---

## 8. Project Structure

Uses **locale-based routing** via `next-intl`. All user-facing pages live under `[locale]/` (e.g., `/id/lessons`, `/en/lessons`). API routes have no locale prefix.

```
Learn-japanese/
├── src/
│   ├── app/
│   │   ├── [locale]/                # Locale prefix (id, en)
│   │   │   ├── (landing)/           # Public landing page
│   │   │   │   ├── page.tsx         # Hero, features, pricing
│   │   │   │   ├── about/           # Teacher profile
│   │   │   │   └── contact/
│   │   │   ├── (auth)/              # Auth pages
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── forgot-password/
│   │   │   ├── (dashboard)/         # Protected student area
│   │   │   │   ├── dashboard/       # Overview, progress
│   │   │   │   ├── lessons/         # Lesson list + viewer
│   │   │   │   ├── practice/        # AI chat practice
│   │   │   │   ├── quizzes/         # Quiz taking
│   │   │   │   ├── sessions/        # Book live sessions
│   │   │   │   ├── progress/        # Detailed progress
│   │   │   │   └── settings/        # Profile, subscription
│   │   │   ├── (admin)/             # Teacher admin panel
│   │   │   │   ├── students/
│   │   │   │   ├── content/         # Manage lessons in both languages
│   │   │   │   ├── schedule/
│   │   │   │   └── analytics/
│   │   │   └── layout.tsx           # Locale-aware root layout
│   │   └── api/                     # API routes (no locale prefix)
│   │       ├── auth/
│   │       ├── lessons/
│   │       ├── ai/
│   │       ├── payments/
│   │       │   └── checkout/        # Auto-selects gateway by locale
│   │       ├── webhooks/
│   │       │   ├── stripe/          # Stripe webhook endpoint
│   │       │   └── midtrans/        # Midtrans webhook endpoint
│   │       └── sessions/
│   ├── i18n/                        # Internationalization config
│   │   ├── routing.ts               # next-intl routing (locales: ['id', 'en'])
│   │   ├── request.ts               # Server-side locale resolution
│   │   └── messages/
│   │       ├── id.json              # Indonesian UI translations
│   │       └── en.json              # English UI translations
│   ├── components/
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── landing/                 # Landing page components
│   │   ├── dashboard/               # Dashboard components
│   │   ├── lessons/                 # Lesson viewer, audio player
│   │   ├── practice/                # AI chat interface
│   │   ├── admin/                   # Admin components
│   │   └── locale-switcher.tsx      # Language toggle (ID ↔ EN)
│   ├── lib/
│   │   ├── supabase/                # Supabase client + helpers
│   │   ├── ai/                      # Claude API integration
│   │   ├── payments/
│   │   │   ├── gateway.ts           # Payment abstraction interface
│   │   │   ├── stripe.ts            # Stripe implementation
│   │   │   └── midtrans.ts          # Midtrans implementation
│   │   └── utils/
│   ├── content/
│   │   └── lessons/                 # MDX lesson templates
│   │       ├── n5-01/
│   │       │   ├── id.mdx           # Indonesian explanation
│   │       │   └── en.mdx           # English explanation
│   │       └── ...
│   └── types/                       # TypeScript types
├── prisma/
│   └── schema.prisma                # Database schema (with translation tables)
├── public/
│   ├── audio/                       # Lesson audio files
│   └── images/
├── middleware.ts                     # next-intl middleware (locale detection & routing)
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## 9. Development Phases & Milestones

### Phase 1: Foundation (Weeks 1-4)
- [x] Project setup (Next.js, Tailwind, Supabase, Prisma)
- [ ] Landing page (responsive, SEO-optimized)
- [ ] Auth system (email, Google, phone)
- [ ] Database schema + migrations
- [ ] Basic user dashboard shell

### Phase 2: Core Learning (Weeks 5-8)
- [ ] Lesson content system (MDX-based)
- [ ] 10 N5 lessons created by teacher
- [ ] Quiz system (multiple choice, fill-in-blank)
- [ ] Progress tracking
- [ ] AI conversation practice (Claude API)

### Phase 3: Monetization (Weeks 9-10)
- [ ] Midtrans payment integration
- [ ] Subscription management
- [ ] Free trial flow
- [ ] Invoice generation
- [ ] Payment history

### Phase 4: Live Sessions (Weeks 11-12)
- [ ] Session booking calendar
- [ ] Google Meet/Zoom link generation
- [ ] Email + WhatsApp reminders
- [ ] Session history + notes

### Phase 5: Launch (Week 13)
- [ ] Beta testing with 10-20 users
- [ ] Bug fixes
- [ ] Content review
- [ ] Social media presence setup
- [ ] Soft launch on Instagram/TikTok

---

## 10. Marketing Plan

### 10.1 Target Market Segments

| # | Segment | Age | Motivation | Geography | Platform Language |
|---|---------|-----|------------|-----------|-------------------|
| 1 | **Indonesian workers** | 20-35, working class | Tokutei Ginou visa (specified skilled worker), factory/care work in Japan | Indonesia — Java, Sulawesi, Kalimantan, NTB | Bahasa Indonesia |
| 2 | **Indonesian students** | 18-25, university | MEXT scholarship, study abroad, academic exchange | Indonesia — Jakarta, Bandung, Yogyakarta, Surabaya | Bahasa Indonesia |
| 3 | **Indonesian professionals** | 25-40, office workers | Japanese company careers, internal transfers, business Japanese | Indonesia — major cities | Bahasa Indonesia |
| 4 | **Anime/culture fans (Global)** | 16-30, hobbyists | Anime, manga, games, Japan travel, casual interest | Southeast Asia, US, Europe, Latin America | English |
| 5 | **Career changers (Global)** | 25-40, professionals | Japan relocation, remote work for JP companies, tech jobs | US, UK, Australia, India, Philippines | English |
| 6 | **JET/exchange aspirants** | 20-30, graduates | JET Programme, university exchange, ALT positions | US, UK, Canada, Australia, NZ | English |

**Primary market (Year 1):** Segments 1-3 (Indonesian). Largest demand, lowest acquisition cost, teacher's direct network.
**Secondary market (Year 1-2):** Segments 4-6 (English). Higher willingness to pay, larger total addressable market, longer sales cycle.

### 10.2 Competitive Positioning

```
                        High Price
                            │
                   iTalki ● │ ● Preply
                            │
          Cakap ●           │
                            │
Low Structure ──────────────┼────────────────── High Structure
                            │
             Duolingo ●     │    ● NihonGo! ← WE ARE HERE
                            │    (AI + Live + Structured + Affordable)
          YouTube ●         │ ● JapanesePod101
                            │
                        Low Price
```

**NihonGo!'s unique position:** High structure + low price + live teacher + AI. No competitor occupies this quadrant.

### 10.3 Marketing Channels & Tactics

#### Indonesian Market (Bahasa Indonesia)

| Channel | Tactic | Cost | Expected Impact |
|---------|--------|------|-----------------|
| **Instagram Reels** | Teacher posts daily Japanese tips from Japan — "Kata hari ini", workplace situations, culture shocks | Free (organic) | High — relatable, shareable, viral potential |
| **TikTok** | Same as Instagram + trending audio formats, "POV working in Japan" series | Free (organic) | High — younger demographic, algorithm-driven reach |
| **WhatsApp Communities** | Pre-launch groups — free daily mini-lessons, JLPT tips, Q&A with teacher | Free | Medium — builds trust, high engagement, direct conversion channel |
| **Facebook Groups** | Post in Indonesian expat groups, JLPT study groups, TKI communities | Free | Medium — older demographic, strong community trust |
| **SEO (Bahasa)** | Blog: "Cara belajar bahasa Jepang", "Tips lulus JLPT N5", "Pengalaman kerja di Jepang" | Free | Long-term — captures search intent, compounds over time |
| **KOL Partnerships** | Collaborate with Indonesian YouTubers/TikTokers living in Japan (2-3 micro-influencers) | Rp 500k-3M per collab (~$30-190) | High — borrowed trust, targeted audience |
| **LPK/BLK Referrals** | Partner with vocational training centers that send workers to Japan | Revenue share or free access | Medium — direct access to Segment 1 |
| **Instagram/TikTok Ads** | Targeted ads: ages 18-35, interests: Japan/Japanese language/JLPT | Rp 1-3M/month (~$60-190) | Measurable — direct to free trial signup |
| **Google Ads (ID)** | Keywords: "belajar bahasa jepang online", "kursus JLPT", "tokutei ginou" | Rp 500k-1M/month (~$30-60) | Targeted — captures high-intent searchers |

#### English/Global Market

| Channel | Tactic | Cost | Expected Impact |
|---------|--------|------|-----------------|
| **YouTube** | Structured "Learn Japanese" series — grammar explanations, JLPT prep, daily life in Japan | Free (organic) | High — long shelf life, SEO, monetizable |
| **Reddit** | Participate in r/LearnJapanese, r/japanlife, r/movingtojapan — provide value, soft promote | Free | Medium — community trust, niche audience |
| **Twitter/X** | Japanese word of the day, JLPT tips, cultural insights, memes | Free | Medium — engagement, brand awareness |
| **SEO (English)** | Blog: "best app to learn Japanese 2026", "JLPT N5 study plan", "how to work in Japan" | Free | Long-term — high search volume, competitive but compounding |
| **Product Hunt** | Launch the AI-powered conversation practice angle | Free | One-time spike — tech-savvy early adopters |
| **Discord / Anime Communities** | Japanese learning Discord servers, anime fan forums | Free | Medium — niche but passionate audience |
| **Google/YouTube Ads** | Keywords: "learn Japanese online", "JLPT prep", "Japanese for beginners" | $100-300/month | Measurable — EN market entry |

#### Both Markets

| Tactic | Description | Cost |
|--------|-------------|------|
| **Free mini-course** | 3 lessons free as lead magnet — try before you buy | Free |
| **Referral program** | 1 month free for each referred paying user (both referrer and referee) | Cost of 1 month subscription |
| **Email drip campaign** | 7-day "Japanese Starter" series — daily email with a lesson teaser, ending with CTA to subscribe | $0 (Resend free tier) |
| **JLPT seasonal campaigns** | Promotional push before JLPT exam registrations (Feb/Aug) and exam dates (Jul/Dec) | Ad budget spike |
| **Testimonials & social proof** | Student success stories, JLPT pass rates, "I got my visa" stories | Free |

### 10.4 Marketing Budget

#### Phase 1 — Pre-launch & MVP (Month 1-3)

| Channel | Monthly Budget | Notes |
|---------|----------------|-------|
| Instagram/TikTok Ads (ID) | Rp 1-3M (~$60-190) | Targeted: ages 18-35, Japan/JLPT interests |
| Google Ads (ID) | Rp 500k-1M (~$30-60) | JLPT/Japanese learning keywords |
| Content creation tools | $20 | Canva Pro for social media graphics |
| Domain + branding | $50-200 (one-time) | Logo, brand kit |
| **Total/month** | **~$110-470** | Focus: Indonesian market, organic growth |

#### Phase 2 — Growth (Month 4-6)

| Channel | Monthly Budget | Notes |
|---------|----------------|-------|
| Social Ads (ID + EN) | $200-500 | Expand to English-speaking audiences |
| Google/YouTube Ads (EN) | $100-300 | Enter English market |
| KOL/Influencer collabs | $100-300 | 2-3 micro-influencers per month |
| Email marketing | $20 | Resend Pro for automated drip campaigns |
| **Total/month** | **~$420-1,120** | Focus: Dual market, paid acquisition |

#### Phase 3 — Scale (Month 7-12)

| Channel | Monthly Budget | Notes |
|---------|----------------|-------|
| Paid ads (multi-platform) | $500-1,500 | ID + EN markets, retargeting |
| Influencer partnerships | $300-800 | Bigger creators, long-term deals |
| Affiliate program | Revenue share | Community-driven growth |
| PR / Product Hunt | $0-200 | Tech audience, press outreach |
| **Total/month** | **~$800-2,500** | Focus: Scale, reduce CAC, increase LTV |

### 10.5 KPIs & Success Metrics

| Metric | MVP Target (Month 3) | Growth Target (Month 6) | Scale Target (Month 12) |
|--------|----------------------|------------------------|------------------------|
| **Registered users** | 500 | 2,000 | 8,000 |
| **Paid subscribers** | 50 | 200 | 500+ |
| **Monthly revenue** | Rp 7.5M (~$470) | Rp 30M (~$1,900) | Rp 87.5M (~$5,500) |
| **Free → paid conversion** | 10% | 10-15% | 12-18% |
| **Monthly churn rate** | <15% | <10% | <8% |
| **CAC** (Cost to Acquire Customer) | $5-10 | $3-8 | $2-5 |
| **LTV** (Lifetime Value) | $20 | $40 | $60+ |
| **LTV:CAC ratio** | 2:1 | 5:1 | 12:1+ |
| **Instagram/TikTok followers** | 2,000 | 10,000 | 30,000+ |
| **Email list size** | 1,000 | 5,000 | 15,000+ |
| **Organic traffic (monthly)** | 500 visits | 5,000 visits | 20,000+ visits |

### 10.6 Marketing Calendar (Year 1)

| Month | Focus | Key Activities |
|-------|-------|---------------|
| **M1** | Pre-launch | Build WhatsApp community, start Instagram/TikTok content, create lead magnet |
| **M2** | Soft launch | Invite beta users, collect testimonials, refine messaging |
| **M3** | MVP launch | Launch paid plans, start ads (ID), email drip campaign |
| **M4** | Optimize ID | A/B test ad creatives, KOL collabs, referral program launch |
| **M5** | EN market entry | YouTube channel launch, Reddit presence, EN ads |
| **M6** | JLPT season (Jul exam) | JLPT prep campaign, mock test promo, testimonial push |
| **M7-8** | Growth | Product Hunt launch, influencer partnerships, content scaling |
| **M9-10** | Retention focus | Loyalty program, streak rewards, community events |
| **M11** | JLPT season (Dec exam) | Second JLPT campaign, year-end promotions |
| **M12** | Review & plan | Analyze metrics, plan Year 2, annual pricing promos |

---

## 11. Summary: Why This Will Work

| Factor | Advantage |
|---|---|
| **Teacher credibility** | Actually lives and works in Japan (not just textbook knowledge) |
| **Market timing** | Indonesia-Japan labor agreements growing (tokutei ginou visa expansion); global interest in Japanese language at all-time high |
| **Dual market** | Indonesian AND English-speaking learners — 2 revenue streams, broader TAM |
| **Price point** | 5-10x cheaper than iTalki/Cakap per month (ID market); competitive with Duolingo Super but with live sessions (EN market) |
| **AI + Human** | 24/7 AI practice + real teacher — nobody else does this affordably in both languages |
| **Bilingual platform** | Full UI + lessons in Bahasa Indonesia and English — accessible from day one to both markets |
| **Tech stack** | Modern, scalable, bilingual-ready, low initial cost (~$15-60/month to start) |
| **Marketing efficiency** | Organic-first strategy, JLPT seasonal campaigns, referral loops — low CAC |

---

*This plan is a living document. Update as requirements evolve.*
