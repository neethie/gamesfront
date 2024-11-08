import { IoIosArrowDown } from "react-icons/io";

export default function UserIcon() {
    return (
        <div className="border-2 border-scampi-900 rounded-2xl flex flex-row items-center gap-2 p-2">
            <div className="bg-scampi-100 rounded-full w-6 h-6"></div>
            <p className="m-0">Invitado</p>
            <button>
                <IoIosArrowDown />
            </button>
        </div>
    );
}