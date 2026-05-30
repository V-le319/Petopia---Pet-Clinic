'use client'

import { useSession } from "next-auth/react"

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 17) return 'Good Afternoon';
        return 'Good Evening'
    }

        const getFormattedDate = () => {
            return new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            })
        }

    const DashboardGreeting = () => {
        const { data: session } = useSession()
        const firstName = session?.user?.name?.split(' ')[0] ?? 'Admin'

  return (
    <div className="w-full h-auto p-4 px-10 bg-white/80 mt-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-medium text-headline">
          {getGreeting()}, {firstName}
        </span>
        <span>🐾</span>
      </div>
      <p className="text-sm text-text mt-0.5">
        {getFormattedDate()} — Here's today's overview
      </p>
    </div>
  )
}

export default DashboardGreeting