import { FaCheck } from "react-icons/fa6";
import { Categories } from "../../../utils/Categories";

export default function SearchOptions() {
    return (
        <aside className="bg-black-secondary p-4 w-max space-y-2 rounded-xl h-max">
            <h5 className="uppercase text-[0.6rem] text-[#c0c0c0]">Género</h5>
            <div className="flex flex-col gap-1 w-max">
                {Categories.map((category) => (
                    <div className="flex justify-between items-center gap-3 text-sm">
                        <button key={category.id} className="text-left w-full">
                            {category.category}
                        </button>
                        <FaCheck className="text-black-darkgray" />
                    </div>
                ))}
            </div>
            <div className="bg-black-darkgray w-full h-[0.1rem] rounded-3xl"></div>
            <h5 className="uppercase text-[0.6rem] text-[#c0c0c0]">Precio</h5>
            <div className="flex justify-between items-center gap-3 text-sm">
                <button className="text-left w-full">Gratis</button>
                <FaCheck className="text-black-lightgray" />
            </div>
        </aside>
    );
}
