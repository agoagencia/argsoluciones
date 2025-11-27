import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/9.-Bomba de diafragma Aro PD01P-HPS-PTT-A.jpg';
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
        <h2>Bomba de diafragma Aro PD01P-HPS-PTT-A</h2><br/>
        <p><strong>SKU:</strong>   PD01P-HPS-PTT-A</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Neumática No-Metálica de Doble Diafragma, puertos múltiples roscados, Entrada/Salida /1/4″, construcción motor y partes húmedas y asientos en plipropileno, bolas y diafragmas de teflón.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Flujo Máximo: 4.5 GPM<br/><br/>

PSI Operativo Máximo: 100<br/><br/>

Material de Cuerpo: Polipropileno<br/><br/>

Material de Diafragma: PTFE<br/><br/>

Material de Bolas: PTFE<br/><br/>

Asiento de Retenci?n: Polipropileno<br/><br/>

Entrada de Aire: 1/4"<br/><br/>

Max. Temp. 66?C
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc