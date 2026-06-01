export type Status = 'Confirmed' | 'Pending' | 'Done'
export type PetType = 'Dog' | 'Cat' | 'Other'

export interface Booking {
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

export const mockBookings: Booking[] = [
  { owner: 'Jane Doe',  email: 'jane@email.com',   pet: 'Luna',    petType: 'Dog',   service: 'General Check-up', date: '28 May', time: '10:00 AM', note: 'Limping on front left',       status: 'Confirmed' },
  { owner: 'Marcus T.', email: 'marcus@email.com', pet: 'Oliver',  petType: 'Cat',   service: 'Vaccination',      date: '28 May', time: '11:30 AM', note: '—',                           status: 'Pending'   },
  { owner: 'Sarah K.',  email: 'sarah@email.com',  pet: 'Buster',  petType: 'Dog',   service: 'Grooming',         date: '29 May', time: '09:00 AM', note: 'Sensitive skin, no harsh products', status: 'Done' },
  { owner: 'Leo Kim',   email: 'leo@email.com',    pet: 'Snowball', petType: 'Other', service: 'Dental Care',     date: '30 May', time: '14:00 PM', note: '—',                           status: 'Confirmed'      },
  { owner: 'Thao N.',   email: 'thao@email.com',   pet: 'Mochi',   petType: 'Cat',   service: 'Emergency',        date: '28 May', time: '04:00 PM', note: 'Not eating since yesterday',  status: 'Pending' },
]

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