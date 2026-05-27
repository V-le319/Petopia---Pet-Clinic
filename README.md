# Petopia Pet Clinic 🐾
 
A full-stack pet clinic booking platform built with Next.js 15, TypeScript, and Supabase — designed for small veterinary practices to manage appointments online. Pet owners can book services, receive email confirmations, and clinic staff can manage bookings through a protected admin dashboard.
 
**Live:** [petopia-bice.vercel.app](https://petopia-bice.vercel.app)    
**Repo:** [github.com/V-le319/Petopia---Pet-Clinic](https://github.com/V-le319/Petopia---Pet-Clinic)
 
---
 
## Features
 
- Google OAuth authentication via NextAuth.js
- Online booking form with date picker and dynamic time slot selection
- Booking confirmation emails sent via Resend
- Bookings stored in Supabase database with full record keeping
- Protected admin dashboard — whitelist-based access via middleware
- Staff login with account switcher prompt for clean UX
- Scroll-aware navbar with blur effect
- Responsive design across mobile and desktop
- Fully deployed on Vercel
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Auth | NextAuth.js v4 with Google provider |
| Email | Resend |
| UI Components | shadcn/ui, Lucide Icons |
| Deployment | Vercel |
 
---
 
## Getting Started
 
### Prerequisites
 
- Node.js 18+
- A [Supabase](https://supabase.com) account and project
- A [Google Cloud](https://console.cloud.google.com) OAuth 2.0 app
- A [Resend](https://resend.com) account and API key
### Installation
 
## Admin Access
 
Dashboard access is restricted to whitelisted emails defined in `lib/config.ts`. Route protection is handled by `middleware.ts` — any non-whitelisted user attempting to visit `/dashboard` is redirected to the homepage.
 
The navbar Dashboard link only renders when the logged-in user is a whitelisted admin.
 
---
 
## Project Structure
 
```
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
