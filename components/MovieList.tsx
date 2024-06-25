'use client';

import React from 'react';
import useMovieList from '@/app/hooks/useMovieList';
import MovieCard from '@/components/MovieCard';

interface MovieListProps {
    title: string;
}

interface Movie {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
}

const MovieList = (props: MovieListProps) => {
    const movieList = useMovieList();
    const movies: Movie[] = movieList.data;

    return (
        <div>
            <p className='text-white text-lg font-bold mb-5'>
                {props.title}
            </p>
            <div className='grid grid-cols-4 gap-2'>
                {movies?.map((movie: Movie) => (
                    <MovieCard key={movie.id} data={movie}>
                        {movie.title}
                    </MovieCard>

                ))}
            </div>
        </div>
    )
}

export default MovieList;