import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.formData()

  await supabase.from('messages').insert([{
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message')
  }])

  return NextResponse.redirect(new URL('/', req.url))
}
