import { Box, Button, Grid, Menu, MenuItem,  Fade } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import * as React from 'react';
import {Outlet,Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //Box es como un div
    //Grid es para acomodar los items en grillas
    return (
        <>
        <Box className="container">

            <Grid className="contenedor-nav" container>

                <Grid item xs={6} md={3} sm={3} className="logo-nav">
                    <Box sx={{justifyContent:"end"}}>
                        <Link to="/"><img src="" alt="LOGO" /></Link>
                    </Box>
                </Grid>

                <Grid item xs={6} md={6} sm={6} className="nav-izquierda">

                    <Box sx={{ display: { md: "none", xs: "contents", sm:"none" }}} className="menu-hamburguesa">

                        <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="boton-hamburguesa">
                            <h4 className="boton-hamburguesa"><MenuIcon/></h4>
                        </Button>

                        <Menu id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}className="menu-hamburguesa" sx={{display:{md:"none"}}} >
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><PersonIcon/><span className="span-menu">Log In</span></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><ShoppingCartIcon/><span className="span-menu">Carrito</span></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>BICICLETAS</h5></MenuItem></Link>
                            <Link to="/motos"><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>MOTOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>CASCOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>EQUIPAMIENTO</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>INDUMENTARIA</h5></MenuItem></Link>

                        </Menu>

                    </Box>


                    <Box  role="presentation" onClick={handleClick} sx={{ display: { xs:"none",  md:"contents" , sm:"contents" }  }}>
                        <ul>
                            <Link to="/bicicletas"><li>Bicicletas</li></Link>
                            <Link to="/motos"><li>Motos</li></Link>
                            <Link to="/cascos"><li>Cascos</li></Link>
                            <Link to="/equipamiento"><li>Equipamiento</li></Link>
                            <Link to="/indumentaria"><li>Indumentaria</li></Link>
                        </ul>
                    </Box>

                </Grid>

                <Grid item xs={3} md={3} sm={3} className="nav-derecha">
                    <Box sx={{ display: { xs:"none" ,sm:"contents"} }}>
                        <ul>
                            <Link to="/login"><li><PersonIcon/></li></Link>
                            <Link to="/carrito"><li><CartWidget/></li></Link>
                        </ul>
                    </Box>
                </Grid>

            </Grid>
        </Box>

        <Outlet/>
        </>

    )
}

export default Navbar