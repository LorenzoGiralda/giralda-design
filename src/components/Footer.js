import position from '../img/icon-position.png'
import mobile from '../img/icon-mobile.png'
import mail from '../img/icon-mail.png'


const MapFooter = [
{
img: position,
alt: 'indirizzo',
testo: 'Via del Progresso, 27 - Grotte di Castro (VT)',
href: 'https://maps.app.goo.gl/KCKfDW3qk9ht4g6G9',
},
{
img: mobile,
alt: 'cellulare',
testo: '353 396 2554',
href: 'tel:3533962554',

},
{
img: mail,
alt:'email',
testo: 'lorenzo-giralda@outlook.it',
href: 'mailto:lorenzo-giralda@outlook.it',

}
]


const Footer = () => {
return(
<footer className="container-fluid bg-light d-flex flex-column flex-lg-row justify-content-center p-3 shadow">
{ MapFooter.map( dato => 
<div className={`d-flex justify-content-center align-items-center flex-wrap text-center ${dato.alt !== 'email' ? 'pb-4 pb-lg-0' : 'pb-0'} mb-lg-0`}>
<div className='pe-2'>
<img style={{'width': '20px'}} src={dato.img} alt={dato.alt}></img></div>
<a href={dato.href} target='_blank' rel="noreferrer" className={dato.alt !== 'email' ? 'pe-0 pe-lg-5' : '' }
>{dato.testo}</a>
</div>
)}
</footer>
)};

export default Footer;