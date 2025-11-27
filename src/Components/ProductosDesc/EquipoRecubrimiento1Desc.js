import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/1.-Agitador Binks 31-451  31-454.jpg';
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
        <h2>Agitador Binks 31-451 / 31-454</h2><br/>
        <p><strong>SKU:</strong> 31-454</p>
        <p><strong>Categorías:</strong>  Equipos de Recubrimiento, Carlisle-Binks, Mercados, Cerámica, Carlisle-Binks</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Diseñados para una variedad de aplicaciones industriales y automovilísticas. Los agitadores aseguran que las pinturas o productos están correctamente agitados para mantener las partículas sólidas en suspensión y conservar las características óptimas para el acabado
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          31-454:Accionador de agitador de 55 galones con herramienta de soporte para tambores con agitador existente<br/>

31-451: Accionador de agitador de 55 galones con adaptador roscado para tambores y agitador existente<br/>
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc