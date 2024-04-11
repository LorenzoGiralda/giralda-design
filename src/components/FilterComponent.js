import { useSelector, useDispatch } from 'react-redux';
import { ChangeToggle } from '../store/ToggleFilter';

import RicercaFilter from "./RicercaFilter";
import CategoriaFilter from "./CategoriaFilter";
import TestataFilter from "./TestataFilter";


const  FilterComponent = (props) => {

    const toggleValue = useSelector((state) => state.ToggleFilter.value)
    const dispatch = useDispatch()


return(
<>
<TestataFilter
statoIniziale = {props.statoIniziale}
DatiLavorazioni = {props.DatiLavorazioni}
DatiBlog = {props.DatiBlog}
></TestataFilter>


<div 
className={`d-flex mt-4 mt-lg-0 flex-wrap ${props.DatiBlog && 'justify-content-evenly'} ${props.DatiLavorazioni && 'justify-content-center justify-content-lg-between'} w-100`}>
{(toggleValue === false || toggleValue === undefined) && props.DatiLavorazioni && props.DatiLavorazioni.map( dato =>
<CategoriaFilter
id = {dato.id} 
sezione = {dato.sezione}
title = {dato.title}
img = {dato.img}
alt = {dato.alt}
clicca = {props.clicca}
></CategoriaFilter>
)} 
{(toggleValue === false || toggleValue === undefined) && props.DatiBlog && props.DatiBlog.map( dato =>
<CategoriaFilter
id = {dato.id} 
sezione = {dato.sezione}
title = {dato.title}
img = {dato.img}
alt = {dato.alt}
clicca = {props.clicca}
></CategoriaFilter>
)}
</div>

{toggleValue &&
<RicercaFilter
statoSearch = {props.statoSearch}
statePortfolio = {props.statePortfolio}
stateSearch = {props.stateSearch}
></RicercaFilter>
}
</>
)};

export default FilterComponent;