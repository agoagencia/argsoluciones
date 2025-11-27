import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/22.-Pistola automática AGMDPRO.jpg';
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
        <h2>Pistola automática AGMDPRO</h2><br/>
        <p><strong>SKU:</strong> AGMDPRO</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Vidrio, Carlisle-Devilbiss Vidrio</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola automática AGMD Pro de DeVilbiss ofrece la más alta calidad de pulverización y el mejor rendimiento de su clase
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cabezal de aire C797C Convencional: 340l/min (12.0 cfm) @ 2.0 bar (30psi)<br/><br/>

Cabezal de aire TE30 High Efficiency: 365 l/min (12.9 cfm) @ 2.0 bar (30psi)<br/><br/>

Cabezal de aire TE40 High Efficiency: 350 l/min (12.4 cfm) @ 2.0 bar (30psi)<br/><br/>

Cabezal de aire TE50 High Efficiency: 425 l/min (15.0 cfm) @ 2.0 bar (30psi)<br/><br/>

Dimensión - (L x A x P): 46mm x 55mm x 124mm<br/><br/>

Peso – sólo pistola: 646 g<br/><br/>

Presión de aire máx.: 12 bar<br/><br/>

Presión de aire de atomización máx.: 12 bar
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc