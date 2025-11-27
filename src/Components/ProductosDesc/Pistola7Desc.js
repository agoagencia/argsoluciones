import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/7.-Pistola pulverizadora Binks 2101-5200-0.jpg';
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
        <h2>Pistola pulverizadora Binks 2101-5200-0</h2><br/>
        <p><strong>SKU:</strong>   2101-5200-0</p>
        <p><strong>Categorías:</strong>Carlisle-Binks, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola rociadora Serie 2100 resistente en construcción para uso continuo y acabado uniforme
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de aire: 100 psi / 6.9 bar (P-1)<br/><br/>

Presión máxima de fluido: 100 psi / 6.9 bar<br/><br/>

Cuerpo de pistola: aluminio<br/><br/>

Tamaño de entrada de fluido: 3/8 " NPS<br/><br/>

Tamaño de entrada de aire: 1/4 " NPS<br/><br/>

Peso de la pistola: 6 oz. / 635 gramos
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc