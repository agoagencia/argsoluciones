import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/13.-Ram de dos postes de 55 galones Aro TP0646S51KK47AA2.jpg';
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
        <h2>Ram de dos postes de 55 galones Aro TP0646S51KK47AA2</h2><br/>
        <p><strong>SKU:</strong>  TP0646S51KK47AA2</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Ram de dos postes de 55 galones, Marca Aro
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo de paquete: Ram de dos postes de 55 galones<br/><br/>

Modelo de la bomba: AF0646S11KK47<br/><br/>

Modelo Ram / Elevador: RM552S-C<br/><br/>

Seguidor: 66516-1<br/><br/>

Descripción del sello seguidor: Doble labio, poliuretano<br/><br/>

Material: Aluminio
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc