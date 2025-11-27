import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Paquetes de bombas/5.-Rociador electrico Magnum ProX 17 17G177.jpg';
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
        <h2>Rociador electrico Magnum ProX 17 17G177</h2><br/>
        <p><strong>SKU:</strong>  17G177</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Rociador eléctrico TrueAirless Magnum ProX17, este innovador pulverizador puede abordar cualquier proyecto de interiores, propiedades de alquiler y grandes viviendas

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Amperaje: 8<br/><br/>

Tamaño de punta compatible (in): 0.009, 0.011, 0.013, 0.015, 0.017<br/><br/>

Tamaño del motor (HP): 0,75<br/><br/>

Tamaño de salida de fluido (in): 1/4<br/><br/>

Tipo de rosca de salida de fluido: NPSM<br/><br/>

Filtro de entrada de pintura: Malla de acero inoxidable de 35 mallas<br/><br/>

Caudal Máximo (GPM): 0,34<br/><br/>

Longitud máxima de manguera (pies): 150
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc