import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const doctors = await fetch('http://213.230.91.55:8100/doctor/get-all?main=true&active=all', {
      headers: { 'Accept-Language': 'ru' }
    })
      .then(response => response.json());

    return NextResponse.json(doctors.data);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.error(new Error('Failed to fetch users'), { status: 500 });
  }
}