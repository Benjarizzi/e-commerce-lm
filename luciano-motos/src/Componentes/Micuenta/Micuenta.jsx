import React, { useState } from 'react'
import "./Micuenta.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Pedidos from './Pedidos';
import Direcciones from './Direcciones';
import DetallesDeCuenta from './DetallesDeCuenta';


const Micuenta = () => {
    const [seccion, setSeccion] = useState("");
    const [contenido, setContenido] = useState("");

    const secciones = [
        {
            nombre: "Pedidos",
            contenido: <Pedidos />,
        },
        {
            nombre: "Direcciones",
            contenido:<Direcciones />,
        },
        {
            nombre: "Información",
            contenido: <DetallesDeCuenta />,
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

            <div className='title'>
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
                            <button className='boton-secciones' key={seccion.nombre} onClick={() => handleClick(seccion.nombre)}>{seccion.nombre}</button>
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



