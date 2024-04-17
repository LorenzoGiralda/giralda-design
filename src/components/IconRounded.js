import { ChangeToggleView } from '../store/ToggleLight'
import { useSelector, useDispatch } from 'react-redux';

const IconRounded = (props) => {

    const dispatch = useDispatch()

return(
<btn onClick={() => {props.changeStateView(props.nome); dispatch(ChangeToggleView()) }} className={`${props.stile} ${props.class}`}>
<img className="img-fluid" src={props.img} alt={props.nome}></img>
</btn>
)};

export default IconRounded;