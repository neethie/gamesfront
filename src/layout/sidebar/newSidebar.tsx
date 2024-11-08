import { FaHome, FaGamepad } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import SteamIcon from "../header/icons/SteamIcon";
import SidebarButton from "./Sidebar.button";

export default function Sidebar() {
    return (
        <aside
            className="py-5 border-r-2 border-black-secondary h-screen"
            style={{ gridArea: "aside" }}
        >
            <SteamIcon />

            <div className="space-y-2">
                <SidebarButton text="Home" link="/" icon={<FaHome />} />
                <SidebarButton
                    text="Tienda"
                    link="/store"
                    icon={<FaGamepad />}
                />
                <SidebarButton
                    text="Biblioteca"
                    link="/library"
                    icon={<MdAutoAwesomeMosaic />}
                />
                <SidebarButton
                    text="Configuración"
                    link="/settings"
                    icon={<IoMdSettings />}
                />
            </div>
        </aside>
    );
}
