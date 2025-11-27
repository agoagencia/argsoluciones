import React from 'react'
import {Link} from "react-router-dom"
import BombaSanitaria1 from "../img/productos/ManejoFluidos/Bombas sanitarias/1.-Bomba de diafragma eléctrica SaniForce 1040e Graco.jpg"
import BombaSanitaria2 from "../img/productos/ManejoFluidos/Bombas sanitarias/2.-Bomba de diafragma electrica SaniForce 2150e Graco.jpg"
import BombaSanitaria3 from "../img/productos/ManejoFluidos/Bombas sanitarias/3.-Bomba de diafragma sanitaria FD5111 Graco.jpg"
import BombaSanitaria4 from "../img/productos/ManejoFluidos/Bombas sanitarias/4.-Bomba de doble diafragma SaniForce 1040 Graco.jpg"
import BombaSanitaria5 from "../img/productos/ManejoFluidos/Bombas sanitarias/5.-Bomba de doble diafragma SaniForce 1590 Graco.jpg"
import BombaSanitaria6 from "../img/productos/ManejoFluidos/Bombas sanitarias/6.-Bomba de doble diafragma SaniForce 2150 Graco.jpg"
import BombaSanitaria7 from "../img/productos/ManejoFluidos/Bombas sanitarias/7.-Bomba de doble diafragma SaniForce 3150 3A Graco.jpg"
import BombaSanitaria8 from "../img/productos/ManejoFluidos/Bombas sanitarias/8.-Bomba de compuertas de 2” Aro PF20A-AAS-SAA-B.jpg"
import BombaSanitaria9 from "../img/productos/ManejoFluidos/Bombas sanitarias/9.-Bomba de doble diafragma Saniforce 515 Graco.jpg"
import BombaSanitaria10 from "../img/productos/ManejoFluidos/Bombas sanitarias/10.-Bomba de piston sanitaria SaniForce 12-1 Graco.jpg"
import BombaSanitaria11 from "../img/productos/ManejoFluidos/Bombas sanitarias/11.-Bomba de piston sanitaria SaniForce 2-1 Graco.jpg"
import BombaSanitaria12 from "../img/productos/ManejoFluidos/Bombas sanitarias/12.-Bomba de piston sanitaria SaniForce 5-1 Graco.jpg"
import BombaSanitaria13 from "../img/productos/ManejoFluidos/Bombas sanitarias/13.-Bomba de piston sanitaria SaniForce 6-1 Graco.jpg"
import BombaSanitaria14 from "../img/productos/ManejoFluidos/Bombas sanitarias/14.-Bomba grado sanitario de 1″ Aro SD10S-CSS-STT-A.jpg"
import BombaSanitaria15 from "../img/productos/ManejoFluidos/Bombas sanitarias/15.-Bomba sanitaria de 2″ Aro SD20S-CSS-STT-A.jpg"




import './bombasSanitarias.css'

function BombasSanitarias() {
  return (
    <div className='bombas_sanitarias'>
    <div><Link to="/bombaSanitaria1"><img src={BombaSanitaria1}></img><br/>Bomba de diafragma eléctrica<br/> SaniForce 1040e Graco</Link></div>
    <div><Link to="/bombaSanitaria2"><img src={BombaSanitaria2}></img><br/>Bomba de diafragma electrica <br/>SaniForce 2150e Graco</Link></div>
    <div><Link to="/bombaSanitaria3"><img src={BombaSanitaria3}></img><br/>Bomba de diafragma sanitaria<br/> FD5111 Graco</Link></div>
    <div><Link to="/bombaSanitaria4"><img src={BombaSanitaria4}></img><br/>Bomba de doble diafragma<br/> SaniForce 1040 Graco</Link></div>
    <div><Link to="/bombaSanitaria5"><img src={BombaSanitaria5}></img><br/>Bomba de doble diafragma<br/> SaniForce 1590 Graco</Link></div>
    <div><Link to="/bombaSanitaria6"><img src={BombaSanitaria6}></img><br/>Bomba de doble diafragma<br/> SaniForce 2150 Graco</Link></div>
    <div><Link to="/bombaSanitaria7"><img src={BombaSanitaria7}></img><br/>Bomba de doble diafragma<br/> SaniForce 3150 3A Graco</Link></div>
    <div><Link to="/bombaSanitaria8"><img src={BombaSanitaria8}></img><br/>Bomba de compuertas de 2”<br/> Aro PF20A-AAS-SAA-B</Link></div>
    <div><Link to="/bombaSanitaria9"><img src={BombaSanitaria9}></img><br/>Bomba de doble diafragma <br/>Saniforce 515 Graco</Link></div>
    <div><Link to="/bombaSanitaria10"><img src={BombaSanitaria10}></img><br/>Bomba de piston sanitaria <br/>SaniForce 12-1 Graco</Link></div>
    <div><Link to="/bombaSanitaria11"><img src={BombaSanitaria11}></img><br/>Bomba de piston sanitaria <br/>SaniForce 2-1 Graco</Link></div>
    <div><Link to="/bombaSanitaria12"><img src={BombaSanitaria12}></img><br/>Bomba de piston sanitaria <br/>SaniForce 5-1 Graco</Link></div>
    <div><Link to="/bombaSanitaria13"><img src={BombaSanitaria13}></img><br/>Bomba de piston sanitaria <br/>SaniForce 6-1 Graco</Link></div>
    <div><Link to="/bombaSanitaria14"><img src={BombaSanitaria14}></img><br/>Bomba grado sanitario de 1″<br/> Aro SD10S-CSS-STT-A</Link></div>
    <div><Link to="/bombaSanitaria15"><img src={BombaSanitaria15}></img><br/>Bomba sanitaria de 2″ <br/>Aro SD20S-CSS-STT-A</Link></div>

    </div>
  )
}

export default BombasSanitarias