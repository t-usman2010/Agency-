import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/firestore-admin';

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
