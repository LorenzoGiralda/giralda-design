import { ChangeToggleView } from '../store/ToggleLight'
import { useSelector, useDispatch } from 'react-redux';

const IconRounded = (props) => {

    const dispatch = useDispatch()

    console.log(props.statoVista, 'statovista')

return(
<button disabled={props.statoVista === props.nome ? true : false}  onClick={() => {props.changeStateView(props.nome); dispatch(ChangeToggleView()) }} className={`${props.stile} ${props.class}`}>
<img className="img-fluid" src={props.img} alt={props.nome}></img>
</button>
)};

// disabled={props.statoVista === props.nome ? 'true' : 'false'} 
export default IconRounded;