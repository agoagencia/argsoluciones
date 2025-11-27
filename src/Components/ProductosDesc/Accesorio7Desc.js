import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/7.-Clilindro neumatico 0176-1019-020.jpg';
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
        <h2>Clilindro neumatico 0176-1019-020</h2><br/>
        <p><strong>SKU:</strong> 0176-1019-020</p>
        <p><strong>Categorías:</strong> Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Cilindro Neumático Serie Microair, hasta 200 psi, pistón en acero inoxidable.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Las cabezas de cilindro son de una aleaci?n de aluminio resistente<br/><br/>

El di?metro interno del barril est? recubierto con aluminio duro con dureza de Rockwell C60.<br/><br/>

Un acabado de 16 ? in o m?s garantiza una baja fricci?n y un funcionamiento sin problemas<br/><br/>

La varilla del pist?n es de acero recubierto
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc