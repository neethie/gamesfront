import { Link } from "react-router-dom";

type HeaderSectionProps = {
    text: string;
    url: string;
};

export default function HeaderSection({ text, url }: HeaderSectionProps) {
    return (
        <header className="flex justify-between">
            <h2 className="text-lg">{text}</h2>
            <Link to={url} className="text-sm text-scampi-500">
                Ver todo
            </Link>
        </header>
    );
}
