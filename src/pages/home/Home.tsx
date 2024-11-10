// import Categories from "./components/Categories";
import PopularGames from "./components/PopularGames";
import WhishlistGames from "./components/Wishlist";
import Carrousel from "./components/Carrousel";

export default function Home() {
    return (
        <div className="px-2 space-y-2">
            <Carrousel />
            <PopularGames />
            <div className="grid grid-cols-[2fr_1fr] gap-x-6">
                <WhishlistGames />
            </div>
        </div>
    );
}
