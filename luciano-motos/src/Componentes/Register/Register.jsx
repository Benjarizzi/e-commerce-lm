import React, { useState } from 'react'
import "./Register.css"
import {Link,useNavigate} from "react-router-dom";
import { Box, Grid, Button, Radio, FormControlLabel, FormGroup, Switch } from "@mui/material";
import axios from 'axios';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform login request to Django backend
      // Use the username and password state variables
      const auth = {username:username,password:password}
      axios.post('http://localhost:8000/login/',auth)
    .then(response => {
      // Handle the response data here
      console.log(response)
      if(response.data.status) { //Correct Auth
        navigate('/micuenta');
      }
      else { //Bad auth

      }
    })
    .catch(error => {
      // Handle any errors here
      console.warn(error);
    });
    };

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
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nombre de usuario'/>
                    </div>
                    <div className='contenedor-input-label'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                    </div>
                   
                    <div className='boton-registro'>
                        <Box style={{backgroundColor:"transparent", width:"80%"}} onClick={handleLogin}><button>Ingresar</button></Box>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register