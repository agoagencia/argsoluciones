import React from 'react'
import Pistola1 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/1.-Pistola de alimentacion por presion 288951.jpg"
import Pistola2 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/2.-Pistola de pintura automática 24A755.jpg"
import Pistola3 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/3.-Pistola de pulverización 24A753.jpg"
import Pistola4 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/4.-DeVilbiss FLG-5 Pistola.jpg"
import Pistola5 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/5.-Pistola de pulverizacion automatica 288046.jpg"
import Pistola6 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/6.-Pistola pulverizadora 2465-18CN-14V0.jpg"
import Pistola7 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/7.-Pistola pulverizadora Binks 2101-5200-0.jpg"
import Pistola8 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/8.-Pistola pulverizadora convencional 2101-4909-5.jpg"
import Pistola9 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/9.-Pistola pulverizadora convencional 6469-5111-5.jpg"
import Pistola10 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/10.-Pistola pulverizadora Devilbiss JGA-510-704-FX.jpg"
import Pistola11 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/11.-Pistola Pulverizadora FLG-HVG-315MX.jpg"
import Pistola12 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/12.-Pistola pulverizadora manual EMG-DS-343-18.jpg"
import Pistola13 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/13.-Pistola pulverizadora por gravedad 2466-18CN-12SG.jpg"
import Pistola14 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/14.-Pistola pulverizadora sin aire 288425.jpg"
import Pistola15 from "../img/productos/Equipos de pintura/Pistolas pulverizadoras/15.-Pistolas automáticas compactas CMAI.jpg"




import {Link} from "react-router-dom"

import './equiposSanitizantes.css'

function EquiposSanitizantes() {
  return (
    <div className='equipos_sanitizantes'>
    <div><Link to="/pistola1"><img src={Pistola1}></img><br/>Pistola de alimentacion<br/> por presion 288951</Link></div>
    <div><Link to="/pistola2"><img src={Pistola2}></img><br/>Pistola de pintura<br/> automática 24A755</Link></div>
    <div><Link to="/pistola3"><img src={Pistola3}></img><br/>Pistola de pulverización<br/> 24A753</Link></div>
    <div><Link to="/pistola4"><img src={Pistola4}></img><br/>Pistola De Vilbiss<br/> FLG-5 </Link></div>
    <div><Link to="/pistola5"><img src={Pistola5}></img><br/>Pistola de pulverizacion <br/>automatica 288046</Link></div>
    <div><Link to="/pistola6"><img src={Pistola6}></img><br/>Pistola pulverizadora<br/> 2465-18CN-14V0</Link></div>
    <div><Link to="/pistola7"><img src={Pistola7}></img><br/>Pistola pulverizadora<br/> Binks 2101-5200-0<br/></Link></div>
    <div><Link to="/pistola8"><img src={Pistola8}></img><br/>Pistola pulverizadora<br/> convencional 2101-4909-5</Link></div>
    <div><Link to="/pistola9"><img src={Pistola9}></img><br/>Pistola pulverizadora <br/>convencional 6469-5111-5</Link></div>
    <div><Link to="/pistola10"><img src={Pistola10}></img><br/>Pistola pulverizadora<br/> Devilbiss JGA-510-704-FX</Link></div>
    <div><Link to="/pistola11"><img src={Pistola11}></img><br/>Pistola Pulverizadora<br/> FLG-HVG-315MX</Link></div>
    <div><Link to="/pistola12"><img src={Pistola12}></img><br/>Pistola pulverizadora <br/>manual EMG-DS-343-18</Link></div>
    <div><Link to="/pistola13"><img src={Pistola13}></img><br/>Pistola pulverizadora por gravedad <br/>2466-18CN-12SG</Link></div>
    <div><Link to="/pistola14"><img src={Pistola14}></img><br/>Pistola pulverizadora <br/>sin aire 288425</Link></div>
    <div><Link to="/pistola15"><img src={Pistola15}></img><br/>Pistolas automáticas<br/> compactas CMAI</Link></div>

    

    </div>
  )
}

export default EquiposSanitizantes