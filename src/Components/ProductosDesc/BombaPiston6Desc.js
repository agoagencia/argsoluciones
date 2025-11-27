import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/6.-Bomba de pistón de aceite 2 esferas Aro 612041-1.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

//falta descripción: 
// 1, 8, 



function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Bomba de pistón de aceite 2 esferas Aro 612041-1</h2><br/>
        <p><strong>SKU:</strong>   612041-1</p>
        <p><strong>Categorías:</strong>  Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La bombas de 2 esferas están entre las más versátiles de la línea ARO. Son capaces de manejar aplicaciones desde transferencia simple hasta extrusión de materiales de viscosidad baja a media de hasta 100.000 centipoise (cPs) con entrega de fluido hasta 18,1 gpm (68,6 l/min).

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero al carbono niquelado<br/><br/>

Capacidad el contenedor: 55 galones (208.2 L)<br/><br/>

Tipo: Montaje en pared o tambor<br/><br/>

Material del émbolo: Acero al carbono<br/><br/>

Empaquetaduras superiores:<br/><br/>

Empaquetaduras inferiores: Nitrilo
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc