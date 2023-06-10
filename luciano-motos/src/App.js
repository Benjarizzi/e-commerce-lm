import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import Main from './Componentes/Main/Main';
import Motos from './Componentes/Motos/Motos';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicacion from './Componentes/Ubicacion/Ubicacion';
import { Box } from "@mui/material";




function App() {
  return (
    <Box sx={{width: "-webkit-fill-available",height: "-webkit-fill-available",display:"block",position:"relative"}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>

              <Route path='/' element={<Main />} />
              <Route path='/Motos' element={<Motos />} />
              <Route path='/moto' element={<ItemDetail item-type='moto' />} />
              <Route path='/itemlist' element={<ItemListContainer />} />
              <Route path='/ubicacion' element={<Ubicacion />} />
              <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes />} />
              <Route path='/bicicletas' element={<Bicicletas_container />} />
              <Route path='/detalle' element={<ItemDetail />} />
              <Route path='/registro' element={<Register />} />
              <Route path='/carrito' element={<VerCarrito />} />
              <Route path='/micuenta' element={<Micuenta />} />       
              <Route path='/comocomprar' element={<ComoComprar />} />
              <Route path='/mediosdepago' element={<MediosDePago />} />
              <Route path='/politica-de-devolucion' element={<PoliticaDeDevolucion />}/>
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/pagos' element={<Pagos />} />

            </Route>
          </Route>
          <Route path="*" element={<Link to="/">La ruta a la que ingresaste no existe si quieres puedes volver a inicio clickeando aquí</Link>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;