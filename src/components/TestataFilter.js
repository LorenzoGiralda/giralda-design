import { useSelector, useDispatch } from 'react-redux';
import { ChangeToggle, changePageToggle2 } from '../store/ToggleFilter';

import stilePortfolio from './Portfolio.module.css'

const switche = stilePortfolio.switchToggle

const slideIn = stilePortfolio.switchSLideIn
const slideOut = stilePortfolio.switchSLideOut

// CREARE LOGICA AL CLICK SU TOGGLE SWITCH cambio testo e componente filter o search //

const TestataFilter = (props) => {

const dispatch = useDispatch()

const toggleValue = useSelector((state) => state.ToggleFilter.value)

return(
<div className="col-12 mt-4 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap">

<div className='w-100 text-center'>
{props.DatiLavorazioni &&
<h4>{toggleValue === false || toggleValue === undefined  ? 'Seleziona una categoria' :'Seleziona una lavorazione' }</h4>
}
{ props.DatiBlog &&
<h4>{toggleValue === false || toggleValue === undefined ? 'Seleziona la categoria' : 'Seleziona una News'}</h4>
}
</div> 

<div onClick={() => {toggleValue === undefined ? dispatch(changePageToggle2()) : dispatch(ChangeToggle()); props.statoIniziale()}}
className='bg-secondary bg-opacity-25 rounded-pill shadow-sm' style={{'width': '80px', 'height': '40px'}}>
<div style={{'width': '40px', 'height': '40px', 'cursor': 'pointer'}}
className={` ${toggleValue === true ? slideIn : toggleValue === false ? slideOut : switche}
rounded-circle bg-light position-relative border border-secondary border-opacity-25 border-2`}></div>
</div>

</div>
)};

export default TestataFilter;