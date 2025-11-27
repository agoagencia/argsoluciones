import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/6.-Bombas de embolo Glutton.jpg';
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
        <h2>Bombas de embolo Glutton</h2><br/>
        <p><strong>SKU:</strong>  Glutton</p>
        <p><strong>Categorías:</strong>Bombas de suministro, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La bomba de diseño de sello de fuelle Glutton es ideal para aplicaciones de pulverización sin aire y asistidas por aire. Las exclusivas bombas de estilo de émbolo doble separado están diseñadas para admitir más materiales sensibles a la fricción y el calor. Las relaciones de bombeo incluyen 4:1, 12:1 y 25:1

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada de aire (pulg): 0.5<br/><br/>

Género de rosca de entrada de aire: Hembra<br/><br/>

Tipo de rosca de entrada de aire: NPT<br/><br/>

Solicitud: Circulación<br/><br/>

Material compatible: Base agua, base disolvente, alto contenido de sólidos, xirallic, metálicos, revestimiento UV, tintes, barniz, CARC<br/><br/>

Tamaño de salida de fluido (pulg): 1<br/><br/>

Género del hilo de salida de fluido: Hembra<br/><br/>

Tipo de rosca de salida de fluido: NPT<br/><br/>

Tipo de sección de fluido: Sellado<br/><br/>

Material: Acero carbono
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc