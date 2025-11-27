import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/13.-Bomba de piston sanitaria SaniForce 6-1 Graco.jpg';
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
        <h2>Bomba de piston sanitaria SaniForce 6:1 Graco</h2><br/>
        <p><strong>SKU:</strong>  SaniForce 6:1</p>
        <p><strong>Categorías:</strong>  Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Viscosidad máxima hasta 100.000 cps y caudales hasta 4 gpm (15 lpm). Bases disponibles en longitudes pequeñas y de tambor.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 4.5 MPa, 44.8 bar<br/><br/>

Presión máxima de entrada de aire: 0.7 MPa, 6.9 bar<br/><br/>

Velocidad máxima recomendada de la bomba: 60 ciclos / min, entrega de 4 gpm (15 litros / min)<br/><br/>

Ciclos de bombeo por galón (3.8 litros): 13.3<br/><br/>

Proporción: 6:1<br/><br/>

Temperatura máxima del fluido: 121?C<br/><br/>

Temperatura ambiente máxima (motor neumático): 49?C<br/><br/>

Entrada de aire: 1/2 npt (f)<br/><br/>

Escape de aire: 3/4 npt (m)<br/><br/>

Tipo de entrada de fluido<br/><br/>

24E836: Pistón de cebado de 5.8 cm<br/><br/>

24E837, 24E838: Abrazadera de 6.3 cm<br/><br/>

24E839 y 24E840: 3.6 cm ranurado<br/><br/>

24G739: Pistón de cebado de 5,8 cm con brida para abrazadera de 15.2 cm<br/><br/>

24G740: 3.6 cm Ranurado con brida para abrazadera de 15.2 cm<br/><br/>

Salida de fluido: Tri-clamp? de 3.8 cm<br/><br/>

Partes húmedas: Acero inoxidable 316, Buna-N, policloropreno, nitrilo, nailon, UHMWPE. Algunos modelos tienen empaquetaduras de PTFE<br/><br/>

Potencia de sonido*: 78.5 dBA<br/><br/>

Presión sonora **: 71.6 dBA
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc