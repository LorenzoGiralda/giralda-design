 import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { changePageToggleXl } from '../store/ToggleFilter';
import CardXlModule from './CardXl.module.css'

import loc from '../img/locandina-carnevale.png'

import stileM from './Portfolio.module.css'

import fr from '../img/depliant-equo-fr.png'
import re from '../img/depliant-equo-re.png'
import arrow from '../img/icon-arrow.png'

const stileArrow = stileM.ArrowRotate
const stileArrow1 = stileM.ArrowRotate1
const scaleImg = stileM.scaleImg
const bgSlide = stileM.bgSlide

const CardXl = (props) => {

  const dispatch = useDispatch()

  const toggleValue = useSelector((state) => state.ToggleFilter.value)

  const ValueView = useSelector((state) => state.ToggleLight.value)

return(

<div className="col-12 p-4 p-lg-2 bg-trasparent d-flex justify-content-center">

{ // VISUALIZZARE SOLO SE LA SEZIONE è PORTFOLIO //

props.dati === 'Portfolio' &&

props.MapXl.map( dato =>
<div className={`${ValueView ? 'bg-light' : 'bg-secondary text-light'} col-12 col-lg-6 p-2 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center rounded shadow`}>

<div className='d-flex justify-content-between justify-content-lg-end col-12'>
<h3 className={`${CardXlModule.MarginLeftCard} d-block d-lg-none mt-2 mb-2 mb-lg-0 w-100 text-center`}>{dato.titolo}</h3>
<Link onClick={() => toggleValue === 'false' ? dispatch(changePageToggleXl()) : '' } to=".." relative="path" type="button" class="btn-close end-0 p-2 pt-3" aria-label="Close"></Link> 
</div>

<div className={`${bgSlide} col-12 col-lg-4 p-2 d-flex justify-content-center`}>
<img
style={{'cursor':'pointer'}}
data-bs-toggle="modal" data-bs-target="#ModalPicture" className={`${scaleImg} img-fluid`} src={dato.img} alt={dato.alt}></img>    
</div>

<div className="bg-trasparent col-12 col-lg-8 p-2">
<h3 className='d-none d-lg-block m-0 p-0'>{dato.titolo}</h3>
<div>
<label className='mt-1 mt-2 mt-lg-4'><strong>dettagli: </strong>
{dato.dettagli}</label>
</div>

{  // INSERIRE CONDIZIONE DI VISUALIZZAZIONE SE LA LAVORAZIONE è DIVERSA DA SITI E WEB APP e LOGO //
dato.formato !== '' ?
<div>
<label className='mt-2'><strong>formato: </strong>{dato.formato}</label>
</div>
: ''}

{ // INSERIRE CONDIZIONE DI VISUALIZZAZIONE SE LA LAVORAZIONE è DIVERSA DA SITI E WEB APP e LOGO //
dato.supporto !== '' ?
<div>
<label className='mt-2'><strong>supporto: </strong>{dato.supporto}</label>
</div>
: ''}

{ // INSERIRE CONDIZIONE DI VISUALIZZAZIONE SE LA LAVORAZIONE è SITO E WEB APP //
dato.link &&
<div className='mt-3 d-flex'>
<a style={{'background': 'orange'}} className='p-1 rounded text-decoration-none text-center text-lg-start text-black col-12 col-lg-auto'
href={dato.link}>Visita il sito</a>
</div>  
}  

</div>

</div>
)}





{ 

props.dati === 'Blog' &&

props.MapXl.map( dato =>

<div className={`${ValueView ? 'bg-light' : 'bg-secondary text-light'} col-12 col-lg-6 p-2 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center rounded shadow`}>

<div className='d-flex justify-content-between justify-content-lg-end col-12'>
<h3 className='d-block d-lg-none mt-2 w-100 text-center'>{dato.titolo}</h3>
<Link to=".." relative="path" type="button" class="btn-close end-0 p-2 pt-3" aria-label="Close"></Link> 
</div>

<div className={`${bgSlide} col-12 col-lg-4 p-2 d-flex justify-content-center`}>
<img
style={{'cursor':'pointer'}}
data-bs-toggle="modal" data-bs-target="#ModalPicture" className={`${scaleImg} img-fluid`} src={dato.img} alt={dato.alt}></img>    
</div>

<div className="bg-trasparent col-12 col-lg-8 p-2 ">
<h3 className='d-none d-lg-block m-0 p-0'>{dato.titolo}</h3>
<label className='mt-1 mt-lg-4'>
{dato.dettagli}</label>


{
dato.link !== '' ?
<div className='mt-3 d-none'>
<a style={{'background': 'orange'}} className='p-1 rounded text-decoration-none text-black'
href='ciao'>Scopri di più sul font</a>
</div>  : ''
} 

</div>

<div className='col-12 p-2'>
<p>{dato.descrizione}</p>

 {
 dato.categoria === 'Tipography' ?
<label><strong>Curiosità: </strong>
L’Impact in realtà ottenne il suo primo momento di gloria grazie alla Microsoft, che lo inserì nei sistemi operativi di Windows già dai primi anni ’90. Inoltre essendo un font molto “accomodante” dal punto di vista della compatibilità con i device informatici, venne introdotto nella lista degli 11 font consigliati per la creazione di siti internet dal consorzio W3C.
</label> : ''
}
</div>

</div>

)}





{ // MODAL SLIDESHOW
<div style={{'marginTop': '100px'}}
className="modal fade ciao modal-lg" id="ModalPicture" tabindex="-1" aria-labelledby="ModalPicture" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        { props.MapXl.map( dato =>
        dato.categoria === 'Concept logo' ? '' :
          <h5 class="modal-title" id="ModalPicture">{dato.titolo} - {dato.dettagli}</h5>
        )}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
     <div class="modal-body">
  
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
   
{ props.MapXl.map( dato =>

  dato.img2 !== '' ?
  <>
    <div class="carousel-item active">
    <img src={dato.img} class="d-block w-100" alt="..."></img>
    </div> 
    <div class="carousel-item">
    <img src={dato.img2} class="d-block w-100" alt="..."></img>
    </div>
    </> :
      <div class="carousel-item active">
      <img src={dato.img} class="d-block w-100" alt="..."></img>
      </div>
)}
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className='bg-none' class="carousel-control-prev-icon" aria-hidden="true"></span>
    <div>
    <img className={stileArrow} src={arrow} alt="ciao"></img>    
    </div>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className='bg-none' class="carousel-control-next-icon" aria-hidden="true"></span>
    <div>
    <img className={stileArrow1} src={arrow} alt="ciao"></img>    
    </div>
  </button>
</div>
      </div>
    </div>
  </div>
</div>
}

</div>
)};

export default CardXl;