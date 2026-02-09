## Responsive Loan application 

It displays applicant and loan details, allows status updates through a strict workflow, and records a status history with timestamps and notes.
​
# Progress log
Refer this document where I have tracked my progress and the process of how I arrived at the final solution: 
https://docs.google.com/document/d/1nDTG0CSrJ0Gedr2Hzal_KtW6XVzp-gmPB0NiANKJF8E/edit?usp=sharing

# visit the live link here: 
https://loan-app-01.vercel.app/loan/APP-2026-003

# Tech Stack
Framework: Next.js (App Router, TypeScript)

UI: Tailwind CSS, shadcn/ui (Card, Button, Sonner toast)

State: React useState (local state, no backend)

Data: In‑memory mock-db.ts returning a single LoanApp object

# Getting Started
bash
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

# 3. Open in browser
http://localhost:3000
Home page (/) shows a link to the Loan Application Detail View:

http://localhost:3000/loan/APP-2026-003


