import Appointment from '@/components/dashboard/Appointment'
import DashboardGreeting from '@/components/dashboard/DashboardGreeting'
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
      
      <DashboardGreeting/>

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

      <div className="w-full h-auto flex flex-col md:flex-row gap-4">
      
        <Appointment/>
        <Schedule/>

      </div>
      
    </div>
    </>
  )
}

export default Dashboard