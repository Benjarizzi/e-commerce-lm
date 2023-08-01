import "./Main.css";
import "../global/global.css";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Link } from "react-router-dom"
import { Box, Grid } from "@mui/material";
import ImageCarousel from "../CarouselLanding/carousel";
import MotosCarousel from "../CarouselLanding/motos_carousel";
import { useState } from "react";
import MotoSearch from "../Search/motos/motor_search"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArticleIcon from '@mui/icons-material/Article';
import ScrollToTop from "../global/ScrollToTop";

const images = [];
  const motos_c = [{ "brand": "Honda", "model": "XR150", "year": "2022", "url": "https://http2.mlstatic.com/D_NQ_NP_934472-MLA53362059718_012023-W.webp" }];
  for (let i = 0; i <= 12; i++) {
    images.push({ url: `http://localhost:3000/img/landing_${i}.jpg` });
  }
  console.log(images)

const Main = () => {
  console.log("Loaded main");

  

  const [isMotoSearchDisplayed, setIsMotoSearchDisplayed] = useState(false);

  const handleMotoSearchDisplay = () => {
    setIsMotoSearchDisplayed(true);
  }


  return (

    <Box className="landing_container">
      < ScrollToTop />
      <Box sx={{ width: "100%", height: "500px", margin: "0 auto", marginTop: "80px" }}>
        <ImageCarousel images={images} />
      </Box>
      <Grid className="landing_navigate_container" container sx={{ justifyContent: "center", position: "relative" }}>
        {isMotoSearchDisplayed && (
          <div className={`search_box ${isMotoSearchDisplayed ? 'search_box--show' : ''}`}>
            <MotoSearch />
          </div>
        )}
        <Grid item xs={12} md={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Box className="navigate_options_container">

            <div style={{display:"flex"}} >
              <Box className="navigate_item">
                <Link>
                  <PedalBikeIcon style={{ fontSize: "30px", color: "#fff" }} />
                  <p>Bicicletas</p>
                </Link>
              </Box>
              <Box className="navigate_item" onClick={handleMotoSearchDisplay}>
                <Link>
                  <TwoWheelerIcon style={{ fontSize: "30px", color: "#fff" }} />
                  <p>Motos</p>
                </Link>
              </Box>
              <Box className="navigate_item">
                <Link>
                  <SportsMotorsportsIcon style={{ fontSize: "30px", color: "#fff" }} />
                  <p>Cascos</p>
                </Link>
              </Box>
            </div>

            <div style={{display:"flex"}}>
              <Box className="navigate_item">
                <Link>
                  <BackpackIcon style={{ fontSize: "30px", color: "#fff" }} />
                  <p>Equipamiento</p>
                </Link>
              </Box>
              <Box className="navigate_item">
                <Link>
                  <CheckroomIcon style={{ fontSize: "30px", color: "#fff" }} />
                  <p>Indumentaria</p>
                </Link>
              </Box>
            </div>

          </Box>
        </Grid>
      </Grid>

      <div className="sumate-a-nosotros" style={{ borderTop: "solid  10px #9b0000cc" }}>

        <div className="sumate-contenedor-items" >

          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <LibraryBooksIcon style={{ fontSize: "80px" }} className="icono-items" />
          </Box>
          <div className="sumate-items"  >
            <div> <h2 style={{ fontSize: "30px" }}>Sumate a nuestra financiación con DNI</h2></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/238px-Banco_Santander_Logotipo.svg.png" alt="" /></div>
          </div>
          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <LibraryBooksIcon style={{ fontSize: "80px" }} className="icono-items" />
          </Box>

        </div>

        <div className="boton">
          <Link to="https://www.santander.com.ar/personas/prendarios/motos" target="_blank"><button>saber mas</button></Link>
        </div>

      </div>

      <div className="sumate-a-nosotros">

        <div className="sumate-contenedor-items">

          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <ArticleIcon style={{ fontSize: "80px", color: "white" }} className="icono-items" />
          </Box>
          <div className="sumate-items" >
            <div> <h2 style={{ fontSize: "30px", color: "white" }}>Contamos con servicio de gestoría propio.</h2></div>
          </div>
          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <ArticleIcon style={{ fontSize: "80px", color: "white" }} className="icono-items" />
          </Box>

        </div>

  

      </div>

      <div className="contenedor-mas-destacado">
        <div><h1 className="cambiar-color">Lo más destacado</h1></div>

        <div className="contenedor-motos">
          <div className="mas-destacado-logo">
            <p className="p-bicicletas">Bicicletas</p>
            <img src="https://www.gastronosfera.com/sites/default/files/field/image/bici.jpg" alt="" className="img-bicicletas" />
          </div>
          <div className="mas-destacado-items"></div>
        </div>

        <div className="contenedor-motos">
          <div className="mas-destacado-logo">
            <p className="p-motos">motos</p>
            <img src="https://www.moto1pro.com/sites/default/files/husqvarna_svartpilen_125_2021.jpg" alt="" className="img-motos" />
          </div>
          <div className="mas-destacado-items"></div>
        </div>

        <div className="contenedor-motos">
          <div className="mas-destacado-logo">
            <p className="p-cascos">cascos</p>
            <img src="https://noticias.amv.es/wp-content/uploads/cascos-de-moto-caducan.jpeg" className="img-cascos" />
          </div>
          <div className="mas-destacado-items"></div>
        </div>

        <div className="contenedor-motos">
          <div className="mas-destacado-logo">
            <p className="p-equip">equipamiento</p>
            <img src="https://blog.comprotumoto.com/wp-content/uploads/2020/08/kappa_moto_usada_00-627x376.jpg" className="img-equip" />
          </div>
          <div className="mas-destacado-items"></div>
        </div>

        <div className="contenedor-motos">
          <div className="mas-destacado-logo">
            <p className="p-indu">indumentaria</p>
            <img src="https://www.moto1pro.com/sites/default/files/consejos-cuidados-equipamiento-moto-1.jpg" className="img-indu" />
          </div>
          <div className="mas-destacado-items"></div>
        </div>

      </div>

    </Box>
  )
}

export default Main
