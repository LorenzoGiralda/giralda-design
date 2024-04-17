import { useSelector, useDispatch } from 'react-redux';

const TitleSection = (props) => { 

    const ValueView = useSelector((state) => state.ToggleLight.value)

return(
<div className={`${ValueView ? 'text-dark' : 'text-white'} p-2 mb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center col-12`}>
{props.img !== '' ?
<div className="mb-3 mb-lg-0"><img style={{'width': '70px'}} src={props.img} alt="#"></img></div>
: ''}
<h2 style={{'fontWeight':'bold'}} className="p-0 m-0 ps-0 ps-lg-4 text-center">{props.title}</h2>
</div>
)};

export default TitleSection