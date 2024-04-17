import { Outlet, NavLink } from "react-router-dom";
import Seo from './Seo'
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const ContattiPage = () => {
return(
<>
<Seo
title = "Contatti"
description = "Contattami per info o un preventivo"
keywords = "contatti - social - cellulare - indizzo"
></Seo>
<Outlet></Outlet>
</>
)};

export default ContattiPage;