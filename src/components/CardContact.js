import ContactStyle from './Contact.module.css'

const imgFB = ContactStyle.resizeContact
const imgGeneric = ContactStyle.Contact
const resMaps = ContactStyle.Maps

const CardContact = (props) => {
return(
<div className={`${props.contact[0].categoria === 'moderno' ? 'mt-3' : 'mt-0'} col-12 mt-lg-4 col-lg-8 p-3 bg-light m-auto`}>
<div className="col-12 p-2 bg-light shadow rounded">
<div className="d-flex justify-content-center">
{props.contact[0].testo !== 'Via del Progresso, 27 - Grotte di Castro (VT)' ?
<img className="img-fluid" src={props.bg} alt=""></img> :
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.35948529874!2d11.871096977397007!3d42.674926915149186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132925765e89eea5%3A0x58cb0af15645dd28!2sVia%20del%20Progresso%2C%2027%2C%2001025%20Grotte%20di%20Castro%20VT!5e0!3m2!1sit!2sit!4v1712764118753!5m2!1sit!2sit"
className={`${resMaps} w-100`}></iframe>
}
</div>
{ props.contact[0].testo !== 'Via del Progresso, 27 - Grotte di Castro (VT)' ?
<div className="d-flex flex-wrap justify-content-center justify-content-lg-evenly">
{ props.contact.map( dato =>
<a target="_blank" rel="noreferrer" style={{'cursor':'pointer'}} href={dato.link} className="my-3 mb-lg-0 d-flex p-2 col-12 col-lg-auto justify-content-center align-items-center text-black text-decoration-none">
<label style={{'cursor':'pointer'}} className="pe-3">{dato.testo}</label>
<div><img className={dato.testo === 'Seguimi su' ? imgFB : imgGeneric}
src={dato.img} alt=""></img></div>
</a>
)}
</div>
: <div className="d-flex flex-wrap justify-content-center justify-content-lg-evenly">
{ props.contact.map( dato =>
<a style={{'cursor':'pointer'}} target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/Xmyp35tqHb9mEP457' className="my-3 mb-lg-0 d-flex flex-column flex-lg-row text-center p-2 col-12 col-lg-auto justify-content-center align-items-center text-black text-decoration-none">
<div><img style={{'width': '35px'}}
src={dato.img} alt=""></img></div>
<label style={{'cursor':'pointer'}} className="d-none d-lg-flex ps-3">{dato.testo}</label>
<label style={{'cursor':'pointer'}} className="d-flex d-lg-none ps-3 mt-3">{dato.testo1}<br></br>{dato.testo2}</label>
</a>
)}
</div> }
</div>
</div>
)};

export default CardContact;