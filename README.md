Petopia Pet Clinic 🐾

A full-stack pet clinic booking platform built with Next.js 15, TypeScript, and Supabase — designed for small veterinary practices to manage appointments online. Pet owners can book services, receive email confirmations, and clinic staff can manage bookings through a protected admin dashboard.

Live: petopia-bice.vercel.app
Repo: github.com/V-le319/Petopia---Pet-Clinic

Features

Google OAuth authentication via NextAuth.js
Online booking form with date picker and dynamic time slot selection
Booking confirmation emails sent via Resend
Bookings stored in Supabase database with full record keeping
Protected admin dashboard — whitelist-based access via middleware
Staff login with account switcher prompt for clean UX
Scroll-aware navbar with blur effect
Responsive design across mobile and desktop
Fully deployed on Vercel


Tech Stack
LayerTechnologyFrameworkNext.js 15 (App Router)LanguageTypeScriptStylingTailwind CSSDatabaseSupabase (PostgreSQL)AuthNextAuth.js v4 with Google providerEmailResendUI Componentsshadcn/ui, Lucide IconsDeploymentVercel

Getting Started
Prerequisites

Node.js 18+
A Supabase account and project
A Google Cloud OAuth 2.0 app
A Resend account and API key

Installation
bashgit clone https://github.com/V-le319/Petopia---Pet-Clinic.git
cd Petopia---Pet-Clinic
npm install
Environment Variables
Create a .env.local file in the root:
envNEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

RESEND_API_KEY=your_resend_api_key
Run Locally
bashnpm run dev

Admin Access
Dashboard access is restricted to whitelisted emails defined in lib/config.ts. Route protection is handled by middleware.ts — any non-whitelisted user attempting to visit /dashboard is redirected to the homepage.
The navbar Dashboard link only renders when the logged-in user is a whitelisted admin.

Deployment (Vercel)

Push to GitHub and import the repo in Vercel
Add all environment variables from .env.local to Vercel project settings under Production
Update your Google OAuth app's Authorized redirect URI to:

   https://your-app.vercel.app/api/auth/callback/google

Update Authorized JavaScript origins to:

   https://your-app.vercel.app

Redeploy after adding environment variables


Project Structure
petopia/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth route handler
│   │   └── send-email/           # Resend email API route
│   ├── dashboard/
│   │   ├── patient/              # Patient records view
│   │   ├── schedule/             # Schedule management
│   │   ├── layout.tsx            # Dashboard layout with sidebar
│   │   └── page.tsx              # Dashboard home
│   └── page.tsx                  # Public landing page
├── components/
│   ├── BookingForm.tsx           # Booking form with Supabase insert
│   ├── DatePicker.tsx            # Date selection component
│   ├── TimeSlot.tsx              # Dynamic time slot availability
│   ├── Navbar.tsx                # Scroll-aware navbar with auth state
│   └── FadeIn.tsx                # Scroll animation wrapper
├── lib/
│   ├── auth.ts                   # NextAuth config
│   ├── config.ts                 # Shared whitelist config
│   └── supabase.ts               # Supabase client
├── middleware.ts                 # Dashboard route protection
└── public/
    └── images/
