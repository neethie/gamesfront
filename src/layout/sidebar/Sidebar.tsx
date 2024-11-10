import { GrHomeRounded } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";

import SteamIcon from "../header/components/icons/SteamIcon";
import SidebarButton from "./ButtonSidebar";

export default function Sidebar() {
    return (
        <aside
            className="py-5 border-r-2 border-black-secondary h-screen sticky top-0 left-0 w-max flex flex-col items-center bg-black-main"
            style={{ gridArea: "aside" }}
        >
            <SteamIcon />

            <div className="space-y-6">
                <SidebarButton
                    text="Home"
                    link="/"
                    icon={<GrHomeRounded className="h-6 w-6" />}
                />
                <SidebarButton
                    text="Tienda"
                    link="/store"
                    icon={<IoCartOutline className="h-6 w-6" />}
                />
                <SidebarButton
                    text="Biblioteca"
                    link="/library"
                    icon={<LuLayoutDashboard className="h-6 w-6" />}
                />
                <SidebarButton
                    text="Amigos"
                    link="/friends"
                    icon={<LiaUserFriendsSolid className="h-6 w-6" />}
                />
            </div>
        </aside>
    );
}
