import { useAppStore } from "../../../../store/useAppStore";
import { getTextByType } from "./userOptions";

type UserOptionProps = {
    type: number;
};

export default function UserOption({ type }: UserOptionProps) {
    const { setOptionBySelected, toggleUserMenu } = useAppStore();

    const handleButton = () => {
        setOptionBySelected(type);
        toggleUserMenu();
    };

    return (
        <>
            <li className="p-1 hover:bg-black-secondary">
                <button
                    className="text-sm w-full text-left"
                    onClick={handleButton}
                >
                    <p>{getTextByType(type)}</p>
                </button>
            </li>
        </>
    );
}
