import { Outlet, NavLink } from "react-router-dom";
import Seo from './Seo'
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const BlogPage = () => {
return(
<>
<Seo
title = "Blog"
description = "articoli e curiosità sul mondo creativo"
keywords = "articoli sulla tipografia - logo design - ads da tutto il mondo"
></Seo>

<Outlet></Outlet>
</>   
)};

export default BlogPage;