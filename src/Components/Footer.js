import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import './footer.css'

function Footer() {
  
  return <div className='footer_flex'>
    <div className='box_footer'>
      <br/>
      <h5>¿Por qué cotizar con nosotros?</h5>
      <br/>
      <p>Brindamos equipos y productos de calidad e innovación <br/>con atención personalizada. Damos soporte técnico y respaldo<br/> a tus productos en el proceso de instalación y mantenimiento.</p>
    </div>
    <div className='box_footer'>
    <br/>
      <h5>Puedes comunicarte a través de:</h5>
     <br/>
          
      <p>6621 11 30 20</p>
      <p>contacto@argsoluciones.com.mx.</p>
      <p>www.argsoluciones.com.mx</p>
      <br/>
      <Link to="/aviso_privacidad"><p>Aviso de privacidad</p></Link>
    </div>


    <div className='box_footer'>
    <br/>
      <h5>Nuestras redes sociales</h5>
      <div class="container">


</div>
      <br/>
      <div className='social'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/argsolucionesmx"><FontAwesomeIcon icon={faFacebook}/>&nbsp;&nbsp;</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/argsolucionesmx/"><FontAwesomeIcon icon={faInstagram}/>&nbsp;&nbsp;</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zsHajxVZwKs/"><FontAwesomeIcon icon={faYoutubeSquare}/>&nbsp;&nbsp;</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/arg-soluciones/"><FontAwesomeIcon icon={faLinkedin}/>&nbsp;&nbsp;</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/arg-soluciones/"><FontAwesomeIcon icon={faWhatsapp}/>&nbsp;&nbsp;</a><br/><br/>
      </div>
    </div>

      
  </div>;
}

export default Footer;
