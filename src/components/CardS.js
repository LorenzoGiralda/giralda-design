import stilePor from './Portfolio.module.css'
import { Link } from 'react-router-dom'


const ImgSizeCardS = stilePor.ImgSizeCardS
const LabelP = stilePor.stilePara

const CardS = (props) => {

return(
<>

{/* CARD DEFINITIVA PER PORTFOLIO e BLOG  */}

<div className="col-12 col-lg-4 p-2 bg-trasparent d-flex">

<Link to={props.id}
className={`p-1 bg-light col-12 d-flex rounded shadow text-black text-decoration-none pe-auto`}>

<div style={{'backgroundImage': `url(${props.bg})`, 'backgroundSize': 'cover', 
'backgroundPosition' : 'center center'}}
className="col-4 rounded d-flex">
<div className={`${props.sezione === 'Blog' && props.categoria !== 'Logo Curiosity' ? 'bg-dark bg-opacity-75' : 'bg-light bg-opacity-75'} ${props.categoria !== 'Word Ads' && 'p-4'} col-12 h-100 d-flex justify-content-center align-items-center`}>
<img className={`${props.categoria === 'Word Ads' || props.sezione === 'Portfolio' || props.categoria === 'Logo Curiosity' ? 'img-fluid' : ''} ${props.sezione === 'Blog' && props.categoria === 'Logo Curiosity' ? `${ImgSizeCardS} rounded` : 'rounded p-2'} `}
src={props.img} alt=""></img>
</div>
</div>

<div className="col-8 bg-trasparent p-1 ps-3 d-flex flex-column justify-content-center">
<strong>{props.titolo}</strong>
<label style={{'cursor': 'pointer'}} className={LabelP}>{props.dettagli}</label>
</div>

</Link>

</div>

{/* TEST PROVA CARD S PORTFOLIO */}

{/* <div className="col-12 col-lg-4 p-2 bg-primary d-flex">

<div className="p-1 bg-light col-12 d-flex rounded shadow">

<div style={{'backgroundImage': `url(${BgProva})`, 'backgroundSize': 'cover', 
'backgroundPosition' : 'center center'}}
className="col-4 bg-secondary rounded">
<div className='bg-dark bg-opacity-75 p-2'>
<img className='img-fluid' src={Libretto} alt=""></img>
</div>
</div>

<div className="col-8 bg-danger p-1 ps-3 d-flex flex-column justify-content-center">
<strong>Libretto</strong>
<label>Partito Politico "Progetto Comune"</label>
</div>

</div>

</div> */}

</>
)};

export default CardS