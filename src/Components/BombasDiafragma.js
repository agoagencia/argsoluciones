import React from 'react'
import {Link} from "react-router-dom"
import bombaDiafragma1 from "../img/productos/ManejoFluidos/Bombas de diafragma/1.-Amortiguador de pulsaciones Aro SB20A-AAP-A.jpg"
import bombaDiafragma2 from "../img/productos/ManejoFluidos/Bombas de diafragma/2.-Bomba centrifuga Aro P237A1-EU.jpg"
import bombaDiafragma3 from "../img/productos/ManejoFluidos/Bombas de diafragma/3.-Bomba de diafragma Aro 666053-344.jpg"
import bombaDiafragma4 from "../img/productos/ManejoFluidos/Bombas de diafragma/4.-Bomba de diafragma Aro 66605J-3EB.jpg"
import bombaDiafragma5 from "../img/productos/ManejoFluidos/Bombas de diafragma/5.-Bomba de diafragma Aro 666100-344-C.jpg"
import bombaDiafragma6 from "../img/productos/ManejoFluidos/Bombas de diafragma/6.-Bomba de diafragma Aro 666151-2EB-C.jpg"
import bombaDiafragma7 from "../img/productos/ManejoFluidos/Bombas de diafragma/7.-Bomba de diafragma Aro 6661A3-344-C.jpg"
import bombaDiafragma8 from "../img/productos/ManejoFluidos/Bombas de diafragma/8.-Bomba de diafragma Aro 6662A3-344-C.jpg"
import bombaDiafragma9 from "../img/productos/ManejoFluidos/Bombas de diafragma/9.-Bomba de diafragma Aro PD01P-HPS-PTT-A.jpg"
import bombaDiafragma10 from "../img/productos/ManejoFluidos/Bombas de diafragma/10.-Bomba de diafragma Aro PD03P-APS-PCC.jpg"
import bombaDiafragma11 from "../img/productos/ManejoFluidos/Bombas de diafragma/11.-Bomba de diafragma Aro PD10A-AAP-AAA.jpg"
import bombaDiafragma12 from "../img/productos/ManejoFluidos/Bombas de diafragma/12.-Bomba de diafragma Aro PD10A-AAP-FTT.jpg"
import bombaDiafragma13 from "../img/productos/ManejoFluidos/Bombas de diafragma/13.-Bomba de diafragma Aro PD10P-YPS-PTT.jpg"
import bombaDiafragma14 from "../img/productos/ManejoFluidos/Bombas de diafragma/14.-Bomba de diafragma Aro PD15A-AAP-FTT.jpg"
import bombaDiafragma15 from "../img/productos/ManejoFluidos/Bombas de diafragma/15.-Bomba de diafragma Aro PD15P-FPS-PAA.jpg"
import bombaDiafragma16 from "../img/productos/ManejoFluidos/Bombas de diafragma/16.-Bomba de diafragma Aro PD20A-AAP-FTT-B.jpg"
import bombaDiafragma17 from "../img/productos/ManejoFluidos/Bombas de diafragma/17.-Bomba de diafragma Aro PD20A-AAP-GGG-B.jpg"
import bombaDiafragma18 from "../img/productos/ManejoFluidos/Bombas de diafragma/18.-Bomba de diafragma Graco D12091.jpg"
import bombaDiafragma19 from "../img/productos/ManejoFluidos/Bombas de diafragma/19.-Bomba de diafragma Graco D32331.jpg"
import bombaDiafragma20 from "../img/productos/ManejoFluidos/Bombas de diafragma/20.-Bomba de diafragma Graco D55A11.jpg"
import bombaDiafragma21 from "../img/productos/ManejoFluidos/Bombas de diafragma/21.-Bomba de diafragma Graco DF3311.jpg"
import bombaDiafragma22 from "../img/productos/ManejoFluidos/Bombas de diafragma/22.-Bomba neumática Aro 666053-322.jpg"
import bombaDiafragma23 from "../img/productos/ManejoFluidos/Bombas de diafragma/23.-Bomba neumática Aro 666053-388.jpg"
import bombaDiafragma24 from "../img/productos/ManejoFluidos/Bombas de diafragma/24.-Bomba neumática Aro 666053-3EB.jpg"
import bombaDiafragma25 from "../img/productos/ManejoFluidos/Bombas de diafragma/25.-Bomba neumática Aro 666100-322-C.jpg"
import bombaDiafragma26 from "../img/productos/ManejoFluidos/Bombas de diafragma/26.-Bomba para manejo de combustible 1” Aro 650717-C.jpg"
import bombaDiafragma27 from "../img/productos/ManejoFluidos/Bombas de diafragma/27.-Bomba para manejo de combustible 2”Aro 650719-C.jpg"
import bombaDiafragma28 from "../img/productos/ManejoFluidos/Bombas de diafragma/28.-Bomba para manejo de combustible Aro 1 1-2” 650718-C.jpg"
import bombaDiafragma29 from "../img/productos/ManejoFluidos/Bombas de diafragma/29.-Bomba Pit Boss 1 1-2” Aro 66M150-122-C.jpg"
import bombaDiafragma30 from "../img/productos/ManejoFluidos/Bombas de diafragma/30.-Bomba Pit Boss 1 1-2” Aro 66M150-1EB-C.jpg"
import bombaDiafragma31 from "../img/productos/ManejoFluidos/Bombas de diafragma/31.-Bomba Pit Boss 2” Aro 66M250-122-C.jpg"
import bombaDiafragma32 from "../img/productos/ManejoFluidos/Bombas de diafragma/32.-Controlador de fluido Aro 651763-AM-1.jpg"

