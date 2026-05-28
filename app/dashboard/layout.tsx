import Sidebar from "@/components/dashboard/Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen flex sm:flex-row flex-col bg-mainBG">
      <Sidebar/>
      <main className="flex-1 px-10 pb-20 md:pb-0">{children}</main>
    </div>
  )
}

export default DashboardLayout