import GameCard from "./components/GameCard";
import SearchOptions from "./components/SearchOptions";

export default function Store() {
    return (
        <div className="flex flex-row gap-2">
            <SearchOptions />
            <main className=" w-full grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 h-full">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />

                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </main>
        </div>
    );
}
