import stileMe from './ChiSonoMe.module.css'

const stileP = stileMe.resizeP
const stileImg = stileMe.resizeImg
const stileA = stileMe.changeA

const ChiSonoMe = (props) => {
return(
<>
<div className='d-flex flex-wrap align-items-center justify-content-center'>
<p className={`col-12 col-lg-3 bg-light p-2 text-center ${stileP}`}>{props.testo1}</p>
<div className="col-12 col-lg-6 bg-light d-flex justify-content-center p-3">
<img img className={stileImg} src={props.img} alt="#"></img></div>
<p className={`col-12 col-lg-3 bg-light p-2 text-center ${stileP}`}>{props.testo2}</p>
<a href={props.link} download={props.link}
className={`mt-5 col-12 d-flex align-items-center justify-content-center pe-auto ${stileA}`}>
<div><img style={{'width': '40px'}} src={props.icon} alt="#"></img></div>
<div className="ms-3">{props.testoLink}</div>    
</a>
</div>
</>
)};

export default ChiSonoMe;