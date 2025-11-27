import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Paquetes de bombas/7.-Triton relacion 11 233474.jpg';
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
        <h2>Triton relacion 1:1 233474</h2><br/>
        <p><strong>SKU:</strong> 233474</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Paquete de bomba de acero inoxidable Tritón, montaje en soporte con manguera de succión. No incluye aplicador. Pulverizador de diafragma operado por aire que aplica un acabado decorativo de alta calidad a las piezas de madera y metal

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material compatible: CARC, Esmalte, Epoxis, Altos Sólidos, Látex, Laca, Metálicos, Manchas, Componentes Individuales, Pinturas a base de Solvente, Imprimaciones a base de Solvente, Barniz<br/><br/>

Tamaño de entrada de fluido (in): 3/4<br/><br/>

Tipo de rosca de entrada de fluido: NPT<br/><br/>

Tipo de rosca de salida de fluido: NPT<br/><br/>

Tamaño de salida de fluido (in): 3/8
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc