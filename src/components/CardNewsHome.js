import { Link } from 'react-router-dom';
import stileBlogHome from './CardNewsHome.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {ChangeStateBlogHome} from '../store/DatiBlogHome';
import {ChangeActiveReduxBlog} from '../store/ActiveNavBlog'

const hoverPortfolio = stileBlogHome.hoverPortfolio

const CardNewsHome = (props) => {

const dispatch = useDispatch()

return(
<div style={{'height': '200px'}} className="col-12 col-lg-4 p-2 bg-trasparent text-center text-white">
<div style={{'backgroundImage': `url(${props.bg})`}} className="col-12 bg-light h-100 rounded">
<Link onClick={() => {dispatch(ChangeStateBlogHome(props.categoria)); dispatch(ChangeActiveReduxBlog('Blog'))}} to={'blog'} className='text-white text-decoration-none'>
<div className={`${hoverPortfolio} d-flex flex-column justify-content-center align-items-center h-100 rounded`}>
<h3 className='p-2'>{props.title}</h3>
<label className='p-2'>{props.subtitle}</label>
</div>
</Link>
</div>
</div>
)};

export default CardNewsHome