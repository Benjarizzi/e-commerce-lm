import { Box, Button, Grid, Menu, MenuItem,  Fade } from "@mui/material"
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

                <Grid item xs={6} md={3} sm={3} >
                    <Box className="brand_logo">
                       <Link to="/" style={{alignItems:"center", display:"flex"}}><img src="http://localhost:3000/icons/luciano.png" alt="" /></Link>
                    </Box>
                </Grid>

                <Grid item xs={6} md={6} sm={6}>

                    <Box sx={{ display: { md: "none", xs: "contents", sm:"none" }}} className="menu-hamburguesa">

                        

                    </Box>


                    <Box  role="presentation" onClick={handleClick} sx={{ display: { xs:"none",  md:"contents" , sm:"contents" }  }}>
                        <ul className="nav">
                            <Link to="/bicicletas" className="nav-link"><li>Bicicletas</li></Link>
                            <Link to="/motos" className="nav-link"><li>Motos</li></Link>
                            <Link to="/cascos" className="nav-link"><li>Cascos</li></Link>
                            <Link to="/equipamiento" className="nav-link"><li>Equipamiento</li></Link>
                            <Link to="/indumentaria" className="nav-link"><li>Indumentaria</li></Link>
                        </ul> 
                    </Box>

                </Grid>

                <Grid item xs={3} md={3} sm={3}  sx={{ display: "flex", alignItems: "center",justifyContent:"center"}}>
                    <Box>
                        <ul className="nav">
                            <Link to="/registro"><li><PersonIcon style={{fontSize:"38px"}}/></li></Link>
                            <li><CartWidget/></li>
                        </ul>
                    </Box>
                    
                </Grid>
                <Box className="hamburger_container">
                    <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="hamburger_btn_container">
                            <span className="hamburger_btn"><MenuIcon/></span>
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
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><CartWidget /><span className="span-menu">Carrito</span></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>BICICLETAS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>MOTOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>CASCOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>EQUIPAMIENTO</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>INDUMENTARIA</h5></MenuItem></Link>

                        </Menu>
        
                    </Box>
            </Grid>
            
        </Box>

        <Outlet/>
        </>

    )
}

export default Navbar