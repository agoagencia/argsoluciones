import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/11.-Pistola Pulverizadora FLG-HVG-315MX.jpg';
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
        <h2>Pistola Pulverizadora FLG-HVG-315MX</h2><br/>
        <p><strong>SKU:</strong> FLG-HVG-315MX</p>
        <p><strong>Categorías:</strong> Carlisle-DeVilbiss, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola Pulverizadora HVLP ligera, alimentada por gravedad y de uso general apropiada para usarse con varios tipos de materiales comunes de recubrimiento
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima del aire: 100 psi<br/><br/>

Cuerpo de la pistola: Aluminio forjado<br/><br/>

Conducto del fluido: Aluminio anodizado<br/><br/>

Entrada de aire macho de 1/4" NPS<br/><br/>

Peso de la pistola: 18.13 oz / 514 g
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc