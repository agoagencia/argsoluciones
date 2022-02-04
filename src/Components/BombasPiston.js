import React from 'react'
import bombaPiston1 from '../img/bp1.jpg'
import bombaPiston2 from '../img/bp2.jpg'
import bombaPiston3 from '../img/bp3.jpg'
import bombaPiston4 from '../img/bp4.jpg'

function BombasPiston() {
    return (
        <div className='bombas_piston'>
            <img src={bombaPiston4} alt property='bomba4'></img>
            <img src={bombaPiston3} alt property='bomba3'></img>
            <img src={bombaPiston2} alt property='bomba2'></img>
            <img src={bombaPiston1} alt property='bomba1'></img>
            
         
        </div>
    )
}

export default BombasPiston
