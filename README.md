## Responsive Loan application 

It displays applicant and loan details, allows status updates through a strict workflow, and records a status history with timestamps and notes.

# visit the live link here: 
https://loan-app-01.vercel.app/loan/APP-2026-003

# Overall Summary:
After several iterations, I have arrived at this final solution, after many changes, refeering some blogs about good UX and tried to keep the code simple. I have relied on KISS and DRY principles heavily. I have used dynamic routing to give it a real flavour. 

# Progress log
Refer this document where I have tracked my progress and the process of how I arrived at the final solution: 

https://docs.google.com/document/d/1nDTG0CSrJ0Gedr2Hzal_KtW6XVzp-gmPB0NiANKJF8E/edit?usp=sharing

# Tech Stack
**Framework:** Next.js (App Router, TypeScript)

**UI:** Tailwind CSS, shadcn/ui (Card, Button, Sonner toast)

**State:** React useState (local state, no backend)

**Data:** In‑memory mock-db.ts returning a single LoanApp object

# Getting Started
```bash
# 1. Install deps
pnpm install
or
npm install
or
yarn
or 
bun install 

# 2. Run dev server
pnpm dev
 or
npm run dev
or
yarn dev
or 
bun run dev 
```

# 3. Open in browser
http://localhost:3000
Home page (/) shows a link to the Loan Application Detail View:

http://localhost:3000/loan/APP-2026-003


# Workflow

pending > under review > approved/rejected 
\
# Directory structure:
```bash
└── himanshu2025-loan-app-01-/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── loan/
    │       └── [id]/
    │           ├── LoanDashboard.tsx
    │           └── page.tsx
    ├── components/
    │   ├── loan/
    │   │   ├── applicant-card.tsx
    │   │   ├── loan-card.tsx
    │   │   ├── status-badge.tsx
    │   │   ├── status-buttons.tsx
    │   │   └── status-history-card.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── header.tsx
    │       ├── label.tsx
    │       └── sonner.tsx
    ├── hooks/
    │   └── UseStatusUpdate.tsx
    ├── lib/
    │   ├── mock-db.ts
    │   └── utils.ts
    └── types/
        └── loan.ts
```