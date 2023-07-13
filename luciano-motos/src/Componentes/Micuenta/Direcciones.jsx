import React, { useState } from 'react';
import "./Direcciones.css";
import { Link } from 'react-router-dom';
import FormularioDirecciones from './FormularioDirecciones';

const Direcciones = () => {
  const [contenido, setContenido] = useState([]);

  const agregarContenido = () => {
    setContenido([...contenido, { id: contenido.length + 1 }]);
  };

  return (
    <div className='informacion'>
      <h1>Direcciones</h1>
      <p>La siguiente dirección se utilizará en la página de pagos por defecto.</p>
      <div className='añadir-direccion'>
        

        <div style={{ display: "block", alignItems: "center" }}>
          <button style={{ color: "#011187" }} onClick={agregarContenido}>Añadir</button>
          <button>Eliminar</button>
          {contenido.map((item, index) => (
            <FormularioDirecciones key={item.id} />
          ))}

          
        </div>

        <p>Esta es la dirección que configuraste</p>{/**Acá iría la dirección que configuras desde el formulario */}
      </div>
    </div>
  );
}

export default Direcciones;