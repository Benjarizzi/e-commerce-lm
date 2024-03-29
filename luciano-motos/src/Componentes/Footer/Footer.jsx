
import "./Footer.css";
import "../global/fonts.css";
import { Outlet, Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BotonWhatsapp from "../BotonWhatsapp/BotonWhatsapp";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Footer = () => {


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <Outlet />
            <div className="contenedor-footer">

                <div style={{ paddingLeft: "20px", paddingTop:"15px" }} className="prueba">
                    <button onClick={handleScrollToTop} className="boton-volver-arriba"><KeyboardArrowUpIcon style={{ fontSize: "2.2rem" }} /></button>
                </div>

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
                    <Grid container sx={{ alignItems: "flex-start", fontFamily: "Kanit" }}>
                        <Grid item xs={12} sm={6} md={4} className="contenedores">
                            <Box>
                                <h3>AYUDA</h3>
                                <Link to="/comocomprar"><li>Cómo comprar ?</li></Link>
                                <Link to="/mediosdepago"><li>Medios de Pago</li></Link>
                                <Link to="/preguntasfrecuentes"><li>Preguntas Frecuentes</li></Link>
                                <Link to="/politica-de-devolucion"><li>Política de Devolución</li></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="contenedores">
                            <Box>
                                <h3>CATEGORIAS</h3>
                                <Link><li>Bicicletas</li></Link>
                                <Link><li>Motos</li></Link>
                                <Link><li>Cascos</li></Link>
                                <Link><li>Equipamiento</li></Link>
                                <Link><li>Indumentaria</li></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="contenedores">
                            <Box>
                                <h3>SOBRE NOSOTROS</h3>
                                <Link to="/nosotros"><li>Nosotros</li></Link>



                                <Box className="ubi-footer">
                                    <LocalPhoneIcon style={{ paddingBottom: "3px", }} />
                                    <Link to="https://wa.me/5493471529986/?text=Hola!, me gustaría consultar sobre" target="_blank"><li>+54 9 3471529986</li></Link>
                                </Box>

                                <Box className="ubi-footer">
                                    <PlaceIcon style={{ paddingBottom: "3px" }} />
                                    <Link to="/ubicacion"><li>Ubicación </li></Link>
                                </Box>

                                <Box className="ubi-footer" >
                                    <CalendarMonthIcon />
                                    <li style={{ color: "white" }}> Lunes-Sábado:  08:30-12:30 & 16:00-20:00 hs</li>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Box className="links-redes" sx={{ alignItems: "center" }}>
                                    <Link to="https://www.instagram.com/lucianomotos.cdg/" target="_blank" ><InstagramIcon style={{ fontSize: "30px" }} className="redes-sociales" /></Link>
                                    <Link to="https://www.facebook.com/pages/category/motorcycles/Luciano-Motos-CDG-470665053697008/" target="_blank"><FacebookIcon style={{ fontSize: "30px" }} className="redes-sociales" /></Link>
                                    <Link to="mailto:lucianomotos1@hotmail.com" target="_blank"><EmailIcon style={{ fontSize: "30px" }} className="redes-sociales" /></Link>
                                    <Link to="https://wa.me/5493471522202/?text=Hola!, me interesa comprar una moto" className="whatsapp-button" style={{ fontSize: "24px" }} target="_blank"><FontAwesomeIcon icon={faWhatsapp} color="white" /></Link>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </div>
                <Grid item xs={12} sx={{ backgroundColor: "#000000af" }}>
                    <div className="copyright">
                        <h4>Copyright 2023</h4>
                        <h4>Luciano Motos</h4>
                        <p>Todos los derechos reservados</p>
                        <Link to="terminosycondiciones"><p>Términos y condiciones</p></Link>
                    </div>
                </Grid>

            </div>

        </>
    )
}


export default Footer