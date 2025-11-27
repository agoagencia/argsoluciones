import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Válvulas de Dispensación/2.-Valvula de medicion, mezclado y dispensacion patentada PD44.jpg';
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
        <h2>Valvula de medicion, mezclado y<br/> dispensacion patentada PD44</h2><br/>
        <p><strong>SKU:</strong> PD44</p>
        <p><strong>Categorías:</strong> Valvulas de dispensacion, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El PD44 de Graco está específicamente diseñado para dispensar pequeñas cantidades de agua a materiales de viscosidad pastosa de 0,005 cc a 5 cc. Las varillas del medidor están emparejadas con juntas mecanizadas para una vida úil de la junta mejorada.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Temperatura ambiente máxima: 43°C<br/><br/>

Temperatura máxima de funcionamiento: 65°C<br/><br/>

Presión máxima de trabajo del fluido de salida: 138 bar, 14 Mpa<br/><br/>

Presión máxima de trabajo de aire: 7 bar, 0.7 Mpa<br/><br/>

Mangas de metal: 83 bar, 8 MPa<br/><br/>

Fundas de plástico: 28 bar, 2.8 MPa<br/><br/>

Requisitos de aire suministrado: 1-3 cfm a 550 kPa, 5.5 bar - 7 bar, 0.7 MPa<br/><br/>

Rango de relación (seg?n las varillas de medición seleccionadas): 1:1 hasta 25:1<br/><br/>

Rango de tamaño de disparo (dependiendo de las varillas de medición seleccionadas): 0.005 cc a 5.0 cc<br/><br/>

Micrómetro PD44: 60 ciclos<br/><br/>

LRT PD44: 60 ciclos<br/><br/>

PD44 accionado por motor (con motor estándar Graco): 15 ciclos<br/><br/>

Nivel de potencia sonora: 76.5 dBA<br/><br/>

Presión sonora máxima: 92.8 dB
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc