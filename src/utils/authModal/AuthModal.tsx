import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

import { USER_OPTIONS } from "../../layout/header/components/user-menu/userOptions";

import { IoClose } from "react-icons/io5";

export default function AuthModal() {
    const { isAuthMenuOpen, setAuthMenu, authMenu } = useAppStore();

    const { USER_LOGIN, USER_REGISTER } = USER_OPTIONS;

    const handleClose = () => {
        setAuthMenu(false, 0);
    };

    const handleSetRegister = () => {
        setAuthMenu(true, USER_REGISTER);
    };

    if (isAuthMenuOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <>
            {isAuthMenuOpen && (
                <>
                    <div
                        className="bg-[#000] absolute top-0 left-0 bottom-0 right-0 z-[100] opacity-80 min-h-screen"
                        onClick={handleClose}
                    ></div>
                    {authMenu === USER_LOGIN && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] bg-black-main rounded-2xl grid grid-cols-[1fr_2fr] justify-centers">
                            <div className="">
                                <img
                                    src="https://images7.alphacoders.com/536/536426.png"
                                    alt=""
                                    className="object-cover w-full h-full object-center rounded-l-2xl"
                                />
                            </div>
                            <div className="px-8 py-16 font-light relative">
                                <button
                                    className="flex absolute right-0 top-0 m-5"
                                    onClick={handleClose}
                                >
                                    <IoClose className="text-scampi-600 h-6 w-6" />
                                </button>
                                <h4 className="uppercase text-xl">
                                    Iniciar Sesión
                                </h4>
                                <form action="" className="space-y-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="">Usuario</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa tu usuario"
                                            className="bg-black-secondary rounded-sm py-1 px-2 focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between items-center">
                                            <label htmlFor="">Contraseña</label>
                                            <Link to={"/"}>
                                                <p className="text-sm text-scampi-600 ">
                                                    Olvide mi contraseña
                                                </p>
                                            </Link>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                            className="bg-black-secondary rounded-sm py-1 px-2 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="submit"
                                            value="Iniciar Sesión"
                                            className="uppercase w-full bg-scampi-600 rounded-md py-1 cursor-pointer"
                                        />
                                        <p className="text-center text-sm ">
                                            ¿No tienes una cuenta?{" "}
                                            <button onClick={handleSetRegister}>
                                                <span className="text-scampi-600 font-bold">
                                                    Registrate
                                                </span>
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
