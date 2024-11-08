import { useState } from "react";
import clsx from "clsx";

import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    const [search, setSearch] = useState(false);

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch(!search);
    };

    return (
        <form>
            <div className="flex flex-row items-center border-2 border-scampi-900 rounded-2xl p-2 max-w-max gap-2">
                <button onClick={handleSearch}>
                    <CiSearch className="w-4 h-4 text-scampi-100" />
                </button>

                <input
                    id="search"
                    type="text"
                    placeholder="Search for games"
                    className={clsx(
                        "bg-transparent w-[350px] focus:outline-none text-sm text-scampi-100 transition-all md:block",
                        {
                            hidden: !search,
                            block: search,
                        }
                    )}
                />
            </div>
        </form>
    );
}
