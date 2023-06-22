import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./PanelDeControl.css";
import ItemList from "../ItemList/ItemList"
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Box, Grid, Button } from "@mui/material";
import axios from 'axios';
const PanelDeControl = () => {

    const [inventory, setInventory] = useState({
        products: [],
        product_type: ''
      });
    const [boton1Visible, setBoton1Visible] = useState(false);
    const [botonEliminarVisible, setBotonEliminarVisible] = useState(false);
    const [busquedaVisible, setBusquedaVisible] = useState(false);
    const [botonModificarVisible, setBotonModificarVisible] = useState(false);
    const [contenidoBusquedaVisible, setContenidoBusquedaVisible] = useState(false);
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
    const toggleBusqueda = () => {
        setBusquedaVisible(!busquedaVisible);
    };

    const toggleContenidoBotonModificar = () => {
        setBotonModificarVisible(!botonModificarVisible);
        setBoton1Visible(false);
        setBotonEliminarVisible(false);
        setContenidoBusquedaVisible(false);
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

    const [currentInv,setCurrentInv] = useState("motorbikes");
    //API COMS

    //Get Actions
    const getInventory = (inv) => {
        console.log(inv)
        setCurrentInv(inv);
        const params = {};
        axios.post('http://localhost:8000/fetch/'+inv+'/',params)
        .then(response => {
          // Handle the response data here
          setInventory(prevInv => ({
            ...prevInv,
            products: response.data,  // Update the 'products' property
            product_type: inv
          }));
          console.log(inventory,response.data)
        })
        .catch(error => {
          // Handle any errors here
          console.warn(error);
        });
    }

    const getBrands= () => {
        const params = {brand_type:currentInv};
        axios.post('http://localhost:8000/fetch/brands/',params)
        .then(response => {
          // Handle the response data here
          
        })
        .catch(error => {
          // Handle any errors here
          console.warn(error);
        });
    }

    //Submit Actions
    const submitBrand = () => {
        axios.post('http://localhost:8000/submit/brand/',brandForm)
        .then(response => {
          // Handle the response data here
          if(response.status) {
            switchPanelForm();
          }
        })
        .catch(error => {
          // Handle any errors here
          console.warn(error);
        });
    }


    //By Default moto
    //getInventory("motorbikes");

    //Tabs

    const tabs = [{"label":"Inventario","value":"inventory"},{"label":"Marcas","value":"brands"},{"label":"Modelos","value":"models"}];

    const [activeTab, setActiveTab] = useState("inventory");

    const handleTabClick = (tab) => {
        setActiveTab(tab.value);
    };

    //Panels
    const [showPanel,setShowPanel] = useState(true);
    const [panelMode,setPanelMode] = useState("inventory");
    const [showForm,setShowForm] = useState(false);

    const switchPanelForm = () => {
        setShowPanel(!showPanel);
        setShowForm(!showForm);
    }

    //Forms
    const [brandForm,setBrandForm] = useState({});

    const handleBrandFormChange = (event) => {
        const { name, value } = event.target;
        setBrandForm((prevBrandForm) => ({
        ...prevBrandForm,
        [name]: value,
        brand_type: currentInv //Always get brand type for the current inventory
        }));
    }


    return (
        <div>
        {showPanel && (
            <div>
             <Box sx={{width: "-webkit-fill-available",position:"relative",top:"90px",height:"1000px",fontFamily:"Kanit"}}>
             <h>Panel de Control</h>
             <Grid item xs={12} md={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center",top:"50px" }}>
           <Box className="navigate_options_container">
 
             <div style={{display:"flex"}} >
               <Box className="navigate_item" onClick={() => getInventory("bikes")}>
                 <Link>
                   <PedalBikeIcon style={{ fontSize: "30px", color: "#000" }} />
                   <p>Bicicletas</p>
                 </Link>
               </Box>
               <Box className="navigate_item" onClick={() => getInventory("motorbikes")}>
                 <Link>
                   <TwoWheelerIcon style={{ fontSize: "30px", color: "#000" }} />
                   <p>Motos</p>
                 </Link>
               </Box>
               <Box className="navigate_item" onClick={() => getInventory("helmets")}>
                 <Link>
                   <SportsMotorsportsIcon style={{ fontSize: "30px", color: "#000" }} />
                   <p>Cascos</p>
                 </Link>
               </Box>
             </div>
 
             <div style={{display:"flex"}}>
               <Box className="navigate_item" onClick={() => getInventory("equipment")}>
                 <Link>
                   <BackpackIcon style={{ fontSize: "30px", color: "#000" }} />
                   <p>Equipamiento</p>
                 </Link>
               </Box>
               <Box className="navigate_item" onClick={() => getInventory("clothes")}>
                 <Link>
                   <CheckroomIcon style={{ fontSize: "30px", color: "#000" }} />
                   <p>Indumentaria</p>
                 </Link>
               </Box>
             </div>
 
           </Box>
         </Grid>
         <div className="tabs-buttons">
         {tabs.map((tab) => (
           <button
             key={tab.value}
             className={`tab-button ${activeTab === tab.value ? 'active' : ''}`}
             onClick={() => handleTabClick(tab)}
           >
             {tab.label}
           </button>
         ))}
       </div>
       <Box sx={{width:"75%",display:"flex",justifyContent:"flex-start",marginLeft:"auto",marginRight:"auto"}}>
       <input type="text" style={{width:"40%"}} placeholder='Buscar' />
       <Button sx={{backgroundColor:"#ab2f2f",color:"white",marginLeft:"auto"}} onClick={switchPanelForm}>+ Añadir unidad</Button>
       </Box>
       <div className="tabs-content">
         {/* Render content for the active tab */}
         {/* Example: */}
         {activeTab === 'inventory' && 
         
         <div>
         <Grid container spacing={2} sx={{width:"-webkit-fill-available",position:"absolute",top:"175px"}}>
       <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
         <h2>{inventory.product_type}</h2>
         
         </Grid>
         <Grid item xs={12} md={8}>
         <ItemList payload={inventory}/>
       </Grid>
         </Grid>
         </div>
         
         
         }
         {activeTab === 'brands' && <div>Content for Tab 2</div>}
         {activeTab === 'models' && <div>Content for Tab 3</div>}
         </div>

        </Box>
       </div>
        )}

        { showForm && (
            <div style={{position:"relative",top:"60px"}}>
                { activeTab === "inventory" && (
                    <div>
                        {currentInv === "motorbikes" &&
                        <div className='form_ui_container'>
                            <div>
                                <h2>Añadir moto</h2>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="brand">Ingrese la marca del producto</label>
                                    <input type="text" placeholder='Marca' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="brand">Ingrese el modelo del producto</label>
                                    <input type="text" placeholder='Modelo' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
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
                                    <p>color</p>
                                    <p>precio</p>
                                    <p>Ficha técnica:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>

                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}
                        </div>
                )}

                { activeTab === "brands" && (
                    <div>
                        <div className='form_ui_container'>
                            <div>
                                <h2>Añadir marca de moto</h2>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="brand">Ingrese la marca del producto</label>
                                    <input type="text" name="brand" placeholder='Marca' onChange={handleBrandFormChange} />
                                </div>
                                <button onClick={submitBrand}>Añadir marca</button>
                            </div>
                            </div>
                        </div>
                )}

                { activeTab === "models" && (
                    <div>
                        </div>
                )}

            </div>
        )}

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
                        <div className='form_ui_container'>
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
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
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
                                    <p>color</p>
                                    <p>precio</p>
                                    <p>Ficha técnica:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>

                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}

                    {contenidoBoton1Visible.motos &&
                        <div className='form_ui_container'>

                            <div >
                                <h2>Rellena el siguiente formulario para añadir una moto:</h2>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="Url">Ingrese la URL de la imagen tipo producto como en el siguiente ejemplo:<br />
                                        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8-JaVi0Y2Ha8wTwLLo6k7Gt24CV8z_A4BQ&usqp=CAU" target='_blank'>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8-JaVi0Y2Ha8wTwLLo6k7Gt24CV8z_A4BQ&usqp=CAU</a></label>
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
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
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
                                    <p>color</p>
                                    <p>precio</p>
                                    <p>Ficha técnica:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>

                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}

                    {contenidoBoton1Visible.cascos &&
                        <div className='form_ui_container'>

                            <div >
                                <h2>Rellena el siguiente formulario para añadir un casco:</h2>
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
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="color">Ingrese el talle del producto</label>
                                    <input type="text" placeholder='Talle' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="precio">Ingrese el precio del producto</label>
                                    <input type="text" placeholder='$' />
                                </div>
                                <div className="contenedor-input-panel">
                                    <label htmlFor="Ficha tecnica">Ingrese las especificaciónes del producto</label>
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
                                    <p>color</p>
                                    <p>Talle</p>
                                    <p>precio</p>
                                    <p>Especificaciónes:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>

                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}

                    {contenidoBoton1Visible.equipamiento &&
                        <div className='form_ui_container'>

                            <div >
                                <h2>Rellena el siguiente formulario para añadir equipamiento:</h2>
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
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
                                </div>

                                <div className='contenedor-input-panel'>
                                    <label htmlFor="precio">Ingrese el precio del producto</label>
                                    <input type="text" placeholder='$' />
                                </div>
                                <div className="contenedor-input-panel">
                                    <label htmlFor="Ficha tecnica">Ingrese las especificaciónes del producto</label>
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
                                    <p>color</p>
                                    <p>precio</p>
                                    <p>Especificaciónes:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>
                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}

                    {contenidoBoton1Visible.indumentaria &&
                        <div className='form_ui_container'>

                            <div >
                                <h2>Rellena el siguiente formulario para añadir indumentaria:</h2>
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
                                    <label htmlFor="color">Ingrese el color del producto</label>
                                    <input type="text" placeholder='Color' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="color">Ingrese el talle del producto</label>
                                    <input type="text" placeholder='Talle' />
                                </div>
                                <div className='contenedor-input-panel'>
                                    <label htmlFor="precio">Ingrese el precio del producto</label>
                                    <input type="text" placeholder='$' />
                                </div>
                                <div className="contenedor-input-panel">
                                    <label htmlFor="Ficha tecnica">Ingrese las especificaciónes del producto</label>
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
                                    <p>color</p>
                                    <p>Talle</p>
                                    <p>precio</p>
                                    <p>Especificaciónes:</p>
                                    <div className='ft'>
                                        <p>ejemplo 1:</p>
                                        <p>ejemplo 1</p>
                                    </div>
                                    <p>Cantidad</p>

                                    <div className='boton-confirmar1'>
                                        <button >Confirmar</button>
                                    </div>
                                </div>
                            )}

                        </div>}

                </div>
            )}


            {botonModificarVisible && (
                <div>
                    <div className='contenido-boton1'>

                        <p>Ingrese la marca que desea modificar</p>
                        <input type="text" placeholder="Marca" />
                        <button onClick={() => setContenidoBusquedaVisible(true)}>Buscar</button>
                    </div>
                    {contenidoBusquedaVisible && (
                        <div className="contenido-busqueda">
                            <h1>Productos cargados de la marca: </h1>
                            <div className='lista-productos'>
                                <p>producto 1</p>
                                <button>modificar</button>
                            </div>
                            <div className='lista-productos'>
                                <p>producto 2</p>
                                <button>modificar</button>
                            </div>
                        </div>
                    )}
                </div>

            )}

            {botonEliminarVisible && (
                <div>
                    <div className='contenido-boton1'>
                        <p>ingrese la marca del producto que desea eliminar</p>
                        <input type="text" placeholder='Marca' />
                        <button onClick={toggleBusqueda}>Buscar</button>

                    </div>
                    {busquedaVisible && (
                        <div className='contenido-busqueda'>
                            <h1>Productos cargados de la marca: </h1>
                            <div className='lista-productos'>
                                <p>producto 1</p>
                                <button className='boton-eliminar-producto'>Eliminar</button>
                            </div>
                            <div className='lista-productos'>
                                <p>producto 2</p>
                                <button className='boton-eliminar-producto'>Eliminar</button>
                            </div>
                        </div>
                    )}
                </div>


            )}

        </div>
    );
};

export default PanelDeControl;