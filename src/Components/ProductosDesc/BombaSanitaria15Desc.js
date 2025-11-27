import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/15.-Bomba sanitaria de 2″ Aro SD20S-CSS-STT-A.jpg';
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
        <h2>Bomba sanitaria de 2″ Aro SD20S-CSS-STT-A</h2><br/>
        <p><strong>SKU:</strong> SD20S-CSS-STT-A</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma sanitaria para inyectar productos alimenticios en moldes, dispensar salsas y jarabes en tanques de mezcla o transferir y filtrar cerveza o vino, las bombas que cumplen con la FDA son una necesidad para procesar alimentos y bebidas.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión PSI bar: 25 (1.723)<br/><br/>

Altura de succión (m): 18.25 (5.56)<br/><br/>

Altura de succión húmedad (m): 31.4 (9.57)<br/><br/>

Tasa de flujo GPM (lpm): 195 (738)<br/><br/>

Desplazamiento por ciclo a 100 PSI GAL (litros): 1.3 (4.9)<br/><br/>

Max. Paso de sólidos pulg. (Mm): 0.25 (6.35)<br/><br/>

Entrada / salida fluido: 2-1/2” Tri-Clamp
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc