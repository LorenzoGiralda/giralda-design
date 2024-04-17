import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const RootPage = () => {

    const location = useLocation();

    useLayoutEffect(() => {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

return(
<div>
<ScrollUp></ScrollUp>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</div>
)};

export default RootPage;