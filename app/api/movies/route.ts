import prismadb from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}