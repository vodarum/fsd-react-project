import "./styles/index.scss";
import { useTheme } from "shared/lib/theme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";

export const App = () => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleDrawer = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames("app layout", {}, [theme])}>
            <Suspense fallback="">
                <Navbar className="layout-navbar" handlerDrawer={toggleDrawer} />
                <Sidebar className="layout-sidebar" collapsed={collapsed} />
                <main className="layout-main">
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};
