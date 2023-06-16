import React, { useState } from 'react';
import "./PanelDeControl.css";

const PanelDeControl = () => {
    const [boton1Visible, setBoton1Visible] = useState(false);
    const [botonEliminarVisible, setBotonEliminarVisible] = useState(false);
    const [botonModificarVisible, setBotonModificarVisible] = useState(false);
    const [contenidoBoton1Visible, setContenidoBoton1Visible] = useState({
        bicicletas: false,
        motos: false,
        cascos: false,
        equipamiento: false,
        indumentaria: false
    });

    const toggleContenidoBoton1 = () => {
        setBoton1Visible(!boton1Visible);
        setBotonEliminarVisible(false);
        setBotonModificarVisible(false);
    };

    const toggleContenidoBotonEliminar = () => {
        setBotonEliminarVisible(!botonEliminarVisible);
        setBoton1Visible(false);
        setBotonModificarVisible(false);
    };

    const toggleContenidoBotonModificar = () => {
        setBotonModificarVisible(!botonModificarVisible);
        setBoton1Visible(false);
        setBotonEliminarVisible(false);
    };

    const toggleContenidoBoton1Adicional = (contenido) => {
        setContenidoBoton1Visible({
            ...contenidoBoton1Visible,
            [contenido]: !contenidoBoton1Visible[contenido]
        });
    };
    const [fichasTecnicas, setFichasTecnicas] = useState([]);

    const agregarFichaTecnica = () => {
        setFichasTecnicas([...fichasTecnicas, {}]);
    };

    const eliminarFichaTecnica = (index) => {
        const nuevasFichasTecnicas = [...fichasTecnicas];
        nuevasFichasTecnicas.splice(index, 1);
        setFichasTecnicas(nuevasFichasTecnicas);
    };
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const cerrarContenido = () => {
        setMostrarContenido(false);
      };

    return (
        <div >
            <div className='titulo-panel'>
                <img src="http://localhost:3000/icons/luciano1.png" alt="" />
                <h1>Panel de Control</h1>
                <img src="http://localhost:3000/icons/luciano1.png" alt="" />
            </div>
            <div className='acciones-panel'>
                <div>
                    <h2>Acciones:</h2>
                </div>
                <div className='botones-panel'>
                    <button onClick={toggleContenidoBoton1} style={{ backgroundColor: "green" }}>AÑADIR</button>
                </div>
                <div className='botones-panel'>
                    <button onClick={toggleContenidoBotonModificar} style={{ backgroundColor: "blue" }}>Modificar</button>
                </div>
                <div className='botones-panel'>
                    <button onClick={toggleContenidoBotonEliminar} style={{ backgroundColor: "red" }}>Eliminar</button>
                </div>
            </div>
            {boton1Visible && (
                <div>
                    <div className='contenido-boton1'>
                        <p>QUÉ DESEA AÑADIR?</p>
                        <div className='boton1-secciones'>
                            <button onClick={() => toggleContenidoBoton1Adicional("bicicletas")}>BICICLETAS</button>
                            <button onClick={() => toggleContenidoBoton1Adicional("motos")}>MOTOS</button>
                            <button onClick={() => toggleContenidoBoton1Adicional("cascos")}>CASCOS</button>
                            <button onClick={() => toggleContenidoBoton1Adicional("equipamiento")}>EQUIPAMIENTO</button>
                            <button onClick={() => toggleContenidoBoton1Adicional("indumentaria")}>INDUMENTARIA</button>
                        </div>
                    </div>
                    {contenidoBoton1Visible.bicicletas &&
                        <div className='formulario-bicicletas'>
                           
                            <div >
                            <h2>Rellena el siguiente formulario para añadir una bicicleta:</h2>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="Url">Ingrese la URL de la imagen tipo producto como en el siguiente ejemplo:<br />
                                        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8-JaVi0Y2Ha8wTwLLo6k7Gt24CV8z_A4BQ&usqp=CAU">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8-JaVi0Y2Ha8wTwLLo6k7Gt24CV8z_A4BQ&usqp=CAU</a></label>
                                    <input type="text" placeholder='URL' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="brand">Ingrese la marca del producto</label>
                                    <input type="text" placeholder='Marca' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="brand">Ingrese el modelo del producto</label>
                                    <input type="text" placeholder='Modelo' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="precio">Ingrese el precio del producto</label>
                                    <input type="text" placeholder='$' />
                                </div>
                                <div className="contenedor-input-panel">
                                    <label htmlFor="Ficha tecnica">Ingrese la ficha técnica del producto</label>
                                    {fichasTecnicas.map((ficha, index) => (
                                        <div className="ficha-tecnica-panel" key={index}>
                                            <input type="text" />
                                            <input type="text" />
                                            <button onClick={() => eliminarFichaTecnica(index)}>X</button>
                                        </div>
                                    ))}
                                    <button className='boton-agregar-div' onClick={agregarFichaTecnica}>Agregar slot</button>
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="stock">Ingrese el stock</label>
                                    <input type="text" placeholder='Cantidad en unidades' />
                                </div>
                                <div className='boton-confirmar'>
                                    <button onClick={() => setMostrarContenido(true)}>AÑADIR PRODUCTO</button>
                                    <button onClick={cerrarContenido}>MODIFICAR</button>
                                </div>
                               
                            </div>
                            {mostrarContenido && (
                                    <div className='contenido-adicional'>
                                        <img src="" alt="" />
                                        <h1>Nombre del producto</h1>
                                        <p>precio</p>
                                        <p>Ficha técnica</p>
                                        <button>Confirmar</button>

                                    </div>
                                )}

                        </div>}
                    {contenidoBoton1Visible.motos &&
                        <div>
                            Contenido adicional para MOTOS
                        </div>}
                    {contenidoBoton1Visible.cascos &&
                        <div>
                            Contenido adicional para CASCOS
                        </div>}
                    {contenidoBoton1Visible.equipamiento &&
                        <div>
                            Contenido adicional para EQUIPAMIENTO
                        </div>}
                    {contenidoBoton1Visible.indumentaria &&
                        <div>
                            Contenido adicional para INDUMENTARIA
                        </div>}
                </div>
            )}
            {botonEliminarVisible && (
                <div>
                    <div className='contenido-boton1'>
                        <h1>Eliminar</h1>
                        <input type="text" placeholder="Ingrese el contenido" />
                    </div>
                </div>
            )}
            {botonModificarVisible && (
                <div>
                    <div className='contenido-boton1'>
                        <h1>Modificar</h1>
                        <input type="text" placeholder="Ingrese el contenido" />
                        <button>Guardar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PanelDeControl;