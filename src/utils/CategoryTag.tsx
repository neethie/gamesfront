type CategoryTagProps = {
    category: string;
};

export default function CategoryTag({ category }: CategoryTagProps) {
    return (
        <div className="rounded-3xl bg-black-secondary px-2 w-max">
            <p className="font-light">{category}</p>
        </div>
    );
}
