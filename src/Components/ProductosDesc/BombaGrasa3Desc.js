import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/3.-Bomba de aceite y paquete Aro LM2203A-31-C.jpg';
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
        <h2>Bomba de aceite y paquete Aro LM2203A-31-C</h2><br/>
        <p><strong>SKU:</strong>  LM2203A-31-C</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de aceite, Relación 3: 1, Motor neum?tico de 3 »

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Diámetro del motor neumático: 2"<br/><br/>

Rango de presión de entrada de aire psi (bar): 0-150 (0-10.3)<br/><br/>

Rango de presión de fluido psi (bar): 0-7500 (0-517.2)<br/><br/>

Longitud de la carrera: 3"<br/><br/>

Max. Ciclos recomendados / minuto: 80<br/><br/>

Ciclos por galón (litro): 12.3 (3.2)<br/><br/>

Tamaño de contenedor: 16 (60.6 lt.)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc