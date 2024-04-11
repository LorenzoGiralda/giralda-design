import SoftwareStile from "./SoftwareCard.module.css";

import { useState } from "react";

import Arrow from "../img/icon-arrow.png";

const rotate = SoftwareStile.rotate;
const rotate1 = SoftwareStile.rotate1;
const hoverSoft = SoftwareStile.hoverSoft;
// const slildeUp = SoftwareStile.slildeUp;
// const slildeDown = SoftwareStile.slildeDown;



const SoftwareCard = (props) => {


  const [statoRotate, changeRotate] = useState(false)

  return (
    <div className={`${props.title === 'GIT' ? 'mb-0' : 'mb-5'} mb-lg-4 col-12 col-lg-3 p-3 bg-trasparent d-flex flex-column`}>
      <div className={`p-2 bg-light rounded shadow overflow-hidden`}>
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="me-2">
              <img style={{'width': '32px'}} src={props.img} alt=""></img>
            </div>
            <label>{props.title}</label>
          </div>
          <div
            onClick={() => {props.stateSoftware !== props.title ? props.statoSoft(props.title) : props.statoSoft(''); changeRotate(!statoRotate)}}
            style={{ width: "26px", height: "26px" }}
            data-bs-toggle="collapse" data-bs-target={'#' + props.toggle} aria-expanded="false" aria-controls={props.toggle}
            className={`border border-dark p-2 rounded-circle d-flex ${hoverSoft}`}
          >
            <img
            id="rotCard"
            className={`img-fluid ${statoRotate ? rotate : rotate1}`}
            src={Arrow}
            alt=""
            ></img>
          </div>
        </div>

        <div className={`collapse m-0 mt-2 p-0 bg-light`} id={props.toggle}>
        <p 
          className={`m-0
          `} 
         >{props.description}</p>
        </div>

        </div>
    </div>
  );
};


// props.stateSoftware === props.title

export default SoftwareCard;