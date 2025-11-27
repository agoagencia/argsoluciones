import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/2.-Binks Bombas de Serie Maple 15-25.jpg';
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
        <h2>Binks Bombas de Serie Maple 15/25</h2><br/>
        <p><strong>SKU:</strong> MAPLE 15 25</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Madera, Carlisle-Binks Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Avanzada, Operada por aire, Pistón Horizontal, Bombas de Sistema de Pintura
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Motor de aire libre de lubricante de hielo bajo con tecnología patentada de escape rápido elimina el riesgo de formación de hielo de la válvula Sellos de fuelle incluidos - sin juntas expuestas eliminando la lubricación del eje y reduciendo significativamente el mantenimiento de la bomba Secciones de fluidos de acero inoxidable, ideales para pinturas a base de agua o de base solvente Los asientos de bola de carburo de tungsteno y los pistones revestidos de cerámica aseguran una vida útil máxima sin problemas Igual de empuje en cada golpe produce un flujo de pintura uniforme y uniforme Cilindro y manguito de metal de la válvula de control para una larga vida útil, incorporando nuestro retén magnético patentado para eliminar las condiciones de parada Las conexiones de fluidos garantizan un flujo interno suave y eliminan los bolsillos de pintura para asegurar un acabado superior Garantía de 5 años de la bomba en materiales y mano de obra<br/><br/>

RATIO 25:1<br/><br/>

Flujo salida @60 ciclos/min 6.0 gal (22.5 L)<br/><br/>

Consumo aire/ciclo @ 45 psi...1.33 SCFM @ 90 psi...2.59 SCFM<br/><br/>

Peso 255.2 lbs (166 kg)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc