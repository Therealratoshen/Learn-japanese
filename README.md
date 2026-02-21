# Learn Japanese - NihonGo!

A modern Japanese language learning platform for Indonesian learners, combining AI-powered self-paced study with live teacher sessions from Japan.

**Live site:** [https://therealratoshen.github.io/Learn-japanese](https://therealratoshen.github.io/Learn-japanese)

## Overview

- **Self-paced learning** with JLPT-aligned curriculum (N5 → N2)
- **AI conversation practice** powered by Claude LLM
- **Live video sessions** with a teacher working in Japan
- **Indonesian-first** - all explanations in Bahasa Indonesia
- **Affordable** - priced for the Indonesian market

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS v4
- **Deployment:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build
```

The static build outputs to the `out/` directory, which is deployed to GitHub Pages automatically via GitHub Actions on push to `main`.

## Deployment

This project uses **GitHub Pages** for free hosting. The deployment is automated:

1. Push to `main` branch
2. GitHub Actions builds the Next.js static export
3. Deploys to GitHub Pages at `https://therealratoshen.github.io/Learn-japanese`

### To enable GitHub Pages:

1. Go to your repo **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` and the workflow will deploy automatically

### To make the repo public:

1. Go to your repo **Settings** → **General**
2. Scroll to **Danger Zone** → **Change repository visibility**
3. Select **Make public**

## Documentation

- [Project Plan](./PROJECT_PLAN.md) - Full project plan, competitor analysis, tech stack, and cost breakdown

## License

MIT
