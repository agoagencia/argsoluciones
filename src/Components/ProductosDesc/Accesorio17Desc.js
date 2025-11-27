import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/17.-Valvula de aguja Aro 104104-NS2.jpg';
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
        <h2>Valvula de aguja Aro 104104-NS2</h2><br/>
        <p><strong>SKU:</strong> 104104-NS2</p>
        <p><strong>Categorías:</strong> Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Esta válvula de aguja ARO genuina le permite aumentar o disminuir el flujo de aire en ambas direcciones.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El diseño cónico en cuatro fases proporciona configuraciones de control infinitas<br/><br/>

El cuerpo compuesto es sólido y resistente a la corrosión<br/><br/>

El micrómetro codificado por color y la perilla de ajuste calibrada proporcionan puntos de referencia instantáneos para la repetición de configuraciones. Al presionar el aro de bloqueo rojo se impide el ajuste<br/><br/>

Las unidades son roscadas para lograr un montaje en panel remoto<br/><br/>

La válvula de aguja incluye aguja e insertos de acero inoxidable
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc