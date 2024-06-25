import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}