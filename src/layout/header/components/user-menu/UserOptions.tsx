import clsx from "clsx";

import { useAppStore } from "../../../../store/useAppStore";

import UserOption from "./UserOption";

export default function UserOptions() {
    const { isUserMenuOpen, isLogged } = useAppStore();

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
                        <UserOption text="Perfil" />
                        <UserOption text="Configuración" />
                        <UserOption text="Cerrar Sesión" />
                    </>
                ) : (
                    <UserOption text="Iniciar Sesión" />
                )}
            </ul>
        </nav>
    );
}
