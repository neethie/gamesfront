import { FaSteam } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SteamIcon() {
    return (
        <Link to="/" className="flex gap-2 items-center mb-16 px-4">
            <FaSteam className="md:h-8 md:w-8 w-5 h-5" />
            <h2 className="uppercase font-black hidden md:block">Steam</h2>
        </Link>
    );
}
