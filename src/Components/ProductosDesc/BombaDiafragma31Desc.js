import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/31.-Bomba Pit Boss 2” Aro 66M250-122-C.jpg';
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
        <h2>Bomba Pit Boss 2″ Aro 66M250-122-C</h2><br/>
        <p><strong>SKU:</strong>   66M250-122-C</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba para operaciones de minería, construcción, sumideros y otras operaciones donde una bomba de manejo de sólidos y desagüe portátil confiable es un requisito diario.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales de la carcasa de la bomba: Aluminio<br/><br/>

Material del cuerpo central: Aluminio<br/><br/>

Respuesta ideal para aplicaciones de gran volumen, donde el rendimiento es imprescindible<br/><br/>

Fiabilidad: la válvula de aire 'desequilibrada' patentada elimina el estancamiento y la congelación<br/><br/>

Facilidad de servicio: fácil acceso a controles de bola y tapas de fluido para facilitar el mantenimiento y la reparación<br/><br/>

Versatilidad: los mangos de agarre cómodos permiten la máxima portabilidad<br/><br/>

Manejo de sólidos: Capaz de bombear semisólidos y sólidos de hasta 0,75 "(19 mm)<br/><br/>

Entrada con malla: mantiene los desechos no deseados fuera de la bomba<br/><br/>

Intrínsecamente seguro: el funcionamiento neumático proporciona un uso seguro en aplicaciones peligrosas y explosivas<br/><br/>

Elevación por succión eléctrica: diseñada para evacuar líquidos y sólidos de áreas críticas sin fallas<br/><br/>

Aplicaciones típicas: minería, construcción, deshidratación industrial general y aplicaciones de manipulación de sólidos
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc