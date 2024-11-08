import { FaSteam } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SteamIcon() {
    return (
        <Link to="/" className="flex gap-2 items-center mb-16 px-4">
            <FaSteam className="h-8 w-8" />
            <h2 className="uppercase font-black">Steam</h2>
        </Link>
    );
}
