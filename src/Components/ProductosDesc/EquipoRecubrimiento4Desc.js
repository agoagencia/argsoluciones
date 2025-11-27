import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/4.-Bomba de alta presion MX432 Binks.jpg';
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
        <h2>Bomba de alta presion MX432 Binks</h2><br/>
        <p><strong>SKU:</strong> MX432</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Madera, Carlisle-Binks Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          BINKS ofrece una gama completa de bombas de alta presión para aplicaciones de alta viscosidad
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Características:<br/><br/>

Secciones de fluido de acero inoxidable y acero al carbono ideal para materiales a base de solventes a base de agua<br/><br/>

Detención magnética (patente) para cambio rápido de carrera con pulso mínimo<br/><br/>

Piezas reducidas: mantenimiento fácil y rápido<br/><br/>

Diseño lógico de aire antibloqueo y sin hielo<br/><br/>

Diseño de bomba divorciada posibilidad cero de que entre pintura en el motor neumático<br/><br/>

Empaquetaduras fijas de tensión de resorte<br/><br/>

Larga vida útil duradera asientos de válvula en carburo de tungsteno y pistón en cerámica (bombas de más de 190 ml)<br/><br/>

RATIO 32:1<br/><br/>

Max Presión Entrada 116 psi (8 bar)<br/><br/>

Flujo a 60 ciclos 0.4 gpm<br/><br/>

Volumen por ciclo 0.8 oz (24cc)<br/><br/>

Max Presión Fluido 3,712 psi<br/><br/>

Consumo Aire a 20 ciclos/min 5.2 SCFM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc