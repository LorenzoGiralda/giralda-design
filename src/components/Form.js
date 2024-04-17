import cooffee from '../img/icon-coffee.png';

import { useState } from 'react';

import emailjs from 'emailjs-com' ; 

import ModalForm from './ModalForm';

import { useSelector, useDispatch } from 'react-redux';


const Form = () => {

  const ValueView = useSelector((state) => state.ToggleLight.value)

const SERVICE_ID = "service_z7gqk2n" ; 
const TEMPLATE_ID = "template_1hm7rnp" ; 
const PUBLIC_KEY = "gPvC4XQHeepoWOXN1" ; 

const [stateNome, changeNome] = useState(undefined);
const [stateCognome, changeCognome] = useState(undefined);
const [stateMail, changeMail] = useState(undefined);
const [stateServizio, changeServizio] = useState(undefined);
const [stateTesto, changeTesto] = useState(undefined);

const [statePrivacy, changePrivacy] = useState(false);


let disable = 'true'

if(stateNome !== '' && stateCognome !== '' && stateMail !== '' && stateServizio !== undefined && stateTesto !== '' && statePrivacy !== false){
disable = ''
}

const validateServizio = (event) => {

  if (event.target.value === "" ) {
    changeServizio(event.target.value);
   
  } else {
    changeServizio(event.target.value);
  }
};

const ValidateTesto = (event) => {
  if (event.target.value === "") {
    changeTesto(event.target.value);
  } else {
    changeTesto(event.target.value);
  }
};

const ValidateNome = (event) => {
  if (event.target.value === "") {
    changeNome(event.target.value);
  }else {
  changeNome(event.target.value);
  console.log(event)
  }
};

const ValidateCognome = (event) => {
  if (event.target.value === "") {
    changeCognome(event.target.value);
  } else {
    changeCognome(event.target.value);
  }
};

const ValidateMail = (event) => {

  if (event.target.value === "") {
    changeMail(event.target.value);
  } else {
    changeMail(event.target.value);
  }
};


let classNome = ''
let classNomeLabel = ''

if(stateNome !== undefined){
classNome = stateNome.length <= 3 ? 'border border-danger' : ''
classNomeLabel = stateNome.length <= 3  
}

let classCognome = ''
let classCognomeLabel = ''

if(stateCognome !== undefined){
classCognome = stateCognome.length <= 3 ? 'border border-danger' : ''
classCognomeLabel = stateCognome.length <= 3  
}

let classMail = ''
let classMailLabel = ''



function validateEmail(Email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(Email);
}

if(validateEmail(stateMail) === false && stateMail !== undefined){
classMail = validateEmail(stateMail) === false ? 'border border-danger' : ''
classMailLabel = validateEmail(stateMail) === false
}

let classTesto = ''
let classTestoLabel = ''

if(stateTesto !== undefined){
classTesto = stateTesto.length <= 3 ? 'border border-danger' : ''
classTestoLabel = stateTesto.length <= 3  
}


const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      alert('Message Sent Successfully')
    }, (error) => {
      console.log(error.text);
      alert('Something went wrong!')
    });
changeNome(undefined)
changeCognome(undefined)
changeMail(undefined)
changeServizio(undefined)
changeTesto(undefined)
changePrivacy(false)
  e.target.reset()
};

return(

<form onSubmit={handleOnSubmit} className={`col-12 col-lg-6 d-flex flex-wrap justify-content-center
p-2 my-5 rounded shadow ${ValueView ? 'bg-light' : 'bg-secondary text-light'}`}
id="form" method="post" action="formInvio.php">

<div className='col-12 d-flex flex-column align-items-center my-2 mb-4'>
<h3 className='fw-bold'>CONTATTARMI?</h3>
<div className='d-flex align-items-center'>
<div className='me-2'><img style={{'width': '40px'}} src={cooffee} alt="icona-caffè"></img></div>
<label>Facile come prendere un caffè!</label>
</div>    
</div>

<div className="p-2 col-12">
<div class="mb-3">
<label for="Nome" class="form-label">Nome</label>
<input onBlur={ValidateNome} onChange={(event) => {event.target.value.length > 3 && changeNome(event.target.value)}}
placeholder="Mario" id="Nome" name="Nome" type="text"
className={`${classNome} form-control shadow-sm`}></input>
{classNomeLabel ? <label className='mt-2 text-danger'>Compila il campo correttamente!</label> : ''}
</div>
</div>

<div className="p-2 col-12">
<div class="mb-3">
<label for="Cognome" class="form-label">Cognome</label>
<input onBlur={ValidateCognome} onChange={(event) => {event.target.value.length > 3 && changeCognome(event.target.value)}}
placeholder="Rossi" id="Cognome" name="Cognome" type="text"
className={`${classCognome} form-control shadow-sm`}></input>
{classCognomeLabel ? <label className='mt-2 text-danger'>Compila il campo correttamente!</label> : ''}
</div>
</div>

<div className="p-2 col-12">
<div className='mb-3'>
<label for="Email" class="form-label">E-mail:</label>
<input onBlur={ValidateMail} onChange={(event) => {validateEmail(event.target.value) === true && changeMail(event.target.value)}}
placeholder="Mario Rossi" id="Email" name="Email" type="email"
className={`${classMail} form-control shadow-sm`}></input>
{classMailLabel ? <label className='mt-2 text-danger'>Compila il campo correttamente!</label> : ''}
</div>
</div>

<div className="p-2 col-12">
<label class="form-label">Servizio richiesto</label>
<select onChange={(event) => {changeServizio(event.target.value); validateServizio(event)}} name="Servizio" id="servizio"
class={`${stateServizio === '' ? 'border border-danger' : ''} form-select mb-3 shadow-sm`} style={{'cursor': 'pointer'}}>
<option value='' selected>Seleziona</option>
<option value="Grafica online - offline">Grafica online - offline</option>
<option value="Mockup e grafica siti">Mockup e grafica siti ed app</option>
<option value="Sviluppo siti e web app">Sviluppo siti - web app</option>
</select>
{stateServizio === '' ? <label className='text-danger'>Compila il campo correttamente!</label> : ''}
</div>


<div className="p-2 col-12">
<div class="mb-3">
<label for="testo" class="form-label">Testo</label>
<textarea onBlur={ValidateTesto} onChange={(event) => {event.target.value.length > 3 && changeTesto(event.target.value)}}
className={`${classTesto} form-control shadow-sm`} name="Testo" id="testo" rows="4"></textarea>
{classTestoLabel  ? <label className='mt-2 text-danger'>Compila il campo correttamente!</label> : ''}
</div>
</div>


<div class="form-check mt-2">
  <input onClick={() => changePrivacy(!statePrivacy)} style={{'cursor': 'pointer'}} class="form-check-input" type="checkbox" id="flexCheckDefault"></input>
  <label style={{'cursor': 'pointer'}} class="form-check-label"
  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Termini e condizioni
  </label>
</div>

<ModalForm></ModalForm>


<div className="p-2 col-12 mt-2">
<button value='Send' style={{'cursor': 'pointer'}} type="submit" disabled={disable}
class="fw-bold py-2 w-100 btn shadow-sm bg-white border-0">
INVIO</button>
</div>

</form>
);};

export default Form;