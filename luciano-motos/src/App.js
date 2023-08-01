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
import Login from './Componentes/Login/login';
import VerCarrito from './Componentes/VerCarrito/VerCarrito';
import Pagos from './Componentes/Pagos/Pagos';
import Micuenta from './Componentes/Micuenta/Micuenta';
import ComoComprar from './Componentes/ComoComprar/ComoComprar';
import PoliticaDeDevolucion from './Componentes/PoliticaDeDevolucion/PoliticaDeDevolucion';
import PanelDeControl from './Componentes/PanelDeControl/PanelDeControl';
import Terminos from './Componentes/Terminos/Terminos';




function App() {
  return (
    <div style={{position:"absolute",top:"0px",width:"-webkit-fill-available"}}>
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
              <Route path='/' exact element={<Main />} />
              <Route path='/Motos' exact element={<Motos />} />
              <Route path='/moto' exact element={<ItemDetail item-type='moto' />} />
              <Route path='/itemlist' exact element={<ItemListContainer />} />
              <Route path='/ubicacion' exact element={<Ubicacion />} />
              <Route path='/preguntasfrecuentes' exact element={<PreguntasFrecuentes />} />
              <Route path='/bicicletas' exact element={<Bicicletas_container />} />
              <Route path='/detalle' exact element={<ItemDetail />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/register' exact element={<Register />} />
              <Route path='/carrito' exact element={<VerCarrito />} />
              <Route path='/micuenta' exact element={<Micuenta />} />       
              <Route path='/comocomprar' exact element={<ComoComprar />} />
              <Route path='/mediosdepago' exact element={<MediosDePago />} />
              <Route path='/politica-de-devolucion' exact element={<PoliticaDeDevolucion />}/>
              <Route path='/nosotros' exact element={<Nosotros />} />
              <Route path='/pagos' exact element={<Pagos />} />
              <Route path="/terminosycondiciones" exact element={<Terminos />} />
              <Route path='/panel' exact element={<PanelDeControl />} />
              
              
              <Route path="*" element={<Link to="/">La ruta a la que ingresaste no existe si quieres puedes volver a inicio clickeando aquí</Link>} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;