import { Outlet } from "react-router-dom";
import Seo from './Seo'
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const PortfolioPage = () => {
return( 
<>
<Seo
title = "Portfolio"
description = "Portfolio - scopri tutte i lavori da me realizzati"
keywords = "portfolio - concept logo - bigliettini da visita - locandine - manifesti - depliant - brochure - lavori vari - siti e web app"
></Seo>
<Outlet></Outlet>
</>
)};

export default PortfolioPage;