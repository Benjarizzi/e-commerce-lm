import React from 'react'

import  { useState, useEffect } from 'react';
import Bicicletas from './Bicicletas.jsx';

const Bicicletas_container = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Leer el archivo JSON
    fetch('./bicicletas.json')
      .then((response) => response.json())
      .then((data) => {
        // Obtener los productos de la sección "bicicletas"
        const productosBicicletas = data.bicicletas;
        setProductos(productosBicicletas);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className="bicicletas-section">
    
      <div className="product-cards">
        {productos.map((producto, index) => (
          <Bicicletas
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            img={producto.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Bicicletas_container;