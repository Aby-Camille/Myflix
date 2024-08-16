import Movie from '@/models/Movie';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaInfo } from "react-icons/fa6";
import FavoriteButton from '@/components/FavoriteButton';
import Modal from '@/components/Modal';

interface MovieCardProps {
    movie: Movie,
}

const MovieCard = ({ movie }: MovieCardProps) => {
    function play() {
        console.log(movie);
    }

    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]" loading="lazy"
            src={movie.thumbnailUrl} alt="Thumbnail" />
            <div className="opacity-0 absolute top-0 transition duration-500 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-t-md w-full h-[12vw]"
                src={movie.thumbnailUrl} alt="Thumbnail" loading="lazy" />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <button className="cursor-pointer text-black w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                        onClick={play}>
                            <BsFillPlayFill size={30} />
                        </button>
                        <FavoriteButton movieId={movie?.id}/>
                        <button id="openModal" className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
                        onClick={play}>
                            <FaInfo size={15} />
                        </button>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-white">2024</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p>
                            {movie.duration}
                        </p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {movie.genre}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;