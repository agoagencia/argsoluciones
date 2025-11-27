import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/resistenciasConLogo/6.-Resistencias de fabricación especial.jpg';
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
        <h2>Resistencias de fabricación especial</h2><br/>
        <p><strong>SKU:</strong></p>
        <p><strong>Categorías:</strong> Resistencias</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Aquí encuentras algunos ejemplos diseños de resistencias que han solicitado clientes para motores de grúas viajeras, tableros electrónicos, hornos industriales de alta temperatura,  calefacciones  etc. etc.
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