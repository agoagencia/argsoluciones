import React from 'react'
import {Link} from "react-router-dom"
import bombaPseudo1 from "../img/productos/ManejoFluidos/Bomba pseudosanitaria/1.-Bomba pseudosanitaria de 1 1-2” Aro PM15S-CSS-SAA-A02.jpg"
import bombaPseudo2 from "../img/productos/ManejoFluidos/Bomba pseudosanitaria/2.-Bomba pseudosanitaria de 1”Aro PM10S-CSS-STT-A02.jpg"


import './bombasPseudosanitarias.css'

function BombasPseudosanitarias() {
  return (
    <div className='bombas_pseudosanitarias'>
    <div><Link to="/bombaPseudo1"><img src={bombaPseudo1}></img><br/>Bomba pseudosanitaria de 1 1-2”<br/> Aro PM15S-CSS-SAA-A02</Link></div>
    <div><Link to="/bombaPseudo2"><img src={bombaPseudo2}></img><br/>Bomba pseudosanitaria de <br/>1”Aro PM10S-CSS-STT-A02</Link></div>

    </div>
  )
}

export default BombasPseudosanitarias