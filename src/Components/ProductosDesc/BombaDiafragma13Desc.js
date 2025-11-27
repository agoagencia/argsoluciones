import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/13.-Bomba de diafragma Aro PD10P-YPS-PTT.jpg';
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
        <h2>Bomba de diafragma Aro PD10P-YPS-PTT</h2><br/>
        <p><strong>SKU:</strong>  PD10P-YPS-PTT</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma no metálica de 1 pulgada, 53 gpm. material de teflón, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          53.0 GPM.(200.6 LPM)<br/><br/>

Entrada de aire (hembra): 1/4 - 18 NPT<br/><br/>

Sólidos suspendidos máx. dia. pulg. (mm): 1/8 "(3.2)<br/><br/>

Tapa de fluido / colector: polipropileno (1 puerto)<br/><br/>

Sección central: polipropileno<br/><br/>

Asiento: polipropileno<br/><br/>

Bola: Teflón<br/><br/>

Material del diafragma: PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc