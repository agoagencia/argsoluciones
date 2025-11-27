import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesElectricos/3.-Balancin mecanico BMDL-4.jpg';
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
        <h2>Balancin mecánico BMDL-4</h2><br/>
        <p><strong>SKU:</strong> BMDL-4</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Ingersoll Rand, Balancines mecánicos</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Ingersoll Rand BMDLN-4 balancin capacidad de 4.4 A 8.8 LB 2 A 4 kg
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Ascensores de 5 a 9 pies<br/><br/>

Cubre las necesidades de equilibrio de peso de 1 a 363 libras<br/><br/>

Efecto "libre de gravedad" en productos intermedios, pesados<br/><br/>

Los modelos super resistentes permiten al usuario mover la herramienta con un m?nimo esfuerzo<br/><br/>

Hecho de aluminio fundido resistente
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc