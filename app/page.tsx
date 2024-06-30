import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import { getSession, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white">
      <Navbar />
      <Billboard />
      <div className="pb-40 font-semi-bold pt-4">
        <MovieList title="Trending Now"/>
        <MovieList title="My List"/>
      </div>
    </main>
  );
}
