import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bomba centrifuga/1.-Bomba centrifuga de tambor SaniForce Graco.jpg';
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
        <h2>Bomba centrifuga de tambor SaniForce Graco</h2><br/>
        <p><strong>SKU:</strong> Bomba Centrifuga</p>
        <p><strong>Categorías:</strong>  Bomba centrifuga, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de tambor eléctrico aprobada por la FDA para mover alimentos y bebidas de hasta 1000 cps con un flujo máx. de 35 gpm (132 lpm) Marca Graco

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Accionada por el motor eléctrico de velocidad variable<br/><br/>

Certificada conforme a las normas ATEX y FDA<br/><br/>

Diseño simple para facilitar la limpieza y reducir el mantenimiento y el tiempo de inactividad<br/><br/>

Caudales de hasta 35 gpm (132 lpm) con una salida suave de material<br/><br/>

Se transfiere fácilmente entre envases y se adapta a tambores, bolsas y hervidoras
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc