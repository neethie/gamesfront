import clsx from "clsx";

import { useAppStore } from "../../../../store/useAppStore";

import UserOption from "./UserOption";
import { USER_OPTIONS } from "./userOptions";

export default function UserOptions() {
    const { isUserMenuOpen, isLogged } = useAppStore();

    const { USER_LOGIN, USER_LOGOUT, USER_PROFILE, USER_SETTINGS } =
        USER_OPTIONS;

    return (
        <nav
            className={clsx(
                "mt-1 absolute bg-black-secondary w-full rounded-md px-2 transition-all",
                {
                    "hidden ": !isUserMenuOpen,
                    "block ": isUserMenuOpen,
                }
            )}
        >
            <ul>
                {isLogged ? (
                    <>
                        <UserOption type={USER_PROFILE} />
                        <UserOption type={USER_SETTINGS} />
                        <UserOption type={USER_LOGOUT} />
                    </>
                ) : (
                    <UserOption type={USER_LOGIN} />
                )}
            </ul>
        </nav>
    );
}
