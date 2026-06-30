import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import AdBar from "../components/adBar/adbar";

function MainLayout() {
    return (
        <div className="flex flex-col md:min-h-screen min-w-180 overflow-x-clip">
            <AdBar>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%</AdBar>
            <NavBar />
            <div className="flex flex-1 flex-col items-center justify-center min-h-150"><Outlet /></div>
            <Footer />
        </div>
    )
}

export default MainLayout;