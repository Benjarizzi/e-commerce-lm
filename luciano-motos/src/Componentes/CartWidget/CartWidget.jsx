import "./CartWidget.css";
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const ShoppingCartModal =  () => {
  return (
    <div className="modal">
      <div className="modal-content">
      </div>
    </div>
  );
};


const CartWidget = ({ onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    <button onClick={handleButtonClick} className="icono-carrito" ><li><ShoppingCartIcon style={{fontSize:"32px"}} className="icono"/></li></button>
    {isModalOpen && (
      <div className="modal-container">
        <div className="overlay" onClick={closeModal} />
        <div className="modal-wrapper">
          <ShoppingCartModal onClose={closeModal} />
          <h2>Carrito de compras</h2>
          {/**contenido del carrito */}
          <Link to="/carrito"><button>ver carrito</button></Link>
        </div>
      </div>
    )}
  </div>
);
};

export default CartWidget