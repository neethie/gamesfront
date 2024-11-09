import sliderGames from "./sliderGames";
import { useAppStore } from "../../../store/useAppStore";

type SlidersProps = {
    index: number;
};

export default function Sliders({ index }: SlidersProps) {
    const game = sliderGames[index - 1];

    const { sliderIndex } = useAppStore();
    const { setSliderIndex } = useAppStore();

    const sliderPosition = () => {
        const sumIndex = 3 - sliderIndex;

        let indexPosition = index;
        indexPosition = indexPosition + sumIndex;

        if (indexPosition < 1) indexPosition = indexPosition + 5;
        else if (indexPosition > 5) indexPosition = indexPosition - 5;

        const positionsByIndex = [
            "-translate-x-64 z-10 skew-y-3 scale-75", // Index 1
            "-translate-x-36 z-30 skew-y-3 scale-90", // Index 2
            "translate-x-0 z-50 scale-100", // Index 3
            "translate-x-36 z-40 -skew-y-3 scale-90", // Index 4
            "translate-x-64 z-20 -skew-y-3 scale-75", // Index 5
        ];

        return positionsByIndex[indexPosition - 1];
    };

    return (
        <div
            onClick={() => setSliderIndex(index)}
            style={{
                backgroundImage: `url(${game.banner})`,
            }}
            className={`w-[550px] h-[250px] rounded-2xl bg-cover bg-center p-2
        flex flex-col justify-end absolute shadow-2xl ${sliderPosition()} cursor-pointer transition-all duration-75  backdrop-blur`}
        >
            {sliderIndex === index && (
                <>
                    <h2 className="text-2xl z-[70]">{game.name}</h2>
                    <p className="text-xs col-start-1 w-2/3 z-[70]">
                        {game.description}
                    </p>
                </>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black to-transparent opacity-70 z-[60]"></div>
        </div>
    );
}
