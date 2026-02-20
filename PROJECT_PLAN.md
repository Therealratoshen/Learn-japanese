# NihonGo! - Japanese Learning Platform for Indonesians

## Project Overview

An online Japanese language learning platform targeting Indonesian learners, led by a teacher with 5+ years of living and working experience in Japan. The platform combines **self-paced AI-powered learning** with **live teacher video sessions**, creating a hybrid model that competitors don't offer at this price point.

**Target audience:** Indonesian people who want to learn Japanese for work (tokutei ginou / specified skilled worker visa), study (MEXT scholarship), or personal interest.

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
4. Indonesian language support (explanations in Bahasa Indonesia)
5. Real Japanese workplace/life culture context
6. Affordable pricing for Indonesian market (Rp 99k-299k/month)

---

## 2. Key Differentiators

### Why This Platform Wins

1. **"From Japan, For Indonesia"** - Teacher is actively working in Japan, providing real-world context that textbook teachers cannot. Can share actual workplace situations, daily life, cultural nuances.

2. **AI + Human Hybrid** - Self-paced LLM-powered practice 24/7 (conversation bot, grammar checker, kanji quiz) combined with scheduled live sessions for correction and motivation.

3. **Bahasa Indonesia First** - All explanations, UI, and support in Indonesian. Grammar comparisons between Japanese and Indonesian (which share SOV tendencies in some constructions).

4. **Career Pathway Focus** - Not just language learning but preparation for:
   - Tokutei Ginou (Specified Skilled Worker) visa
   - MEXT scholarship applications
   - Japanese company interviews
   - Daily life in Japan

5. **Community-Driven** - WhatsApp/Discord group with fellow learners and alumni who are already in Japan.

6. **Affordable** - Priced for Indonesian purchasing power, not Western pricing.

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
| State | **Zustand** | Lightweight, simple, no boilerplate |
| Forms | **React Hook Form + Zod** | Type-safe validation |
| Rich Content | **MDX** | Lesson content with interactive components |

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
| Conversation Bot | **Claude API (Haiku for chat, Sonnet for complex)** | Best multilingual capability, good Japanese, cost-effective |
| Grammar Checking | **Claude API** | Can explain grammar in Indonesian context |
| Quiz Generation | **Claude API** | Dynamic quiz generation based on student level |
| Speech-to-Text | **Web Speech API / Whisper** | Pronunciation practice (V2) |

### Payments
| Component | Technology | Why |
|---|---|---|
| Payment Gateway | **Midtrans** | #1 in Indonesia, supports bank transfer, e-wallets (GoPay, OVO, DANA), credit cards |
| Subscription | **Custom logic + Midtrans recurring** | Indonesian payment methods don't all support auto-recurring |

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
| WhatsApp | **Fonnte / Woowa API** | Indonesian WhatsApp API providers, cheap |
| Analytics | **Plausible or Umami** | Privacy-friendly, self-hostable |
| Monitoring | **Sentry (free tier)** | Error tracking |

---

## 5. Database Schema (Core)

