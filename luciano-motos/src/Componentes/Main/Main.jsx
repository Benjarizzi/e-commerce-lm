<<<<<<< Updated upstream
=======
import "./Main.css";
import {GiClothes} from "react-icons/gi"
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Link } from "react-router-dom"
import { Box, Grid } from "@mui/material";
import ImageCarousel from "../CarouselLanding/carousel";

const images = [];

for (let i = 0; i <= 12; i++) {
  images.push({ url: `http://localhost:3000/img/landing_${i}.jpg` });
}
console.log(images)

const Main = () => {
  return (

    <Box className="landing_container">
<Box sx={{ width: "100%", height: "500px", margin: "0 auto" }}>
      <ImageCarousel images={images} />
    </Box>
      <Grid className="landing_navigate_container" container>
        <Grid item xs={12} md={12} sm={12} sx={{display: "flex",justifyContent:"center", alignItems:"center" ,backgroundColor: "#0d0d0d8a"}}>
          <Box className="navigate_options_container">
            <Box className="navigate_item">
              <Link>
                <PedalBikeIcon style={{ fontSize: 40, color: "#fff"}} />
                <p>Bicicletas</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <TwoWheelerIcon style={{ fontSize: 40, color: "#fff"}} />
                <p>Motos</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <SportsMotorsportsIcon style={{ fontSize: 40, color: "#fff"}} />
                <p>Cascos</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <BackpackIcon style={{ fontSize: 40, color: "#fff"}} />
                <p>Equipamiento</p>
              </Link>
            </Box>
            <Box className="navigate_item">
              <Link>
                <GiClothes style={{ fontSize: 40, color: "#fff"}} />
                <p>Indumentaria</p>
              </Link>
            </Box>

          </Box>

        </Grid>
        
          
        
      </Grid>

    </Box>
  )
}

export default Main
>>>>>>> Stashed changes
