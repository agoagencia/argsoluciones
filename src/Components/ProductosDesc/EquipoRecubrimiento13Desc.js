import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/13.-Dekups Vasos Desechables.jpg';
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
        <h2>Dekups Vasos Desechables</h2><br/>
        <p><strong>SKU:</strong> Dekups</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Automotriz, Carlisle-Devilbiss Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema de Copas Desechables DeKups
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El sistema de copas desechables DeKups aumenta la productividad y la eficiencia. Cuenta con copas desechables fáciles de usar en comparación con las copas de gravedad tradicionales; requiere menos limpieza y permite realizar cambios rápidos. Reduce los pasos ya que permite mezclar y pulverizar en una sola copa. Las múltiples opciones de filtro reducen la necesidad de filtrar pintura. Sistema sellado sin contaminación que permite obtener trabajos de pintura limpios. El sistema funciona con imprimadores, capas base de disolvente, capas transparentes y recubrimientos de base acuosa. También puede almacenar en forma temporal la pintura no utilizada entre recubrimientos y reducir, así, el desperdicio de pintura
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc