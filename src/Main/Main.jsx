import { Outlet } from "react-router-dom";
import Navbar from "../HeaderamdFooter/Navber";
import Footer from "../HeaderamdFooter/Footer";

const Main = () => {
    return (
        <div className="flex flex-col justify-center">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;