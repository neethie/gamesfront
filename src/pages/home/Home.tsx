// import Categories from "./components/Categories";
import PopularGames from "./components/PopularGames";
import Carrousel from "./components/Carrousel";

export default function Home() {
    return (
        <div className="px-2 space-y-2">
            <Carrousel />
            <PopularGames />
        </div>
    );
}
