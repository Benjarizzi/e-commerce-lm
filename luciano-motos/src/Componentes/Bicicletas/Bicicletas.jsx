import React from 'react'
import "./Bicicletas.css"
const Bicicletas = ({nombre, precio, descripcion, img}) => {
    return (
       
        <div className='product-card'>
            <img src={img} alt="imagen" />
            <h3>{nombre}</h3>
            <h2>{precio}</h2>
            <p>{descripcion}</p>
            <div>
            <button>Ver detalle</button>
            </div>
        </div>
    )
}

export default Bicicletas