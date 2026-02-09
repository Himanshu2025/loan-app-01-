## Responsive Loan application 

 

Loan Application Detail View
It displays applicant and loan details, allows status updates through a strict workflow, and records a status history with timestamps and notes.
​
# Tech Stack
Framework: Next.js (App Router, TypeScript)

UI: Tailwind CSS, shadcn/ui (Card, Button, Sonner toast)

State: React useState (local state, no backend)

Data: In‑memory mock-db.ts returning a single LoanApp object

# Getting Started
bash
# 1. Install deps
pnpm install
# or
npm install
# or
yarn
# or 
bun install 

# 2. Run dev server
pnpm dev
# or
npm run dev
# or
yarn dev
# or 
bun run dev 

# 3. Open in browser
http://localhost:3000
Home page (/) shows a link to the Loan Application Detail View:

http://localhost:3000/loan/APP-4

# Project structure
app/
  page.tsx                    # Simple landing page with link to loan detail
  loan/
    [id]/
      page.tsx                # Server component: await params, fetch mock loan
      loan-dashboard.tsx      # Client component: main dashboard UI + state
components/
  loan/
    applicant-card.tsx        # Applicant details card
    loan-card.tsx             # Loan details card
    status-buttons.tsx        # Status actions, uses useStatusUpdate hook
    status-history-card.tsx   # Status History list
  ui/
    header.tsx                # Loan header (title, ID, top-right status badge)
    status-badge.tsx          # Reusable status pill
    button.tsx, card.tsx, ... # shadcn/ui primitives
hooks/
  useStatusUpdate.ts          # Status workflow + validation + toasts
lib/
  mock-db.ts                  # getLoanApp(id): returns mock LoanApp
types/
  loan.ts                     # LoanApp + statusHistory types

