import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/26.-Pistola rociadora DV1 (CLEARCOAT, BASECOAT) Devilbiss.jpg';
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
        <h2>Pistola rociadora DV1 (CLEARCOAT, BASECOAT) Devilbiss</h2><br/>
        <p><strong>SKU:</strong> DV1 (CLEARCOAT, BASECOAT)</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Automotriz, Carlisle-Devilbiss Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola rociadora para capa transparente DV1 es la última incorporación a la familia DV1 de pistolas rociadoras revolucionarias diseñadas para aplicaciones específicas
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          La pistola DV1 Clearcoat está equipada con el nuevo cabezal de aire DV1-C1 PLUS Clearcoat, que ofrece un rendimiento de eficiencia superior y garantiza un acabado perfecto<br/><br/>

El cabezal de aire distribuye las partículas ultrafinas de manera uniforme y uniforme para aplicar la capa transparente sin espesor adicional, lo que permite a los pintores humedecer fácilmente las superficies y minimizar los goteos en los paneles verticales<br/><br/>

El diseño innovador de la boquilla aumenta el flujo del producto, al mismo tiempo que estabiliza el flujo de aire. El consumo de pintura se reduce as? considerablemente<br/><br/>

Con un nuevo acabado en negro mate, la capa transparente DV1 ofrece un mejor agarre, para la máxima comodidad del usuario, al tiempo que ofrece más potencia para aumentar la productividad<br/><br/>

Más rápida y eficiente, económica en producto y con capacidades superiores de atomización, la pistola DV1 Clearcoat da la seguridad de lograr un acabado de alta calidad, con perfecta transparencia, en cada uso<br/><br/>

Fácil atomización, para una distribución uniforme de partículas ultrafinas, Máxima ergonomía y comodidad, desde la preparación hasta la aplicación. Tasa de transferencia mejorada y ahorro de tiempo con cada uso
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc