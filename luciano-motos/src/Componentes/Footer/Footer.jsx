
import "./Footer.css";
import { Outlet,Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <>
            <Outlet />
            <div className="contenedor-footer">

                <div className="contenedor-suscripcion">

                    <div>
                        <h2>SUMATE A NUESTRAS NOVEDADES</h2>
                    </div>

                    <div className="formulario">
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Email" />
                        <button>SUSCRIBIRME</button>
                        <button className="arrepentimiento">CANCELAR SUSCRIPCIÓN</button>
                    </div>

                </div>


                <div className="contenedor-ayuda">
                    <ul>
                        <li className="li-ayuda">Ayuda:</li>


                        <Link to="/medios-de-pago"><li>Medios de Pago</li></Link>
                        <Link to="/preguntas-frecuentes"><li>Preguntas Frecuentes</li></Link>
                        <Link to="/politica-de-devolucion"><li>Politica de Devolucion</li></Link>
                        <Link to="/contacto"><li>Contacto</li></Link>



                        <Link to="/nosotros"><li>Nosotros</li></Link>
                        <Link to="/horarios"><li>Horarios</li></Link>
                        <Link to="/ubicacion"><li>Ubicacion</li></Link>

                    </ul>
                </div>
                <div className="contenedor-info">

                    <div className="img-footer">
                        <img src="" alt="LOGO" className="img-footer" />
                    </div>

                    <div className="links-redes">
                        <Link to="/instagramLM"><InstagramIcon /></Link>
                        <Link to="/facebookLM"><FacebookIcon /></Link>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Footer