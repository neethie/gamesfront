import { Link } from "react-router-dom";

export default function GameCard() {
    return (
        <Link to="/" className="w-full h-[270px] rounded-xl">
            <img
                src="https://store-images.s-microsoft.com/image/apps.17271.14474759442990181.2963530c-5009-4260-976b-b5f35b0963d5.f8d6441a-f491-4244-8b56-148b847cf65a?q=90&w=480&h=270"
                alt="juego"
                className="w-full h-full object-cover rounded-xl"
            />
            <div className="-translate-y-full bg-black-main bg-opacity-60 p-2 w-full h-20 backdrop-blur-md flex flex-col justify-between">
                <p className="text-sm">Battlefield V</p>
                <p className="font-bold">Gratis</p>
            </div>
        </Link>
    );
}
