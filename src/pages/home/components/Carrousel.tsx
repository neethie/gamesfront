import Sliders from "./carrousel/Sliders";

import sliderGames from "./carrousel/sliderGames";

export default function Carrousel() {
    return (
        <main className="flex justify-center md:h-[300px] h-[150px]">
            {sliderGames.map((game) => (
                <Sliders index={game.id} key={game.id} />
            ))}
        </main>
    );
}
