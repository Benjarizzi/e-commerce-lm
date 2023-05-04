
import "./Footer.css";
import { Outlet,Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BotonWhatsapp from "../BotonWhatsapp/BotonWhatsapp";
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
                       <Link to="/">
                       <img src="../../../../luciano-logo-color-_1_.png" alt="LOGO" />
                       </Link> 
                    </div>

                    <div className="links-redes">
                        <Link to="https://www.instagram.com/lucianomotos.cdg/"><InstagramIcon /></Link>
                        <Link to="https://www.facebook.com/pages/category/motorcycles/Luciano-Motos-CDG-470665053697008/"><FacebookIcon /></Link>
                        <BotonWhatsapp/>
       
                    </div>
                </div>

            </div>

        </>
    )
}


export default Footer