import Seo from './Seo'
import { useState } from "react";
import ContainerBasic from "../components/ContainerBasic";

import Piacere from '../img/icon-piacere-di-conoscerti.png';
import Strumenti from '../img/icon-gli-strumenti-del-mestiere.png'
import Portfolio from '../img/icon-portfolio.png'
import News from '../img/icon-blog.png'

import BackHome from '../img/sfondo-chi-sono.jpg'
import BackTools from '../img/sfondo-strumenti.jpg'
import BgBlog from '../img/sfondo-blog.jpg'
import BgWeb from '../img/sfondo-web.jpg'

import Photoshop from "../img/photoshop.png";
import Illustrator from "../img/illustrator.png";
import Indesign from "../img/indesign.png";
import Xd from "../img/xd.png";
import Html from "../img/html.png";
import Css from "../img/css.png";
import Bootstrap from "../img/bootstrap.png";
import Javascript from "../img/javascript.png";
import Jquery from "../img/jquery.png";
import ReactIcon from "../img/react.png";
import Php from "../img/php.png";
import Git from "../img/git.png";

import Logo from '../img/sfondo-logo-index.jpg'
import Bigliettini from '../img/sfondo-bigliettino-index.jpg'
import Volantini from '../img/sfondo-volantino-index.jpg'
import Locandine from '../img/sfondo-locandina-index.jpg'
import Manifesti from '../img/sfondo-manifesto-index.jpg'
import Depliant from '../img/sfondo-depliant-index.jpg'
import Riviste from '../img/sfondo-riviste-index.jpg'
import Vari from '../img/sfondo-gadget-index.jpg'
import Siti from '../img/sfondo-responsive-index.jpg'

import TitleSection from "../components/TitleSection";
import SlideShow from "../components/SlideShow";
import BoxMe from "../components/BoxMe";
import Background from "../components/Background";
import SoftwareCard from "../components/SoftwareCard";
import CardPortfolioHome from "../components/CardPortfolioHome";
import CardNewsHome from "../components/CardNewsHome";

import BgTipography from '../img/sfondo-blog-tipografia.jpg'
import BgLogoCuriosity from '../img/sfondo-blog-logo-curiosity.jpg'
import BgWordAdvisor from '../img/sfondo-blog-word-advisor.jpg'
import Brochure from "../components/Brochure";
import ContainerForm from "../components/ContainerForm";
import FormHome from '../components/Form';

// import { useSelector, useDispatch } from 'react-redux';
// import { ChangeByPayload } from '../store/ActiveLinkLogic';

const Software = [
    {
      img: Photoshop,
      toggle: 'Photoshop',
      title: "Adobe PHOTOSHOP",
      description:
      "Photoshop è il programma principale per il fotoritocco e la creazione di layout ed elementi grafici sia per la pubblicità online che offline.",
    },
    {
      img: Illustrator,
      toggle: 'Illustrator',
      title: "Adobe ILLUSTRATOR",
      description:
      "Illustrator è un sofware di elaborazione grafica vettoriale. Ideale per progettare illustrazioni o creare loghi.",
    },
    {
      img: Indesign,
      toggle: 'Indesign',
      title: "Adobe INDESIGN",
      description:
      "Indesign è un programma ideato per la produzione editoriale. Fondamentale per creare qualsiasi tipo di impaginato, dal semplice biglietto da visita al più complesso magazine.",
    },
    {
      img: Xd,
      toggle: 'Xd',
      title: "Adobe XD",
      description:
      "Xd è un software della Adobe utilizzato per realizzare mockup di siti internet ed applicazioni. Ha sostituito in parte photoshop ed illustrator, grazie sopratutto all'area di prototipazione che permette di simulare l'interazione utente con il contenuto creato.",
    },
    {
      img: Html,
      toggle: 'Html',
      title: "HTML 5",
      description:
      "Html è il linguaggio markup per la creazione di pagine web. Fondamentale conoscerlo per creare siti da zero, senza utilizzo di cms.",
    },
    {
      img: Css,
      toggle: 'Css',
      title: "CSS 3",
      description:
      "Il Css, detto anche 'foglio di stile', è un linguaggio per definire la formattazione degli elementi presenti in una pagina Html.",
    },
    {
      img: Bootstrap,
      toggle: 'Bootstrap',
      title: "BOOTSTRAP",
      description:
      "Bootstrap è la libreria open source più utilizzata per facilitare lo sviluppo front-end di siti web responsive, sopratutto grazie ai molti modelli di progettazione inclusi e modificabili (es. pulsanti, moduli ecc) basati su html e css.",
    },
    {
      img: Javascript,
      toggle: 'Javascript',
      title: "JAVASCRIPT",
      description:
      "Javascript è un linguaggio di programmazione lato client, orientato agli oggetti e agli eventi. Fondamentale la sua applicazione per creare siti web dinamici.",
    },
    {
      img: Jquery,
      toggle: 'Jquery',
      title: "JQUERY",
      description:
      "Jquery è una libreria di Javascript, che ci permette di semplificare la gestione e la creazione di eventi nel sito.",
    },
    {
      img: ReactIcon,
      toggle: 'React',
      title: "REACT",
      description:
      "React è un framework basato su linguaggio Javascript, utilizzato per la creazione di interfacce utente e single-page-application.",
    },
    {
      img: Php,
      toggle: 'Php',
      title: "PHP",
      description:
      "Php è un linguaggio di programmazione lato server. Viene utilizzato maggiormente nella programmazione di pagine web dinamiche. Io me ne avvalgo per realizzare pagine web e form contatti per qualsiasi tipo di esigenza.",
    },
    {
      img: Git,
      toggle: 'Git',
      title: "GIT",
      description:
      "Git è un software per il controllo di versione utilizzabile da interfaccia a riga di comando. Facilita il flusso di lavoro e lo sviluppo di applicazioni web.",
    }
  ];
  
