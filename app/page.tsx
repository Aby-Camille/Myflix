'use client';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';

import Movie from '@/models/Movie';
import useMovieList from './hooks/useMovieList';
import { useEffect, useState } from 'react';

const Home = () => {

  //Get Movies and uptade the list by ids in local storage
  const moviesResponse = useMovieList();
  const trendingMovies: Movie[] = moviesResponse.data;

  const [favorites, setFavorites] = useState<Movie[]>([]);
  useEffect(() => {
    console.log('refresh favorites');
    // Get the favorites ids from local storage
    const ids: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Waiting for trending movies to be defined meaning waiting for the db
    if (trendingMovies) {
      //  Filter the trending movies to get the favorites
      setFavorites(trendingMovies.filter((movie) => ids.includes(movie.id)));
    }
  }, [trendingMovies]);

  return (
    <main className="flex min-h-screen flex-col text-white">
      <Navbar />
      <Billboard />
      <div className="pb-40 font-semi-bold pt-4">
        <MovieList title="Trending Now" movies={trendingMovies}/>
        <MovieList title="My List" movies={favorites}/>
      </div>
    </main>
  );
}

export default Home;
