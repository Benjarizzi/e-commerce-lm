
import "./Footer.css";
import { Outlet, Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BotonWhatsapp from "../BotonWhatsapp/BotonWhatsapp";
import { Box, Grid } from "@mui/material";
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
                    <Grid container>
                        <Grid item xs={3}>
                            <Box>
                                <h3>AYUDA</h3>
                                <Link to="/medios-de-pago"><li>Medios de Pago</li></Link>
                                <Link to="/preguntas-frecuentes"><li>Preguntas Frecuentes</li></Link>
                                <Link to="/politica-de-devolucion"><li>Politica de Devolucion</li></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <h3>CATEGORIAS:</h3>
                                <Link><li>Bicicletas</li></Link>
                                <Link><li>Motos</li></Link>
                                <Link><li>Cascos</li></Link>
                                <Link><li>Equipamiento</li></Link>
                                <Link><li>Indumentaria</li></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={3}  >
                            <Box>
                                <Link to="/">
                                    <img src="../../../../luciano-logo-color-_1_.png" alt="LOGO" className="img-footer" />
                                </Link>

                                <Link to="/contacto"><li>Contacto</li></Link>
                                <Link to="/nosotros"><li>Nosotros</li></Link>
                                <Link to="/horarios"><li>Horarios</li></Link>
                                <Link to="/ubicacion"><li>Ubicacion</li></Link>

                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <div className="links-redes">
                                    <Link to="https://www.instagram.com/lucianomotos.cdg/"><InstagramIcon /></Link>
                                    <Link to="https://www.facebook.com/pages/category/motorcycles/Luciano-Motos-CDG-470665053697008/"><FacebookIcon /></Link>
                                    <BotonWhatsapp />

                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                        <div className="copyright">
                        <h4>Copyright 2023-</h4>
                        <p>Luciano Motos / </p>
                        <p>Todos los derechos reservados / </p>
                        <Link><p>Términos y condiciones</p></Link>
                    </div>
                        </Grid>
                    </Grid>


                </div>


            </div>

        </>
    )
}


export default Footer