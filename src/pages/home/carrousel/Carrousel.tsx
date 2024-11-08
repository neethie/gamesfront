import Sliders from "./Sliders";

import sliderGames from "./sliderGames";

export default function Carrousel() {
    return (
        <main className="flex justify-center ">
            {sliderGames.map((game) => (
                <Sliders index={game.id} key={game.id} />
            ))}
        </main>
    );
}
