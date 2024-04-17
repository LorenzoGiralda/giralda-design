import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Background from "./Background";
import ContainerBasic from "./ContainerBasic";
import TitleSection from "./TitleSection";
import FilterComponent from "./FilterComponent";
import CardS from "./CardS";

import Tipography from '../img/sfondo-blog-tipografia.jpg'
import Curiosity from '../img/sfondo-blog-logo-curiosity.jpg'
import Advisor from '../img/sfondo-blog-word-advisor.jpg'

import arial from '../img/arial.png';
import bodoni from '../img/bodoni.png';
import calibri from '../img/calibri.png';
import didot from '../img/didot.png';
import futura from '../img/futura.png';
import gotham from '../img/gotham.png';
import helvetica from '../img/helvetica.png';
import impact from '../img/impact.png';
import myriad from '../img/myriad.png';
import trajan from '../img/trajan.png';
import amazon from '../img/logo-Amazon.png';
import nike from '../img/logo-Nike.png';
import wwf from '../img/logo-wwf.png';
import chupa from '../img/logo-Chupa.png';
import toblerone from '../img/logo-Toblerone.png'
import AdsZioSam from '../img/adv-i-want-you.jpg'
import AdsCocaCola from '../img/adv-coca-cola.jpg'
import AdsWeCan from '../img/adv-we-can-do-it.jpg'
import AdsDiamond from '../img/adv-diamante.jpg'
import AdsApple from '../img/adv-Apple.jpg'

import BgNews from '../img/sfondo-blog.jpg'

import blog from '../img/icon-blog.png'


const DatiBlog = [
    {
    id: 'Tipography',
    title: 'Tipography',
    img: Tipography,
    alt: 'Tipography'
    },
    {
    id: 'Logo Curiosity',
    title: 'Logo Curiosity',
    img: Curiosity,
    alt: 'Logo Curiosity'
    },
    {
    id: 'Word Ads',
    title: 'Word Ads',
    img: Advisor,
    alt: 'Word Ads'
    }
]

