import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/12.-Bomba de piston sanitaria SaniForce 5-1 Graco.jpg';
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
        <h2>Bomba de piston sanitaria SaniForce 5:1 Graco</h2><br/>
        <p><strong>SKU:</strong> SaniForce 5:1</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Viscosidad máxima de hasta 100.000 y caudales de evacuación de hasta 14 gpm (53 lpm)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 28.7 bar, 2.9 MPa<br/><br/>

Presión máxima de entrada de aire: 5.5 bar, 0.6 MPa<br/><br/>

Velocidad máxima recomendada de la bomba: 60 cpm, 53 lpm<br/><br/>

Consumo de aire: Consulte el manual de instrucciones de SaniForce 5: 1<br/><br/>

Ciclos de bombeo por galón / litro: 1.1 ciclos por litro<br/><br/>

Proporción: 5:1<br/><br/>

Temperatura ambiente máxima (motor neumático): 49?C<br/><br/>

Entrada de aire: 1/2 pulg npt (f)<br/><br/>

Escape de aire: 3/4 pulg npt (m)<br/><br/>

Salida de fluido: 2 en Tri-clamp?<br/><br/>

Partes húmedas: Acero inoxidable 316, buna-N, UHMWPE, PTFE, policloropreno (solo bombas de pistón de cebado), nailon (solo bombas de pistón de cebado)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc