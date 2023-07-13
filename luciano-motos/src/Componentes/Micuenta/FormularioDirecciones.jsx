import React from 'react'
import "./FormularioDirecciones.css";
import Micuenta from './Micuenta';

const FormularioDirecciones = () => {
    return (
        
             <div style={{marginTop:"20px", marginBottom:"20px"}}>
                
                <h2 style={{marginBottom:"19px"}}>Dirección de envío</h2>
                <div>
                    <div className='contenedor-input'>
                        
                        <input type="text" placeholder='Ej: Direccion 1234'/>
                    </div>
                    <div className='contenedor-input'>
                        
                        <input type="text" placeholder='Ciudad o Poblado'/>
                    </div>
                    <div className='contenedor-input'>
                        
                        <input type="text" placeholder='Región o provincia' />
                    </div>
                    <div className='contenedor-input'>
                        
                        <input type="number" placeholder='Ej: 2500' />
                    </div>
                    <div className='boton-añadir'><button style={{textDecoration:"none"}}>Guardar cambios</button></div>
                </div> 
                </div>

        
           

    )
}

export default FormularioDirecciones