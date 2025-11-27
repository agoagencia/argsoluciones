import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/19.-Bomba de diafragma Graco D32331.jpg';
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
        <h2>Bomba de diafragma Graco D32331</h2><br/>
        <p><strong>SKU:</strong> D32331</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de Diafragma No Metálica puertos roscados NPTF de 3/8″, sección motor y partes húmedas de polipropileno, asientos y bolas de acero inoxidable, diafragmas de teflón
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Serie: Husky 307<br/><br/>

Entrada / Salida: 3/8? |Partes Humedas: Polipropileno<br/><br/>

Asientos: Acero Inoxidable Diafragmas: PTFE<br/><br/>

Bolas: SST<br/><br/>

Presi?n m?xima de funcionamiento del fluido: 100 psi<br/><br/>

Entrada de aire 1/4"/ Tama?o de la salida: 3/8" NPT (F)<br/><br/>

M?xima flujo: 6.5 gpm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc