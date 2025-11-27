import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/18.-Bomba de diafragma Graco D12091.jpg';
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
        <h2>Bomba de diafragma Graco D12091</h2><br/>
        <p><strong>SKU:</strong>   D12091</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de Diafragma No Metálica puertos roscados NPTF de 1/4″, sección motor , partes húmedas y bolas de polipropileno, diafragmas de teflón, Marca Graco
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Serie: Husky 205<br/><br/>

Entrada / Salida: 1/4"<br/><br/>

Partes Húmedas: Polipropileno<br/><br/>

Válvulas Check: Polipropileno<br/><br/>

Diafragmas: PTFE<br/><br/>

Presión máxima de operación: 100 psi<br/><br/>

Entrada de aire 1/4" / Tamaño de la salida: 1/4" NPT (F)<br/><br/>

Máxima flujo: 5.0 gpm.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc