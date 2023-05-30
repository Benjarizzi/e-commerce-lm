import React from 'react'
import "./Micuenta.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
const Micuenta = () => {
    return (
        <div style={{width:"100%"}}>
            <div className='title'>
                <h1 id='titulo'>Mi cuenta</h1>
            </div>
            <div className='container'> 
                <div className='info-user'>
                    <div className='user'>
                       <AccountCircleIcon style={{fontSize:"80px", color:"#808080a1"}} />
                        <p>User</p>
                        <p>#444</p>
                    </div>
                    <div className='opciones-cuenta'>
                        <Link to="/micuenta/pedidos" style={{textDecoration:"none"}}><p id='pedidos'>Pedidos</p></Link>
                        <Link to="/micuenta/direcciones" style={{textDecoration:"none"}}><p>Direcciones</p></Link> 
                        <Link to="/micuenta/detalles-de-la-cuenta" style={{textDecoration:"none"}}><p>Detalles de la Cuenta</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Micuenta