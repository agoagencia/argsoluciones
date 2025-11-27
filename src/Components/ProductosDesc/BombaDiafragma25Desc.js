import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/25.-Bomba neumática Aro 666100-322-C.jpg';
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
        <h2>Bomba neumática Aro 666100-322-C</h2><br/>
        <p><strong>SKU:</strong> 666100-322-C</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de diafragma de 1″, metálica, Serie Pro, con asientos de polipropileno, bolas y diafragmas de nitrilo, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tapa de fluido y colector: Aluminio<br/><br/>

Sección central: Aluminio<br/><br/>

Material del asiento: polipropileno<br/><br/>

Material de la bola: nitrilo<br/><br/>

Conexión de la sección de fluido: 1 "NPT<br/><br/>

Kit de reconstrucción de la sección de aire: Número de pieza 637118-C
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc