import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/10.-Bomba de piston sanitaria SaniForce 12-1 Graco.jpg';
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
        <h2>Bomba de piston sanitaria SaniForce 12:1 Graco</h2><br/>
        <p><strong>SKU:</strong> SaniForce 12:1</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Viscosidad máxima de hasta 1 000 000 cps montada en un descargador de tambor o sistema de evacuación de contenedor (BES)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 100.4 bares, 10.1 MPa<br/><br/>

Presión máxima de entrada de aire: 6.9 bares, 0.7 MPa<br/><br/>

Velocidad máxima recomendada de la bomba: 60 cpm, 32 lpm<br/><br/>

Consumo de aire: Consulte el manual de instrucciones de SaniForce 12:1<br/><br/>

Ciclos de bombeo por galón / litro: 1.9 ciclos por litro<br/><br/>

Proporción: 12:1<br/><br/>

Temperatura máxima de funcionamiento: 71?C<br/><br/>

Temperatura ambiente máxima (motor neumático): 49?C<br/><br/>

Entrada de aire: 1/2 pulg npt (f)<br/><br/>

Escape de aire: 3/4 pulg npt (m)<br/><br/>

Tipo de entrada de fluido: Tubo de 10.4 cm con brida para Tri-clamp de 15.2 cm<br/><br/>

Salida de fluido: Tri-abrazadera de 5.1 cm<br/><br/>

Peso: 55.3 kg<br/><br/>

Partes húmedas: Acero inoxidable 316, acetal, buna-N, UHMWPE, PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc