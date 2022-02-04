
import './homeCarousel.css'
/* import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCarousel } from "reactstrap";







function HomeCarousel() {
  return <div className="homeCarousel">
   {/*  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imageCarousel1} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imageCarousel2} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imageCarousel3} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

{/* -----------OTRA  PRUEBA-------------------- */}

<UncontrolledCarousel
  items={[
    {
    /*   altText: 'Slide 1',
      caption: 'Slide 1', */
      key: 1,
      src: require('../img/slide/57295.jpg'),
    
    },
    {
      /* altText: 'Slide 2',
      caption: 'Slide 2', */
      key: 2,
      src: require('../img/slide/crear-una-constructora-guia-completa.jpg')
    },
    {
/*       altText: 'Slide 3',
      caption: 'Slide 3', */
      key: 3,
      src: require('../img/slide/materiales-construccion.jpg')
    },
    {
    /*   altText: 'Slide 4',
      caption: 'Slide 4', */
      key: 4,
      src: require('../img/slide/Minería_Responsable_JRC_Abridora-Desktop_Mobile.jpg')
    },
    {
     /*  altText: 'Slide 5',
      caption: 'Slide 5', */
      key: 5,
      src: require('../img/slide/nuevo-metodo-mineria.jpg')
    },
    {
    /*   altText: 'Slide 6',
      caption: 'Slide 6', */
      key: 6,
      src: require('../img/slide/s-gruas-1024x683.jpg')
    }
    
  ]}
 />














    
{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imageCarousel1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={imageCarousel2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={imageCarousel3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div> */}
  </div>;
}
export default HomeCarousel;



