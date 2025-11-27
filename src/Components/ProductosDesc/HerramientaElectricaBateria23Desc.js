import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/23.-Sierra circular inalambrica XSS02Z.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Sierra circular inalambrica XSS02Z</h2><br/>
        <p><strong>SKU:</strong> XSS02Z</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Base de alta precisión mecanizada, de calibre pesado diseñada para corte suave y preciso y una mayor durabilidad en condiciones extremas.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
         

          Diámetro de la Hoja: 6-1/2"<br/><br/>

Eje: 5/8"<br/><br/>

Capacidad Máx. de Corte (a 90°): 2-1/4"<br/><br/>

Capacidad Máx. de Corte (a 45°): 1-9/16"<br/><br/>

Velocidad Sin Carga: 3,700 RPM<br/><br/>

Batería: LXT Litio-Ion de 18V
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc