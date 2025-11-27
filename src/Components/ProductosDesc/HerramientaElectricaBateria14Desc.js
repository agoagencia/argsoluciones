import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/14.-Llave de impacto inalambrico WT01.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Llave de impacto inalambrico WT01</h2><br/>
        <p><strong>SKU:</strong> WT01</p>
        <p><strong>Categorías:</strong> Empuñadura ergonomicamente diseñada de neopreno, luz led de trabajo</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Empuñadura ergonomicamente diseñada de neopreno, luz led de trabajo
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad variable (0-2,300 RPM y 0-3,000 IPM) para una amplio rango de aplicaciones de apretado<br/><br/>

Diseño ultra compacto con sólo 6-3/8" de largo y pesa sólo 2.1 lbs. para reducir la fatiga del operador<br/><br/>

Integrada con luz led para iluminar el área de trabajo<br/><br/>

Mango de suave agarre proporciona mayor comodidad en el trabajo<br/><br/>

Conveniente entrada de dado de 3/8" para cambios rápidos


          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc