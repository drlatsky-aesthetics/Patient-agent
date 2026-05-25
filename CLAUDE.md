# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Treasury Aesthetics** is a mobile-first Progressive Web App (PWA) for an aesthetic services clinic. It provides patients with rewards tracking, appointment management, membership details, and booking — all connected to the **Phorest** salon management SaaS via a proxying Express backend.

The repo contains two separate Node.js apps that run together:
- **Frontend** — React 18 + Vite (root of the repo)
- **Backend** — Express.js (`server/` subdirectory)

---

## Development Commands

### Running Locally

```bash
# Start both frontend and backend together
npm run dev:all

# Or start each independently:
npm run dev          # Vite dev server → http://localhost:5173
npm run dev:server   # Express backend → http://localhost:3001
```

The backend uses `--env-file=../.env.local`, so create `.env.local` at the repo root from `.env.example`.

### Build & Preview

```bash
npm run build        # Vite production build → dist/
npm run preview      # Serve dist/ locally
```

### Backend (standalone)

```bash
cd server
npm run dev          # node --watch with env loading
npm start            # Production: node index.js
```

> No test runner or linter is configured yet.

---

## Architecture

### Data Flow

```
Browser
  └─ React App (Vite, :5173)
       ├─ Clerk — authentication (SignIn/SignUp screens)
       ├─ Zustand — client-side state (currently mock data)
       ├─ src/services/phorest.js — API client → :3001
       └─ Express Backend (:3001)
            └─ server/lib/phorestClient.js — Basic Auth proxy
                 └─ Phorest API (platform.phorest.com)
```

### Frontend (`src/`)

- **`main.jsx`** — Wraps the app in `<ClerkProvider>` using `VITE_CLERK_PUBLISHABLE_KEY`.
- **`App.jsx`** — React Router v6 routes. Protected screens require `<SignedIn>`; unauthenticated users land on `SignInScreen`.
- **`screens/`** — Full-page views: `HomeScreen`, `RewardsScreen`, `MembershipScreen`, `DiscoverScreen`, `ProfileScreen`, `SignInScreen`, `SignUpScreen`.
- **`components/`** — Reusable UI broken into home widgets (`RewardBalanceCard`, `NextAppointmentBanner`, `SkinInsightCard`, `QuickActions`, `ContentFeed`), rewards panels (`BalanceHero`, `HistoryList`, `RedemptionModule`, `ReferralModule`, `EarningRules`), and layout (`AppShell`, `BottomNav`).
- **`stores/usePatientStore.js`** — Zustand store. Currently holds **mock patient, appointment, and rewards data**. This is the integration point where live Phorest data will eventually flow in.
- **`services/phorest.js`** — Thin API client that hits the Express backend using `VITE_API_BASE_URL`.

### Backend (`server/`)

- **`index.js`** — Express app on `PORT` (default 3001). CORS allows `localhost:5173` and `FRONTEND_URL`. Mounts `/api/phorest` router. Exposes `GET /health`.
- **`routes/phorest.js`** — Eight REST endpoints that validate params and delegate to `phorestClient`:
  - `GET /branches`
  - `GET /clients` (paginated)
  - `GET /clients/:clientId`
  - `GET /clients/by-email/:email`
  - `GET /clients/:clientId/appointments` (filterable by status/date)
  - `GET /clients/:clientId/appointments/next`
  - `GET /clients/:clientId/purchases`
  - `GET /services`
- **`lib/phorestClient.js`** — Wraps `fetch` calls to `PHOREST_BASE_URL` with `Authorization: Basic …` from `PHOREST_USERNAME` + `PHOREST_PASSWORD`. Phorest credentials must **never** be exposed to the frontend.

### Environment Variables

| Variable | Where used | Purpose |
|---|---|---|
| `PHOREST_USERNAME` / `PHOREST_PASSWORD` / `PHOREST_BUSINESS_ID` / `PHOREST_BASE_URL` | Backend only | Phorest API auth |
| `VITE_API_BASE_URL` | Frontend | Points to Express backend |
| `VITE_PHOREST_BOOKING_URL` | Frontend | External booking link |
| `VITE_CLERK_PUBLISHABLE_KEY` | Frontend | Clerk auth |
| `CLERK_SECRET_KEY` | Backend (future) | Clerk server-side validation |
| `STRIPE_*` | Backend (future) | Payments |
| `ANTHROPIC_API_KEY` | Backend (future) | AI features |
| `ONESIGNAL_API_KEY` | Backend (future) | Push notifications |
| `DATABASE_URL` | Backend (future) | Persistence layer |
| `FRONTEND_URL` | Backend | CORS allowlist for production |

### Design Tokens (Tailwind)

Custom palette defined in `tailwind.config.js`:
- `gold` — `#C9A84C` (brand accent)
- `charcoal` — `#2C2C2C` (primary text)
- `ivory` — `#F7F4EE` (background)

Fonts: **Cormorant Garamond** for display headings, **Jost** for UI text.

### Deployment

- **Frontend** → Vercel (`vercel.json`): `npm run build`, output `dist/`, all routes rewrite to `index.html`.
- **Backend** → Railway (`railway.json` + `server/nixpacks.toml`): Nixpacks builds from `server/` with Node 20, starts with `node index.js`, health check at `/health`.

---

## Key Integration Points for Future Work

- **Live patient data**: Replace mock data in `usePatientStore.js` with real Phorest API responses via `src/services/phorest.js`.
- **Rewards logic**: The rewards/points model is currently UI-only; backend calculation and a database are needed.
- **Auth → Phorest link**: Clerk user identity needs to be mapped to a Phorest `clientId` (likely via `GET /clients/by-email/:email`).
- **Planned but unimplemented**: Stripe payments, Anthropic AI features, OneSignal push notifications, database persistence.
