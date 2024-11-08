import { FaFireAlt } from "react-icons/fa";
import PopularIcon from "../../../utils/icons/PopularIcon";
import Button from "../../../utils/Button";

export default function Hero() {
    return (
        <main className="bg-slate-700 p-5 space-y-2 rounded-2xl grid grid-cols-[2fr_1fr]">
            <div className="space-y-2">
                <PopularIcon text="Popular" icon={<FaFireAlt />} />
                <div className="">
                    <h3 className="text-xl">Valorant</h3>
                    <p className="text-sm">
                        Combina tu estilo y experiencia en un escenario global y
                        competitivo. Tienes 13 rondas para atacar y defender tu
                        lado con armas precisas y habilidades tácticas. Además,
                        al contar con una sola vida por ronda, tendrás que
                        pensar más rápido que tu oponente si quieres sobrevivir.
                        Enfréntate a enemigos en los modos competitivo y normal,
                        así como en Deathmatch y Spike Rush.
                    </p>
                </div>
                <Button text="Jugar" url="/valorant" />
            </div>
            <div className="relative"></div>
        </main>
    );
}
