import React from 'react'
import PaqueteBomba1 from "../img/productos/Equipos de pintura/Paquetes de bombas/1.-Paquetes de bomba de piston Merkur.jpg"
import PaqueteBomba2 from "../img/productos/Equipos de pintura/Paquetes de bombas/2.-Paquetes de bomba Triton.jpg"
import PaqueteBomba3 from "../img/productos/Equipos de pintura/Paquetes de bombas/3.-Paquetes de pulverizacion Merkur ES.jpg"
import PaqueteBomba4 from "../img/productos/Equipos de pintura/Paquetes de bombas/4.-Pulverizador sin aire electrico 17C310.jpg"
import PaqueteBomba5 from "../img/productos/Equipos de pintura/Paquetes de bombas/5.-Rociador electrico Magnum ProX 17 17G177.jpg"
import PaqueteBomba6 from "../img/productos/Equipos de pintura/Paquetes de bombas/6.-Triton para montaje en pared 233487.jpg"
import PaqueteBomba7 from "../img/productos/Equipos de pintura/Paquetes de bombas/7.-Triton relacion 11 233474.jpg"


import {Link} from "react-router-dom"

import './paquetesBombas.css'

function PaquetesBomba() {
  return (
    <div className='paquetes_bombas'>
    <div><Link to="/paquete_bomba1"><img src={PaqueteBomba1}></img><br/>Paquetes de bomba <br/>de piston Merkur</Link></div>
    <div><Link to="/paquete_bomba2"><img src={PaqueteBomba2}></img><br/>Paquetes de bomba <br/>Triton</Link></div>
    <div><Link to="/paquete_bomba3"><img src={PaqueteBomba3}></img><br/>Paquetes de pulverizacion<br/> Merkur ES</Link></div>
    <div><Link to="/paquete_bomba4"><img src={PaqueteBomba4}></img><br/>Pulverizador sin aire electrico <br/>17C310</Link></div>
    <div><Link to="/paquete_bomba5"><img src={PaqueteBomba5}></img><br/>Rociador electrico Magnum<br/> ProX 17 17G177</Link></div>
    <div><Link to="/paquete_bomba6"><img src={PaqueteBomba6}></img><br/>Triton para montaje <br/>en pared 233487</Link></div>
    <div><Link to="/paquete_bomba7"><img src={PaqueteBomba7}></img><br/>Triton relacion<br/> 11 233474</Link></div>



    </div>
  )
}

export default PaquetesBomba