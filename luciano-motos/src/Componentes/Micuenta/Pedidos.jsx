import React from 'react'
import "./Pedidos.css";
import { Link } from 'react-router-dom';
const Pedidos = () => {
    return (
        <div>
            <div className='informacion'>
                <div className='contenedor-pedidos'>
                    <h1>Pedidos</h1>
                    <p>Pedido N #0001</p>
                    <Link>Seguimiento</Link>
                </div>
            </div>
        </div>
    )
}

export default Pedidos