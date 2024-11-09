import Carrousel from "./carrousel/Carrousel";
import Categories from "./Categories";
import PopularGames from "./PopularGames";
import WhishlistGames from "./Wishlist";

export default function Home() {
    return (
        <div className="px-2 space-y-2">
            <Carrousel />
            <PopularGames />
            <div className="grid grid-cols-[2fr_1fr] gap-x-6">
                <WhishlistGames />
                <Categories />
            </div>
        </div>
    );
}
