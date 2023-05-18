import "./Main.css";
import "../global/global.css";
import { GiClothes } from "react-icons/gi"
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

const images = [];
const motos_c = [{ "brand": "Honda", "model": "XR150", "year": "2022", "url": "https://http2.mlstatic.com/D_NQ_NP_934472-MLA53362059718_012023-W.webp" }];
for (let i = 0; i <= 12; i++) {
  images.push({ url: `http://localhost:3000/img/landing_${i}.jpg` });
}
console.log(images)

const Main = () => {

  const [isMotoSearchDisplayed, setIsMotoSearchDisplayed] = useState(false);

  const handleMotoSearchDisplay = () => {
    setIsMotoSearchDisplayed(true);
  }


  return (

    <Box className="landing_container">
      <Box sx={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <ImageCarousel images={images} />
      </Box>
      <Grid className="landing_navigate_container" container sx={{ justifyContent: "center" }}>
        {isMotoSearchDisplayed && (
          <div className={`search_box ${isMotoSearchDisplayed ? 'search_box--show' : ''}`}>
            <MotoSearch />
          </div>
        )}
        <Grid item xs={12} md={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0d0d0d8a" }}>
          <Box className="navigate_options_container">
            <Box className="navigate_item">
              <Link>
                <PedalBikeIcon style={{ fontSize: 40, color: "#fff" }} />
                <p>Bicicletas</p>
              </Link>
            </Box>
            <Box className="navigate_item" onClick={handleMotoSearchDisplay}>
              <Link>
                <TwoWheelerIcon style={{ fontSize: 40, color: "#fff" }} />
                <p>Motos</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <SportsMotorsportsIcon style={{ fontSize: 40, color: "#fff" }} />
                <p>Cascos</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <BackpackIcon style={{ fontSize: 40, color: "#fff" }} />
                <p>Equipamiento</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <GiClothes style={{ fontSize: 40, color: "#fff" }} />
                <p>Indumentaria</p>
              </Link>
            </Box>

          </Box>

        </Grid>
      </Grid>

      <div className="sumate-a-nosotros">

        <div className="sumate-contenedor-items">

          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <LibraryBooksIcon style={{ fontSize: "90px" }} />
          </Box>
          <div className="sumate-items" >
            <div> <h2>Sumate a nuestra financiación con DNI</h2></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/238px-Banco_Santander_Logotipo.svg.png" alt="" /></div>
          </div>
          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "45px" }}>
            <LibraryBooksIcon style={{ fontSize: "90px" }} />
          </Box>

        </div>

        <div className="boton">
          <button>saber mas</button>
        </div>

      </div>
      <div>
        <h1>HOLA</h1>
      </div>

    </Box>
  )
}

export default Main
