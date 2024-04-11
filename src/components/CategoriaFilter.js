import stilePortfolio from './Portfolio.module.css';

const resImgG = stilePortfolio.resImgFilter;


const CategoriaFilter = (props) => {
return(
<>
<div id={props.id} className='col-4 col-xl-auto bg-trasparent d-flex flex-wrap flex-column align-items-center mt-2 mt-lg-5 p-2'>
<div onClick={() => {props.clicca(props.title)}} style={{'cursor': 'pointer'}} className='d-flex flex-column align-items-center'>
{props.sezione === 'Portfolio' ?
 <div><img src={props.img} alt={props.alt}></img></div> :
 <div className={resImgG}><img className='img-fluid rounded border border-1 border-dark' src={props.img} alt=""></img></div> 
}
<div className='text-center mt-3'>{props.title}</div>
</div>
</div>
</>
)};

export default CategoriaFilter