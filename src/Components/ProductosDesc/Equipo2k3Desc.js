import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Equipos 2k/3.-Sistema para sellos HFR.jpg';
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
        <h2>Sistema para sellos HFR</h2><br/>
        <p><strong>SKU:</strong> HFR</p>
        <p><strong>Categorías:</strong> Equipos 2K, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema de medición HFR, para sellantes y adhesivos, con capacidades de 1 c/seg. hasta 26.7 c/seg. Con bomba o sin bomba de suministro.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Dimensiones (anchura x altura x profundidad): 122 x 150 x 86 cm (48 x 59 x 34 in )<br/><br/>

Gama de relaciones de mezcla: Relación de mezcla fija, de 1:1 a 16:1, dosificación a caudal continuo<br/><br/>

Gama de tolerancias de la relación de mezcla: Hasta ?1 %<br/><br/>

Filtración de fluido: Malla 20 estándar<br/><br/>

Caudales Mínimo: 7,5 cc/s (0,12 gpm) Máximo: 316 cc/s (5,0 gpm)<br/><br/>

Presión máx. de trabajo de la mezcla: 207 bar, 20,7 MPa (3000 psi)<br/><br/>

Presión mín. de fluido de entrada a la bomba: 0,3 bar, 0,03 MPa (50 psig)<br/><br/>

Temperatura ambiente máx.: 49 ?C (120 F )<br/><br/>

Peso Máquina básica: 287,6 kg (634 lb)<br/><br/>

Completamente configurada: 393,7 kg (868 lb)<br/><br/>

Gama de viscosidades de fluido: Hasta 30 000 cps
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc