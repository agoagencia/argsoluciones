import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/7.-Bomba de diafragma Aro 6661A3-344-C.jpg';
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
        <h2>Bomba de diafragma Aro 6661A3-344-C</h2><br/>
        <p><strong>SKU:</strong>  6661A3-344-C</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma no metálica de 1″ (teflón) colector de 3 piezas, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          47 galones por minuto (gpm)<br/><br/>

Tapa de fluido / colector: polipropileno<br/><br/>

Sección central: Aluminio<br/><br/>

Material de asiento / bola: teflón (PTFE)<br/><br/>

Material del diafragma: teflón (PTFE)<br/><br/>

Conexión de fluido: Brida ANSI de 1" (colector de 3 piezas)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc