import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas transferencia de polvos/1.-Bomba para polvos Aro PP20A-AAS-AAA.jpg';
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
        <h2>Bomba para polvos Aro PP20A-AAS-AAA</h2><br/>
        <p><strong>SKU:</strong>  PP20A-AAS-AAA</p>
        <p><strong>Categorías:</strong> Bombas para transferencia de polvos, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Neumática para manejo y transferencia de Polvos Secos. Disponibles en puertos de 2 y 3″ Metálicas.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Puerto: 2"<br/><br/>

Material: Aluminio<br/><br/>

Máxima presión operacional: 50-psi (3.4-bar)<br/><br/>

Máximos sólidos: 1/4-inch (6.4-mm)<br/><br/>

Peso:45.1 kg
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc