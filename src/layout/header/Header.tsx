import SearchBar from "./SearchBar";
import FavIcon from "./icons/FavIcon";
import SteamIcon from "./icons/SteamIcon";
import UserIcon from "./icons/UserIcon";

export default function Header() {
    const gridTemplate = {
        gridColumn: "1 / 3",
        gridRow: "1",
    };
    return (
        <header
            className="flex flex-col md:flex-row items-center justify-between p-4 gap-2 top-0 sticky z-50"
            style={gridTemplate}
        >
            <SteamIcon />
            <SearchBar />
            <div className="flex-row gap-2 items-center hidden md:flex">
                <FavIcon />
                <UserIcon />
            </div>
        </header>
    );
}
