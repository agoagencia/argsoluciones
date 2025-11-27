import React from 'react'
import herramientaTorque1 from "../img/productos/Herramienta de Torque/AIR TRACTOR.png"
import herramientaTorque2 from "../img/productos/Herramienta de Torque/ANTI TORQUE.png"
import herramientaTorque3 from "../img/productos/Herramienta de Torque/ANTI TORQUE2.png"
import herramientaTorque4 from "../img/productos/Herramienta de Torque/ARTICULADO.png"
import herramientaTorque5 from "../img/productos/Herramienta de Torque/BASICO.png"
import herramientaTorque6 from "../img/productos/Herramienta de Torque/EL1510N2S5.png"
import herramientaTorque7 from "../img/productos/Herramienta de Torque/ELB2612N.png"
import herramientaTorque8 from "../img/productos/Herramienta de Torque/ELB2620NN.png"
import herramientaTorque9 from "../img/productos/Herramienta de Torque/ELEVADORA.png"
import herramientaTorque10 from "../img/productos/Herramienta de Torque/EP4007N.png"
import herramientaTorque11 from "../img/productos/Herramienta de Torque/ES60T.png"
import herramientaTorque12 from "../img/productos/Herramienta de Torque/ES70T2S3.png"
import herramientaTorque13 from "../img/productos/Herramienta de Torque/ES100T.png"
import herramientaTorque14 from "../img/productos/Herramienta de Torque/GRUAS PUENTE.png"

import herramientaTorque16 from "../img/productos/Herramienta de Torque/INCLINACION.png"
import herramientaTorque17 from "../img/productos/Herramienta de Torque/maneral balancin.png"

import herramientaTorque19 from "../img/productos/Herramienta de Torque/REEVED.png"
import herramientaTorque20 from "../img/productos/Herramienta de Torque/Rieles Ergonomicos.png"
import herramientaTorque21 from "../img/productos/Herramienta de Torque/ROTATORIA.png"
import herramientaTorque22 from "../img/productos/Herramienta de Torque/TANDEM.png"
import herramientaTorque23 from "../img/productos/Herramienta de Torque/TIPO PLUMA.png"
import herramientaTorque24 from "../img/productos/Herramienta de Torque/TROLLEY.png"
import herramientaTorque25 from "../img/productos/Herramienta de Torque/VOLTEADORA.png"
import herramientaTorque26 from "../img/productos/Herramienta de Torque/ZERO GRAVITY 1.png"



import {Link} from "react-router-dom";

import './herramientaTorque.css'

function HerramientaTorque() {
  return (
    <div className='herramienta_torque'>
      <br/><br/>
     <h2>SISTEMA DE RIELES ERGONÓMICOS</h2>
  <div className='sistema_rieles_flex'>
    <Link to="/herramienta_torque20"><img src={herramientaTorque20}></img><br/>RIELES ERGONÓMICOS</Link>
    <Link to="/herramienta_torque14"><img src={herramientaTorque14}></img><br/>GRUAS PUENTE</Link>
    <Link to="/herramienta_torque24"><img src={herramientaTorque24}></img><br/>TROLLEY</Link>
    <Link to="/herramienta_torque1"><img src={herramientaTorque1}></img><br/>AIR TRACTOR</Link>
    </div><br/><br/><br/><br/>
   <h2>BRAZOS</h2>   
   <div className='brazos_flex'> 
  <Link to="/herramienta_torque2"><img src={herramientaTorque2}></img><br/>ANTI TORQUE</Link>
  <Link to="/herramienta_torque3"><img src={herramientaTorque3}></img><br/>ANTI TORQUE</Link>
  <Link to="/herramienta_torque23"><img src={herramientaTorque23}></img><br/>TIPO PLUMA (Jib)</Link>
  <Link to="/herramienta_torque4"><img src={herramientaTorque4}></img><br/>ARTICULADO</Link>
  </div><br/><br/><br/><br/>
    <h2>MESAS ERGONÓMICAS DE LEVANTE</h2>
    <div className='mesas_ergonomicas_levante_flex'>
  <Link to="/herramienta_torque16"><img src={herramientaTorque16}></img><br/>INCLINACION</Link>
  <Link to="/herramienta_torque21"><img src={herramientaTorque21}></img><br/>ROTATORIA</Link>
  <Link to="/herramienta_torque9"><img src={herramientaTorque9}></img><br/>ELEVADORA</Link>
  <Link to="/herramienta_torque25"><img src={herramientaTorque25}></img><br/>VOLTEADORA</Link>
  </div><br/><br/><br/><br/>
  <h2>MANIPULADORES</h2>
  <div className='manipuladores_flex'>
  <Link to="/herramienta_torque10"><img src={herramientaTorque10}></img><br/>EP4007N</Link>
  <Link to="/herramienta_torque11"><img src={herramientaTorque11}></img><br/>ES60T</Link>
  <Link to="/herramienta_torque12"><img src={herramientaTorque12}></img><br/>ES70T2S3</Link>
  <Link to="/herramienta_torque13"><img src={herramientaTorque13}></img><br/>ES100T</Link>

  </div><br/><br/><br/><br/>
  <h2>BALANCINES</h2>
    <div className='balancines_flex'>
  <Link to="/herramienta_torque5"><img src={herramientaTorque5}></img><br/>BASICO</Link>
  <Link to="/herramienta_torque19"><img src={herramientaTorque19}></img><br/>REEVED</Link>
  <Link to="/herramienta_torque22"><img src={herramientaTorque22}></img><br/>TANDEM</Link><br/>
  <Link to="/herramienta_torque26"><img src={herramientaTorque26}></img><br/>ZERO GRAVITY</Link>
  </div><br/><br/><br/><br/>
  <h2>MANERALES DE CONTROL NEUMÁTICO</h2>
    <div className='manerales_control_neumatico_flex'>
  <Link to="/herramienta_torque17"><img src={herramientaTorque17}></img><br/>MANERAL BALANCIN</Link>
  <Link to="/herramienta_torque6"><img src={herramientaTorque6}></img><br/>EL1510N2S5</Link>
  <Link to="/herramienta_torque7"><img src={herramientaTorque7}></img><br/>ELB2612N</Link>
  <Link to="/herramienta_torque8"><img src={herramientaTorque8}></img><br/>ELB2620NN</Link>
  </div>
<br/><br/><br/>

    </div>
  )
}

export default HerramientaTorque