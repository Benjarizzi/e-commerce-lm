import "./Main.css";
import {GiClothes} from "react-icons/gi"
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Link } from "react-router-dom"
import { Box, Grid } from "@mui/material";
const Main = () => {
  return (

    <Box className="container">

      <Grid className="contenedor-main" container>
        <Grid item xs={12} md={12} sm={12} >
          <Box className="contenedor-opciones">
            <Box>
              <Link>
                <PedalBikeIcon style={{ fontSize: 50 }} />
                <p>Bicicletas</p>
              </Link>
            </Box>
            <Box>
              <Link>
                <TwoWheelerIcon style={{ fontSize: 50 }} />
                <p>Motos</p>
              </Link>
            </Box>
            <Box>
              <Link>
                <SportsMotorsportsIcon style={{ fontSize: 50 }} />
                <p>Cascos</p>
              </Link>
            </Box>
            <Box>
              <Link>
                <BackpackIcon style={{ fontSize: 50 }} />
                <p>Equipamiento</p>
              </Link>
            </Box>
            <Box>
              <Link>
                <GiClothes style={{ fontSize: 50 }} />
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