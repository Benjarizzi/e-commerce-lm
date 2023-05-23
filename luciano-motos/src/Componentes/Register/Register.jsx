import React, { useState } from 'react'
import "./Register.css"

const Register = () => {

    return (
        <div className='contenedor-registro'>
            <div className='contenedor-registrarse'>
                <div className='registrarse'>
                    <h1>Registrarse</h1>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Nombre de usuario</label>
                        <input type="text" />
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Dirección de correo electrónico</label>
                        <input type="e-mail" />
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' />
                    </div>

                    <div className='boton-registro'><button type='submit'>Registrarse</button></div>
                </div>
            </div>
            <div className='contenedor-ingresar'>
                <div className='ingresar'>
                    <h1>Ingresar</h1>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Nombre de usuario</label>
                        <input type="text" />
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' />
                    </div>
                   
                    <div className='boton-registro'>
                        <button>Ingresar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register