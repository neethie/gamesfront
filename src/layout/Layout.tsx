import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
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

            <div className=" p-4" style={{ gridArea: "main" }}>
                <Outlet />
            </div>
        </div>
    );
}
