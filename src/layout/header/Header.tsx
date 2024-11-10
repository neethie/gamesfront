import SearchBar from "./components/SearchBar";
import FavIcon from "./components/icons/FavIcon";
import UserIcon from "./components/UserMenu";

export default function Header() {
    return (
        <header
            className="flex flex-col md:flex-row items-center justify-between py-4 px-8 gap-2 sticky  top-0 z-[100] bg-black-main"
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
