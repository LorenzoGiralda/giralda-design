import Me from "../img/me.png";
import Fb from "../img/icon-facebook.png";
import Insta from "../img/icon-instagram.png";
import Linkedin from "../img/icon-linkedin.png";
import GitHub from "../img/icon-github.png";

const SocialMap = [
  {
    img: Fb,
    alt: "logo-facebook",
    link: "https://www.facebook.com/GiraldaDesign/",
  },
  {
    img: Insta,
    alt: "logo-instagram",
    link: "https://www.instagram.com/giralda_graphic_e_web_designer/",
  },
  {
    img: Linkedin,
    alt: "logo-linkedin",
    link: "https://www.linkedin.com/in/lorenzo-giralda-29026b19a/",
  },
  {
    img: GitHub,
    alt: "logo-GitHub",
    link: "https://github.com/LorenzoGiralda",
  }
];

const BoxMe = () => {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center rounded justify-content-center p-2">
      <div className="shadow bg-light justify-content-center justify-content-lg-start rounded  me-0 me-lg-3 mb-3 mb-lg-0 d-flex flex-column flex-lg-row flex-lg-nowrap align-items-center h-100">
        <div className="d-flex h-100 align-items-end">
          <img style={{'width': '1300px'}} className="img-fluid" src={Me} alt="Lorenzo Giralda - immagine del profilo"></img>
        </div>
        <section className="w-75 h-100 p-2 mt-3 mt-lg-0 d-flex flex-wrap flex-lg-nowrap flex-row flex-lg-column justify-content-between align-items-center h-100">
        { SocialMap.map( dato =>
          <a
            href={dato.link} target="_blank" rel="noreferrer" 
            className="p-2 my-1 rounded-circle d-flex justify-content-center align-items-center border border-dark"
            style={{ width: "40px", height: "40px" }}
          >
            <img className={dato.img === Fb ? 'w-50' : "img-fluid"} src={dato.img} alt=""></img>
          </a>
        )}
        </section>
      </div>
      <div className="shadow bg-light rounded p-2 d-flex align-items-center h-100">
    <p className="m-0 p-0">
      Mi chiamo <strong>Lorenzo Giralda</strong>. Sono un graphic e web designer con oltre 10 anni di esperienza nel settore, 
      sempre pieno di stimoli e idee che mi permettono di dar vita a nuovi progetti. Nel mio percorso lavorativo posso vantare esperienze importanti,
      come l'essere stato titolare di uno studio grafico a Roma, aver realizzato un sito e-commerce per la vendita di servizi di grafica e stampa 
      e sopratutto aver curato a 360° un freepress denominato "La Sabina in vetrina" per oltre 3 anni. Da due anni ho intrapreso a tempo pieno anche la professione del front end developer, 
      realizzando siti internet responsive "da purista" e web app. Sperando che la mia figura possa essere quella giusta per le vostre esigenze, vi auguro buona navigazione.
      </p>
      </div>
    </div>
  );
};

export default BoxMe;
