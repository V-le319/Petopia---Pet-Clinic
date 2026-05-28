import Appointment from '@/components/dashboard/Appointment'
import Schedule from '@/components/dashboard/Schedule'


import React from 'react'

const Dashboard = () => {
  const dashboardCard = [
    {
      title: "Bookings Today",
      number: "",
      condition: "",
      borderColor: "border-l-highlight",
    },
    {
      title: "Total Bookings",
      number: "",
      condition: "",
      borderColor: "border-l-lightBg",
    },
    {
      title: "Pending",
      number: "",
      condition: "",
      borderColor: "border-l-[#E8614A]"
    }

  ]
  return (
    <>
    <div className="w-full min-h-screen flex flex-col gap-6 py-14 pt-20 md:pt-0">
      
      <div className="w-full h-auto p-4 bg-white/80 rounded-md mt-6">
        <span className="text-2xl font-medium text-headline">Good Morning</span>
        <p>Date - Here's today overview</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {dashboardCard.map((card) => (
          <div className={`dashboard-card ${card.borderColor}`}
                key={card.title}>
              <p className="">{card.title}</p>
              <p>{card.number}</p>
              <p>{card.condition}</p>
          </div>

        ))}
      </div>

      <div className="w-full h-auto flex gap-4">
      
        <Appointment/>
        <Schedule/>

      </div>
      
    </div>
    </>
  )
}

export default Dashboard