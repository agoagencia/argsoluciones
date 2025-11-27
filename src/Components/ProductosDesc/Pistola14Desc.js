import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/14.-Pistola pulverizadora sin aire 288425.jpg';
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
        <h2>Pistola pulverizadora sin aire 288425</h2><br/>
        <p><strong>SKU:</strong>288425</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola pulverizadora sin aire para contratistas, gatillo de 4 dedos, punta de interruptor RAC X 517
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Componente A Tamaño de entrada (in): 1/4<br/><br/>

Componente A Tipo de rosca de entrada: NPSM<br/><br/>

Tamaño del orificio de fluido (in): 0,125<br/><br/>

Activación de pistola: manual<br/><br/>

Peso de la pistola (oz): 22<br/><br/>

Presión máxima de fluido (MPa): 24,8
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc