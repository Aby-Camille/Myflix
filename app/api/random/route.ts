import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        //Collecting amount of movies and genarating random index.
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });
        
        return NextResponse.json(randomMovies[0]);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal error'}, { status: 500 });
    }
}
