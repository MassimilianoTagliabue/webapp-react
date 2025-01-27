import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Homepage from "../pages/Homepage";
import MoviesPage from "../pages/MoviesPage";

function AppLayout () {

    return(
    <>
        <AppHeader/>
        <Outlet/>
        {/* <AppFooter/> */}
    </>
    )
};

export default AppLayout;