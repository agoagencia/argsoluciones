import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de curado/1.-BGK Autocure Infrarrojo Curado.jpg';
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
        <h2>BGK Autocure Infrarrojo Curado</h2><br/>
        <p><strong>SKU:</strong> AUTOCURE</p>
        <p><strong>Categorías:</strong> Equipos de Curado, Carlisle-BGK, Mercados, Vidrio, Carlisle-BGK, Carlisle-BGK Vidrio</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los Emisores Infrarrojos BGK incorporan emisores T3 únicos de onda corta fabricados exclusivamente para equipos BGK. Proporcionando la transferencia de calor más eficiente – directa y penetrante – los emisores BGK T3 maximizan su proceso y productividad Los tubos de cuarzo claros llenos de gas halógeno incluyen discos de tántalo, filamentos de tungsteno, cables de acero inoxidable y sellos finales de cerámica duraderos, los emisores BGK proporcionan energía directa, reflejada y convectiva que abarca todas las longitudes de onda
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          AUTOCURE 5000II PORTABLE HEATER: Esta unidad portátil está diseñada específicamente para curar retoques Con seguro en las ruedas para mantener la posición. Disponible en varios tamaños<br/><br/>

AUTOCURE 6000II OVERHEAD HEATER: Diseñada para montarse en sistema de rieles X-Y en la parte superior de la cabina o área de reparación Disponible en varios tamaños<br/><br/>

AUTOCURE 7000 SIDE MOUNT HEATER: Diseñada para ser montada en una cabina o pared cuando la distancia al techo es mínima. Se desliza longitudinalmente. Disponible en varios tamaños<br/><br/>

AUTOCURE 8000 PANEL HEATER: Diseñada para curar paneles o secciones completas. Con seguro en las ruedas para mantener la posición. Disponible en dos tamaños estándar
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc