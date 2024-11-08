import SearchBar from "./SearchBar";
import FavIcon from "./icons/FavIcon";
import UserIcon from "./icons/UserIcon";

export default function Header() {
    return (
        <header
            className="flex flex-col md:flex-row items-center justify-between py-4 px-8 gap-2"
            style={{ gridArea: "header" }}
        >
            <SearchBar />
            <div className="flex-row gap-2 items-center hidden md:flex">
                <FavIcon />
                <UserIcon />
            </div>
        </header>
    );
}
