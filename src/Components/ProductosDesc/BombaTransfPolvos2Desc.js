import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas transferencia de polvos/2.-Bombas para transferencia de polvo de 3”Aro PP30A-AAS-AAA.jpg';
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
        <h2>Bombas para transferencia de polvo de 3″ Aro PP30A-AAS-AAA</h2><br/>
        <p><strong>SKU:</strong> PP30A-AAS-AAA</p>
        <p><strong>Categorías:</strong> Bombas para transferencia de polvos, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba para transferir y manipular sus polvos de proceso seco más rápido, más limpio y por una fracción del costo asociado con los «sistemas» instalados. Transferencia constante y sin problemas de polvos de hasta 45 libras. por pie cúbico (721 kgs. por metro cúbico) de peso seco.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales: aluminio y acero inoxidable<br/><br/>

Presión máxima de funcionamiento: 3.4 bar<br/><br/>

Diámetro máximo de sólidos suspendidos: 9.5 mm<br/><br/>

Peso: 107.4 kg
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc