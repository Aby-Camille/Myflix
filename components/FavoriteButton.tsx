import axios from 'axios';
import { useCallback } from 'react';
import { FaHeartCirclePlus, FaHeartCircleCheck } from "react-icons/fa6";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {

    const icon = isFavorite ? FaHeartCircleCheck : FaHeartCirclePlus;
    return (
        <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <icon />
        </div>
    )
}

export default FavoriteButton;