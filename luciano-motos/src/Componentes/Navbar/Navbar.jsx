import { Box, Button, Grid, Menu, MenuItem, Link, Fade } from "@mui/material"
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

        <Box className="container">

            <Grid className="contenedor-nav" container>

                <Grid item xs={6} md={3} sm={3} className="logo-nav">
                    <Box sx={{justifyContent:"end"}}>
                        <img src="" alt="LOGO" />
                    </Box>
                </Grid>

                <Grid item xs={6} md={6} sm={6} className="nav-izquierda">

                    <Box sx={{ display: { md: "none", xs: "contents", sm:"none" }}}>

                        <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="boton-hamburguesa">
                            <h4 className="boton-hamburguesa">Menú</h4>
                        </Button>

                        <Menu id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade} >

                            <Link to=""><MenuItem onClick={handleClose}>BICICLETAS</MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose}>MOTOS</MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose}>CASCOS</MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose}>EQUIPAMIENTO</MenuItem></Link>
                            <Link to=""><MenuItem onClick={handleClose}>INDUMENTARIA</MenuItem></Link>

                        </Menu>

                    </Box>


                    <Box  role="presentation" onClick={handleClick} sx={{ display: { xs:"none",  md:"contents" , sm:"contents" }  }}>
                        <ul>
                            <li><a href="">Bicicletas</a></li>
                            <li><a href="" className="mover-link">Motos</a></li>
                            <li><a href="">Cascos</a></li>
                            <li><a href="" className="mover-link-e">Equipamiento</a></li>
                            <li><a href="">Indumentaria</a></li>
                        </ul>
                    </Box>

                </Grid>

                <Grid item xs={3} md={3} sm={3} className="nav-derecha">
                    <Box sx={{ display: { xs:"none" ,sm:"contents"} }}>
                        <ul>
                            <li><a href="">L</a></li>
                            <li><a href="">LI</a></li>
                            <li> <a href="">C</a></li>
                        </ul>
                    </Box>
                </Grid>

            </Grid>
        </Box>

    )
}

export default Navbar