import { NextResponse } from 'next/server';
import {
  getPricingPackages,
  createPricingPackage,
  updatePricingPackage,
  deletePricingPackage,
} from '@/lib/firestore-admin';

export async function GET() {
  try {
    const pricing = await getPricingPackages();
    return NextResponse.json(pricing);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const id = await createPricingPackage(data);
    return NextResponse.json({ id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();
    await updatePricingPackage(id, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await deletePricingPackage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
