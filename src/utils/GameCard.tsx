import { Link } from "react-router-dom";

export default function GameCard() {
    return (
        <>
            <Link to="/" className="w-full h-[150px]">
                <img
                    src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c6c50b680c5e1846a9c77f86d5aa357d46584ffe-1920x1080.png"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl hover:backdrop-opacity-50"
                />
                <p>Valorant</p>
            </Link>
        </>
    );
}
