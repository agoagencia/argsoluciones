import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/9.-Bomba de doble diafragma Saniforce 515 Graco.jpg';
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
        <h2>Bomba de doble diafragma Saniforce 515 Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 515</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de doble diafragma sanitaria de 1/2 pulgada con caudales de hasta 56,7 lpm (15 gpm). Ideal para aplicaciones relacionadas con alimentos

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño del puerto de escape de aire: 3/8"<br/><br/>

Género de la rosca del puerto de escape de aire: Hembra<br/><br/>

Tipo de rosca del puerto de escape de aire: NPT<br/><br/>

Solicitud: Sanitario<br/><br/>

Material de la bola: Santopreno<br/><br/>

Material de la sección central: Polipropileno<br/><br/>

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