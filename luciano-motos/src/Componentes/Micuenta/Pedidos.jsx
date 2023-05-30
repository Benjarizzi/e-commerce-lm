import React from 'react'
import "./Pedidos.css";
import Micuenta from './Micuenta';
import { Link } from 'react-router-dom';
const Pedidos = () => {
    
    return (
        <div className='info-opciones'>
            <Micuenta />
            <h3> / Pedidos</h3>
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