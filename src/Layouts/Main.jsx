import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    return (
        <div className="bg-indigo-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;