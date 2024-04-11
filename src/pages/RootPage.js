import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const RootPage = () => {
return(
<div>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>   
</div>
)};

export default RootPage;