const Porfolio = [
  {
    title: "Concept Logo",
    categoria:'Concept logo',
    img: Logo,
    link: "",
  },
  {
    title: "Biglietti da Visita",
    categoria: 'Bigliettini',
    img: Bigliettini,
    link: "#",
  },
  {
    title: "Volantini",
    categoria: 'Volantini',
    img: Volantini,
    link: "#",
  },
  {
    title: "Locandine",
    categoria: "Locandine",
    img: Locandine,
    link: "#",
  },
  {
    title: "Manifesti",
    categoria: "Manifesti",
    img: Manifesti,
    link: "#",
  },
  {
    title: "Depliant",
    categoria: "Depliant",
    img: Depliant,
    link: "#",
  },
  {
    title: "Brochure - Riviste",
    categoria: "Brochure - Riviste",
    img: Riviste,
    link: "#",
  },
  {
    title: "Lavori Vari",
    categoria: "Altre lavorazioni",
    img: Vari,
    link: "#",
  },
  {
    title: "Siti e web App",
    categoria: 'Siti e Web App',
    img: Siti,
    link: "#",
  },
];

const Blog = [
  {
    title: "TIPOGRAPHY",
    categoria: 'Tipography',
    subtitle: "Alla scoperta dei font più utilizzati del momento",
    bg: BgTipography,
    link: "#",
  },
  {
    title: "LOGO CURIOSITY",
    categoria: 'Logo Curiosity',
    subtitle: "Tante curiosità sulla creazione di loghi famosi",
    bg: BgLogoCuriosity,
    link: "#",
  },
  {
    title: "WORD ADS",
    categoria: 'Word Ads',
    subtitle: "Storie sulle pubblicità di maggior successo",
    bg: BgWordAdvisor,
    link: "#ciao",
  },
];


const HomePage = () => {

    const [stateSoftware, changeSoftware] = useState("");

    const statoSoft = (para) => {
    changeSoftware(para)    
    }
        

return(
<>
<Seo
title = "Lorenzo Giralda - graphic e web designer - developer a Bolsena, Valentano, Marta, Capodimonte, Montefiascone, Acquapendente."
description = "Sono un grafico e web designer - developer residente a Grotte di Castro, mi occupo sia di pubblicità offline che online, per garantire una comunicazione professionale a 360°"
keywords = "il mio profilo lavorativo - software utilizzati - lavorazioni - articoli - contattami"
></Seo>

<SlideShow></SlideShow>

<ContainerBasic>
<TitleSection
img = {Piacere}
title="PIACERE DI CONOSCERTI"
></TitleSection>
<BoxMe></BoxMe>
</ContainerBasic>

<Background
bg = {BackTools} 
></Background>

<ContainerBasic>
<TitleSection
img = {Strumenti}
title="GLI STRUMENTI DEL MESTIERE"
></TitleSection>
{Software.map( dato =>
<SoftwareCard
toggle = {dato.toggle}
statoSoft = {statoSoft}
title = {dato.title}
description = {dato.description}
img = {dato.img}
stateSoftware = {stateSoftware}
></SoftwareCard>    
)}</ContainerBasic>

<Background
bg = {BackHome} 
></Background>

<ContainerBasic>
<TitleSection
img = {Portfolio}
title="GUARDA I MIEI LAVORI"
></TitleSection>
{Porfolio.map(dato =>
<CardPortfolioHome
title = {dato.title}
img = {dato.img}
link = {dato.link}
categoria = {dato.categoria}
></CardPortfolioHome>
)}</ContainerBasic>

<Background
bg = {BgWeb} 
></Background>

<ContainerBasic>
<TitleSection
img = ''
title="SCOPRI TUTTI I PRODOTTI E SERVIZI OFFERTI!"
></TitleSection>
<Brochure></Brochure>
</ContainerBasic>

<Background
bg = {BgBlog} 
></Background>

<ContainerBasic>
<TitleSection
img = {News}
title="NEWS CREATIVE"
></TitleSection>
{Blog.map(dato =>
<CardNewsHome
title = {dato.title}
subtitle = {dato.subtitle}
bg = {dato.bg}
link = {dato.link}
categoria = {dato.categoria}
></CardNewsHome>  
)}</ContainerBasic>
<ContainerForm>
<FormHome></FormHome>
</ContainerForm>
</>
)};

export default HomePage;