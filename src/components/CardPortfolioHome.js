import { Link, useNavigate  } from "react-router-dom"
import CardPStyle from './CardPortfolioHome.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { ChangeState } from '../store/DatiPortfolioHome';
import {ChangeActiveRedux} from '../store/ActiveNavPortfolio';


const hoverImg = CardPStyle.hoverImg
const hoverTxt = CardPStyle.hoverTxt


const CardPortfolioHome = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

return(
<div className={`col-12 col-lg-4 p-2 bg-transparent d-flex justify-content-center 
${props.title === 'Brochure - Riviste' || props.title === 'Lavori Vari' || props.title === 'Siti e web App' ? 'mb-lg-0' : 'mb-lg-5'}
${props.title === 'Siti e web App' ? 'mb-0' : 'mb-5'}`}>
<div className={`${hoverTxt} bg-light shadow rounded`}>
<Link onClick={() => {dispatch(ChangeState(props.categoria));dispatch(ChangeActiveRedux('Portfolio')); navigate('portfolio')}} className="col-12 text-black text-decoration-none">
<h4 className="col-12 text-center p-2 m-0">
{props.title}
</h4>
<div className="border border-3 border-light rounded-bottom col-12 overflow-hidden d-flex justify-content-center">
<img className={`img-fluid ${hoverImg}`} src={props.img} alt="img"></img>    
</div>
</Link>
</div>
</div>
)};

export default CardPortfolioHome;