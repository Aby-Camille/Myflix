'use client';

import React from 'react';
import { isEmpty } from 'lodash';
import useMovieList from '@/app/hooks/useMovieList';

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
            <p className='text-white text-md'>
                {props.title}
            </p>
            <div className='grid grid-cols-4 gap-2'>
                {movies?.map((movie: Movie) => (
                    <div key={movie.id}>
                        {movie.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList;