import { Link } from "react-router-dom";

type SidebarButtonProps = {
    text: string;
    icon?: React.ReactNode;
    link: string;
};

export default function SidebarButton({
    text,
    icon,
    link,
}: SidebarButtonProps) {
    return (
        <Link
            to={link}
            className="flex flex-row items-center gap-2 border-l-4 border-transparent hover:transition-all hover:border-scampi-900 hover:text-scampi-900 text-sm px-4 py-1"
        >
            {icon} {text}
        </Link>
    );
}
