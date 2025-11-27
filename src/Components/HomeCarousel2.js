
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeCarousel.css';
import imgHomeCarousel1 from "../img/NuevasSlider/pexels-ivan-129544.jpg";
import imgHomeCarousel2 from "../img/slide/57295.jpg";
import imgHomeCarousel3 from "../img/slide/57295.jpg";
import imgHomeCarousel4 from "../img/ServiciosImg/3.jpg";


function HomeCarousel2() {
  return <div className="homeCarousel2">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgHomeCarousel1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgHomeCarousel2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgHomeCarousel3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgHomeCarousel4} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
}
export default HomeCarousel2;
