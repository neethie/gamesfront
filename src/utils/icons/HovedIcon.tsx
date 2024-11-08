import clsx from "clsx";
import { ReactNode, useState } from "react";

type PopularIconProps = {
    text: string;
    icon: ReactNode;
};

export default function HovedIcon({ text, icon }: PopularIconProps) {
    const [hoved, setHoved] = useState(false);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e.target);
        setHoved(!hoved);
    };

    return (
        <div
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
            className="bg-black-main h-6 w-max py-1 px-2 text-sm rounded-3xl flex gap-2 items-center"
        >
            {icon}
            <p
                id="xd"
                className={clsx(
                    {},
                    {
                        hidden: !hoved,
                        block: hoved,
                    }
                )}
            >
                {text}
            </p>
        </div>
    );
}
