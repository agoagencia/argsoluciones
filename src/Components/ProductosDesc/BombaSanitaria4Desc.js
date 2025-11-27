import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/4.-Bomba de doble diafragma SaniForce 1040 Graco.jpg';
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
        <h2>Bomba de doble diafragma SaniForce 1040 Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 1040</p>
        <p><strong>Categorías:</strong>  Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de doble diafragma sanitaria de 1 pulgada con caudales de hasta 40 gpm (151 lpm). Ideal para aplicaciones relacionadas con alimentos

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño del puerto de escape de aire: 3/4<br/><br/>

Género de la rosca del puerto de escape de aire: Hembra<br/><br/>

Tipo de rosca del puerto de escape de aire: NPT<br/><br/>

Tamaño de entrada de aire: 1/2<br/><br/>

Solicitud: Sanitaria<br/><br/>

Material de la bola: PTFE<br/><br/>

Material de la sección central: Aluminio<br/><br/>

Material compatible: Aceite comestible, alimentos y cuidado personal
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc