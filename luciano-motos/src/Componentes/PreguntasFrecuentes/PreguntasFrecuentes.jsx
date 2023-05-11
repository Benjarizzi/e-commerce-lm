import React from 'react'
import "./PreguntasFrecuentes.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const PreguntasFrecuentes = () => {
    return (
        <div>
            <div className='contenedor-pf'>
            <dl class="twitter-conversation">
            <h1>Preguntas Frecuentes</h1>
                <dt class="tweet">
                     <AccountCircleIcon className="tweet-image" />
                        <span class="tweet-username">@usuario1</span>
                        
                </dt>
                <dd class="tweet">
                    ¿Cuáles son los modelos de motos que tienen en su concesionaria?
                    <div class="tweet-actions">
                        <button class="reply">Responder</button>
                        <button class="like">1 Me gusta</button>
                    </div>
                    <dd class="tweet">
                        Tenemos una amplia variedad de modelos, desde scooters hasta motocross.
                        <div class="tweet-actions">
                            <button class="reply">Responder</button>
                            <button class="like">2 Me gusta</button>
                        </div>
                        <dd class="tweet">
                            Sí, estoy buscando una moto deportiva de alta cilindrada. ¿Tienen algo así?
                            <div class="tweet-actions">
                                <button class="reply">Responder</button>
                                <button class="like">1 Me gusta</button>
                            </div>
                            <dd class="tweet">
                                ¡Por supuesto! Tenemos varias opciones, desde la Yamaha R1 hasta la Kawasaki Ninja ZX-10R. ¿Te gustaría verlas en persona?
                                <div class="tweet-actions">
                                    <button class="reply">Responder</button>
                                    <button class="like">3 Me gusta</button>
                                </div>
                                <dd class="tweet response">
                                    ¡Gracias por la información! Definitivamente quiero verlas en persona. ¿Cuáles son sus horas de atención?
                                    <div class="tweet-actions">
                                        <button class="reply">Responder</button>
                                        <button class="like">1 Me gusta</button>
                                    </div>
                                </dd>
                            </dd>
                        </dd>
                    </dd>
                </dd>
            </dl>

            </div>
        </div>
    )
}

export default PreguntasFrecuentes