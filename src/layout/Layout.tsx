import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
    const gridTemplate = {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "1fr auto",
    };

    return (
        <div style={gridTemplate}>
            <Header />
            <Sidebar />

            <div className="overflow-y-hidden p-4">
                <Outlet />
            </div>
        </div>
    );
}
