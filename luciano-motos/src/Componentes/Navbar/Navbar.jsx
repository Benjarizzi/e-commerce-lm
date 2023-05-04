import { Box, Button, Grid, Menu, MenuItem, Link, Fade } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import * as React from 'react';
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
<<<<<<< Updated upstream

        <Box className="container">
=======
        <>
        <Box className="header">
>>>>>>> Stashed changes

            <Grid className="header_nav_container">

<<<<<<< Updated upstream
                <Grid item xs={6} md={3} sm={3} className="logo-nav">
                    <Box sx={{justifyContent:"end"}}>
                        <img src="" alt="LOGO" />
=======
                <Grid item xs={6} md={3} sm={3} >
                    <Box className="brand_logo">
                       
>>>>>>> Stashed changes
                    </Box>
                </Grid>

                <Grid item xs={6} md={6} sm={6}>

                    <Box sx={{ display: { md: "none", xs: "contents", sm:"none" }}} className="menu-hamburguesa">

<<<<<<< Updated upstream
                        <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="boton-hamburguesa">
                            <h4 className="boton-hamburguesa">Menú</h4>
=======
                        

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
                            <Link to="/login"><li><PersonIcon/></li></Link>
                            <Link to="/carrito"><li><CartWidget/></li></Link>
                        </ul>
                    </Box>
                    
                </Grid>
                <Box className="hamburger_container">
                    <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="hamburger_btn_container">
                            <span className="hamburger_btn"><MenuIcon/></span>
>>>>>>> Stashed changes
                        </Button>

                        <Menu id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}className="menu-hamburguesa" >
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><PersonIcon/><span className="span-menu">Log In</span></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><ShoppingCartIcon/><span className="span-menu">Carrito</span></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>BICICLETAS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>MOTOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>CASCOS</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>EQUIPAMIENTO</h5></MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose} sx={{color:"rgb(255, 0, 0)" }}><h5>INDUMENTARIA</h5></MenuItem></Link>

                        </Menu>
        
                    </Box>
<<<<<<< Updated upstream


                    <Box  role="presentation" onClick={handleClick} sx={{ display: { xs:"none",  md:"contents" , sm:"contents" }  }}>
                        <ul>
                            <li><a href="">Bicicletas</a></li>
                            <li><a href="">Motos</a></li>
                            <li><a href="">Cascos</a></li>
                            <li><a href="" >Equipamiento</a></li>
                            <li><a href="">Indumentaria</a></li>
                        </ul>
                    </Box>

                </Grid>

                <Grid item xs={3} md={3} sm={3} className="nav-derecha">
                    <Box sx={{ display: { xs:"none" ,sm:"contents"} }}>
                        <ul>
                            <li><a href=""><PersonIcon/></a></li>
                            <li> <a href=""><ShoppingCartIcon/></a></li>
                        </ul>
                    </Box>
                </Grid>

=======
>>>>>>> Stashed changes
            </Grid>
        </Box>

    )
}

export default Navbar