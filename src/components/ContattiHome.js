import Background from "./Background";
import { useSelector, useDispatch } from 'react-redux';

import BgContatti from '../img/sfondo-contatti.jpg'
import ContainerBasic from "./ContainerBasic";
import TitleSection from "./TitleSection";
import IconContatti from '../img/icon-contact.png'
import CardContact from "./CardContact";

import IconFb from '../img/icon-contact-facebook.png';
import IconIsta from '../img/icon-contact-instagram.png';
import IconGitHub from '../img/icon-contact-github.png';
import IconLinkedin from '../img/icon-contact-linkedin.png';

import IconPhone from '../img/icon-contact-mobile.png';
import IconMail from '../img/icon-contact-mail.png';
import IconSkype from '../img/icon-contact-skype.png';

import IconPosition from '../img/icon-contact-position.png';

import BgClassic from '../img/sfondo-contatti-tradizionali.jpg'
import BgUp from '../img/sfondo-contatti-social.jpg'
import BgMaps from '../img/sfondo-contatti-maps.jpg'

const contact = [
{id: '1', categoria: 'tradizionale', testo: 'Seguimi su', img: IconFb, link: 'https://www.facebook.com/GiraldaDesign/'},  
{id: '2', categoria: 'tradizionale', testo: 'Follow me', img: IconIsta, link: 'https://www.instagram.com/giralda_graphic_e_web_designer/'},    
{id: '3', categoria: 'tradizionale', testo: 'Suis moi', img: IconLinkedin, link: 'https://www.linkedin.com/in/lorenzo-giralda-29026b19a/'},    
{id: '4', categoria: 'tradizionale', testo: 'Me siga', img: IconGitHub, link: 'https://github.com/LorenzoGiralda'},    
]

const contact2 = [
{id: '1', categoria: 'moderno', testo: 'Chiamami al', img: IconPhone, link: 'tel:+393533962554'},    
{id: '2', categoria: 'moderno', testo: 'Scrivimi per', img: IconMail, link: 'mailto:lorenzo-giralda@outlook.it'},   
{id: '3', categoria: 'moderno', testo: 'Videochiamami su', img: IconSkype, link: 'https://join.skype.com/invite/DbJBg21TbZXL'}    
]


const contact3 = [
{id: '1', categoria: 'moderno',
testo: 'Via del Progresso, 27 - Grotte di Castro (VT)',
testo1: 'Via del Progresso, 27',
testo2: 'Grotte di Castro (VT)',
img: IconPosition},    
]


const ContattiHome = () => {

    const ValueView = useSelector((state) => state.ToggleLight.value)

return(
<>
<Background
bg = {BgContatti}
></Background>

<ContainerBasic>
<TitleSection
img = {IconContatti}
title = 'CONTATTI'
></TitleSection>
<div className="">
<p className={`p-3 ${ValueView ? 'bg-light' : 'text-light'}`}>Eccoci alla pagina finale del mio sito/portfolio. Dopo aver scoperto chi sono, le mie tipologie di lavori e magari qualche notizia sul mondo creativo... sei pronto a contattarmi!?
<br></br><br></br>
In questo momento sono alla ricerca di un possibile lavoro part o full time da dipendente oppure come freelance con ritenuta d'acconto. In ogni caso se vorrai sentirmi anche solo per chiedere consigli, oppure hai proposte interessanti da farmi, non esitare a contattarmi.</p> 
</div>  

<CardContact
bg = {BgClassic}
contact = {contact}
></CardContact>

<CardContact
bg = {BgUp}
contact = {contact2}
></CardContact>

<CardContact
bg = {BgMaps}
contact = {contact3}
></CardContact>

</ContainerBasic>
</>
)};

export default ContattiHome;