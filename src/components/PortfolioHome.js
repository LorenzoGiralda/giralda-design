import { useSelector, useDispatch } from 'react-redux';

import Background from "./Background";
import portfolio from '../img/icon-portfolio.png'

import ConceptLogo from '../img/icon-logodesign.png'
import Bigliettini from '../img/icon-bigliettini.png'
import Volantini from '../img/icon-volantini.png';
import Locandine from '../img/icon-locandine.png'
import Manifesti from '../img/icon-manifesti.png'
import Depliant from '../img/icon-depliant.png';
import Brochure from '../img/icon-riviste.png'
import Vari from '../img/icon-altre- lavorazioni.png'
import Siti from '../img/icon-siti-web-responsive.png';

import adesivo from '../img/bigliettino-saraceno.png'
import fiasconaro from '../img/biglietto-fiasconaro-fr.png'
import fiasconaro2 from '../img/biglietto-fiasconaro-re.png'
import paciotti from '../img/bigliettino-paciotti-fr.png'
import paciotti2 from '../img/bigliettino-paciotti-re.png'
import vmCostruzioni from '../img/bigliettino-vm-costruzioni-fr.png';
import vmCostruzioni2 from '../img/bigliettino-vm-costruzioni-re.png';
import cosiStudio from '../img/bigliettino-cosi.png';
import estetista from '../img/bigliettino-estetista-fr.png';
import estetista2 from '../img/biglietitno-estetista-re.png';
import logo from '../img/logo-me.png';
import onlus from '../img/logo-panetti.png';
import comitato from '../img/logo-comitato-ornaro.png';
import prata from '../img/logo-associazione-le-prata.png';
import artego from '../img/logo-artego-salon.png'
import torre from '../img/logo-ristorante-la-torre.png';
import VolantinoPescheria from '../img/volantino-pescheria.png'
import VolantinoFarmacia from '../img/volantino-farma-fr.png'
import VolantinoFarmacia2 from '../img/volantino-farma-re.png'
import VolantinoVivaticket from '../img/volantino-scommessefr.png'
import VolantinoVivaticket2 from '../img/volantino-scommessefr.png'
import VolantinoArtego from '../img/volantino-artego-fr.png'
import VolantinoArtego2 from '../img/volantino-artego-fr.png'
import VolantinoTao from '../img/volantino-tao-fr.png'
import VolantinoOndaCafe from '../img/volantino-ondacafe-fr.png'
import VolantinoOndaCafe2 from '../img/volantino-ondacafe-fr.png'
import LocandinaFlamenco from '../img/locandina-flamenco.png'
import LocandinaEventi from '../img/locandina-eventi.png'
import LocandinaMercatino from '../img/locandina-antiquariato.png'
import LocandinaCarnevale from '../img/locandina-carnevale.png'
import LocandinaMedievale from '../img/locandina-palio.png'
import ManifestoCapodanno from '../img/manifesto-capodanno.png'
import ManifestoOrnaro from '../img/manifesto-ornaro-alto.png'
import ManifestoMercato from '../img/manifesto-le-prata.png'
import ManifestoAlto from '../img/manifesto-beach.png'
import DepliantEquoevento from '../img/depliant-equo-fr.png'
import DepliantEquoevento2 from '../img/depliant-equo-re.png'
import DepliantVeterinario from '../img/depliant-mancini -fr.png'
import DepliantVeterinario2 from '../img/depliant-mancini-re.png'
import DepliantPaciotti from '../img/deplianti-paciotti-fr.png'
import DepliantPaciotti2 from '../img/depliant-paciotti-re.png'
import DepliantLeCoste from '../img/depliant-le-coste-fr.png'
import DepliantLeCoste2 from '../img/depliant-le-coste-re.png'
import DepliantIpermercato from '../img/depliant-ipermercato-fr.png'
import DepliantIpermercato2 from '../img/deplliant-ipermercato-re.png'
import DepliantPim from '../img/depliant-pim-fr.png'
import DepliantPim2 from '../img/depliant-pim-re.png'
import RivistaOnlus from '../img/brochure-onlus-panetti.png'
import RivistaPolitica from '../img/libretto-comune.png'
import RivistaRicette from '../img/brochure-cucineros.png'
import RivistaSabina from '../img/rivista-la sabina.png'
import AltreFiches from '../img/fiches.png'
import AltrePortabicchieri from '../img/portabicchieri.png'
import AltreRoll from '../img/roll-up.png'
import AltreMagliette from '../img/maglietta.png'
import AltreInsegna from '../img/insegna-regina.png'
import AltreOnlus from '../img/calendario.png'
import SitoAle from '../img/sito-ale.png'
import SitoFede from '../img/sito-fede.png'

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


import Tipography from '../img/sfondo-blog-tipografia.jpg'
import Curiosity from '../img/sfondo-blog-logo-curiosity.jpg'
import Advisor from '../img/sfondo-blog-word-advisor.jpg'

import BgPortfolio from '../img/sfondo-portfolio.jpg'
import ContainerBasic from "./ContainerBasic";
import TitleSection from "./TitleSection";
import FilterComponent from "./FilterComponent";
import CardS from "./CardS";
import { useEffect, useState } from 'react';

const DatiLavorazioni = [
{
id: 'Logo',
sezione: 'Portfolio',
title: 'Concept logo',
img: ConceptLogo,
alt: 'Logo'
},
{
id: 'Bigliettini',
sezione: 'Portfolio',
title: 'Bigliettini',
img: Bigliettini,
alt: ''
},
{
id: 'Volantini',
sezione: 'Portfolio',
title: 'Volantini',
img: Volantini,
alt: 'Bigliettini'
},
{
id: 'Locandine',
sezione: 'Portfolio',
title: 'Locandine',
img: Locandine,
alt: 'Locandine'
},
{
id: 'Manifesti',
sezione: 'Portfolio',
title: 'Manifesti',
img: Manifesti,
alt: 'Manifesti'
},
{
id: 'Depliant',
sezione: 'Portfolio',
title: 'Depliant',
img: Depliant,
alt: 'Depliant'
},
{
id: 'Brochure',
sezione: 'Portfolio',
title: 'Brochure - Riviste',
img: Brochure,
alt: 'Brochure'
},
{
id: 'Varie',
sezione: 'Portfolio',
title: 'Altre lavorazioni',
img: Vari,
alt: 'Varie'
},
{
id: 'Siti',
sezione: 'Portfolio',
title: 'Siti e Web App',
img: Siti,
alt: 'Siti e Web App'
}
]

const CardDatiPortfolio = [
{
id: 1,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo Personale',
dettagli: 'Il restyling è basato sull’idea di combinare le iniziali del mio nome e cognome. Il colore utilizzato è quello che amo di più e simboleggia la creatività. Per armonizzare il tutto gli ho dato “vita”...inserendo occhi e bocca, in modo da far trapelare simpatia, oltre a professionalità e serietà.',
formato: '',
supporto: '', 
img: logo,
img2: '',
alt: 'logo Giralda', 
},    
{
id: 2,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo Onlus Panetti',
dettagli: 'Il restyling è basato sull’idea di combinare le iniziali del mio nome e cognome. Il colore utilizzato è quello che amo di più e simboleggia la creatività. Per armonizzare il tutto gli ho dato “vita”...inserendo occhi e bocca, in modo da far trapelare simpatia, oltre a professionalità e serietà.',
formato: '',
supporto: '', 
img: onlus,
img2: '',
alt: 'logo Onlus', 
},    
{
id: 3,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo comitato Ornaro Alto',
dettagli: 'Dovendo trasmettere storia e cultura attraverso il logo e trovandomi pochi elementi caratterizzanti, ho puntato sull’idea di tornare indietro nel tempo, realizzando uno “stemma” che rappresenta la casata degli Orsini, proprietari del castello di Ornaro. Un idea azzeccata e super apprezzata.',
formato: '',
supporto: '', 
img: comitato,
img2: '',
alt: 'logo comitato Ornaro', 
},    
{
id: 4,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo associazione "Le Prata"',
dettagli: 'Avevo molti dubbi pre-concept… realizzo uno schizzo a mano o punto su una silhouette? Ovviamente come potete ben vedere ho puntato sulla seconda. L’elemento vettoriale rappresenta il “Ponte Sambuco”, sito in Ornaro Basso. Il font (Montserrat) è servito a dare contrasto tra storico e moderno.',
formato: '',
supporto: '', 
img: prata,
img2: '',
alt: 'logo ass.ne Le Prata', 
},    
{
id: 5,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo Artego Salon "Parrucchieri"',
dettagli: 'Un salone di parrucchiera, può diventare un saloon stile western? Certamente si, partendo dal logo! Grazie a un testo che segue un tracciato circolare in cui vengono “tagliate” alcune lettere, sono riuscito a far assimilare il logo dell’artego con quello appena creato, rendendolo una cosa sola.',
formato: '',
supporto: '', 
img: artego,
img2: '',
alt: 'logo Artego Salon', 
},    
{
id: 6,
sezione: 'Portfolio',
categoria: 'Concept logo',
titolo: 'Logo bar-pizzeria "La Torre"',
dettagli: 'Purtroppo non è un vero logo per così dire, ha troppi dettagli e sopratutto se rimpicciolito, avrà seri problemi di visibilità. Ad ogni modo lo inserisco perché è stato il mio primo progetto e risale a 10 anni fa e mi faceva piacere farvi notare i miglioramenti che ho avuto nel tempo per il concept di un logo.',
formato: '',
supporto: '', 
img: torre,
img2: '',
alt: 'logo Pizzeria', 
},    
{
id: 7,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Adesivo in carta',
dettagli: 'Bar Saraceno',
formato: 'A6 (10,5 x 14,8 cm)',
supporto: 'Carta adesiva 60 gr', 
img: adesivo,
img2: '',
alt: 'adesivo A6', 
},
{
id: 8,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Bigliettino classico',
dettagli: 'Fiasconaro',
formato: '8,5 x 5,5 cm',
supporto: 'Carta patinata lucida 350 gr', 
img: fiasconaro,
img2: fiasconaro2,
alt: 'bigliettino fiasconaro', 
},
{
id: 9,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Bigliettino pieghevole',
dettagli: 'VM Ristrutturazioni',
formato: 'aperto: (17 x 8,5 cm)',
supporto: 'Carta patinata opaca 350 gr - 1 piega | 2 ante', 
img: vmCostruzioni,
img2: vmCostruzioni2,
alt: 'bigliettino VM Ristrutturazioni', 
},
{
id: 10,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Tessera plastificata',
dettagli: 'Pizzeria Paciotti',
formato: '8,5 x 5,5 cm',
supporto: 'Carta patinata lucida 350 gr', 
img: paciotti,
img2: paciotti2,
alt: 'tessera Paciotti', 
},
{
id: 11,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Bigliettino quadrato',
dettagli: 'Così Studio',
formato: '5,5 x 5,5 cm',
supporto: 'Carta usomano 350 gr', 
img: cosiStudio,
img2: '',
alt: 'bigliettino Così Studio', 
},
{
id: 12,
sezione: 'Portfolio',
categoria: 'Bigliettini',
titolo: 'Bigliettino pieghevole',
dettagli: 'Estetista',
formato: '11 x 5,5 cm',
supporto: 'Carta patinata lucida 400 gr - 1 piega | 2 ante', 
img: estetista,
img2: estetista2,
alt: 'adesivo A6', 
},
{
id: 13,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'Fresco & Fritto',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoPescheria,
img2: '',
alt: 'volantino pescheria', 
},
{
id: 14,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'Farmacia Giovannetti',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoFarmacia,
img2: VolantinoFarmacia2,
alt: 'volantino Farmacia', 
},
{
id: 15,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'Vivaticket',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoVivaticket,
img2: VolantinoVivaticket2,
alt: 'volantino Vivaticket', 
},
{
id: 16,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'Artego Salon',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoArtego,
img2: VolantinoArtego2,
alt: 'volantino Artego Salon', 
},
{
id: 17,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'Tao Project',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoTao,
img2: '',
alt: 'volantino Tao Project', 
},
{
id: 18,
sezione: 'Portfolio',
categoria: 'Volantini',
titolo: 'Volantino',
dettagli: 'OndaCafè restaurant',
formato: '14,8 x 21 cm',
supporto: 'Carta patinata opaca 130 gr', 
img: VolantinoOndaCafe,
img2: VolantinoOndaCafe2,
alt: 'volantino Ondacafè', 
},
{
id: 19,
sezione: 'Portfolio',
categoria: 'Locandine',
titolo: 'Locandina',
dettagli: 'Serata Flamenco',
formato: '29,7 x 42 cm',
supporto: 'Carta patinata lucida 130 gr', 
img: LocandinaFlamenco,
img2: '',
alt: 'locandina flamenco', 
},
{
id: 20,
sezione: 'Portfolio',
categoria: 'Locandine',
titolo: 'Locandina',
dettagli: 'Estate Ornarese',
formato: '29,7 x 42 cm',
supporto: 'Carta patinata lucida 130 gr', 
img: LocandinaEventi,
img2: '',
alt: 'locandina estate Ornarese', 
},
{
id: 21,
sezione: 'Portfolio',
categoria: 'Locandine',
titolo: 'Locandina',
dettagli: "Mercatino dell'usato",
formato: '29,7 x 42 cm',
supporto: 'Carta patinata lucida 130 gr', 
img: LocandinaMercatino,
img2: '',
alt: "locandina mercatino dell'usato", 
},
{
id: 22,
sezione: 'Portfolio',
categoria: 'Locandine',
titolo: 'Locandina',
dettagli: 'Festa in maschera',
formato: '29,7 x 42 cm',
supporto: 'Carta patinata lucida 130 gr', 
img: LocandinaCarnevale,
img2: '',
alt: 'locandina festa in maschera', 
},
{
id: 23,
sezione: 'Portfolio',
categoria: 'Locandine',
titolo: 'Locandina',
dettagli: 'Palio Medievale',
formato: '29,7 x 42 cm',
supporto: 'Carta patinata lucida 130 gr', 
img: LocandinaMedievale,
img2: '',
alt: 'locandina palio medievale', 
},
{
id: 24,
sezione: 'Portfolio',
categoria: 'Manifesti',
titolo: 'Manifesto',
dettagli: 'Capodanno',
formato: '50 x 70 cm',
supporto: 'Carta white back 130 gr', 
img: ManifestoCapodanno,
img2: '',
alt: 'manifesto capodanno', 
},
{
id: 25,
sezione: 'Portfolio',
categoria: 'Manifesti',
titolo: 'Manifesto',
dettagli: 'Festeggiamenti Ornaro',
formato: '70 x 100 cm',
supporto: 'Carta blue back 130 gr', 
img: ManifestoOrnaro,
img2: '',
alt: 'manifesto Ornaro', 
},
{
id: 26,
sezione: 'Portfolio',
categoria: 'Manifesti',
titolo: 'Manifesto',
dettagli: 'Mercato delle stagioni',
formato: '70 x 100 cm',
supporto: 'Carta blue back 130 gr', 
img: ManifestoMercato,
img2: '',
alt: 'manifesto Mercato', 
},
{
id: 27,
sezione: 'Portfolio',
categoria: 'Manifesti',
titolo: 'Manifesto',
dettagli: 'Festeggiamenti Ornaro',
formato: '100 x 70 cm',
supporto: 'Carta blue back 130 gr',
img: ManifestoAlto,
img2: '',
alt: 'Manifesto Ornaro', 
},
{
id: 28,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Depliant',
dettagli: 'Equoevento',
formato: 'A4 (chiuso 10 x 21 cm) - 3 ante | 2 linee di piega',
supporto: 'Carta patatina lucida 130 gr',
img: DepliantEquoevento,
img2: DepliantEquoevento2,
alt: 'Depliant Equoevento', 
},
{
id: 29,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Depliant',
dettagli: 'Veterinario Mancini',
formato: 'A4 (chiuso 14,8 x 21 cm) - 2 ante | 1 linea di piega',
supporto: 'Carta patatina lucida 130 gr',
img: DepliantVeterinario,
img2: DepliantVeterinario2,
alt: 'Depliant Veterinario', 
},
{
id: 30,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Depliant',
dettagli: 'Pizzeria Paciotti',
formato: 'A4 (chiuso 10 x 21 cm) - 3 ante | 2 linee di piega',
supporto: 'Carta patatina lucida 130 gr',
img: DepliantPaciotti,
img2: DepliantPaciotti2,
alt: 'Depliant Pizzeria', 
},
{
id: 31,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Menù',
dettagli: 'Ristorante "Le Coste"',
formato: '30 x 20 cm (chiuso 15 x 20 cm) - 2 ante | 1 linea di piega',
supporto: 'Cartoncino usomano 300 gr',
img: DepliantLeCoste,
img2: DepliantLeCoste2,
alt: 'Depliant Ristorante', 
},
{
id: 32,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Volantone',
dettagli: 'Ipermercato',
formato: 'A2 (chiuso 21 x 29,7 cm) - piega a croce',
supporto: 'Carta patatina lucida 130 gr',
img: DepliantIpermercato,
img2: DepliantIpermercato2,
alt: 'Volantone Ipermercato', 
},
{
id: 33,
sezione: 'Portfolio',
categoria: 'Depliant',
titolo: 'Depliant',
dettagli: 'Pim - Idealmarket',
formato: 'A3 (chiuso 21 x 29,7 cm)',
supporto: 'Carta patatina opaca 130 gr',
img: DepliantPim,
img2: DepliantPim2,
alt: 'Depliant Pim', 
},
{
id: 34,
sezione: 'Portfolio',
categoria: 'Brochure - Riviste',
titolo: 'Brochure',
dettagli: 'Onlus Panetti',
formato: 'A4 (21 x 29,7 cm)',
supporto: 'Carta usomano 300 gr - cordonato',
img: RivistaOnlus,
img2: '',
alt: 'Brochure Onlus', 
},
{
id: 35,
sezione: 'Portfolio',
categoria: 'Brochure - Riviste',
titolo: 'Libretto Politico',
dettagli: 'Partito "Progetto Comune',
formato: 'A5 (14,8 x 21 cm)',
supporto: 'Carta patinata lucida 130 gr',
img: RivistaPolitica,
img2: '',
alt: 'Libretto Politico', 
},
{
id: 36,
sezione: 'Portfolio',
categoria: 'Brochure - Riviste',
titolo: 'Libro',
dettagli: 'Ricette di cucina',
formato: '21 x 21 cm',
supporto: 'Carta patinata opaca 170 gr',
img: RivistaRicette,
img2: '',
alt: 'Libro di cucina', 
},
{
id: 37,
sezione: 'Portfolio',
categoria: 'Brochure - Riviste',
titolo: 'Rivista',
dettagli: 'La Sabina in vetrina',
formato: 'A5 (14,8 x 21 cm)',
supporto: 'Carta patinata opaca 130 gr',
img: RivistaSabina,
img2: '',
alt: 'Rivista', 
},
{
id: 38,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Fiches',
dettagli: 'Parrucchiere',
formato: 'A6 (10,5 x 14,8 cm)',
supporto: 'Carta usomano 100 gr',
img: AltreFiches,
img2: '',
alt: 'fiches parrucchiere', 
},
{
id: 39,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Portabicchieri',
dettagli: 'Serata degustazione vini',
formato: '17 x 23 x 10 cm',
supporto: 'Tessuto non tessuto, TNT - 80 g/m2',
img: AltrePortabicchieri,
img2: '',
alt: 'portabicchieri degustazione', 
},
{
id: 40,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Roll-up',
dettagli: 'VivaTicket',
formato: '80 x 200 cm',
supporto: 'Banner calandrato 450 gr',
img: AltreRoll,
img2: '',
alt: 'roll-up Vivaticket', 
},
{
id: 41,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Magliette personalizzate',
dettagli: 'Torneo calcetto',
formato: 'misure varie',
supporto: 'cotone 100%',
img: AltreMagliette,
img2: '',
alt: 'magliette torneo', 
},
{
id: 42,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Insegna',
dettagli: 'Ristorante Regina',
formato: '300 x 200 cm',
supporto: 'forex 10 mm con protezione lucida',
img: AltreInsegna,
img2: '',
alt: 'insegina ristorante', 
},
{
id: 43,
sezione: 'Portfolio',
categoria: 'Altre lavorazioni',
titolo: 'Calendario',
dettagli: 'Onlus Panetti',
formato: '29 x 47 cm (olandese)',
supporto: 'applicazione adesivo vinilico 100 gr',
img: AltreOnlus,
alt: 'calendario olandese', 
},
{
id: 44,
sezione: 'Portfolio',
categoria: 'Siti e Web App',
titolo: 'Sito web',
dettagli: 'Dietista Parisi',
formato: '',
supporto: '',
img: SitoAle,
alt: 'sito web Parisi',
link: 'link per visitare il sito' 
},
{
id: 45,
sezione: 'Portfolio',
categoria: 'Siti e Web App',
titolo: 'Sito web',
dettagli: 'Trattoria "La Quercia"',
formato: '',
supporto: '',
img: SitoFede,
alt: 'sito web Trattoria',
link: 'link per visitare il sito' 
},
{
id: 46,
sezione: 'Portfolio',
categoria: 'Siti e Web App',
titolo: 'Web App',
dettagli: 'Agenzia viaggi "Sognando Viaggiando"',
formato: '',
supporto: '',
img: SitoFede,
alt: 'Web app agenzia viaggi',
link: 'link per visitare il sito' 
},
{
id: 46,
sezione: 'Portfolio',
categoria: 'Siti e Web App',
titolo: 'Web App',
dettagli: 'FootbalLife',
formato: '',
supporto: '',
img: SitoFede,
alt: 'Web app FootbalLife',
link: 'link per visitare il sito' 
},
]

