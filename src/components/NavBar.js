import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { changePageToggle } from '../store/ToggleFilter';
import { ChangeState } from '../store/DatiPortfolioHome';
import {ChangeStateBlogHome} from '../store/DatiBlogHome';

import IconRounded from "./IconRounded";

import NavStile from './NavBar.module.css'

import Logo from '../img/logo-giralda-lorenzo-graphic-e-web-designer-developer.png'
import Luna from '../img/icon-light.png'
import Sole from '../img/icon-sun.png'

import Home from '../img/home.png'
import ChiSono from '../img/chi-sono.png'
import Portfolio from '../img/portfolio.png'
import Blog from '../img/blog.png'
import Contatti from '../img/contatti.png'



const LinkNavbar = [
{
nome: 'Home',
img: Home,
link: '',     
},
{
nome: 'Chi sono',
img: ChiSono,
link: 'chi-sono',     
},
{
nome: 'Portfolio',
img: Portfolio,
link: 'portfolio',     
},
{
nome: 'Blog',
img: Blog,
link: 'blog',        
},  
{
nome: 'Contatti',
img: Contatti,
link: 'contatti',    
}   
]

const BtnNav = [
{
nome: 'sole',
img: Sole,
active: 'bg-dark p-1 p-lg-2 rounded-circle me-2 d-flex justify-content-center align-items-center',
stile: 'bg-dark bg-opacity-25 p-1 p-lg-2 rounded-circle me-2 d-flex justify-content-center align-items-center',
class: NavStile.class
},
{
nome: 'luna',
img: Luna,
active: 'bg-dark p-1 p-lg-2 rounded-circle me-2 d-flex justify-content-center align-items-center',
stile: 'bg-dark bg-opacity-25 p-1 p-lg-2 rounded-circle me-2 d-flex justify-content-center align-items-center',
class: NavStile.class   
} 
]


const Navbar = () => {

    const toggleValue = useSelector((state) => state.ToggleFilter.value)
    const valueActive = useSelector((state) => state.ActiveNavPortfolio.value)
    const valueActiveBlog = useSelector((state) => state.ActiveNavBlog.value)
    const dispatch = useDispatch()


        useEffect(() => {
        if(valueActive.payload !== undefined && valueActive.payload === 'Portfolio'){
        changeActive(valueActive.payload)
        console.log(valueActive.payload, 'payload active component')
        }else if(valueActiveBlog.payload !== undefined && valueActiveBlog.payload === 'Blog'){
        changeActive(valueActiveBlog.payload)
        }else{
        return   
        }
        },[valueActive, valueActiveBlog]);
    


const navigate = useNavigate()

const [stateActive, changeActive] = useState('Home')

const [stateView, changeViewState] = useState('sole')

const BootstrapNav = 'nav-link d-flex align-items-center me-2'


const changeStateView = (nome) => {
changeViewState(nome)
}


return(
<nav class={` ${ NavStile.navSticky} navbar navbar-expand-lg bg-body-tertiary shadow`}>

<div class="container-fluid">

<NavLink onClick={() => changeActive('Home')}className="navbar-brand" to="">
<div className="d-flex d-sm-none">
<img style={{'width': '235px'}} src={Logo} alt="logo"></img>
</div> 
<div className="d-none d-sm-flex">
<img className={NavStile.resLogo} src={Logo} alt="logo"></img>
</div>  
</NavLink>

<div className="d-flex flex-column">

{/* COMPONENTE ICON */}
<div className="d-flex d-lg-none">
{BtnNav.map( dato =>
<IconRounded
changeStateView = {changeStateView}
stile = {dato.nome === stateView ? dato.active : dato.stile}
nome = {dato.nome}
img = {dato.img}
class = {dato.class}
></IconRounded>
)}
</div>

<button style={{'boxShadow': 'none'}}
className={`navbar-toggler mt-3 px-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

</div>


<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
<div className={`navbar-nav`}>
{ LinkNavbar.map( dato =>
<NavLink onClick={()=>{dispatch(ChangeStateBlogHome(''));dispatch(ChangeState('')); changeActive(dato.nome); navigate(dato.link); dispatch(changePageToggle())}}
className={`${BootstrapNav} ${NavStile.navStile} ${stateActive === dato.nome ? NavStile.navStiles : ''}`} 
data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
<div><img style={{'width': '35px'}} src={dato.img} alt=""></img></div>
<div className="ms-2">{dato.nome}</div>
</NavLink>
)}
</div>
</div>

{/* COMPONENTE ICON */}
<div className="d-none d-lg-flex">
{BtnNav.map( dato =>
<IconRounded
changeStateView = {changeStateView}
stile = {dato.nome === stateView ? dato.active : dato.stile}
nome = {dato.nome}
img = {dato.img}
class = {dato.class}
></IconRounded>
)}
</div>

</div>

</nav>
)};

export default Navbar;