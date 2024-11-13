import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAppStore } from "../../../store/useAppStore";
import UserOptions from "./user-menu/UserOptions.tsx";

export default function UserIcon() {
    const { isUserMenuOpen, toggleUserMenu } = useAppStore();

    return (
        <>
            <div className="relative">
                <button
                    onClick={toggleUserMenu}
                    className=" rounded-2xl flex flex-row items-center gap-2 p-2 "
                >
                    <div className="bg-scampi-100 rounded-full w-6 h-6"></div>
                    <p className="m-0 text-sm">Invitado</p>
                    {isUserMenuOpen ? (
                        <>
                            <IoIosArrowUp />
                        </>
                    ) : (
                        <IoIosArrowDown />
                    )}
                </button>
                <UserOptions />
            </div>
        </>
    );
}
