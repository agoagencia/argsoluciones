import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/3.-Bomba de diafragma DX70.jpg';
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
        <h2>Bomba de diafragma DX70</h2><br/>
        <p><strong>SKU:</strong> DX70</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Carlisle-Binks, Mercados, Cerámica, Automotriz, Vidrio, Madera, Carlisle-Binks Automotriz, Carlisle-Binks, Carlisle-Binks Vidrio, Carlisle-Binks Madera, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La DX70 es una bomba de diafragma doble de proporción 1:1, de alta especificación, impulsada por aire, desarrollada específicamente para el suministro directo de pinturas y materiales a las pistolas de pulverización, también incluye un regulador de fluido «incorporado» que garantiza una entrega de fluido constante y prácticamente libre de pulso, para alimentación directa a pistolas sin los gastos y complicaciones de un regulador de fluido adicional o cámara de compensación.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Max. Presión de fluido: 7 bares / 100 PSI<br/><br/>

Volumen / ciclo de flujo nominal: 12:07 Litros (0.018 US Gallo)<br/><br/>

Salida de fluido a 60 ciclos / min: 4.2 Litros / min (1.1 US Gallo / min)<br/><br/>

Tasa máxima recomendada de ciclo continuo: 10 ciclos / min<br/><br/>

Frecuencia máxima recomendada de ciclo intermitente: 30 ciclos / min<br/><br/>

Conexión de entrada de fluido: 3/8 ”Universal (BSPP / NPSM) Macho o Hembra<br/><br/>

Conexión de fluido de salida: 3/8 ”Universal (BSPP / NPSM) Macho o Hembra<br/><br/>

Elevación máxima en seco / húmedo: 6,6 m (21,8 pies)<br/><br/>

Entrada de aire: G1 / 4 ""(BSPP) Hembra<br/><br/>

Regulador de fluido: Tubo piloto Ø4<br/><br/>

Volumen de aire / ciclo a 6,9 bar / 100 psi: 0,77 L (0,027 SCFM)<br/><br/>

Flujo de aire a 10 ciclos / min 6,9 bar / 100 psi: 7.7L / min (0.27SCFM / min)<br/><br/>

Flujo de aire a 30 ciclos / min 6,9 bar / 100 psi: 23.2L / min (0.82SCFM / min)<br/><br/>

Peso: bomba desnuda 2,2 kg (4,9 libras)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc