import React, { useState } from 'react'
import "./Register.css"
import {Link} from "react-router-dom";
const Register = () => {

    return (
        <div className='contenedor-registro'>
            <div className='contenedor-registrarse'>
                <div className='registrarse'>
                    <h1>Registrarse</h1>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Nombre de usuario</label>
                        <input type="text" placeholder='Nombre de usuario' />
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Dirección de correo electrónico</label>
                        <input type="e-mail" placeholder='E-mail'/>
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' placeholder='Contraseña' />
                    </div>

                    <div className='boton-registro'><Link to="/micuenta" style={{backgroundColor:"transparent", width:"80%"}}><button type='submit'>Registrarse</button></Link></div>
                </div>
            </div>
            <div className='contenedor-ingresar'>
                <div className='ingresar'>
                    <h1>Ingresar</h1>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Nombre de usuario</label>
                        <input type="text" placeholder='Nombre de usuario'/>
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' placeholder='Contraseña' />
                    </div>
                   
                    <div className='boton-registro'>
                        <Link to="/micuenta" style={{backgroundColor:"transparent", width:"80%"}}><button>Ingresar</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register