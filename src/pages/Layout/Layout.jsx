import { Outlet } from "react-router-dom"
import AppHeader from "../../components/AppHeader";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <AppHeader />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