```
users
├── id, email, name, phone, avatar_url
├── role (student | teacher | admin)
├── current_level (N5 | N4 | N3 | N2)
├── subscription_status
├── streak_count, total_xp
└── created_at, updated_at

subscriptions
├── id, user_id, plan_id
├── status (active | cancelled | expired | trial)
├── started_at, expires_at
├── midtrans_transaction_id
└── payment_method

plans
├── id, name, price_idr
├── duration_months
├── features (jsonb)
└── is_active

lessons
├── id, level (N5-N2), module_number
├── title_id, title_jp
├── content_mdx
├── audio_url
├── order_index
└── is_published

quizzes
├── id, lesson_id
├── questions (jsonb)
├── passing_score
└── type (grammar | vocab | kanji | listening)

user_progress
├── id, user_id, lesson_id
├── status (not_started | in_progress | completed)
├── quiz_score, attempts
├── completed_at
└── time_spent_seconds

ai_conversations
├── id, user_id
├── messages (jsonb)
├── topic, level
├── feedback_score
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
| **Midtrans** (Payments) | 2.9% per transaction | No monthly fee, pay per transaction |
| **Domain** (.id or .com) | $1-10 | .id domains ~$10/year |
| **Resend** (Email) | $0 | Free tier (100 emails/day) |
| **WhatsApp API** (Fonnte) | Rp 50k (~$3) | Basic plan |
| **Zoom/Google Meet** | $0-14 | Free tier or basic plan |
| **Total MVP** | **~$15-60/month** | |

### Monthly Costs - Growth Phase (100-1000 users)

| Service | Cost/Month | Notes |
|---|---|---|
| **Vercel** | $20 | Pro plan |
| **Supabase** | $25 | Pro plan (8GB DB, 100GB storage) |
| **Claude API** | $50-150 | Higher usage, cache common patterns |
| **Midtrans** | ~$30-50 | Transaction fees on revenue |
| **Resend** | $20 | Pro plan |
| **Daily.co** (Video) | $0-99 | If embedding video |
| **Sentry** | $0 | Free tier |
| **Total Growth** | **~$150-350/month** | |

### Monthly Costs - Scale Phase (1000+ users)

| Service | Cost/Month | Notes |
|---|---|---|
| **Infrastructure** | $200-500 | All services scaled up |
| **Claude API** | $300-800 | Optimize with caching, Haiku for simple queries |
| **Total Scale** | **~$500-1,300/month** | |

### One-Time / Setup Costs

| Item | Cost | Notes |
|---|---|---|
| **Domain registration** | $10-15 | .com or .id |
| **Logo & branding** | $50-200 | Fiverr/local designer or AI-generated |
| **SSL** | $0 | Free with Vercel/Cloudflare |
| **Initial content creation** | $0 | Teacher creates content |
| **Total Setup** | **~$60-215** | |

---

## 7. Pricing Strategy (for Students)

Priced for Indonesian market (average salary context: UMR Jakarta ~Rp 5M/month):

| Plan | Price | Features |
|---|---|---|
| **Free** | Rp 0 | 3 lessons, limited AI chat (5/day), no live sessions |
| **Basic** | Rp 99,000/month | All lessons, unlimited AI chat, 1 group session/month |
| **Premium** | Rp 199,000/month | Everything in Basic + 2 private sessions/month, JLPT mocks |
| **Intensive** | Rp 499,000/month | Everything in Premium + 4 private sessions/month, priority support, career guidance |
| **Yearly discount** | 30% off | Any plan paid annually |

**Revenue projection (conservative):**
- Month 6: 200 paid users × avg Rp 150k = Rp 30M/month (~$1,900 USD)
- Month 12: 500 paid users × avg Rp 175k = Rp 87.5M/month (~$5,500 USD)

---

## 8. Project Structure

```
Learn-japanese/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (landing)/          # Public landing page
│   │   │   ├── page.tsx        # Hero, features, pricing
│   │   │   ├── about/          # Teacher profile
│   │   │   └── contact/
│   │   ├── (auth)/             # Auth pages
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── (dashboard)/        # Protected student area
│   │   │   ├── dashboard/      # Overview, progress
│   │   │   ├── lessons/        # Lesson list + viewer
│   │   │   ├── practice/       # AI chat practice
│   │   │   ├── quizzes/        # Quiz taking
│   │   │   ├── sessions/       # Book live sessions
│   │   │   ├── progress/       # Detailed progress
│   │   │   └── settings/       # Profile, subscription
│   │   ├── (admin)/            # Teacher admin panel
│   │   │   ├── students/
│   │   │   ├── content/
│   │   │   ├── schedule/
│   │   │   └── analytics/
│   │   ├── api/                # API routes
│   │   │   ├── auth/
│   │   │   ├── lessons/
│   │   │   ├── ai/
│   │   │   ├── payments/
│   │   │   └── sessions/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── landing/            # Landing page components
│   │   ├── dashboard/          # Dashboard components
│   │   ├── lessons/            # Lesson viewer, audio player
│   │   ├── practice/           # AI chat interface
│   │   └── admin/              # Admin components
│   ├── lib/
│   │   ├── supabase/           # Supabase client + helpers
│   │   ├── ai/                 # Claude API integration
│   │   ├── payments/           # Midtrans integration
│   │   └── utils/
│   ├── content/
│   │   └── lessons/            # MDX lesson files
│   └── types/                  # TypeScript types
├── prisma/
│   └── schema.prisma           # Database schema
├── public/
│   ├── audio/                  # Lesson audio files
│   └── images/
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

## 10. Marketing Strategy (Low Budget)

1. **Instagram Reels / TikTok** - Teacher posts daily Japanese tips from Japan (free, viral potential)
2. **WhatsApp groups** - Build community before launch
3. **Free mini-course** - 3 lessons free to hook users
4. **Indonesian expat communities** - Facebook groups, Reddit r/indonesia
5. **SEO** - Blog posts: "Cara belajar bahasa Jepang", "JLPT N5 tips"
6. **Referral program** - Give 1 month free for each referred paying user
7. **Collaboration** - Partner with Indonesian YouTubers/creators in Japan

---

## 11. Summary: Why This Will Work

| Factor | Advantage |
|---|---|
| **Teacher credibility** | Actually lives and works in Japan (not just textbook knowledge) |
| **Market timing** | Indonesia-Japan labor agreements growing (tokutei ginou visa expansion) |
| **Price point** | 5-10x cheaper than iTalki/Cakap per month with more features |
| **AI + Human** | 24/7 AI practice + real teacher — nobody else does this affordably |
| **Language** | Platform fully in Bahasa Indonesia |
| **Tech stack** | Modern, scalable, low initial cost (~$15-60/month to start) |

---

*This plan is a living document. Update as requirements evolve.*
