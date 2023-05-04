import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import Main from './Componentes/Main/Main';
import Motos from './Componentes/Motos/Motos';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicacion from './Componentes/Ubicacion/Ubicacion';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
                <Route path='/cart' element={<h1>Este es el carrito</h1>} />
                <Route path='/' element={<Main />} />
                <Route path='/home' element={<Main />} />
                <Route path='/motos' element={<Motos />} />
                <Route path='/itemlist' element={<ItemListContainer />} />
                <Route path='/ubicacion' element={<Ubicacion />} />
                <Route path="*" element={<Link to="/">La ruta a la que ingresaste no existe si quieres puedes volver a inicio clickeando aquí</Link>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;