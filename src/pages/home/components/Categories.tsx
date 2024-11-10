import CategoryTag from "../../../utils/CategoryTag";

import HeaderSection from "../../../utils/HeaderSection";

export default function PopularGames() {
    return (
        <section className="py-4">
            <HeaderSection text="Por Categorias" url="/games" />
            <main className="flex flex-col gap-1">
                <CategoryTag category="Aventura" />
                <CategoryTag category="Acción" />
            </main>
        </section>
    );
}
