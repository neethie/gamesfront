import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Sidebar from "./sidebar/newSidebar";

export default function Layout() {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gridTemplateRows: "auto 1fr",
        gridTemplateAreas: `
        "aside header"
        "aside main"
    `,
    };

    return (
        <div style={gridStyle}>
            <Sidebar />
            <Header />

            <div className="overflow-y-hidden p-4" style={{ gridArea: "main" }}>
                <Outlet />
            </div>
        </div>
    );
}
