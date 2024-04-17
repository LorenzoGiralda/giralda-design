import { useSelector, useDispatch } from 'react-redux';

const ContainerBasic = (props) => {

const ValueView = useSelector((state) => state.ToggleLight.value)

console.log(ValueView, 'valore view')

return(
<div className={`${props.containerBlog === true ? 'pb-5' : 'py-5'} container-fluid
${ValueView ? 'bg-light' : 'bg-dark'} p-0 d-flex`}>
<div className="container p-0 d-flex flex-wrap">
{props.children}
</div>  
</div>
)};

export default ContainerBasic;