import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/resistenciasConLogo/4.-Resistencia tipo Mica.jpg';
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
        <h2>Resistencia tipo mica</h2><br/>
        <p><strong>SKU:</strong> </p>
        <p><strong>Categorías:</strong> Resistencias</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las resistencias tipo tira mica se fabrican de cualquier forma que necesites.
Su función es calentar por contacto cualquier metal.
Se fabrican según la necesidad de cada cliente y en cualquier voltaje disponible.<br/><br/>
Para información adicional por favor llámanos!
          </p><br/><br/>
         {/*  <h5>Información Técnica</h5> */}
          <div className='line'></div>
          <p>

          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc