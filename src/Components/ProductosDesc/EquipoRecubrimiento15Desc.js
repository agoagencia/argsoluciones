import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/15.-DeVilbiss Pistola de Gravedad TEKNA Copper.jpg';
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
        <h2>DeVilbiss Pistola de Gravedad TEKNA Copper</h2><br/>
        <p><strong>SKU:</strong> Tekna</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Madera, Carlisle-Devilbiss Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La Pistola rociadora TEKNA Copper, de DeVilbiss, ofrece precisión y versatilidad para aplicaciones de base y capa transparente
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Precisión, Control metálico superior, mejores mezclas, Distribución uniforme del material para menos capas, aumento de la productividad, Alta eficiencia de transferencia - ahorra materiales, ahorra dinero, Medidor digital para precisión y repetibilidad, Compatible con el agua<br/><br/>

Versatilidad, Cuatro modelos para elegir, Bases de base acuosas: Para todos los climas, Solventes: Para todas las marcas, Impermeabilizantes: sólidos altos, medios y bajos<br/><br/>

Todos los modelos incluyen: TEKNA Copper Spray Gun, 7E7 Tapa de aire de alta eficiencia, Medidor digital con válvula de ajuste de aire (HAV-555), Llave de pistola, Anillos de ID de color
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc