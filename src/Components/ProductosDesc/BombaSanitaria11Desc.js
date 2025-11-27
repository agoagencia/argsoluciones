import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/11.-Bomba de piston sanitaria SaniForce 2-1 Graco.jpg';
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
        <h2>Bomba de piston sanitaria SaniForce 2:1 Graco</h2><br/>
        <p><strong>SKU:</strong> SaniForce 2:1</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de pistón sanitaria 2:1 con caudales de hasta 2.5 gpm (9.5 lpm).

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 17 bar, 1.7 MPa<br/><br/>

Rango de presión de entrada de aire: 2.1 a 6.9 bar, 0.2 a 0.7 MPa<br/><br/>

Velocidad máxima recomendada de la bomba: 100 ciclos / min, entrega 9.5 litros / min<br/><br/>

Ciclos de bombeo por galón (3.8 litros): 40<br/><br/>

Proporción: 2.5:1<br/><br/>

Rango de temperatura del fluido: 4 hasta 104 ? C<br/><br/>

Temperatura máxima de funcionamiento continuo: 82?C<br/><br/>

Temperatura ambiente máxima (motor neumático): 49?C<br/><br/>

Entrada de aire: 9.5 mm npt (f)<br/><br/>

Escape de aire: 9.5 mm npt (metros)<br/><br/>

Tamaño de entrada de fluido OD del cilindro: 5 cm<br/><br/>

ID del asiento de entrada: 2.4 cm<br/><br/>

Salida de fluido: Tri-clamp? de 2.5 cm<br/><br/>

Potencia de sonido*: 73.4 dBA a 4.8 bar y 20 cpm<br/><br/>

Presión de sonido *: 65.4 dBA a 4.8 bar y 20 cpm<br/><br/>

Peso Modelos 24R046 y 24R047: 10.9 kilogramos<br/><br/>

Modelos 24N300 y 24N344: 11.8 kilogramos<br/><br/>

Partes húmedas: Acero inoxidable serie 300, acetal, PTFE, FKM, UHMWPE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc