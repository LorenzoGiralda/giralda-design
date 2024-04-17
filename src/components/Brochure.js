import Brochures from '../img/brochure-giralda.png'
import IconDownload from '../img/icon-download.png';
import IconDownloadDark from '../img/icon-download-dark.png';
import stileBrochure from './Brochure.module.css';
import Brochurese from '../img/Brochure Giralda.pdf'

import { useSelector, useDispatch } from 'react-redux';

const HoverBrochure = stileBrochure.HoverBrochure
const BrochureDark = stileBrochure.BrochureDark

const Brochure = () => {

    const ValueView = useSelector((state) => state.ToggleLight.value)

return(
<div className={`col-12 d-flex flex-wrap flex-column flex-lg-row align-items-center`}>
<a href={Brochurese} download={Brochurese} className={`${ValueView ? HoverBrochure : 'text-light'} col-12 order-2 order-lg-1 col-lg-6 d-flex align-items-center justify-content-center text-decoration-none`}>
<div className={`d-flex justify-content-center align-items-center`}>
<div><img style={{'width': '40px'}} src={ValueView ? IconDownload : IconDownloadDark} alt=""></img></div>
<h3 className={`ms-3 p-0 m-0`}>Scarica la brochure!</h3>    
</div>
</a>
<div className="order-1 order-lg-2 d-flex justify-content-center col-12 col-lg-6 p-4 p-lg-0"><img className='img-fluid' src={Brochures} alt="immagine brochure Giralda"></img></div>
</div> 
)};

export default Brochure;