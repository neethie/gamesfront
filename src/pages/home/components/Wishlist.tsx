import GameCard from "../../../utils/GameCard";
import HeaderSection from "../../../utils/HeaderSection";

export default function WhishlistGames() {
    return (
        <section className="py-4">
            <HeaderSection text="Mi lista de deseos" url="/games" />
            <main className="grid grid-cols-2 gap-x-6">
                <GameCard />
                <GameCard />
            </main>
        </section>
    );
}
