import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch geocode data');
    }

    const data = await response.json();
    
    if (data && data.length > 0) {
      const result = data[0];
      return NextResponse.json({
        name: result.display_name.split(',').slice(0, 2).join(', '),
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        country: result.address?.country || '',
        city: result.address?.city || result.address?.town || result.address?.village || '',
      });
    } else {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
  }
}