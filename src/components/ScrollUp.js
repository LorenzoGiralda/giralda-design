import { useEffect, useState } from 'react';
import Arrow from '../img/icon-arrow.png'

const ScrollUp = () => {

    const [stateScroll,changeScroll] = useState(false)

    useEffect(() => {
    window.onscroll = () => {
    if(window.scrollY > 2000){
    changeScroll(true)
    }else{
    changeScroll(false)
    } }
    },[])

    console.log(stateScroll)

return(
<div className='d-none d-lg-flex'>
<a href='#' style={{'width':'50px', 'height': '50px', 'transform': 'rotate(180deg)', 'zIndex': '6000', 'top': '20px','left': '20px', 'background': '#ffa500c7'}}
className={`rounded-circle ${stateScroll === true ? 'd-flex' : 'd-none'} justify-content-center align-items-center position-fixed`}>
<img style={{'width': '20px'}} className='img-fluid' src={Arrow} alt="icon-torna-su"></img>
</a> 
</div>
)};


export default ScrollUp;