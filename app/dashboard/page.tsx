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
      span: ""
    },
    {
      title: "Total Bookings",
      number: "",
      condition: "",
      borderColor: "border-l-lightBg",
      span: ""
    },
    {
      title: "Pending",
      number: "",
      condition: "",
      borderColor: "border-l-[#E8614A]",
      span: "col-span-2"
    }

  ]
  return (
    <>
    <div className="w-full min-h-screen flex flex-col gap-8 py-14 pt-14 md:pt-0">
      
      <DashboardGreeting/>

      <div className="w-full px-8 flex flex-col gap-8">

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {dashboardCard.map((card) => (
          <div className={`dashboard-card ${card.borderColor} ${card.span} sm:col-span-1`}
                key={card.title}>
              <p className="">{card.title}</p>
              <p>{card.number}</p>
              <p>{card.condition}</p>
          </div>

        ))}
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row gap-8 sm:gap-4">
        <div className="sm:w-2/3">
          <Appointment/>
        </div>
        
        <Schedule/>

      </div>
      </div>
      
    </div>
    </>
  )
}

export default Dashboard