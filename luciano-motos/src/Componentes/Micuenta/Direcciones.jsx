import React from 'react'
import "./Direcciones.css";
import Micuenta from './Micuenta';
import { Link } from 'react-router-dom';
const Direcciones = () => {
    return (
        <div className='info-opciones'>
            <Micuenta />
            <h3> / Direcciones</h3>
            <div className='informacion'>
                <h1>Direcciones</h1>
                    <p>La siguiente direccion se utilizara en la página de pagos por defecto.</p>
                    <div className='añadir-direccion'>
                        <h4>Dirección de envío</h4>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <Link to="/micuenta/formulario"><p>Añadir</p></Link>
                        <button>Eliminar</button>
                        </div>
                        
                        <p>Esta es la dirección que configuraste</p>{/**Acá iría la dirección que configuras desde el formulario */}
                    </div>
            </div>

        </div>
    )
}

export default Direcciones