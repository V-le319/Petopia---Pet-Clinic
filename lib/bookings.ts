import { supabase } from "./supabase"

export type Status = 'Confirmed' | 'Pending' | 'Done'
export type PetType = 'Dog' | 'Cat' | 'Other'

export interface Booking {
  id: string   //Superbase has id col by default so we add id here in interface
  owner: string
  email: string
  pet: string
  petType: PetType
  service: string
  date: string
  time: string
  note: string
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

export async function getTodayBokkings() : Promise<Booking[]> {
    const today = new Date().toISOString().split('T')[0] // "2026-06-02"
    
    const { data, error } = await supabase
    .from ('Booking')
    .select('*')
    .eq('date', today)

    if (error) throw new Error(error.message)
        return data as Booking[]
}

