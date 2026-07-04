'use client'
import { CalendarCheck, CheckCircle } from 'lucide-react'
import { updateBookingStatus, statusBadge, type Status } from '@/lib/bookings'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

const StatusActions = ({ id, status, onUpdate, isAdmin } : { id: string, status: Status, onUpdate:() => void, isAdmin: boolean }) => {
  const router = useRouter()

  const [current, setCurrent] = React.useState<Status>(status)
  const [loading, setLoading] = useState(false)
  React.useEffect(() => {
  setCurrent(status)
}, [status])

  const handleUpdate = async (newStatus: Status) => {
    if (!isAdmin) {
      toast.info('Demo mode — editing is disabled')
      return
    }
    setLoading(true)
    setCurrent(newStatus)
    await updateBookingStatus(id, newStatus)
    onUpdate()
    
    setLoading(false)
  }

  return (
    <div className="shrink-0 flex gap-2">
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusBadge[current]}`}>
      {current}
    </span>
      <button onClick={() => handleUpdate('Confirmed')}
              disabled={loading}
               className={`p-1.5 rounded-full transition-opacity ${
                current === 'Confirmed'
                ? 'bg-highlight/60 opacity-100'
                : 'bg-highlight/20 opacity-40'
              } ${!isAdmin ? 'cursor-not-allowed' : ''}`}>
        <CalendarCheck size={14} className="text-headline"/>
      </button>
      <button onClick={() => handleUpdate('Done')}
              disabled={loading}
              className={`p-1.5 rounded-full transition-opacity ${
                current === 'Done'
                ? 'bg-blue-300 opacity-100'
                : 'bg-blue-100 opacity-40'
              } ${!isAdmin ? 'cursor-not-allowed' : ''}`}>
        <CheckCircle size={14} className="text-blue-700"/>
      </button>
    </div>
  )
}

export default StatusActions