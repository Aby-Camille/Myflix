'use client';

import { useCallback, useEffect, useState } from "react";
import { FaHeartCirclePlus, FaHeartCircleCheck } from "react-icons/fa6";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const [isFavorite, setFavorite] = useState<boolean>(false);

    // Check if the movie is already in the favorites list and change icon in conséquence.
    useEffect(() => {
        const ids: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorite(ids.includes(movieId));
    }, [movieId]);

    const icon = isFavorite ? <FaHeartCircleCheck /> : <FaHeartCirclePlus />;

    // Toggle the favorite status
    const toggleFavorite = useCallback(async() => {
        let ids = JSON.parse(localStorage.getItem('favorites') || '[]');

        // Add or remove the movie from the list
        if (ids.includes(movieId)) {
            ids = ids.filter((id: string) => id !== movieId);
        } else {
            ids.push(movieId);
        }

        // Update the local storage and the state
        setFavorite(!isFavorite);
        localStorage.setItem('favorites', JSON.stringify(ids));
    }, [movieId, isFavorite]);

    return (
        <button className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300" onClick={toggleFavorite}>
            {icon}
        </button>
    )
}

export default FavoriteButton;