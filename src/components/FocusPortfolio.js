import Background from "./Background";
import ContainerBasic from "./ContainerBasic";


import { useLoaderData, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BgPortfolio from '../img/sfondo-portfolio.jpg'
import CardXl from "./CardXl";

const dati = 'Portfolio'

///  CREARE LOGICA FILTRANDO IL 'PARAMS' PRESO DALLA CARD S e I DATI CARDPORTFOLIO PRESI DALLO STORE REDUX ///

const FocusPortfolio = () => {

const data = useLoaderData()

console.log(data)

const PortfolioValue = useSelector((state) => state.DatiPortfolio.value)

const MapXl = PortfolioValue.filter(dato => dato.id === data)

console.log(MapXl)

return(
<>
<Background
bg = {BgPortfolio}
></Background>
<ContainerBasic>
<CardXl
dati = {dati}
MapXl = {MapXl}
></CardXl>
</ContainerBasic>
</>
)};

export default FocusPortfolio;


export const loader = ( {params} ) => {

const id = params.idLavoro

return id
}