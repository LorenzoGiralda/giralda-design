const ContainerBasic = (props) => {
return(
<div className={`${props.containerBlog === true ? 'pb-5' : 'py-5'} container-fluid bg-light p-0 d-flex`}>
<div className="container p-0 d-flex flex-wrap">
{props.children}
</div>  
</div>
)};

export default ContainerBasic;