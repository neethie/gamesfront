import GameCard from "../../../utils/GameCard";
import HeaderSection from "../../../utils/HeaderSection";

export default function PopularGames() {
    return (
        <section className="py-4">
            <HeaderSection text="Más populares" url="/games" />
            <main className="grid grid-cols-3 gap-x-6">
                <GameCard />
                <GameCard />
                <GameCard />
            </main>
        </section>
    );
}
