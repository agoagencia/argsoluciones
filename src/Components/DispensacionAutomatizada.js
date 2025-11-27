import React from 'react'
import D1 from "../img/productos/SistemaSellos/Dispensión Automatizada/1.-Unixact C300.jpg"
import D2 from "../img/productos/SistemaSellos/Dispensión Automatizada/2.-Unixact C500.jpg"

import './dispensacionAutomatizada.css'
import {Link} from "react-router-dom";

function DispensacionAutomatizada() {
  return (
    <div className='dispensacionAutomatizada'>
    <div><Link to="/dispAut1"><img src={D1}></img><br/>Unixact C300</Link></div>
    <div><Link to="/dispAut2"><img src={D2}></img><br/>Unixact C500</Link></div>
    
    </div>
  )
}

export default DispensacionAutomatizada;