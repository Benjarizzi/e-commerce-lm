import React from 'react'
import "./FormularioDirecciones.css";
import Micuenta from './Micuenta';

const FormularioDirecciones = () => {
    return (
        
            <div >
                <h2 style={{marginBottom:"19px"}}>Dirección de envío</h2>
                <div>
                    <div className='contenedor-input'>
                        <label>Dirección de la calle</label>
                        <input type="text" placeholder='Ej: Direccion 1234'/>
                    </div>
                    <div className='contenedor-input'>
                        <label >Ciudad</label>
                        <input type="text" placeholder='Ciudad o Poblado'/>
                    </div>
                    <div className='contenedor-input'>
                        <label >Región/Provincia</label>
                        <input type="text" placeholder='Región o provincia' />
                    </div>
                    <div className='contenedor-input'>
                        <label >Código postal</label>
                        <input type="number" placeholder='Ej: 2500' />
                    </div>
                    <div className='boton-añadir'><button>Guardar cambios</button></div>
                </div>
            </div>
       
    )
}

export default FormularioDirecciones