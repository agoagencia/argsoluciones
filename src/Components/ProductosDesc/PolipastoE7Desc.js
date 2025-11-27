import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosElectricos/7.-Polipasto eléctricos de Cadena Serie L Hitachi.jpg';
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
        <h2>Polipasto eléctricos de Cadena Serie L Hitachi</h2><br/>
        <p><strong>SKU:</strong> Serie L</p>
        <p><strong>Categorías:</strong> Polipastos electricos, Hitachi</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Freno de Disco
Freno tipo electromagnético para una operación segura y de larga vida.
Contactores Electromagnéticos
Con enclavamiento mecánico contra línea corta por choque mecánico.
Engranes Helicoidales
Reducción de ruido en la operación del equipo.
Relevador de inspección de fase inversa
Corta el circuito de control al conectarse en fase inversa.
Interruptor de límite superior e inferior
Interrumpe la energía del motor para prevenir la sobre carrera del gancho y condiciones peligrosas como la torcedura de la cadena.
Cadena de Poder [Patentada]
Aleación especial de acero con superficie endurecida para máxima dureza y resistencia al desgaste.
Contenedor de Cadena Compacto
El contenedor esta? junto al cuerpo principal del polipasto lo cual previene movimientos innecesarios del contenedor evitando que el gacho inferior lo golpee.
Gancho superior e inferior reforzados
Ganchos tratados térmicamente y equipados con cierre de seguridad y giro de 360?, con un gacho inferior con una apertura mayor para un fácil enganchamiento asegurado con una especial
Botonera de Control
Fabricada en IP65 para máxima resistencia e impactos severos con enclavamiento mecánico y con control a 24V para reducir el riesgo de descarga al operador con botón de paro de emergencia.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo Colgado / Carro Manual<br/><br/>

Capacidad: 150 kg a 500 kg<br/><br/>

Frecuencia: 40% ED 240 arranques/h<br/><br/>

Clasificación: ASME H3<br/><br/>

Aislamiento: E<br/><br/>

Protección: IP54<br/><br/>

Voltaje: 220-230/440-460V (dual)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc