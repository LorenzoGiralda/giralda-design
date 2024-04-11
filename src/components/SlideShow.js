import Slide1 from '../img/slide-1.jpg'
import Slide2 from '../img/slide-2.jpg';
import Slide3 from '../img/slide-3.jpg';


const SlideShow = () => {
return(
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={Slide1} class="d-block w-100" alt=""></img>
      <div class="carousel-caption d-none d-md-block">
    <h2 style={{'fontWeight': 'bold'}}>GRAPHIC DESIGNER</h2>
    <p style={{'fontSize': '20px'}}>Realizzazione grafica offline ed online.</p>
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <img src={Slide2} class="d-block w-100" alt=""></img>
    <div class="carousel-caption d-none d-md-block">
    <h2 style={{'fontWeight': 'bold'}}>WEB DESIGNER</h2>
    <p style={{'fontSize': '20px'}}>Ideazione grafica e mockup siti e app.</p>
    </div> 
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <img src={Slide3} class="d-block w-100" alt=""></img>
    <div class="carousel-caption d-none d-md-block">
    <h2 style={{'fontWeight': 'bold'}}>FRONT END DEVELOPER</h2>
    <p style={{'fontSize': '20px'}}>Concept e sviluppo web app.</p>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
)};

export default SlideShow;