import React from 'react'
import "./VerCarrito.css"
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
import ScrollToTop from '../global/ScrollToTop';
const VerCarrito = () => {
    return (
        <div>
            <ScrollToTop />
            <div className='titulo'>
                    <h1>Carrito de compras</h1>
                </div>
            <div className='contenedor-ver-carrito' style={{ display: "-webkit-flex", justifyContent: "space-between" }}>
            
                <div className='contenedor-izquierda'>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "5px", fontSize: "15px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones' id='opciones-precio'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones' id='opciones-cantidad'>
                                <p>cantidad</p>
                                <div className='contador-detalle'>
                                    <button>-</button>
                                    <p>2</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className='opciones' id='opciones-subtotal'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                            <button className='boton-eliminar'>x</button>
                        </div>

                    </div>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "5px", fontSize: "15px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones' id='opciones-precio'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones' id='opciones-cantidad'>
                                <p>cantidad</p>
                                <div className='contador-detalle'>
                                    <button>-</button>
                                    <p>2</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className='opciones' id='opciones-subtotal'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                            <button className='boton-eliminar'>x</button>
                        </div>
                    </div>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "5px", fontSize: "15px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones' id='opciones-precio'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones' id='opciones-cantidad'>
                                <p>cantidad</p>
                                <div className='contador-detalle'>
                                    <button>-</button>
                                    <p>2</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className='opciones' id='opciones-subtotal'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                            <button className='boton-eliminar'>x</button>
                        </div>
                    </div>

                </div>

                <div className='contenedor-derecha'>

                    <div className='contenedor-cupon'>
                        <div className='descuento'>
                            <DiscountIcon />
                            <h1>Cupón de descuento</h1>
                        </div>
                        <div><input type="text" placeholder='Código del cupón' /></div>
                        <div><button>Aplicar Descuento</button></div>
                    </div>

                    <div className='contenedor-cupon'>
                        <div className='titulo-total' >
                            <h1>Total del carrito</h1>
                        </div>
                        <div className='subt-total'>
                            <div className='subtotal'>
                                <p>Subtotal</p>
                                <p>$1000</p>
                            </div>
                            <div className='total'>
                                <p>Total</p>
                                <p>$1000</p>
                            </div>
                        </div>
                        <Link to="/pagos" style={{ textDecoration: "none" }}><div className='boton-finalizar'><button>Finalizar compra</button></div></Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default VerCarrito