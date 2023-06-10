import React from 'react'
import "./Bicicletas.css"
import { Link } from 'react-router-dom'
const Bicicletas = ({nombre, precio, descripcion, img}) => {
    return (
       
        <div className='product-card'>
            <img src={img} alt="imagen" />
            <h3>{nombre}</h3>
            <h2>{precio}</h2>
            <p>{descripcion}</p>
            <div>
            <Link to="/detalle"><button>Ver detalle</button></Link>
            </div>
        </div>
    )
}

export default Bicicletas