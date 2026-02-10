## Overview

Marketing agency site built with Next.js (App Router) and Tailwind CSS, backed by Firebase (Firestore + Storage) with an admin dashboard at `/admin`.

## Stack
- Next.js 16 (App Router), Tailwind CSS
- Firebase Firestore + Storage
- Firebase Admin SDK for privileged server routes

## Setup
1) Install deps
```bash
npm install
```

2) Environment variables (`.env.local`)
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
```
- The `FIREBASE_SERVICE_ACCOUNT_KEY` value is the JSON from your Firebase service account (kept as a single line, wrapped in quotes). Do **not** commit the JSON file; it is ignored. You can re-run `node setup-admin-key.js` after placing `service-account-key.json` in the project root to populate `.env.local` automatically.

3) Run dev server
```bash
npm run dev
```
Visit http://localhost:3000.

## Admin CMS
- Login: `/admin/login` (use your Firebase auth account)
- Manage: Team, Services, Projects, Testimonials, Pricing, Leads
- Content auto-updates from Firestore; public site reads from public collections.

## Deploy

### Vercel Deployment

1. **Push code to GitHub**
```bash
git push origin main
```

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

3. **Set environment variables in Vercel dashboard**
   Go to Project Settings → Environment Variables and add:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
   ```
   
   **Important:** For `FIREBASE_SERVICE_ACCOUNT_KEY`, copy the **entire** JSON object (all on one line, no line breaks). You can get this from your local `.env.local` file.

4. **Deploy**
   - Vercel will automatically deploy when you push to main

### Other Platforms
- Ensure all environment variables (especially `FIREBASE_SERVICE_ACCOUNT_KEY`) are set
- The app requires Node.js 18+ runtime
- No special build configuration needed