import './bombasDiafragma.css'

function BombasDiafragma() {
  return (
    <div className='bombas_diafragma'>
    <div><Link to="/bomba_diafragma1"><img src={bombaDiafragma1}></img><br/>Amortiguador<br/>de pulsaciones Aro <br/>SB20A-AAP-A</Link></div>
    <div><Link to="/bomba_diafragma2"><img src={bombaDiafragma2}></img><br/>Bomba centrifuga<br/> Aro P237A1-EU</Link></div>
    <div><Link to="/bomba_diafragma3"><img src={bombaDiafragma3}></img><br/>Bomba de diafragma<br/> Aro 666053-344</Link></div>
    <div><Link to="/bomba_diafragma4"><img src={bombaDiafragma4}></img><br/>Bomba de diafragma <br/>Aro 66605J-3EB</Link></div>
    <div><Link to="/bomba_diafragma5"><img src={bombaDiafragma5}></img><br/>Bomba de diafragma<br/> Aro 666100-344-C</Link></div>
    <div><Link to="/bomba_diafragma6"><img src={bombaDiafragma6}></img><br/>Bomba de diafragma<br/> Aro 666151-2EB-C</Link></div>
    <div><Link to="/bomba_diafragma7"><img src={bombaDiafragma7}></img><br/>Bomba de diafragma<br/> Aro 6661A3-344-C</Link></div>
    <div><Link to="/bomba_diafragma8"><img src={bombaDiafragma8}></img><br/>Bomba de diafragma <br/>Aro 6662A3-344-C</Link></div>
    <div><Link to="/bomba_diafragma9"><img src={bombaDiafragma9}></img><br/>Bomba de diafragma <br/>Aro PD01P-HPS-PTT-A</Link></div>
    <div><Link to="/bomba_diafragma10"><img src={bombaDiafragma10}></img><br/>Bomba de diafragma<br/> Aro PD03P-APS-PCC</Link></div>
    <div><Link to="/bomba_diafragma11"><img src={bombaDiafragma11}></img><br/>Bomba de diafragma<br/> Aro PD10A-AAP-AAA.jpg</Link></div>
    <div><Link to="/bomba_diafragma12"><img src={bombaDiafragma12}></img><br/>Bomba de diafragma <br/>Aro PD10A-AAP-FTT.jpg</Link></div>
    <div><Link to="/bomba_diafragma13"><img src={bombaDiafragma13}></img><br/>Bomba de diafragma<br/> Aro PD10P-YPS-PTT.jpg</Link></div>
    <div><Link to="/bomba_diafragma14"><img src={bombaDiafragma14}></img><br/>Bomba de diafragma<br/> Aro PD15A-AAP-FTT</Link></div>
    <div><Link to="/bomba_diafragma15"><img src={bombaDiafragma15}></img><br/>Bomba de diafragma <br/>Aro PD15P-FPS-PAA</Link></div>
    <div><Link to="/bomba_diafragma16"><img src={bombaDiafragma16}></img><br/>Bomba de diafragma <br/>Aro PD20A-AAP-FTT-B</Link></div>
    <div><Link to="/bomba_diafragma17"><img src={bombaDiafragma17}></img><br/>Bomba de diafragma<br/> Aro PD20A-AAP-GGG-B.jpg</Link></div>
    <div><Link to="/bomba_diafragma18"><img src={bombaDiafragma18}></img><br/>Bomba de diafragma <br/>Graco D12091.jpg</Link></div>
    <div><Link to="/bomba_diafragma19"><img src={bombaDiafragma19}></img><br/>Bomba de diafragma <br/>Graco D32331.jpg</Link></div>
    <div><Link to="/bomba_diafragma20"><img src={bombaDiafragma20}></img><br/>Bomba de diafragma <br/> Graco D55A11</Link></div>
    <div><Link to="/bomba_diafragma21"><img src={bombaDiafragma21}></img><br/>Bomba de diafragma <br/>Graco DF3311</Link></div>
    <div><Link to="/bomba_diafragma22"><img src={bombaDiafragma22}></img><br/>Bomba neumática Aro <br/>666053-322</Link></div>
    <div><Link to="/bomba_diafragma23"><img src={bombaDiafragma23}></img><br/>Bomba neumática Aro <br/>666053-388</Link></div>
    <div><Link to="/bomba_diafragma24"><img src={bombaDiafragma24}></img><br/>Bomba neumática Aro <br/>666053-3EB</Link></div>
    <div><Link to="/bomba_diafragma25"><img src={bombaDiafragma25}></img><br/>Bomba neumática Aro <br/>666100-322-C</Link></div>
    <div><Link to="/bomba_diafragma26"><img src={bombaDiafragma26}></img><br/>Bomba para manejo de <br/>combustible 1” <br/>Aro 650717-C</Link></div>
    <div><Link to="/bomba_diafragma27"><img src={bombaDiafragma27}></img><br/>Bomba para manejo de <br/>combustible 2”Aro<br/> 650719-C</Link></div>
    <div><Link to="/bomba_diafragma28"><img src={bombaDiafragma28}></img><br/>Bomba para manejo de <br/>combustible Aro 1 1-2” <br/>650718-C</Link></div>
    <div><Link to="/bomba_diafragma29"><img src={bombaDiafragma29}></img><br/>Bomba Pit Boss 1 1-2” <br/>Aro 66M150-122-C</Link></div>
    <div><Link to="/bomba_diafragma30"><img src={bombaDiafragma30}></img><br/>Bomba Pit Boss 1 1-2”<br/> Aro 66M150-1EB-C</Link></div>
    <div><Link to="/bomba_diafragma31"><img src={bombaDiafragma31}></img><br/>Bomba Pit Boss 2”<br/> Aro 66M250-122-C</Link></div>
    <div><Link to="/bomba_diafragma32"><img src={bombaDiafragma32}></img><br/>Controlador de fluido<br/> Aro 651763-AM-1</Link></div>
    </div>
  )
}

export default BombasDiafragma