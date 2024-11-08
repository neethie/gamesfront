// Componentes
import SidebarButton from "./Sidebar.button";

// Iconos
import { FaHome } from "react-icons/fa";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useUIStore } from "../../store/ui/ui-store";

import { RxHamburgerMenu } from "react-icons/rx";

// Utils
import clsx from "clsx";

export default function Sidebar() {
    const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
    const toggleSidebar = useUIStore((state) => state.toggleSidebar);

    const isMobile = useUIStore((state) => state.isMobile);

    const gridTemplate = {
        gridColumn: "1",
        gridRow: "2",
    };

    return (
        <>
            {isMobile && (
                <button className="absolute top-10 left-10 border-2 border-scampi-900 rounded-2xl p-2">
                    <RxHamburgerMenu className="w-4 h-4" />
                </button>
            )}
            {isSidebarOpen && (
                <div
                    className="bg-black bg-opacity-50 h-screen absolute top-0 left-0 w-full z-10"
                    onClick={toggleSidebar}
                ></div>
            )}
            <aside
                style={gridTemplate}
                className={clsx(
                    "flex flex-col w-[200px] p-4 md:h-max transition-all z-20",
                    {
                        "absolute top-0 left-0": isMobile,
                        "translate-x-0 bg-[#141415]":
                            isSidebarOpen || !isMobile,
                        "-translate-x-full": !isSidebarOpen,
                    }
                )}
            >
                <div className="z-10 bg-black top-0 left-0 bottom-0 right-0"></div>
                <div className="space-y-2">
                    <SidebarButton
                        text="Game Store"
                        link="/"
                        icon={<FaHome />}
                    />
                    <SidebarButton
                        text="Library"
                        link="/library"
                        icon={<MdAutoAwesomeMosaic />}
                    />
                    <SidebarButton
                        text="Community"
                        link="/community"
                        icon={<FaGamepad />}
                    />
                    <SidebarButton
                        text="Friends"
                        link="/friends"
                        icon={<IoMdSettings />}
                    />
                </div>
            </aside>
        </>
    );
}
