import React, { useState } from 'react'
import "./login.css"
import {Link,useNavigate} from "react-router-dom";
import { Box, Grid, Button, Radio, FormControlLabel, FormGroup, Switch } from "@mui/material";
import axios from 'axios';
import ScrollToTop from '../global/ScrollToTop';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform login request to Django backend
      // Use the username and password state variables
      const auth = {username:username,password:password}
      axios.post('https://lucianomotos.com/auth/',auth)
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
        <Box sx={{position:"relative",top:"80px"}}>
            < ScrollToTop />
            <Box>
                <div className='forms'>
                    <h1>Ingresar</h1>
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre de usuario">Nombre de usuario</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nombre de usuario'/>
                    </div>
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                    </div>
                   
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"5px",width:"100%"}}>
                      <button className='primary' onClick={handleLogin}>Ingresar</button> <Link to="/register"><button className='secondary'>Crear cuenta</button></Link>
                    </Box>
                </div>
            </Box>
        </Box>

    )
}

export default Login