import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, name, petName, service, date, timeSlot } = await req.json()

  const { error } = await resend.emails.send({
    from: 'Petopia <onboarding@resend.dev>',
    to: email,
    subject: 'Booking Confirmed — Petopia Pet Clinic 🐾',
    html: `
      <h2>Hi ${name}!</h2>
      <p>Your booking has been confirmed. Here are your details:</p>
      <ul>
        <li><strong>Pet:</strong> ${petName}</li>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${timeSlot}</li>
      </ul>
      <p>See you soon! 🐾</p>
      <p>— The Petopia Team</p>
    `
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ success: true })
}