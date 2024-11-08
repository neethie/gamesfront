import { Link } from "react-router-dom";

type ButtonProps = {
    text: string;
    url: string;
};

export default function Button({ text, url }: ButtonProps) {
    const classname = "bg-scampi-100 px-2 py-1 rounded-2xl text-black-main";
    return (
        <>
            {url.length ? (
                <Link to={url} className={classname}>
                    {text}
                </Link>
            ) : (
                <button className={classname}>
                    <p className="text-black-main">{text}</p>
                </button>
            )}
        </>
    );
}
