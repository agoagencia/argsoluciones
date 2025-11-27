import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosElectricos/5.-Polipasto eléctricos de Cadena Serie FS.jpg';
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
        <h2>Polipasto eléctricos de Cadena Serie FS</h2><br/>
        <p><strong>SKU:</strong> Serie FS</p>
        <p><strong>Categorías:</strong> Polipastos electricos, Hitachi</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Variador de Frecuencia en Gancho y Carro
Variador integrado en el equipo para arranques y paros suaves, para operaciones exactas, alargando la vida de las piezas de desgaste de partes mecánicas, como frenos, acoplamientos y engranes.
Monitor electrónico con puerto USB
Visualización de información útil para el mantenimiento como frecuencia de inicio, numero de arranques, horas totales de operación e historial de errores, con la aplicación de descarga en memoria USB.
Límite de Sobrecarga
Evita el manejo de materiales con peso superior al nominal, con un mecanismo doble de prevención de atascamiento.
Mecanismo Anticaídas en Carro
Asegura el posicionamiento del carro en la viga evitando la ca?da del equipo incluso en el rompimiento de una rueda.
Freno de Disco
Freno tipo electromagnético para una operación segura y de larga vida.
Freno Auxiliar
Freno tipo mecánico que acta como un segundo freno.
Contactores Electromagnéticos
Con enclavamiento mecánico contra línea corta por choque mecánico.
Engranes Helicoidales
Reducción de ruido en la operación del equipo.
Relevador de inspección de fase inversa
Corta el circuito de control al conectarse en fase inversa.
Interruptor de límite superior e inferior
Interrumpe la energía del motor para prevenir la sobre carrera del gancho y condiciones peligrosas como la torcedura de la cadena.
Cadena de Poder [Patentada]
Aleación especial de acero con superficie endurecida para máxima dureza y resistencia al desgaste de 11.2mm de diámetro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo Colgado / Carro eléctrico<br/><br/>

Capacidad: 2 a 5 toneladas<br/><br/>

Frecuencia: 45% ED 270 arranques/h<br/><br/>

Clasificaci?n: ASME H3 (2t: ASME H4)<br/><br/>

Aislamiento: E<br/><br/>

Protección: IP54<br/><br/>

Voltaje: 440-460V 60Hz
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc