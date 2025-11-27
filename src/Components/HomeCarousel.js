
import './homeCarousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCarousel } from "reactstrap";


function HomeCarousel() {
  return <div className="homeCarousel">

<UncontrolledCarousel
  items={[
    {
    /*   altText: 'Slide 1',
      caption: 'Slide 1', */
      key: 1,
      /* src: require('../img/slide/57295.jpg'), */
      /* src: require('../img/NuevasSlider/pexels-digital-core-239919.jpg'), */
        
      src: require('../img/NuevasSlider/pexels-ivan-129544.jpg'),
      
    },
    {
      /* altText: 'Slide 2',
      caption: 'Slide 2', */
      key: 2,
      src: require('../img/NuevasSlider/pexels-yury-kim-585418.jpg'),
      /* src: require('../img/slide/crear-una-constructora-guia-completa.jpg') */
      
    },
    {
/*       altText: 'Slide 3',
      caption: 'Slide 3', */
      key: 3,
      
      src: require('../img/slide/57295.jpg'),
      
    },
    
    {
      /*       altText: 'Slide 3',
      caption: 'Slide 3', */
      key: 4,
      src: require('../img/ServiciosImg/3.jpg'),
      
      
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



