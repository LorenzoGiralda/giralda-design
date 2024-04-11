

const IconRounded = (props) => {
return(
<btn onClick={() => props.changeStateView(props.nome)} className={`${props.stile} ${props.class}`}>
<img className="img-fluid" src={props.img} alt={props.nome}></img>
</btn>
)};

export default IconRounded;