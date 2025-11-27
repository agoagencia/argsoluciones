import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/1.-Bomba de diafragma eléctrica SaniForce 1040e Graco.jpg';
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
        <h2>Bomba de diafragma eléctrica SaniForce 1040e Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 1040e</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba eléctrica de desplazamiento positivo de 1 pulgada

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          NOS: Métrico<br/><br/>

Presión máxima de trabajo del fluido: 0.48 MPa, 4.8 bar<br/><br/>

Rango de operación de presión de aire: 0.14 a 0.55 MPa, 1.4 a 5.5 bar<br/><br/>

Tamaño de entrada de aire: 3/8 pulg. Npt (f)<br/><br/>

Elevación máxima de succión (reducida si las bolas no se asientan bien debido a bolas o asientos dañados, bolas ligeras o velocidad extrema del ciclismo): Mojado: 8.8 m Seco: 4.9 m<br/><br/>

Sólidos bombeables de tamaño máximo: 3.2 milímetros<br/><br/>

Rango de temperatura del aire ambiente para operación y almacenamiento. NOTA: La exposición a temperaturas extremadamente bajas puede dañar las piezas de plástico: 0 C, 40 C<br/><br/>

Desplazamiento de fluido por ciclo: 0.38 litros<br/><br/>

Entrega máxima de flujo libre: 132.5 lpm *<br/><br/>

Velocidad máxima de la bomba: 280 cpm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc