'use client'
import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'

const DatePicker = () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined)
 
  return (
    
    <Popover>
      <PopoverTrigger asChild>
        <button className="input text-left px-3">
          {date ? format(date, 'dd/MM/yyyy') : 'Select a date...'}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] bg-white/80 p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg w-full"
        />
      </PopoverContent>
    </Popover>
    

  )
}

export default DatePicker