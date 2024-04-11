import search from '../img/icon-search.png'
import { Link } from 'react-router-dom';

import stileTestoLabel from './Portfolio.module.css'

const stileL = stileTestoLabel.stilePara

const RicercaFilter = (props) => {

return(
<>
<div className='col-12'>

<div className='d-flex flex-wrap col-12 justify-content-center'>

{/* BARRA RICERCA */}
<div className="col-12 col-lg-5 p-2 mt-5 bg-light">
<div className="d-flex align-items-center h-100 shadow col-12">
<div className='bg-light p-2 h-100 border border-secondary border-2 border-end-0' 
style={{'width': '55px','borderTopLeftRadius': '5px','borderBottomLeftRadius': '5px'}}>
<img className='img-fluid'
style={{'borderTopLeftRadius': '5px','borderBottomLeftRadius': '5px'}}
src={search} alt=""></img></div>
<div
style={{'borderTopRightRadius': '5px','borderBottomRightRadius': '5px'}}
className='bg-light p-1 h-100 w-100 border border-secondary border-2 border-start-0 d-flex align-items-center'>
<input onChange={(event) => props.statoSearch(event.target.value.toLowerCase())}
className="bg-secondary bg-opacity-25 form-control text-end border-0 shadow-none" 
type="text" id="inputSearch" placeholder=""></input>
</div>
</div>
</div>

</div>

{/* RISULTATI RICERCA */}
{ props.stateSearch &&
<div className='d-flex col-12 justify-content-center'>
<div
className="p-2 mt-1 d-flex justify-content-center position-absolute">
<div
style={{'top': '10px'}}
className='col-12 p-2 pb-0 bg-light shadow rounded position-relative border border-secondary border-2'>
{props.stateSearch && props.stateSearch.map( dato =>
<Link to={dato.id} className='d-flex justify-content-lg-end justify-content-start text-end mb-2 text-black text-decoration-none'>
<strong className={`me-2`}>{dato.titolo}</strong>
<div className=''>
<label style={{'overflow':'hidden','cursor': 'pointer'}} className={stileL}>{dato.categoria === 'Concept logo' ? '' : dato.dettagli}</label>
</div>
</Link>  
)}
</div>
</div>
</div>
}

</div>
</>
)};
    
export default RicercaFilter