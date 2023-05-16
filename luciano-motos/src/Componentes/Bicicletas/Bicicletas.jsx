import React from 'react'
import "./Bicicletas.css"
const Bicicletas = ({nombre, precio, descripcion, imagen}) => {
    return (
        <div className='product-card'>
            <img src={imagen} alt="imagen" />
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <p>{descripcion}</p>
        </div>
    )
}

export default Bicicletas