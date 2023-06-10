import { Grid } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place";
import EastIcon from '@mui/icons-material/East';
import "./Ubicacion.css"

const Ubicacion = () => {
  return (
    <div>

      
    <div className="contenedor-ubicacion">
      <Grid container>

        <Grid item  xs={12} xl={6} md={6} className="info-izquierda">
          <h1>Casa central</h1>
          <h3>Ubicada en la localidad de Cañada de Gomez</h3>
          <h3>Provincia de Santa Fe</h3>
          <h3 style={{ textDecoration: "underline" }}>Blvd. Balcarce 845</h3>
          <div className="cont-iconos">
            <PlaceIcon  sx={{fontSize:"100px", color:"red"}} />
          </div>
        </Grid>

        <Grid item xs={12} xl={6} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8916484118527!2d-61.396685724924076!3d-32.82163576558459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9de60c9ccef3f%3A0xa4ad45d257308546!2sLuciano%20Motos!5e0!3m2!1ses!2sar!4v1683774283098!5m2!1ses!2sar"
            className="mapa"></iframe>
        </Grid>

      </Grid>

    </div>
   
    </div>

    
  )
}

export default Ubicacion