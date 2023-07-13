import React from 'react'
import "./DetallesDeCuenta.css";
import Micuenta from './Micuenta';
const DetallesDeCuenta = () => {
    return (

        <div className='informacion'>
            <div>
                <h1 style={{ marginBottom: "19px" }}>Informacion</h1>
                <div>
                    <div className='contenedor-input'>
                        <input type="text" placeholder='Nombre' />
                    </div>
                    <div className='contenedor-input'>
                       
                        <input type="text" placeholder='Apellidos' />
                    </div>
                    <div className='contenedor-input'>
                        
                        <input type="text" placeholder='Dirección de correo electrónico' />
                    </div>
                   
                    <div className='boton-añadir'><button>Guardar cambios</button></div>
                </div>
            </div>



        </div>




    )
}

export default DetallesDeCuenta