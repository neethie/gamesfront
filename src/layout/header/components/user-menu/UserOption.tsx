type UserOptionProps = {
    text: string;
};

export default function UserOption({ text }: UserOptionProps) {
    return (
        <>
            <li className="p-1 hover:bg-black-secondary">
                <button className="text-sm w-full text-left">
                    <p>{text}</p>
                </button>
            </li>
        </>
    );
}
