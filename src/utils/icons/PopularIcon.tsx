import { ReactNode } from "react";

type PopularIconProps = {
    text: string;
    icon: ReactNode;
};

export default function PopularIcon({ text, icon }: PopularIconProps) {
    return (
        <div className="bg-black-main h-6 w-max py-1 px-2 rounded-3xl flex gap-2 items-center transition-all">
            {icon}
            <p className="text-sm">{text}</p>
        </div>
    );
}
