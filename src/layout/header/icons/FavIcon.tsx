import { GrFavorite } from "react-icons/gr";

export default function FavIcon() {
    return (
        <button className="hover:bg-black-secondary transition-all hover:scale-105 rounded-2xl h-full p-2 flex items-center justify-center">
            <GrFavorite className="h-6 w-6" />
        </button>
    );
}
