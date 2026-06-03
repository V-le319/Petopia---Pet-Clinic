'use client'
import { CalendarCheck, CheckCircle } from 'lucide-react'
import { updateBookingStatus, type Status } from '@/lib/bookings'
import { useRouter } from 'next/navigation'

const StatusActions = ({ id, status } : { id: string, status: Status }) => {
  const router = useRouter()

  const handleUpdate = async (newStatus: Status) => {
    await updateBookingStatus(id, newStatus)
    router.refresh()
  }

  return (
    <div className="shrink-0 flex gap-2">
      {status !== 'Confirmed' && (
        <button onClick={() => handleUpdate('Confirmed')}
                className="p-1.5 rounded-full bg-highlight/20 hover:bg-highlight/40">
          <CalendarCheck size={14} className="text-headline"/>
        </button>
      )}
      {status !== 'Done' && (
        <button onClick={() => handleUpdate('Done')}
                className="p-1.5 rounded-full bg-blue-100 hover:bg-blue-200">
          <CheckCircle size={14} className="text-blue-700"/>
        </button>
      )}
    </div>
  )
}

export default StatusActions