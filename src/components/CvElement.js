
const CvElement = (props) => {
return(
<div className="mt-5 col-12 col-lg-4 p-2 d-flex flex-column align-items-center">
<div><img src={props.img} alt=""></img></div>
<h4 className='mt-2 text-center'>{props.title}</h4>
{ props.subtitle && <label className='text-center'>{props.subtitle}</label>}
</div>
)};

export default CvElement;