const CardDatiBlog = [
    {
    id: 1,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Arial',
    dettagli: 'Un font versatile',
    descrizione : 'L’Arial è un carattere tipografico che venne commissionato dalla Monotype ed è stato ideato da Nicholas e Saunde nel 1982. Classificato come sans serif (carattere a bastoni - senza grazie), venne creato per le stampanti laser Ibm. Il successo di questo font in realtà lo si deve alla Microsoft, che lo incluse nei suoi sistemi operativi Windows dal ’92 con la versione 3.1. Le caratteristiche principali di questo carattere sono versatilità, curve “morbide” e sopratutto i terminali delle aste tagliate in diagonale. Utilizzato per molteplici scopi, è un must per la creazione di presentazioni aziendal',
    curiosita: 'Uno dei due ideatori del font, il sig. Robin Nicholas, non si definì come disegnatore di caratteri, bensì uno sviluppatore, dato che il suo modus operandi era di prendere diverse parti di font e di combinarle in modo armonioso, creando così un nuovo carattere con un design moderno e funzionale.',
    img: arial,
    alt: 'Arial',
    bg: Tipography
    },    
    {
    id: 2,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Bodoni',
    dettagli: 'Un carattere tutto Italiano',
    descrizione : "Inventato dall’italiano Giambattista Bodoni, una figura di rilievo della tipografia italiana del XVIII - XIX secolo. Possiede 4 caratteristiche principali: regolarità, nitidezza, buon gusto e bellezza senza eguali. Questo font costruito con l'uso di figure geometriche, è perfetto sia dal punto di vista delle proporzioni che delle correzioni ottiche. Per ottenere questa perfezione il suo ideatore impiegò tutta la vita. Nel dettaglio tecnico questo font ha caratteristiche sorprendenti: un forte contrasto tra le aste, le grazie molto fini e moderne ed il suo grafismo lineare e pulito.",
    curiosita: 'Il creatore del font Giambattista Bodoni, creò un manuale tipografico (pubblicato dalla moglie post morte), considerato ancora oggi un punto di riferimento per studiare e scoprire le caratteristiche principali dei font trattati nell’opera e non solo.',
    img: bodoni,
    alt: 'Bodoni',
    bg: Tipography
    },    
    {
    id: 3,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Calibri',
    dettagli: 'Il font di Microsoft Office',
    descrizione : "Il font è stato progettato nel biennio 2002-2004 dal un tipografo olandese, Lucas De Groot, su commissione della Microsoft. Carattere a “bastoni”, è utilizzato in moltissimi dispositivi del colosso statunitense. Grazie a questo font ben riuscito, De Groot ottenne numerosi riconoscimenti, come il premio “Tipe System”. L’obiettivo del carattere era diventare fin da subito funzionale per ogni tipo di applicazione e lingua. Insomma il suo creatore grazie al suo genio, riuscì nel suo piccolo a migliorare il mondo della comunicazione.",
    curiosita: "Il font inizialmente era stato sviluppato con molta titubanza, infatti il suo ideatore, colpito da tali dubbi, ne presentò due versioni. Contro ogni sua previsione, la Microsoft rimase fin da subito super entusiasta della prima versione, motivo per la quale non ci fu bisogno di modifiche o di visionare la se.",
    img: calibri,
    alt: 'Calibri',
    bg: Tipography
    },    
    {
    id: 4,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Didot',
    dettagli: "L'essenza dell'eleganza",
    descrizione : "Il Didot è un carattere importantissimo, fondamentale per l’innovazione del panorama globale del font design. Fu creato dal figlio di Francois Didot, Firmin, che lo sviluppò utilizzando l’unità di misura per font creata dal padre e denominata “punto tipografico”. Questa caratteristica lo rende il primo carattere moderno e funzionale dell’epoca (si parla degli inizi dell’800). Carattere geometrico e graziato, apprezzato anche al giorno d’oggi, venne elogiato anche da un font designer di spessore come il Bodoni, che lo portò alla ribalta in tutta Europa. L’unico vero handicap di questo font, purtroppo non sottovalutabile e la sua leggibilità, problematica dipesa dalla finezza delle grazie che non permettono la stampa di caratteri troppo piccoli.",
    curiosita: "Essendo stato creato agli inizi dell’800 è uno dei font più antichi ed ancora in auge. Inoltre è considerato il font apripista verso il moderno font design, visto il suo metodo di realizzazione. Di questo font ne esiste una sola versione digitale creata da Frutiger nel 199",
    img: didot,
    alt: 'Didot',
    bg: Tipography
    },    
    {
    id: 5,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Futura',
    dettagli: 'Un carattere "spaziale"',
    descrizione : "Progettato da Paul Renner nel 1927, è un carattere sans-serif disegnato per una fonderia di Francoforte. Il disegno delle lettere è geometrico e razionalista, infatti per sviluppare il font furono utilizzate le figure geometriche principali (quadrato, cerchio e triangolo). Il carattere prima di essere ufficializzato, fu ridisegnato una seconda volta a causa della scarsa leggibilità dei suoi glifi. Le proprietà principali di questo font sono l’avere un design semplice e chiaro e la sua versatilità di utilizzo. Diciamo che è un font universale, studiato per dare quel tocco distintivo, con chiarezza e omissione di tutti gli elementi superflui.",
    curiosita: "Questo carattere “sbarcò” sulla luna con gli astronauti di Apollo 11 durante il primo lancio nel ’69. Infatti la simbolica targa che venne lasciata a segno di conquista, fu scritta proprio con questo font.",
    img: futura,
    alt: 'Futura',
    bg: Tipography
    },    
    {
    id: 6,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Gotham Pro',
    dettagli: 'Il font del presidente Obama',
    descrizione : "Il carattere tipografico nato nel 2000, è stato commissionato dalla rivista GQ con lo scopo di mostrare un sans serif con una struttura geometrica, nuova e fresca, che ispirasse maggiore autorevolezza. Disegnato da Frere-Jones per conto della Hoefler (famosa azienda di Font design), ottenne il suo maggior successo grazie al suo utilizzo nella propaganda politica di Obama per le presidenziali del 2008. Il concept del carattere è legato e sviluppato cogliendo spunti dalle vecchie insegne cittadine di New York. Il font fa rivivere in tal senso la vecchia urbanità della “Grande Mela”, creando un mix culturale che racchiude tutta la storia della città simbolo degli Stati Uniti.",
    curiosita: "Per la prima volta nella storia di un candidato politico, un font unico riuscì a contenere tutte le sue ideologie, dato che non fu utilizzato solamente per il logo, ma bensì per l’intera immagine coordinata della propaganda. Il successo della campagna che portò all'elezione di Obama, fu modificato ed arricchito ulteriormente, grazie proprio al volere del 'nuovo' presidente.",
    img: gotham,
    alt: 'Gotham Pro',
    bg: Tipography
    },    
    {
    id: 7,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Helvetica',
    dettagli: 'Uno svizzero rivoluzionario',
    descrizione : "Questo font è vita! Possiamo definirlo così, perché anche se non abbiamo un occhio clinico o non siamo del campo della comunicazione, questo carattere sicuramente viene visto almeno una volta al giorno durante la nostra quotidianità: cartelli stradali, insegne, libri, menù ecc., lo possiamo trovare praticamente ovunque. Codesto carattere, come potrete ben capire è il più utilizzato al mondo e si presta a molteplici tipologie di attività. Un font neutrale, leggibile e versatile, proprietà che lo hanno reso irrinunciabile. Nato dal genio di Max Miedinger, che rinnovo il font di una fonderia, rendendolo unico ed ancora oggi il migliore da poter utilizzare.",
    curiosita: "Su questo carattere, sono stati creati un documentario e molti libri, grazie sopratutto alla particolare storia della sua creazione, che l’ha portato da essere un semplice font di una fonderia, al font dei font.",
    img: helvetica,
    alt: 'Helvetica',
    bg: Tipography
    },    
    {
    id: 8,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Impact',
    dettagli: 'Il font "vintage" in auge nel web',
    descrizione : "Il carattere fu creato negli anni ’60 da Geoffrey Lee ed oggi sta vivendo una seconda giovinezza grazie al suo utilizzo nei social e nel web. Scendendo nel dettaglio viene impiegato maggiormente per le didascalie dei “meme” (immagini satiriche, goliardiche), che spopolano da qualche anno. Il destino bizzarro ha voluto dare successo a questo carattere in tarda età, visto che questo font, ora utilizzato per scopi sicuramente meno professionali, era stato creato per diventare il font ufficiale di una fonderia di Sheffield. Il tratto distintivo di questo font è la sua leggibilità, che mantiene anche in caso venga sovrapposto a delle immagini o sfondi.",
    curiosita: "L’Impact in realtà ottenne il suo primo momento di gloria grazie alla Microsoft, che lo inserì nei sistemi operativi di Windows già dai primi anni ’90. Inoltre essendo un font molto “accomodante” dal punto di vista della compatibilità con i device informatici, venne introdotto nella lista degli 11 font consigliati per la creazione di siti internet dal consorzio W3C.",
    img: impact,
    alt: 'Impact',
    bg: Tipography
    },    
    {
    id: 9,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Myriad Pro',
    dettagli: 'Il "signore" della leggibilità',
    descrizione : "Un font apprezzato da tutti e per tutti, questo è il Myriad, definito tecnicamente come un Humanist San Serif, è stato realizzato da Slimbacj e Twombly nei primi anni ’90, fu commissionato dalla Adobe, la regina dello sviluppo di programmi grafici. Le caratteristiche principali di questo carattere sono il suo disegno sottile ed il colore uniforme, proprietà che lo rendono un carattere estremamente leggibile e che permette di essere usato sia per il testo che per l’esposizione tipografica.",
    curiosita: "Dal 2002 ha sostituito il Garamod come carattere principale de Apple fino al 2014, sostituito a sua volta dal San Francisco.",
    img: myriad,
    alt: 'Myriad Pro',
    bg: Tipography
    },    
    {
    id: 10,
    sezione: 'Blog',
    categoria: 'Tipography',
    titolo: 'Trajan',
    dettagli: "Il font dell'antica Roma",
    descrizione : "Un font antico nato circa 1900 anni fa dall’arte degli scalpellini romani, che ne realizzarono l’incisione su un antica colonna Traiana. Il carattere, che venne digitalizzato nel 1989 dal font designer Carol Twombly, viene utilizzato grazie alla sua natura classica nei film e nell’editoria per creare sopratutto titoli di film e romanzi e copertine di riviste dal carattere epico.",
    curiosita: "É il carattere più vecchio della storia, che ha segnato la conquista di Dacia da parte di Roma guidata dell’imperatore Traiano, da qui il nome Trajan.",
    img: trajan,
    alt: 'Trajan',
    bg: Tipography
    },    
    {
    id: 11,
    sezione: 'Blog',
    categoria: 'Logo Curiosity',
    titolo: 'Amazon',
    dettagli: "Scopri il significato della simbolica freccia",
    descrizione : "La famosa azienda leader mondiale dell’e-commerce, dietro la creazione del suo logo ha un concept ben preciso: trasmettere fiducia e far capire che si può trovare qualsiasi prodotto si cerchi. Tutto questo è presente nel suo logo, grazie alla freccia che parte dalla lettera “a” e finisce sulla “z” della scritta Amazon. Inoltre la freccia essendo curvata, se guardata con attenzione sembra un sorriso, ciò fa percepire al consumatore fiducia e sicurezza nei confronti dell’azienda stessa e quindi di conseguenza nell’effettuare un acquisto con essa.",
    curiosita: "",
    img: amazon,
    alt: 'logo Amazon',
    bg: Advisor
    },    
    {
    id: 12,
    sezione: 'Blog',
    categoria: 'Logo Curiosity',
    titolo: 'Nike',
    dettagli: "Il famoso baffo ha il suo perchè!",
    descrizione : '',
    curiosita: "Tutti conosco il “baffo” della Nike, ma la sua storia? In realtà ha della paradossale. Venne creato da una studentessa di design dell’università di Portland, Carolyn Davidson. Infatti la studentessa incontrò il fondatore dell’azienda di abbigliamento sportivo, il signor Philip Knight, proprio nella sua facoltà e si mise d’accordo per aiutarlo a realizzarne il marchio per la modica cifra di 2$ l’ora. Con 17 ore di lavoro presentò il logo a Phil che ne rimase entusiasta, dato che l’idea giusta di rappresentare l’ala (simbolo della Dea Nike) e del movimento con il famoso “baffo” era perfetta. Può sembrare uno sfruttamento aver ottenuto un logo con soli 34$, ma all’epoca il fondatore dell’azienda leader dell’abbigliamento sportivo era uno squattrinato sognatore ed aprì materialmente la sua sede nel bagagliaio della sua auto, dato che vendeva inizialmente scarpe importate dal Giappone. Ovviamente oggi è una multinazionale di successo e dalla prima scarpa con il baffo, creata nel ’72 ne è passato di tempo e sopratutto l’idea iniziale di creare scarpe leggere e super sportive si è trasformata in una vera e propria marca di abbigliamento a 360°. Ma della designer che ha dato inizio al suo successo si sarà ricordato qualcuno? Fortunatamente si! La Nike ha celebrato la sua creazione, regalandole delle azioni dell’azienda e un simbolico anello con dei diamanti che formano la scritta Nike. Insomma, giustizia è stata fatta.",
    img: nike,
    alt: 'logo Nike',
    bg: Advisor
    },    
    {
    id: 13,
    sezione: 'Blog',
    categoria: 'Logo Curiosity',
    titolo: 'Toblerone',
    dettagli: "Un cioccolato fatto di storia e tradizione",
    descrizione : "Il Toblerone, una famosa barretta di cioccolato svizzero, è un esempio di come la storia di un azienda possa essere rappresentata dal suo logo. Infatti nel 1908 la famosa barretta dalla forma triangolare, creata da una miscela di cioccolato al latte, torrone e miele, ottenne subito il suo marchio. Il logo è rappresentato da una montagna che riecheggia le alpi svizzere e dall’orso di Berna al suo interno, città dove venne fatta questa dolce creazione. Insomma un omaggio al luogo di nascita di una prelibatezza dolciaria che ancora oggi fa esplodere le papille gustative ogni volta che viene mangiata.",
    curiosita: "",
    img: toblerone,
    alt: 'logo Toblerone',
    bg: Advisor
    },    
    {
    id: 14,
    sezione: 'Blog',
    categoria: 'Logo Curiosity',
    titolo: 'WWF',
    dettagli: "Perchè proprio il panda in difesa dell'ambiente?",
    descrizione : "Il Panda gigante è il simbolo della fondazione ambientalista più conosciuta al mondo. Ma perché è stato scelto proprio lui? Semplicemente perché Sir Peter Scott lo disegnò personalmente, prendendo spunto da un bozzetto di un naturalista scozzese Gerald Watterson. L’animale in questione era chiamato “Chi Chi” e fu trasferito dallo zoo di Pechino a quello di Londra. Essendo l’unico panda gigante presente in occidente, fu ritenuto idoneo per rappresentare il valore principale dell’associazione, cioè la conservazione della natura. Fu scelto come simbolo anche perché facilmente riproducibile in bianco e nero. Quindi anche in termini di comunicazione fu fatta la scelta giusta.",
    curiosita: "",
    img: wwf,
    alt: 'logo Toblerone',
    bg: Advisor
    },    
    {
    id: 15,
    sezione: 'Blog',
    categoria: 'Logo Curiosity',
    titolo: 'Chupa Chups',
    dettagli: "Un logo creato da un'artista!",
    descrizione : "Il lecca lecca, inventato a Barcellona nel ’58, è stato il primo dolce ad essere venduto a stick, innovazione importante per non togliere l’inconveniente delle mani appiccicose durante la consumazione. Il nome chupa chups, derivato dal verbo chupar (in spagnolo succhiare), ne ha favorito il successo. Ma il suo creatore Bernat, decise che per far conoscere ed aumentare la visibilità del prodotto, bisognava creare un logo. Per questo compito non si limitò a scegliere un agenzia di comunicazione, ma bensì un suo amico artista ben noto in tutto il mondo, Salvator Dalì. All’estro del pittore spagnolo durante una giornata di piena estate in un bar, si deve l’originalità e la bellezza di uno dei dolci più desiderato e consumato di tutti i tempi.",
    curiosita: "",
    img: chupa,
    alt: 'logo Chupa Chups',
    bg: Advisor
    },    
    {
    id: 16,
    sezione: 'Blog',
    categoria: 'Ads',
    titolo: 'I Want You',
    dettagli: "Conosci Zio Sam?",
    descrizione : "Un uomo di una certa età con occhi di ghiaccio, capelli bianchi che sbucano da un cilindro a stelle e strisce, che indica con un dito in modo severo l’osservatore. Questo è Zio Sam, storico personaggio “uscito” dall’estro del disegnatore Flagg quasi un secolo e mezzo fa, nel periodo della dichiarazione di guerra alla Germania (Prima guerra mondiale). Una campagna però non proprio originale, visto che qualche anno prima ne venne fatta una simile in Gran Bretagna. Ad ogni modo la pubblicità con l’intento di reclutare giovani soldati Americani portò i suoi frutti, grazie anche all’assidua affissione del manifesto (+ di 5 milioni di copie), con la famosa scritta “I Want You”.",
    curiosita: "",
    img: AdsZioSam,
    alt: 'copertina I Want You',
    bg: Advisor
    },    
    {
    id: 17,
    sezione: 'Blog',
    categoria: 'Ads',
    titolo: 'Coca Cola',
    dettagli: "Ridisegnò Babbo Natale",
    descrizione: "Nel 1931 Archie Lee, referente della Coca Cola, diede compito di realizzare una campagna pubblicitaria con l’immagine di babbo natale. Il disegnatore Sundblom lo raffigurò nel modo che ancora ispira la nostra immaginazione sulla sua fisionomia, cioè un “omone” tenero, piacevole e paffuto. Bisogna ricordare che negli anni precedenti a questa propaganda, Santa Claus era raffigurato come uomo alto e magro o come un elfo, quindi venne totalmente stravolta la sua figura, che fu ridisegnata prendendo spunto dalla poesia di Moore “La Visita di San Nicola” che evoca gli aggettivi sopra descritti. Questa pubblicità decretò la consacrazione della coca-cola, legando il suo successo a quello di Babbo Natale, giocando sopratutto sulla stessa tonalità cromatica (il rosso) e sul fatto che ispirasse rassicurazione, generosità.",
    curiosita: "",
    img: AdsCocaCola,
    alt: 'copertina Coca Cola',
    bg: Advisor
    },    
    {
    id: 18,
    sezione: 'Blog',
    categoria: 'Ads',
    titolo: 'We Can Do It',
    dettagli: "Slogan del femminismo",
    descrizione : "Rosie the Riverer, semplicemente l’immagine icona del patriottismo e del rimboccarsi le maniche per lavorare, nonché del femminismo. Il suo personaggio prende il nome da una canzone americana del ’42 e diventò nello stesso anno propaganda per il lavoro femminile nelle fabbriche. La campagna venne creata a seguito dell’attacco di Pearl Harbour che provocò la perdita di numerosa manodopera maschile, che dovette lasciare il lavoro per combattere. A seguito di questo evento, si studiò questa pubblicità per sopperire a questa perdita reclutando giovani donne forti e volenterose. Grazie alle agenzie pubblicitarie, venne creata Rosie, un personaggio femminile che ispirava voglia di lavorare e nello specifico diventare operaie. Ottenne grande successo e tutt’ora ispira campagne pubblicitarie. La Swiffer infatti ha preso spunto da essa, accostandola ai suoi prodotti per la casa, facendo abbracciare Rosie a un’aspirapolvere.",
    curiosita: "",
    img: AdsWeCan,
    alt: 'copertina We Can Do It',
    bg: Advisor
    },    
    {
    id: 19,
    sezione: 'Blog',
    categoria: 'Ads',
    titolo: 'De Beers',
    dettagli: "A Diamond is forever",
    descrizione : "",
    curiosita: "Quando Frances Garety creò lo slogan “A Diamond is forever”, ci fu molto scetticismo. Infatti l’azienda che incaricò l’agenzia pubblicitaria N.Y. Ayer & Son per la creazione di una campagna d’impatto, era propensa a far cambiare il copy, per paura di una debacle totale. Fortunatamente sfidarono la sorte e lasciarono intatta la creazione di Garety e fu un successo a livello mondiale. Ancora oggi quando si pensa al diamante viene in mente quella famosa frase, che ispirava i compratori vedendo il diamante come simbolo.",
    img: AdsDiamond,
    alt: 'copertina De Beers',
    bg: Advisor
    },    
    {
    id: 20,
    sezione: 'Blog',
    categoria: 'Ads',
    titolo: 'Apple',
    dettagli: "Think Different",
    descrizione : "Apple meriterebbe sicuramente di salire sul podio delle migliori pubblicità di tutti i tempi. Grazie alla campagna “Think the different”, realizzata a cavallo tra fine anni novanta ed inizio duemila, l’azienda di Steve Jobs, riuscì a rilanciare il brand identificando i suoi utilizzatori come rivoluzionari del passato. Passano gli anni ed ancora oggi è una delle “campagne” più copiate e plagiate di sempre, che accende desideri e suscita emozioni.",
    curiosita: "",
    img: AdsApple,
    alt: 'copertina Apple',
    bg: Advisor
    },    
    ]
    


