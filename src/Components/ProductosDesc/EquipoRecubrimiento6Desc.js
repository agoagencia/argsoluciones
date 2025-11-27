import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/6.-Bomba maple 15-3.jpg';
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
        <h2>Bomba maple 15/3</h2><br/>
        <p><strong>SKU:</strong> 104009</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bombas Maple para sistemas con recirculación, así como sistemas sin recirculación, con desplazamientos que van desde 166 cc/.04 gal a 200 cc/.05 gal por ciclo.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Peso: 46 libras (21 kg)<br/><br/>

Proporción: 3:1<br/><br/>

Flujo a 60 ciclos / Min: 6 gal (23 litros)<br/><br/>

Desplazamiento / ciclo: 375 cc / 0,1 gal.<br/><br/>

Conexión de entrada de fluido: 1 "Sanitario<br/><br/>

Conexión de fluido de salida: 1 "Sanitario<br/><br/>

Materiales húmedos de conexión de aire: 3/8 "NPS (m) BSP (m)<br/><br/>

Presión máxima de fluido: 300 psi (21 bares)<br/><br/>

Consumo de aire a 45 psi: 0,17 scfm / ciclo<br/><br/>

Presión máxima de entrada de aire: 100 psi (6,9 bares)<br/><br/>

Tasa máxima recomendada de ciclo continuo: 20 cpm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc