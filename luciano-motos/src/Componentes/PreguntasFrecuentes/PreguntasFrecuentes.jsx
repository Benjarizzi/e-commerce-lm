import React from 'react'
import "./PreguntasFrecuentes.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScrollToTop from '../global/ScrollToTop';
import { Link } from 'react-router-dom';
const PreguntasFrecuentes = () => {
    return (
        <div>
            <div className='contenedor-pf'>
            < ScrollToTop />

                <dl class="twitter-conversation">
                    <div className='titulo'>
                        <h1>Preguntas frecuentes</h1>
                    </div>
                    <div className='contenedor-conversacion'>
                        <dt class="tweet">
                            <AccountCircleIcon className="tweet-image" />
                            <span class="tweet-username">@usuario1</span>

                        </dt>
                        <dd class="tweet">
                            ¿Tienen servicio técnico?
                            <div class="tweet-actions">
                                <button class="reply">Responder</button>
                                <button class="like">1 Me gusta</button>
                            </div>
                            <dd class="tweet">
                                Si, contamos con nuestro propio servicio técnico.
                                <div class="tweet-actions">
                                    <button class="reply">Responder</button>
                                    <button class="like">2 Me gusta</button>
                                </div>
                                <dd class="tweet">
                                    Okey, entonces podría hacerle el service completo a mi moto?
                                    <div class="tweet-actions">
                                        <button class="reply">Responder</button>
                                        <button class="like">1 Me gusta</button>
                                    </div>
                                    <dd class="tweet">
                                        ¡Por supuesto! Nos encargamos de resolver cualquier problema en tu moto.
                                        <div class="tweet-actions">
                                            <button class="reply">Responder</button>
                                            <button class="like">3 Me gusta</button>
                                        </div>
                                        <dd class="tweet response">
                                            ¡Gracias por la información!
                                            <div class="tweet-actions">
                                                <button class="reply">Responder</button>
                                                <button class="like">1 Me gusta</button>
                                            </div>
                                        </dd>
                                    </dd>
                                </dd>
                            </dd>
                        </dd>

                    </div>

                </dl>

                <dl class="twitter-conversation">
                    
                    <div className='contenedor-conversacion'>
                        <dt class="tweet">
                            <AccountCircleIcon className="tweet-image" />
                            <span class="tweet-username">@usuario1</span>

                        </dt>
                        <dd class="tweet">
                            ¿Qué garantía tienen los productos?
                            <div class="tweet-actions">
                                <button class="reply">Responder</button>
                                <button class="like">1 Me gusta</button>
                            </div>
                            <dd class="tweet">
                                Todos los productos tienen hasta 5 meses de garantía de fábrica.
                                <div class="tweet-actions">
                                    <button class="reply">Responder</button>
                                    <button class="like">2 Me gusta</button>
                                </div>
                                <dd class="tweet">
                                   Okey, gracias!.
                                    <div class="tweet-actions">
                                        <button class="reply">Responder</button>
                                        <button class="like">1 Me gusta</button>
                                    </div>
                                </dd>
                            </dd>
                        </dd>

                    </div>

                </dl>

                <dl class="twitter-conversation">
                   
                    <div className='contenedor-conversacion'>
                        <dt class="tweet">
                            <AccountCircleIcon className="tweet-image" />
                            <span class="tweet-username">@usuario1</span>

                        </dt>
                        <dd class="tweet">
                            ¿Qúe tipo de financiación tienen?
                            <div class="tweet-actions">
                                <button class="reply">Responder</button>
                                <button class="like">1 Me gusta</button>
                            </div>
                            <dd class="tweet">
                                En lo que es motos y bicicletas,<br/>
                                Contamos con la posibilidad de que hagas un credito prendario en el banco Santander Río en hasta 60 cuotas.<br />
                                Tambíen contamos con financiación DNI de 9 hasta 36 cuotas.
                                
                                <div class="tweet-actions">
                                    <button class="reply">Responder</button>
                                    <button class="like">2 Me gusta</button>
                                </div>
                                <dd class="tweet">
                                    Genial, y si quisiera comprar otro producto?
                                    <div class="tweet-actions">
                                        <button class="reply">Responder</button>
                                        <button class="like">1 Me gusta</button>
                                    </div>
                                    <dd class="tweet">
                                        Para los demas productos AHORA 12/18/24 cuotas.<br/>
                                        Hacemos descuentos por pago en efectivo.
                                        <div class="tweet-actions">
                                            <button class="reply">Responder</button>
                                            <button class="like">3 Me gusta</button>
                                        </div>
                                        <dd class="tweet response">
                                            ¡Gracias!
                                            <div class="tweet-actions">
                                                <button class="reply">Responder</button>
                                                <button class="like">1 Me gusta</button>
                                            </div>
                                        </dd>
                                    </dd>
                                </dd>
                            </dd>
                        </dd>

                    </div>

                </dl>

                <dl class="twitter-conversation">
                   
                   <div className='contenedor-conversacion'>
                       <dt class="tweet">
                           <AccountCircleIcon className="tweet-image" />
                           <span class="tweet-username">@usuario1</span>

                       </dt>
                       <dd class="tweet">
                           ¿La cuota es fija?
                           <div class="tweet-actions">
                               <button class="reply">Responder</button>
                               <button class="like">1 Me gusta</button>
                           </div>
                           <dd class="tweet">
                              Si, las cuotas son fijas en su totalidad.
                               <div class="tweet-actions">
                                   <button class="reply">Responder</button>
                                   <button class="like">2 Me gusta</button>
                               </div>
                               <dd class="tweet">
                                  ¿Cómo puedo ver de cuánto me quedaría una cuota de una moto o una bicicleta con el crédito prendario?
                                   <div class="tweet-actions">
                                       <button class="reply">Responder</button>
                                       <button class="like">1 Me gusta</button>
                                   </div>
                                   <dd class="tweet">
                                      Poder simular un préstamo clickeando en este <Link to="https://www.santander.com.ar/personas/prendarios/motos" target='_blank'>link</Link>
                                       <div class="tweet-actions">
                                           <button class="reply">Responder</button>
                                           <button class="like">3 Me gusta</button>
                                       </div>
                                       <dd class="tweet response">
                                           ¡Genial!
                                           <div class="tweet-actions">
                                               <button class="reply">Responder</button>
                                               <button class="like">1 Me gusta</button>
                                           </div>
                                       </dd>
                                   </dd>
                               </dd>
                           </dd>
                       </dd>

                   </div>

               </dl>

               <dl class="twitter-conversation">
                   
                   <div className='contenedor-conversacion'>
                       <dt class="tweet">
                           <AccountCircleIcon className="tweet-image" />
                           <span class="tweet-username">@usuario1</span>

                       </dt>
                       <dd class="tweet">
                           ¿Se puede incluir accesorios junto al crédito de la moto?
                           <div class="tweet-actions">
                               <button class="reply">Responder</button>
                               <button class="like">1 Me gusta</button>
                           </div>
                           <dd class="tweet">
                              Claro, usted puede inclur los accesorios que desee a la cuota de su moto!.
                               <div class="tweet-actions">
                                   <button class="reply">Responder</button>
                                   <button class="like">2 Me gusta</button>
                               </div>
                               <dd class="tweet">
                                       <dd class="tweet response">
                                           ¡Excelente!
                                           <div class="tweet-actions">
                                               <button class="reply">Responder</button>
                                               <button class="like">1 Me gusta</button>
                                           </div>
                                       </dd>
                               </dd>
                           </dd>
                       </dd>

                   </div>

               </dl>

               <dl class="twitter-conversation">
                    
                    <div className='contenedor-conversacion'>
                        <dt class="tweet">
                            <AccountCircleIcon className="tweet-image" />
                            <span class="tweet-username">@usuario1</span>

                        </dt>
                        <dd class="tweet">
                            ¿Tienen entrega inmediata?
                            <div class="tweet-actions">
                                <button class="reply">Responder</button>
                                <button class="like">1 Me gusta</button>
                            </div>
                            <dd class="tweet">
                               Para ver el tiempo de espera de un producto le recomendamos consultar con el vendedor si disponemos en stock de ese producto.
                                <div class="tweet-actions">
                                    <button class="reply">Responder</button>
                                    <button class="like">2 Me gusta</button>
                                </div>
                                <dd class="tweet">
                                  ¡Perfecto!
                                    <div class="tweet-actions">
                                        <button class="reply">Responder</button>
                                        <button class="like">1 Me gusta</button>
                                    </div>
                                </dd>
                            </dd>
                        </dd>

                    </div>

                </dl>


            </div>
        </div>
    )
}

export default PreguntasFrecuentes