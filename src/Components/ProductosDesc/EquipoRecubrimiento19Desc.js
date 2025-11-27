import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/19.-Pistola automatica A-G362 DeVilbiss.jpg';
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
        <h2>Pistola automatica A-G362 DeVilbiss</h2><br/>
        <p><strong>SKU:</strong> A-G362</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Madera, Carlisle-Devilbiss Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La serie de pistolas automáticas AG-360 de DeVilbiss son disponibles en varios formatos de pistola pulverizadora para proporcionar una solución automática universal de acabado para todas las aplicaciones
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Diseñadas para funcionar en el duro entorno de trabajo de la industria moderna del acabado, estas pistolas ofrecen la máxima productividad con un tiempo de inactividad mínimo<br/><br/>

Las variantes AG-361 están diseñadas para ser pistolas de pulverización automáticas economicas con máximo control y facilidad de servicio. Disponible en dos modelos: el AG-361 para acabado industrial general y el AG-361E para la industria cerámica<br/><br/>

Las pistolas automáticas AG-362 son diseños más versátiles - el AG-362 para la industria general y el AG-362P especialmente desarrollado para las industrias de cosméticos y vidrio<br/><br/>

Las pistolas de pulverización automática AG-362 están disponibles con dos colectores de diseño diferentes para permitirle elegir la disposición de la conexión de aire / fluido y el método de fijación de la pistola. La versión accionada por la palanca AG-362L para la remoción más rápida y la versión atornillada AG-362S atornillada con opciones de montaje múltiples de la máquina y tamaño más pequeño<br/><br/>

Una amplia gama de casquillos de aire CONVentional, HVLP y Trans Tech (Cumplimiento) provee una opción de Cumplimiento Ambiental, Eficiencia de Transferencia, Potencia de Atomización y requisitos de aplicación. Construcción sencilla y fácil mantenimiento para un tiempo de inactividad mínimo. Pasarelas de fluidos de acero inoxidable para aplicaciones de recubrimiento a base de agua y base solvente. Los colectores de montaje desmontables rápidos proporcionan un mantenimiento rápido y fácil. Tamaño y peso compactos para posicionamiento fácil y alineación precisa. Múltiples opciones y formatos para evolucionar para todos los requisitos de la aplicación Ventilador independiente, atomización y activación de aire - vital para aplicaciones de máquinas robóticas y totalmente automáticas. Utilizando la reconocida tecnología líder en el mercado de Atomización de Aire de Baja Presión de DeVilbiss, la serie de pistolas automáticas AG-360 ha sido desarrollada para proporcionar una mezcla de calidad de acabado, robustez de ingeniería y eficiencia de transferencia superior. La serie de pistolas automáticas AG-360 de DeVilbiss son disponibles en varios formatos de pistola pulverizadora para proporcionar una solución automática universal de acabado para todas las aplicaciones
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc