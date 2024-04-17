import { createSlice } from '@reduxjs/toolkit';


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
import AppCalcio from '../img/sito-app-calcio.png'
import AppViaggi from '../img/sito-app-viaggi.png'




const CardDatiPortfolio = [
    {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
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
    id: '19',
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
    id: '20',
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
    id: '21',
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
    id: '22',
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
    id: '23',
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
    id: '24',
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
    id: '25',
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
    id: '26',
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
    id: '27',
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
    id: '28',
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
    id: '29',
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
    id: '30',
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
    id: '31',
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
    id: '32',
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
    id: '33',
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
    id: '34',
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
    id: '35',
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
    id: '36',
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
    id: '37',
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
    id: '38',
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
    id: '39',
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
    id: '40',
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
    id: '41',
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
    id: '42',
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
    id: '43',
    sezione: 'Portfolio',
    categoria: 'Altre lavorazioni',
    titolo: 'Calendario',
    dettagli: 'Onlus Panetti',
    formato: '29 x 47 cm (olandese)',
    supporto: 'applicazione adesivo vinilico 100 gr',
    img: AltreOnlus,
    img2: '',
    alt: 'calendario olandese', 
    },
    {
    id: '44',
    sezione: 'Portfolio',
    categoria: 'Siti e Web App',
    titolo: 'Sito web',
    dettagli: 'Dietista Parisi',
    formato: '',
    supporto: '',
    img: SitoAle,
    img2: '',
    alt: 'sito web Parisi',
    link: 'http://www.parisinutrizionista.altervista.org/index.html' 
    },
    {
    id: '45',
    sezione: 'Portfolio',
    categoria: 'Siti e Web App',
    titolo: 'Sito web',
    dettagli: 'Trattoria "La Quercia"',
    formato: '',
    supporto: '',
    img: SitoFede,
    img2: '',
    alt: 'sito web Trattoria',
    link: 'https://www.trattorialaquercia.it/index.html' 
    },
    {
    id: '46',
    sezione: 'Portfolio',
    categoria: 'Siti e Web App',
    titolo: 'Web App',
    dettagli: 'Agenzia viaggi "Sognando Viaggiando"',
    formato: '',
    supporto: '',
    img: AppViaggi,
    img2: '',
    alt: 'Web app agenzia viaggi',
    link: 'https://app-viaggi-88322.web.app/' 
    },
    {
    id: '47',
    sezione: 'Portfolio',
    categoria: 'Siti e Web App',
    titolo: 'Web App',
    dettagli: 'FootbalLife',
    formato: '',
    supporto: '',
    img: AppCalcio,
    img2: '',
    alt: 'Web app FootbalLife',
    link: 'https://app-footballife.web.app/' 
    },
    ]


const DatiPortfolio = createSlice({

    name: 'DatiPortfolio',
    initialState:{
    value: CardDatiPortfolio
    },


    // reducers:{

        ChangePayload: (state, payload) => {
         state.value = payload    
        },

    //     changePageToggle: (state) => {
    //     state.value = false   
    //     }
    // }

});


export const {ChangePayload} = DatiPortfolio.actions

export default DatiPortfolio.reducer