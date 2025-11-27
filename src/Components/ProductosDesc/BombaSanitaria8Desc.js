import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/8.-Bomba de compuertas de 2” Aro PF20A-AAS-SAA-B.jpg';
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
        <h2>Triton 1:1 de la Serie 150</h2><br/>
        <p><strong>SKU:</strong> Triton</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de doble diafragma diseñada específicamente para aplicaciones de acabado

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 8.0 bar, 0.8 MPa<br/><br/>

Rango de operación de presión de aire: 0.8 a 8.0 bar, 0.08 a 0.8 MPa<br/><br/>

Proporción: 1:1<br/><br/>

Entrega máxima de flujo libre: 32 l / min<br/><br/>

Rango de temperatura del fluido operativo: 10 hasta 80 C<br/><br/>

Altura máxima de succión: 4.8 m en seco, 6.5 m en mojado
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc