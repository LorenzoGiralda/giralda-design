import { Outlet, NavLink } from "react-router-dom";
import Seo from './Seo'
// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

import IconChiSono from '../img/chi-sono.png'
import ImgMe from '../img/lorenzo-giralda.png'
import IconDownload from '../img/icon-download.png'
import IconDownload2 from '../img/icon-download-dark.png'
import CvPdf from '../img/CV Lorenzo Giralda.pdf'
import BgChiSono from '../img/sfondo-chi-sono.jpg'

import nascita from '../img/sfondo-nascita.jpg';
import birthday from '../img/icon-data-di-nascita.png'
import luogo from '../img/icon-luogo-di-nascita.png'

import studi from '../img/sfondo-studi.jpg';
import diploma from '../img/icon-diploma.png';
import qualifiche from '../img/icon-qualifiche.png'

import lavoro from '../img/sfondo-lavoro.jpg';
import freelance from '../img/icon-freelance.png';
import contratto from '../img/icon-lavoro.png'

import info from '../img/sfondo-info-lav.jpg';
import car from '../img/icon-car.png';
import orario from '../img/icon-orario.png'
import pc from '../img/icon-pc.png'

import hobby from '../img/sfondo-hobbies.jpg';
import viaggi from '../img/icon-viaggi.png';
import calcio from '../img/icon-calcio.png'
import pesca from '../img/icon-pesca.png'

import contatti from '../img/sfondo-scrivimi.jpg';
import tel from '../img/icon-cell.png'
import mail from '../img/icon-email.png'

import ContainerBasic from "../components/ContainerBasic";
import TitleSection from "../components/TitleSection";
import ChiSonoMe from "../components/ChiSonoMe";
import Background from "../components/Background";
import CvElement from "../components/CvElement";
import TitleChiSono from "../components/TitleChiSono";

const datiChiSonoMe = {
testo1: 'In questa sezione vi farò conoscere nel dettaglio chi sono, in un modo semplice e creativo come nel mio stile.',
testo2: 'Dai miei dati anagrafici ai miei hobby, scoprirete la mia figura sia dal punto di vista professionale che umano.',
img: ImgMe,
link: CvPdf,
icon: IconDownload,
icon2: IconDownload2,
testoLink: 'Scarica il Cv in pdf',    
}

const datiNascita = [
  {
    img: luogo,
    title: "Roma",
    subtitle: "",
  },
  {
    img: birthday,
    title: "20-08-1989",
    subtitle: "",
  },
];

const datiQualifiche = [
  {
    img: diploma,
    title: "Liceo Scientifico T.",
    subtitle: "Istituto C. Rosatelli (Rieti)",
  },
  {
    img: qualifiche,
    title: "Grafico Multimediale",
    subtitle: "Istituto Cefi (Roma",
  },
  {
    img: qualifiche,
    title: "Web designer - FE developer",
    subtitle: "LabForTraining (Roma)",
  },
];


const datiLavoro = [
    {
      img: contratto,
      title: "Tipografia Fabri",
      subtitle: "Stage (2011)",
    },
    {
      img: freelance,
      title: "Studio 'Grafica e stampa'",
      subtitle: "Titolare (2013-14)",
    },
    {
      img: freelance,
      title: "Sito e-commerce",
      subtitle: "Freelance (2015)",
    },
    {
        img: freelance,
        title: "Freepress 'La Sabina in vetrina'",
        subtitle: "Ideatore, editore e grafico (2015-2018)",
      },
      {
        img: contratto,
        title: "Ict Labs - Agenzia Marketing",
        subtitle: "Web designer-developer (2022)",
      },
      {
        img: freelance,
        title: "Web designer - FE developer",
        subtitle: "Freelance (2020-2023)",
      },
  ];


const datiInfo = [
    {
      img: car,
      title: "Automunito",
      subtitle: "",
    },
    {
      img: orario,
      title: "Disponibilità part-full time",
      subtitle: "",
    },
    {
      img: pc,
      title: "Lavoro su Mac e Windows",
      subtitle: "",
    },
  ];

const datiHobby = [
    {
      img: viaggi,
      title: "Viaggi",
      subtitle: "",
    },
    {
      img: calcio,
      title: "Calcio",
      subtitle: "",
    },
    {
      img: pesca,
      title: "Pesca",
      subtitle: "",
    },
  ];

const datiContatti = [
    {
      img: tel,
      title: "353 396 2554",
      subtitle: "",
    },
    {
      img: mail,
      title: "lorenzo-giralda@outlook.it",
      subtitle: "",
    },
  ];



const ChiSono = () => {
return(
<>

<Seo
title = "Chi sono"
description = "Scopri il mio profilo professionale"
keywords = "curriculum online - luogo e data di nascita - studi e qualifiche - esperienze lavorative - info lavorative - i miei hobby - contatti"
></Seo>

<ContainerBasic>
<TitleSection
img = {IconChiSono }
title="IL MIO CURRICULUM"
></TitleSection>
<ChiSonoMe
testo1 = {datiChiSonoMe.testo1}
testo2 = {datiChiSonoMe.testo2}
img = {datiChiSonoMe.img}
link = {datiChiSonoMe.link}
icon = {datiChiSonoMe.icon}
icon2 = {datiChiSonoMe.icon2}
testoLink = {datiChiSonoMe.testoLink}
></ChiSonoMe>
</ContainerBasic>

<Background
bg = {BgChiSono}
></Background>

<ContainerBasic>
<TitleChiSono
img = {nascita}
title = "LUOGO e DATA di NASCITA"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiNascita.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>

<ContainerBasic>
<TitleChiSono
img = {studi}
title = "STUDI e QUALIFICHE"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiQualifiche.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>

<ContainerBasic>
<TitleChiSono
img = {lavoro}
title = "ESPERIENZE LAVORATIVE"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiLavoro.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>

<ContainerBasic>
<TitleChiSono
img = {info}
title = "INFO LAVORATIVE"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiInfo.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>

<ContainerBasic>
<TitleChiSono
img = {hobby}
title = "I MIEI HOBBY"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiHobby.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>

<ContainerBasic>
<TitleChiSono
img = {contatti}
title = "CONTATTI"
></TitleChiSono>
<div className="d-flex col-12 flex-wrap justify-content-center">
{datiContatti.map( dato =>
<CvElement
img = {dato.img}
title = {dato.title}
subtitle = {dato.subtitle}
></CvElement>
)}</div>
</ContainerBasic>
</>
)};

export default ChiSono;