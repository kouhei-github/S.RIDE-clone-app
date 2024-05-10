import {NextRequest} from 'next/server'
import {API} from '@/app/api/utils'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const latitude = searchParams.get("latitude")
  const longitude = searchParams.get("longitude")
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const res = await API.get(`/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${token}`);
  return new Response(JSON.stringify({data: res.data}), { status: 200 });
}