const BlogHome = () => {

    const BlogValue = useSelector((state) => state.DatiBlog.value)
    const BlogFilterValue = useSelector((state) => state.DatiBlogHome.value)


    useEffect(() => {
        if(BlogFilterValue && BlogFilterValue.payload !== ''){
        const filtra = BlogValue.filter(dato => dato.categoria === BlogFilterValue.payload)
        console.log(BlogFilterValue,'dato payload blogredux')
        ChangeBlog(filtra)
        } else{
        ChangeBlog(BlogValue)
        }
        },[BlogFilterValue, BlogValue]);


    const [stateBlog, ChangeBlog] = useState(BlogValue)

    const [stateSearch, ChangeSearch] = useState()

    const statoIniziale = () => {
    ChangeBlog(BlogValue)
    }

    const clicca = (event) => {

    let filtra = BlogValue.filter(dato => dato.categoria === event)
    ChangeBlog(filtra)
     }


     const statoSearch = (para) => {

        const filter = BlogValue.filter(dato => dato.titolo.toLowerCase().includes(para))
        
        if(para !== '' && filter.length > 0){
        ChangeBlog(filter)  
        ChangeSearch(filter)
        console.log(filter)
        }else{
        ChangeSearch()
        ChangeBlog(BlogValue)    
        }
        }

return(
<>
<Background
bg = {BgNews}
></Background>

<ContainerBasic>

<TitleSection
img = {blog}
title = "NEWS CREATIVE"
></TitleSection>

<FilterComponent
statoIniziale = {statoIniziale}
DatiBlog = {DatiBlog}
clicca = {clicca}
statoSearch = {statoSearch}
stateSearch = {stateSearch}
></FilterComponent>

</ContainerBasic>

<ContainerBasic
containerBlog = {true}
>
{ stateBlog.map( dato =>
<CardS
id = {dato.id}
sezione = {dato.sezione}
categoria = {dato.categoria}
titolo = {dato.titolo}
dettagli = {dato.dettagli}
img = {dato.img}
alt = {dato.alt}
bg = {dato.bg}
></CardS>
)}
</ContainerBasic>

</>
)};

export default BlogHome