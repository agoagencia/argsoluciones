import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/6.-Cilindro Provenair ANAQK-DGXA4-030.jpg';
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
        <h2>Cilindro Provenair ANAQK-DGXA4-030</h2><br/>
        <p><strong>SKU:</strong> ANAQK-DGXA4-030</p>
        <p><strong>Categorías:</strong> Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Cilindro Provenair HT está diseñado para satisfacer las necesidades de los clientes OEM y MRO.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          La construcción con pernos de fijación elimina los problemas de fijación de las varillas y de par de torsión de varilla de fijación (serie AN hasta un diámetro interior de 4 in)<br/><br/>

Los tubos de pared gruesa y sólida son resistentes a las abolladuras<br/><br/>

NFPA reparable e intercambiable<br/><br/>

15 estilos de montaje NFPA<br/><br/>

Grasa lubricada en fábrica que no se lava<br/><br/>

Las varillas de pistón 303 S.S. opcionales proporcionan resistencia a la corrosión
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc