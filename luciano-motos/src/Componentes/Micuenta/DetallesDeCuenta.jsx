import React from 'react'
import "./DetallesDeCuenta.css";
import Micuenta from './Micuenta';
const DetallesDeCuenta = () => {
    return (
        <div className='info-opciones'>
            <h3>/ Detalles-de-la-cuenta</h3>
            <Micuenta />
            <div className='informacion'>
                <div>
                    <h1>Información</h1>
                    <div className='contenedor-input2'>
                        <div className='contenedor-label-input'>
                            <label>Nombre</label>
                            <input type="text" placeholder='Nombre' />
                        </div>
                        <div className='contenedor-label-input'>
                            <label>Apellidos</label>
                            <input type="text" placeholder='Apellidos' />
                        </div>

                    </div>
                  
                    <div className='contenedor-input'>
                        <label >Dirección de correo electrónico</label>
                        <input type="email" placeholder='Dirección de correo electrónico' />
                    </div>
                
                    
                   
                    <div className='boton-añadir'><button type='submit'>Guardar cambios</button></div>
                </div>

            </div>
        </div>
    )
}

export default DetallesDeCuenta