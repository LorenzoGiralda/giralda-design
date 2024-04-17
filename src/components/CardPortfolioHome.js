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

    const ValueView = useSelector((state) => state.ToggleLight.value)

return(
<div className={`col-12 col-lg-4 p-2 bg-transparent d-flex justify-content-center 
${props.title === 'Brochure - Riviste' || props.title === 'Lavori Vari' || props.title === 'Siti e web App' ? 'mb-lg-0' : 'mb-lg-5'}
${props.title === 'Siti e web App' ? 'mb-0' : 'mb-5'}`}>
<div className={`${hoverTxt} ${ValueView ? 'bg-light' : 'bg-secondary text-white'}  shadow rounded`}>
<Link onClick={() => {dispatch(ChangeState(props.categoria));dispatch(ChangeActiveRedux('Portfolio')); navigate('portfolio')}} className={`${ValueView ? 'text-dark' : 'text-light'} col-12 text-decoration-none`}>
<h4 className={`${ValueView ? 'text-dark' : 'text-light'} col-12 text-center p-2 m-0`}>
{props.title}
</h4>
<div className={`${ValueView ? 'border-light' : 'border-secondary'} border border-3 rounded-bottom col-12 overflow-hidden d-flex justify-content-center`}>
<img className={`img-fluid ${hoverImg}`} src={props.img} alt="img"></img>    
</div>
</Link>
</div>
</div>
)};

export default CardPortfolioHome;