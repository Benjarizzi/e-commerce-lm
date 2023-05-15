import React from 'react'
import "./ItemDetail.css";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import {MdOutlineWhatsapp} from "react-icons/md"
const ItemDetail = () => {
    return (
        <div>
            <div className='contenedor-detail'>
                <Grid container>

                    <Grid item xs={12}>

                        <div className='contenedor-arriba'>

                            <div >
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                            </div>
                            <div className='caract-principales'>
                                <h2>honda xr 150l</h2>
                                <p>2023-0km</p>
                                <h3>$1.000.000</h3>
                                <Link to="https://api.whatsapp.com/send?phone=123456789" target='_blank'><button><div className='boton-consultar'><MdOutlineWhatsapp/> <p>Consultar</p></div></button></Link>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='contenedor-abajo'>

                        <div className='ficha-tecnica'>
                                <h3>ficha técnica</h3>
                                <p>Motor:	                Monocilíndrico, 4 tiempos, 2 válvulas, OHC y refrigerado por aire</p>
                                <p>Cilindrada:	            149.15 cm3</p>
                                <p>Relación de compresión:	9.5 : 1</p>
                                <p>Alimentación:	        Carburador</p>
                                <p>Encendido:	            DC-CDI (Ignición por descarga capacitiva) y avance electrónico</p>
                                <p>Arranque:	            Eléctrico / Patada</p>
                                <p>Transmisión: 	        5 velocidades</p>
                                <p>Suspensión delantera:    Horquilla telescópica / 160 mm</p>
                                <p> Suspensión trasera: 	Brazo oscilante / 152 mm con monoamortiguador</p>
                                <p> Freno delantero:	    A disco hidráulico perforado / 240 mm</p>
                                <p>Freno trasero:	        A tambor / 110 mm</p>
                                <p>Neumático delantero: 	90/90-19 M/C 52P</p>
                                <p>Neumático trasero:   	110/90-17 M/C 60P</p>
                                <p>Dimensiones:         	2.091 mm largo x 811 mm ancho x 1.125 mm alto</p>
                                <p>Distancia entre ejes:   	1.358 mm</p>
                                <p>Altura del asiento:  	825 mm</p>
                                <p>Capacidad compustible:	12 litros (Reserva 3.5 litros).</p>
                                <p>Peso en seco:        	119 kg</p>
                            </div>
                            
                            <div className='simulador-credito'>
                                <h3>Simulá tu crédito online</h3>
                                <p>Completás tus datos y los del vehículo.</p>
                                <p>Ingresás tu pago inicial y la cant de cuotas de tu preferencia.</p>
                                <p>Obtenés una respuesta inmediata para saber si tu crédito está aprobado.</p>
                                <p>trabajamos con:  </p>
                                <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/238px-Banco_Santander_Logotipo.svg.png" alt="" /></p>
                                <a href="https://autoloans.santanderautos.com.ar/portalsanriopublico/#/home/identification" target='_blank'><button>Simular Crédito</button></a>
                            </div>
                           
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default ItemDetail