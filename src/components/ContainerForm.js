import sfondoForm from '../img/sfondo-form.jpg'

const ContainerForm = (props) => {
return(
<div style={{'backgroundImage': `url(${sfondoForm})`, 'backgroundRepeat': 'no-repeat','backgroundSize':'cover'}} className="container-fluid p-2">
<div className="p-0 py-2 py-lg-5 container d-flex flex-wrap justify-content-center">
{props.children}
</div>
</div>
)};

export default ContainerForm;