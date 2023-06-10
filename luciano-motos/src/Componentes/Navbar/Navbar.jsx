import { Box, Button, Grid, Menu, MenuItem, Fade } from "@mui/material"
import { useRef } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import CartWidget from "../../Componentes/CartWidget/CartWidget"

import * as React from 'react';

import { Outlet, Link } from "react-router-dom"

const Navbar = ({ onClose }) => {

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
            <Box className="header">

                <Grid className="header_nav_container">

                    <Grid item xs={6} md={4} sm={4} >
                        <Box className="brand_logo">
                            <Link to="/" style={{ alignItems: "center", display: "flex" }}><img src="http://localhost:3000/icons/luciano.png" alt="" /></Link>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={4} sm={4} >



                        <Box role="presentation" onClick={handleClick} sx={{ display: { xs: "none", md: "contents", sm: "contents" } }}>
                            <div className="nav">
                                <Link to="/bicicletas" >Bicicletas</Link>
                                <Link to="/motos" >Motos</Link>
                                <Link to="/cascos" >Cascos</Link>
                                <Link to="/equipamiento" >Equipamiento</Link>
                                <Link to="/indumentaria" >Indumentaria</Link>
                            </div>
                        </Box>

                    </Grid>

                    <Grid item xs={3} md={4} sm={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box>
                            <div className="nav">
                                <Link to="/registro"><li><PersonIcon style={{ fontSize: "32px" }} /></li></Link>
                                <li style={{ listStyle: "none" }}><CartWidget /></li>
                            </div>
                        </Box>

                    </Grid>
                    <Box className="hamburger_container">
                        <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="hamburger_btn_container">
                            <span className="hamburger_btn"><MenuIcon /></span>
                        </Button>


                        <Menu id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade} className="menu-hamburguesa" sx={{ display: { md: "none" } }} >
                            <Link to="/registro"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><PersonIcon style={{ fontSize: "26px" }} /></MenuItem></Link>
                            <Link to="/carrito"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><CartWidget /></MenuItem></Link>
                            <Link to="/bicicletas"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><h5>BICICLETAS</h5></MenuItem></Link>
                            <Link to="/motos"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><h5>MOTOS</h5></MenuItem></Link>
                            <Link to="/cascos"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><h5>CASCOS</h5></MenuItem></Link>
                            <Link to="/equipamiento"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><h5>EQUIPAMIENTO</h5></MenuItem></Link>
                            <Link to="/indumentaria"><MenuItem onClick={handleClose} sx={{ color: "rgb(255, 0, 0)" }}><h5>INDUMENTARIA</h5></MenuItem></Link>

                        </Menu>




                    </Box>
                </Grid>

            </Box>

            <Outlet />
        </>

    )
}

export default Navbar