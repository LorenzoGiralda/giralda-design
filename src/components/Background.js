const Background = (props) => {
return(
<div style={{'backgroundImage': `url(${props.bg})`,'height':'300px', 'backgroundAttachment' : 'fixed', 'backgroundRepeat': 'no-repeat','backgroundSize':'cover'
}} className="container-fluid"></div>
)};

export default Background;