const DatiBlog = [
    {
    id: 'Tipography',
    sezione: 'Blog',
    title: 'Tipography',
    img: Tipography,
    alt: 'Tipography'
    },
    {
    id: 'Logo Curiosity',
    sezione: 'Blog',
    title: 'Logo Curiosity',
    img: Curiosity,
    alt: 'Logo Curiosity'
    },
    {
    id: 'Word Ads',
    sezione: 'Blog',
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


const PortfolioHome = () => {


    const PortfolioValue = useSelector((state) => state.DatiPortfolio.value)

    const toggleValue = useSelector((state) => state.ToggleFilter.value)

    const CatValue = useSelector((state) => state.DatiPortfolioHome.value)

    const [statePortfolio, ChangePortofolio] = useState(PortfolioValue)

    const [stateSearch, ChangeSearch] = useState()


    // CAMBIARE L'ACTIVE DEL NAVBAR AL CLICK SULL'ELEMENTO DEL COMPONENTE CARDPORTFOLIOHOME!
    // COMBINARE UNA LOGICA REDUX ANCHE QUI? STUDIARE COME FARLA....
    useEffect(() => {
    if(CatValue.payload !== ''){
    const filtra = PortfolioValue.filter(dato => dato.categoria === CatValue.payload)
    ChangePortofolio(filtra)
    console.log(CatValue,'dato')
    } else{
    ChangePortofolio(PortfolioValue)
    }
    },[CatValue, PortfolioValue]);


    const clicca = (event) => {

   let filtra = PortfolioValue.filter(dato => dato.categoria === event)

    ChangePortofolio(filtra)

    }
 
    const statoIniziale = () => {
    ChangePortofolio(PortfolioValue)  
    }


const statoSearch = (para) => {

const filter = PortfolioValue.filter(dato => dato.titolo.toLowerCase().includes(para))

if(para !== '' && filter.length > 0){
ChangePortofolio(filter)  
ChangeSearch(filter)
console.log(filter)
}else{
ChangePortofolio(PortfolioValue) 
ChangeSearch()    
}
}

return(
<>
<Background
bg = {BgPortfolio}
></Background>

<ContainerBasic>

<TitleSection
img = {portfolio}
title = "PORTFOLIO"
></TitleSection>   

<FilterComponent
DatiLavorazioni = {DatiLavorazioni}
clicca = {clicca}
statoIniziale = {statoIniziale}
statoSearch = {statoSearch}
statePortfolio = {statePortfolio}
stateSearch = {stateSearch}
></FilterComponent>

</ContainerBasic>

<ContainerBasic
containerBlog = {true}
>
{ statePortfolio.map( dato =>
<CardS
id = {dato.id}
sezione = {dato.sezione}
categoria = {dato.categoria}
titolo = {dato.titolo}
dettagli = {dato.dettagli}
formato = {dato.supporto}
img = {dato.img}
alt = {dato.alt}
></CardS>
)}
</ContainerBasic>


{/* MAPPA BLOG DATI */}

{/* <ContainerBasic>
{ CardDatiBlog.map( dato =>
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
</ContainerBasic>  */}

</>
)};

export default PortfolioHome