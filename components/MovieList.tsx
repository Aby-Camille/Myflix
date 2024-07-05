'use client';

import React from 'react';
import MovieCard from '@/components/MovieCard';
import Movie from '@/models/Movie';

interface MovieListProps {
    title: string;
    movies: Movie[];
}

const MovieList = (props: MovieListProps) => {
    return (
        <div>
            <p className='text-white text-l font-bold mb-5 mt-5'>
                {props.title}
            </p>
            <div className='grid grid-cols-4 gap-2'>
                {props.movies?.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;