import React from 'react'
import "./VerCarrito.css"
const VerCarrito = () => {
    return (
        <div>
            <div className='contenedor-ver-carrito' style={{ display: "-webkit-flex", justifyContent: "space-between" }}>

                <div className='contenedor-izquierda'>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "10px", fontSize: "30px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones'>
                                <p>cantidad</p>
                                <p><button>sumar/restar</button></p>
                            </div>
                            <div className='opciones'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                        </div>
                        <button className='boton-eliminar'>x</button>
                    </div>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "10px", fontSize: "30px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones'>
                                <p>cantidad</p>
                                <p><button>sumar/restar</button></p>
                            </div>
                            <div className='opciones'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                        </div>
                        <button className='boton-eliminar'>x</button>
                    </div>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "10px", fontSize: "30px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones'>
                                <p>cantidad</p>
                                <p><button>sumar/restar</button></p>
                            </div>
                            <div className='opciones'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                        </div>
                        <button className='boton-eliminar'>x</button>
                    </div>

                    <div className='producto'>
                        <div className='img-descr'>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                                <p style={{ paddingLeft: "10px", fontSize: "30px" }}>Honda xr 150L la mejor de todass</p>
                            </div>

                        </div>
                        <div className='p-c-s'>
                            <div className='opciones'>
                                <p>precio</p>
                                <p>$10.000</p>
                            </div>
                            <div className='opciones'>
                                <p>cantidad</p>
                                <p><button>sumar/restar</button></p>
                            </div>
                            <div className='opciones'>
                                <p>subtotal</p>
                                <p>$10.000</p>
                            </div>
                        </div>
                        <button className='boton-eliminar'>x</button>
                    </div>
                </div>

                <div className='contenedor-derecha'>

                    <div className='contenedor-cupon'>
                        <h1>Cupón</h1>
                        <div><input type="text" /></div>
                        <div><button>Aplicar Descuento</button></div>
                    </div>

                    <div>
                        <h1>Total del carrito</h1>
                        <div>
                            <p>subtotal</p>
                            <p>$1000</p>
                        </div>
                        <div>
                            <p>TOTAL</p>
                            <p>$1000</p>
                        </div>
                        <button>Finalizar compra</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default VerCarrito