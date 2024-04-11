import { useSelector, useDispatch } from 'react-redux';

import { useLoaderData, Link } from 'react-router-dom';


import Background from "./Background";
import ContainerBasic from "./ContainerBasic";
import CardXl from "./CardXl";

import Blog from '../img/sfondo-blog.jpg'

const dati = 'Blog'



const FocusBlog = () => {

    const data = useLoaderData()

    const datiBlog = useSelector((state) => state.DatiBlog.value)

    const datiBlogFilter = datiBlog.filter(dato => dato.id === data)

    console.log(datiBlogFilter)

return(
<>
<Background
bg = {Blog}
></Background>
<ContainerBasic>
<CardXl
dati = {dati}
MapXl = {datiBlogFilter}
></CardXl>
</ContainerBasic>
</>
)};

export default FocusBlog;


export const loader = ( {params} ) => {

    const id = params.idArticolo
    
    return id
    }
