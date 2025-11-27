import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/9.-Pistola pulverizadora convencional 6469-5111-5.jpg';
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
        <h2>Pistola pulverizadora convencional 6469-5111-5</h2><br/>
        <p><strong>SKU:</strong>6469-5111-5</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de aire de estilo convencional que se activa neumática mente para aplicaciones con reciprocidad
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Peso: 20.5 oz.<br/><br/>

Entrada de aire del cilindro: 1/4 "NPS (M)<br/><br/>

Presión de aire del cilindro: 40 PSI m?n.<br/><br/>

Orificio de montaje: 1/2 "<br/><br/>

Aire de atomización: 1/4 "NPS (M)<br/><br/>

Entrada de fluido: 3/8 "NPS (M)<br/><br/>

Presión de fluido: 100 PSI M?x.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc