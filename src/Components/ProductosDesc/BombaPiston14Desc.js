import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/14.-Ram de poste simple de 5 galones Aro SP0423S21FF47E32.jpg';
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
        <h2>Ram de poste simple de 5 galones Aro SP0423S21FF47E32</h2><br/>
        <p><strong>SKU:</strong>  SP0423S21FF47E32</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Ram de poste simple Serie SPX

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo de paquete: Ram de poste simple de 5 galones<br/><br/>

Modelo de la bomba: AF0423S11FF47<br/><br/>

Modelo Ram / Elevador: RM051S-CB<br/><br/>

Seguidor: 67342-1<br/><br/>

Descripción del sello seguidor: Un labio, polietileno / uretano<br/><br/>

Material: Acero al carbono, revestimiento de níquel no electrolítico
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc