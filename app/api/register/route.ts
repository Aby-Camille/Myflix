import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { email, name, password } = await req.json();

        // Verify if user already exists in the database.
        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email taken' }, { status: 402 });
        }

        //Hashing password.
        const hashedPassword = await bcrypt.hash(password, 12);

        //Create new use in the database.
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        return NextResponse.json(user), { status: 200 };
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}