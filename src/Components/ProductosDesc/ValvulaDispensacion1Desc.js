import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Válvulas de Dispensación/1.-Valvula de dispensacion MD2.jpg';
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
        <h2>Valvula de dispensacion MD2</h2><br/>
        <p><strong>SKU:</strong> MD2</p>
        <p><strong>Categorías:</strong> Valvulas de dispensacion, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Dispensa y mezcla con precisión adhesivos y sellantes de dos componentes

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de fluido: 20.7 MPa, 207 bar<br/><br/>

255183: 2000 psi: 13.8 MPa, 138 bar<br/><br/>

Presión máxima de aire del cilindro: 0.84 MPa, 8.4 bar<br/><br/>

Entradas de aire (puertos abiertos (I) y cerrados (O): 1/8 npt (f) Entradas de fluido<br/><br/>

Saliente de junta tórica de rosca recta: 9/16 "A" y "B" Salida de fluido<br/><br/>

Salida de campana: 7 / 8-9<br/><br/>

Asientos blandos: 1-1 millón de cps<br/><br/>

Asientos duros: 20-1 millón de cps<br/><br/>

Sellado de la sección de fluido: Cámara de aislamiento con conexiones zerk y sellos dobles<br/><br/>

Cilindro de aire divorciado: Juntas tóricas de buna-n de doble acción
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc