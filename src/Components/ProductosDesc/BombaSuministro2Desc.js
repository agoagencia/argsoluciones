import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/2.-Bomba de 2 bolas President Graco.jpg';
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
        <h2>Bomba de 2 bolas President Graco</h2><br/>
        <p><strong>SKU:</strong> President</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La bomba de suministro de dos bolas President de Graco para revestimientos líquidos es una bomba neumática de desplazamiento positivo con un diseño de dos bolas para una entrega uniforme y fácil de controlar

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada de aire (pulg): 0.5<br/><br/>

Género de rosca de entrada de aire: Hembra<br/><br/>

Tipo de rosca de entrada de aire: NPT<br/><br/>

Solicitud: Suministro<br/><br/>

Material compatible: Base agua, base disolvente, alto contenido de sólidos, xirallic, CARC, metálicos, capas finales, tintes, barniz<br/><br/>

Tamaño de salida de fluido (pulg): 3/4<br/><br/>

Género del hilo de salida de fluido: Hembra<br/><br/>

Tipo de rosca de salida de fluido: NPT<br/><br/>

Tipo de sección de fluido: 2 bolas<br/><br/>

Incluye: Longitud del tambor
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc