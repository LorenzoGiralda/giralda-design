import stileTitleC from './TitleChiSono.module.css'
import { useSelector, useDispatch } from 'react-redux';


const marginDiv = stileTitleC.chiSono

const TitleChiSono = (props) => {

    const ValueView = useSelector((state) => state.ToggleLight.value)

return(
<div className={`${marginDiv} ${ValueView ? 'text-dark' : 'text-white'} p-2 d-flex flex-column flex-lg-row justify-content-center align-items-center col-12`}>
{props.img !== '' ?
<div style={{'width':'200px', 'height': '200px'}} className="border border-2 border-black d-flex justify-content-center mb-3 mb-lg-0 rounded-circle overflow-hidden"><img className="" src={props.img} alt="#"></img></div>
: ''}
<h2 style={{'fontWeight':'bold'}} className="p-0 m-0 ps-0 ps-lg-4 text-center">{props.title}</h2>
</div>
)};
       
export default TitleChiSono