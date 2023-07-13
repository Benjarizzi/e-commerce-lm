import React, { useState } from 'react'
import "./Micuenta.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import AddressIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import Pedidos from './Pedidos';
import Direcciones from './Direcciones';
import DetallesDeCuenta from './DetallesDeCuenta';
import ScrollToTop from '../global/ScrollToTop';


const Micuenta = () => {
    const [seccion, setSeccion] = useState("");
    const [contenido, setContenido] = useState("");

    const secciones = [
        {
            nombre: "Pedidos",
            contenido: <Pedidos />,
            icon: <OrderIcon />
        },
        {
            nombre: "Direcciones",
            contenido:<Direcciones />,
            icon: <AddressIcon />
        },
        {
            nombre: "Información",
            contenido: <DetallesDeCuenta />,
            icon: <InfoIcon />
        },
    ];

    const handleClick = (seccionSeleccionada) => {
        // Encuentra el objeto de sección correspondiente
        const seccionActual = secciones.find(
            (seccion) => seccion.nombre === seccionSeleccionada
        );

        // Actualiza la sección seleccionada y el contenido
        setSeccion(seccionActual.nombre);
        setContenido(seccionActual.contenido);
    };

    return (
        <div>
< ScrollToTop />
            <div className='titulo'>
            <h1 id='titulo'>Mi cuenta {seccion && seccion !== "Mi cuenta" && "/"} {seccion}</h1>
            </div>

            <div className='contenedor-padre'>
            <div className='container'>
                <div className='info-user'>

                    <div className='user'>
                        <AccountCircleIcon style={{ fontSize: "65px", color: "#808080a1" }} />
                        <p>User</p>
                        <p>#444</p>
                    </div>

                    <div className='opciones-cuenta'>
                        {secciones.map((seccion) => (
                            <button className='boton-secciones' key={seccion.nombre} onClick={() => handleClick(seccion.nombre)}> {seccion.icon} {seccion.nombre}</button>
                        ))},
                    </div>

                </div>
            </div>
            <div>{contenido}</div>

                
            </div>

           

           
        </div>
    )
}

export default Micuenta



