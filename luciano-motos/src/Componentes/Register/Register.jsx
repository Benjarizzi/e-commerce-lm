import React, { useState } from 'react'
import "./Register.css"
import {Link,useNavigate} from "react-router-dom";
import { Box, Grid, Button, Radio, FormControlLabel, FormGroup, Switch } from "@mui/material";
import axios from 'axios';
import ScrollToTop from '../global/ScrollToTop';
const Register = () => {
    const [mail, setMail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
  
    const [mailHasError,setMailError] = useState(false);
    const [usernameHasError,setUsernameError] = useState(false);
    const [passwordHasError,setPasswordError] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleRegister = () => {
      setMailError(false);
      setUsernameError(false);
      setPasswordError(false);
      setError(false);
      setErrorMsg('')

      const reg = {username:username,mail:mail,password:password}


      if(password != '' && password2 != '') {
        if(password != password2) {
            setPasswordError(true);
            setError(true);
            setErrorMsg('Las contraseñas no coinciden');
          }
          else {
            if(password.length < 8) {
                setPasswordError(true);
                setError(true);
                setErrorMsg('La contraseña debe tener minimo 8 caracteres');
            }
          }
      }
      else {
        setPasswordError(true);
        setError(true);
        setErrorMsg('Ingresa una contraseña');
      }
      
      if(!validateEmail(mail)) {
        setMailError(true);
        setError(true);
        setErrorMsg('Introduce un correo valido');
      }

      if(username == '') {
        setUsernameError(true);
        setError(true);
        setErrorMsg('Ingresa un nombre de usuario');
      }

      if(error === false) {
        axios.post('https://lucianomotos.com/doreg/',reg)
            .then(response => {
                // Handle the response data here
                console.log(response)
                if(response.data.status) { //Correct Auth
                    navigate('/micuenta');
                }
                else { //Bad auth
                    setError(true)
                    setErrorMsg(response.data.message)
                }
            })
            .catch(error => {
                // Handle any errors here
                console.warn(error);
            });
      }
    };

    const [error,setError] = useState(false);
    const [errMsg,setErrorMsg] = useState('');

    return (
        <Box sx={{position:"relative",top:"80px"}}>
            < ScrollToTop />
            <Box>
                <div className='forms'>
                    <h1>Registrarse</h1>
                    <div className='contenedor-input-group' style={{gridGap:"10px"}}>
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre de usuario">Correo electronico</label>
                        <input className={mailHasError ? 'error' : ''} type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Correo electronico'/>
                    </div>
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre">Nombre de usuario</label>
                        <input className={usernameHasError ? 'error' : ''} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nombre de usuario'/>
                    </div>
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre de usuario">Contraseña</label>
                        <input className={passwordHasError ? 'error' : ''} type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                    </div>
                   
                    <div className='contenedor-input-panel'>
                        <label htmlFor="Nombre de usuario">Repite la contraseña</label>
                        <input className={passwordHasError ? 'error' : ''} type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Repite la contraseña' />
                    </div>
                    </div>
                    {   error && (
                        <div style={{color:"red",fontSize:"18px",marginTop:"15px"}}>{errMsg}</div>
                    )
                    }
                    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"5px",width:"100%"}}>
                      <button className='primary' onClick={handleRegister}>Registrarse</button>
                    </Box>
                </div>
            </Box>
        </Box>

    )
}

export default Register