import { NavLink } from "react-router-dom";

type SidebarButtonProps = {
    text: string;
    icon?: React.ReactNode;
    link: string;
};

export default function SidebarButton({ icon, link }: SidebarButtonProps) {
    return (
        <NavLink
            to={link}
            style={({ isActive }: { isActive: boolean }) => ({
                backgroundColor: isActive ? "#28242cbe" : "",
            })}
            className={`flex rounded-xl flex-row items-center gap-2 transition-all duration-100 hover:bg-black-secondary hover:scale-105 text-sm font-extralight p-3 `}
        >
            {icon}
        </NavLink>
    );
}
