# Learn Japanese - NihonGo!

A bilingual (Indonesian + English) Japanese language learning platform, combining AI-powered self-paced study with live teacher sessions from Japan.

## Overview

- **Self-paced learning** with JLPT-aligned curriculum (N5 → N2)
- **AI conversation practice** powered by Claude LLM
- **Live video sessions** with a teacher working in Japan
- **Bilingual platform** — full UI and lessons in Bahasa Indonesia and English
- **Affordable** — locally priced for Indonesia (IDR) and competitively priced internationally (USD)

## Tech Stack

- **Frontend:** Next.js 14+, Tailwind CSS, shadcn/ui, next-intl (i18n)
- **Backend:** Next.js API Routes, Supabase (PostgreSQL), Prisma
- **AI:** Claude API (Anthropic)
- **Payments:** Midtrans (Indonesia/IDR) + Stripe (International/USD)
- **Hosting:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## Documentation

- [Project Plan](./PROJECT_PLAN.md) - Full project plan, competitor analysis, tech stack, and cost breakdown

## License

Private - All rights reserved.
