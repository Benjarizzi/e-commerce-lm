
import Navbar from './Componentes/Navbar/Navbar';

function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <Navbar />
    </div>
=======
    
      <BrowserRouter>


        <Routes>

          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              

                <Route path='/cart' element={<h1>Este es el carrito</h1>} />
                <Route path='/' element={<Main />} />
                <Route path='/motos' element={<Motos />} />
                <Route path='/itemlist' element={<ItemListContainer />} />

                
              
            </Route>
          </Route>
          <Route path='/ubicacion' element={<Ubicacion />} />

          
          <Route path="*" element={<Link to="/">La ruta a la que ingresaste no existe si quieres puedes volver a inicio clickeando aquí</Link>} />

        </Routes>


      </BrowserRouter>

>>>>>>> Stashed changes
  );
}

export default App;
