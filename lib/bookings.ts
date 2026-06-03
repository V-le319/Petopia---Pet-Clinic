import { supabase } from "./supabase"

export type Status = 'Confirmed' | 'Pending' | 'Done'
export type PetType = 'Dog' | 'Cat' | 'Other'

export interface Booking {
  id: string
  name: string
  pet_name: string
  pet_type: PetType
  service: string
  date: string
  time_slot: string
  note: string
  email: string
  status: Status
}

export async function getAllBookings() : Promise<Booking[]> {
    const { data, error } = await supabase
    .from ('Booking')
    .select('*')
    .order('date', { ascending: true})

    if (error) throw new Error(error.message)
        return data as Booking[]
}

export async function getTodayBookings() : Promise<Booking[]> {
    const today = new Date().toISOString().split('T')[0] // "2026-06-02"
    
    const { data, error } = await supabase
    .from ('Booking')
    .select('*')
    .eq('date', today)

    if (error) throw new Error(error.message)
        return data as Booking[]
}

export async function getBookingCounts() : Promise<{ total : number; today: number; pending: number}> {
    const today = new Date().toISOString().split('T')[0]

     const { data, error } = await supabase
    .from ('Booking')
    .select('*')

    if(error) throw Error(error.message)

    const all = data as Booking[]
    console.log('dates from supabase:', all.map(b => b.date))
console.log('today:', today)
    return {
        total: all.length,
        today: all.filter(b => b.date === today).length,
        pending: all.filter(b => b.status === 'Pending').length,
    }
}

export const petTypeBadge: Record<PetType, string> = {
  Dog:   'bg-blue-100 text-blue-500',
  Cat:   'bg-red-100 text-red-400',
  Other: 'bg-text/20 text-text',
}

export const statusBadge: Record<Status, string> = {
  Confirmed: 'bg-highlight/20 text-headline',
  Pending:   'bg-orange-100 text-orange-600',
  Done: 'bg-blue-100 text-blue-700'
}

export const statusLeft: Record<Status, { bg: string; bar: string }> = {
  Confirmed: { bg: 'bg-highlight/10',  bar: 'bg-highlight'  },
  Pending:   { bg: 'bg-orange-50', bar: 'bg-orange-400' },
  Done:      { bg: 'bg-blue-100', bar: 'bg-blue-700' },
}

export async function updateBookingStatus(id: string , status: Status) {
    const { error } = await supabase
    .from('Booking')
    .update({status}) // sets the status column to the new value
    .eq('id', id)   // only on the row where id matches, so you don't update everything

     if (error) throw new Error(error.message)
}