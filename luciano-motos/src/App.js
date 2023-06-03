import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import Main from './Componentes/Main/Main';
import Motos from './Componentes/Motos/Motos';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicacion from './Componentes/Ubicacion/Ubicacion';
import { Box, dividerClasses } from "@mui/material";
import PreguntasFrecuentes from './Componentes/PreguntasFrecuentes/PreguntasFrecuentes';
import Nosotros from './Componentes/Nosotros/Nosotros';
import MediosDePago from './Componentes/Medios de Pago/MediosDePago';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import Bicicletas_container from './Componentes/Bicicletas/Bicicletas_container';
import Register from './Componentes/Register/Register';
import VerCarrito from './Componentes/VerCarrito/VerCarrito';
import Pagos from './Componentes/Pagos/Pagos';
import Micuenta from './Componentes/Micuenta/Micuenta';
import Pedidos from './Componentes/Micuenta/Pedidos';
import Direcciones from './Componentes/Micuenta/Direcciones';
import FormularioDirecciones from './Componentes/Micuenta/FormularioDirecciones';
import DetallesDeCuenta from './Componentes/Micuenta/DetallesDeCuenta';
import ComoComprar from './Componentes/ComoComprar/ComoComprar';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Navbar />}>
            <Route element={<Footer />}>


              <Route path='/' element={<Main />} />
              <Route path='/Motos' element={<Motos />} />
              <Route path='/itemlist' element={<ItemListContainer />} />
              <Route path='/ubicacion' element={<Ubicacion />} />
              <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes />} />
              <Route path='/bicicletas' element={<Bicicletas_container />} />
              <Route path='/detalle' element={<ItemDetail />} />
              <Route path='/registro' element={<Register />} />
              <Route path='/carrito' element={<VerCarrito />} />
              <Route path='/micuenta' element={<Micuenta />} />
              <Route path='/micuenta/pedidos' element={<Pedidos />} />
              <Route path='/micuenta/direcciones' element={<Direcciones />} />
              <Route path='/micuenta/formulario' element={<FormularioDirecciones />} />
              <Route path='/micuenta/detalles-de-la-cuenta' element={<DetallesDeCuenta />} />
              <Route path='/comocomprar' element={<ComoComprar />} />




            </Route>
          </Route>
          
          



          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/mediosdepago' element={<MediosDePago />} />
          <Route path='/pagos' element={<Pagos />} />

          <Route path="*" element={<Link to="/">La ruta a la que ingresaste no existe si quieres puedes volver a inicio clickeando aquí</Link>} />

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;