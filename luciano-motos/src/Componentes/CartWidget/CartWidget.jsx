import "./CartWidget.css";
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const ShoppingCartModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        
        {/* Resto del contenido del modal */}
      </div>
    </div>
  );
};

const CartWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={{ backgroundColor: "transparent", border: "none" }} ><li style={{ listStyle: "none" }}><ShoppingCartIcon style={{ fontSize: "30px" }} className="icono" /></li></button>
      {isModalOpen && (
        <div className="modal-container">
          
          <div className="modal-wrapper">
          <div className="boton-cerrar "><button onClick={closeModal}>x</button></div>
            <div className="contenedor-modal">

              <ShoppingCartModal onClose={closeModal} />
              
              

              <h2>Carrito de compras</h2>
              <div className="contenido-carrito">
                <div className="contenedor-items">
                  <div className="items">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                    <div style={{ textAlign: "center" }}>
                      <p>Honda xr 150L</p>
                      <p>$1.000</p>
                    </div>
                  </div>
                  <div>
                    <button>eliminar</button>
                  </div>

                </div>

                <div className="contenedor-items">
                  <div className="items">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                    <div style={{ textAlign: "center" }}>
                      <p>Honda xr 150L</p>
                      <p>$1.000</p>
                    </div>
                  </div>
                  <div>
                    <button>eliminar</button>
                  </div>

                </div>
                <div className="contenedor-items">
                  <div className="items">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_833308-MLA46012313284_052021-F.webp" alt="" />
                    <div style={{ textAlign: "center" }}>
                      <p>Honda xr 150L</p>
                      <p>$1.000</p>
                    </div>
                  </div>
                  <div>
                    <button>eliminar</button>
                  </div>

                </div>

              </div>









              <div className="boton-ver">
                <Link to="/carrito"><button>ver carrito</button></Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget