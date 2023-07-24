import React from 'react'
import "./MediosDePago.css"
import ScrollToTop from '../global/ScrollToTop'

const MediosDePago = () => {

  return (
    <div className='container-mp'>
      <ScrollToTop />
      <div className='titulo'>
        <h1>Medios de pago</h1>
      </div>
      <div className='contado-efectivo'>
            <p>Descuentos por pago de contado, efectivo.</p>
      </div>
      <div className='financiaciones'>
        <p>Financiación con DNI</p>
        <p>De <span>9 a 36</span> cuotas fijas.</p>
      </div>
      <div className='financiaciones'>
        <p>Credito Prendario</p>
        <p>Hasta <span>60</span> cuotas fijas.</p>
      </div>
      <div className='contenedor-medios-de-pago1'>
        <p>Cuotas  en todos los productos con:</p>
        <img src="img/ahora-12-18-24.png" alt="ahora 12, 18 y 24" className='img-medios' />

        <div className='tarjetas'>
          <img src="img/img-visa.png" alt="visa" />
          <img src="img/img-master.png" alt="mastercard" />
          <img src="img/img-maestro.png" alt="maestro" />
          <img src="img/img-ae.png" alt="american express" />
          <img src="img/img-naranja.png" alt="naranja" />
          <img src="img/img-cabal1.png" alt="cabal" />
          <img src="img/img-ml.png" alt="mercado pago" />
        </div>
      </div>
    </div>
  )
}

export default MediosDePago