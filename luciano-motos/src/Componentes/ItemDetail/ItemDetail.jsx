import React from 'react'
import "./ItemDetail.css";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md"
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
                                <div style={{ paddingTop: "60px" }}>
                                    <div className='agregar-al-carrito'>
                                        <div className='contador'>
                                            <button>+</button>
                                            <p>2</p>
                                            <button>-</button>
                                        </div>
                                        <div className='boton-agregar'><button>Agregar al Carrito</button></div>
                                    </div>

                                </div>
                                <div className='boton-consultar'><Link to="https://api.whatsapp.com/send?phone=123456789" target='_blank' style={{ textDecoration: "none" }}><button><MdOutlineWhatsapp style={{ paddingTop: "9px" }} /> <p>Consultar</p></button></Link></div>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='contenedor-abajo'>

                            <div>
                                <div className='ficha-tecnica'>
                                    <div className='f-t-derecha'>
                                        <h3>ficha técnica:</h3>
                                        <p>Motor:	                </p>
                                        <p>Cilindrada:	            </p>
                                        <p>Relación de compresión:</p>
                                        <p>Alimentación:	        </p>
                                        <p>Encendido:	            </p>
                                        <p>Arranque:	            </p>
                                        <p>Transmisión: 	        </p>
                                        <p>Suspensión delantera:     </p>
                                        <p> Suspensión trasera: 	</p>
                                        <p> Freno delantero:	    </p>
                                        <p>Freno trasero:	         </p>
                                        <p>Neumático delantero: 	</p>
                                        <p>Neumático trasero:   	</p>
                                        <p>Dimensiones:         	</p>
                                        <p>Distancia entre ejes:   	</p>
                                        <p>Altura del asiento: </p>
                                        <p>Capacidad compustible </p>
                                        <p>Peso en seco:       </p>
                                    </div>
                                    <div className='f-t-izquierda'>
                                        <h3></h3>
                                        <p>Monocilíndrico, 4 tiempos, 2 válvulas, OHC y refrigerado por aire</p>
                                        <p>149.15 cm3</p>
                                        <p>9.5 : 1</p>
                                        <p>Carburador</p>
                                        <p>DC-CDI (Ignición por descarga capacitiva) y avance electrónico</p>
                                        <p> Eléctrico / Patada</p>
                                        <p>5 velocidades</p>
                                        <p>Horquilla telescópica / 160 mm</p>
                                        <p> Brazo oscilante / 152 mm con monoamortiguador</p>
                                        <p> A disco hidráulico perforado / 240 mm</p>
                                        <p> A tambor / 110 mm</p>
                                        <p>90/90-19 M/C 52P</p>
                                        <p>110/90-17 M/C 60P</p>
                                        <p>2.091 mm largo x 811 mm ancho x 1.125 mm alto</p>
                                        <p>	1.358 mm</p>
                                        <p>825 mm</p>
                                        <p>12 litros (Reserva 3.5 litros).</p>
                                        <p>119 kg</p>
                                    </div>
                                </div>
                            </div>


                            <div className='simulador-credito'>
                                <h3>Simulá tu crédito online</h3>
                                <div className='info-credito'>
                                    <p>Completás tus datos y los del vehículo.</p>
                                    <p>Ingresás tu pago inicial y la cantidad de cuotas de tu preferencia.</p>
                                    <p>Obtenés una respuesta inmediata para saber si tu crédito está aprobado.</p>
                                    <p>trabajamos con:  </p>
                                </div>
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