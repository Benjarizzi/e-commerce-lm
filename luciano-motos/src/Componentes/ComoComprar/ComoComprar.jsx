import React from 'react'
import "./ComoComprar.css";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DiscountIcon from '@mui/icons-material/Discount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';
const ComoComprar = () => {
    return (
        <div>
            <div className='title'>
                <h1>Cómo comprar</h1>
            </div>
            <div className='contenedor-como-comprar'>
                <div className='primeros-pasos'>
                    <div className='paso'>
                        <PersonAddIcon style={{ fontSize: "40px", color: "#011187" }} />
                        <h4>01 | crear cuenta</h4>
                        <p>Ingresa en este enlace y completá con tus datos.</p>
                    </div>
                    <div className='paso'>
                        <DiscountIcon style={{ fontSize: "40px", color: "#011187" }} />
                        <h4>02 | Seleccionar productos</h4>
                        <p>Visita nuestra tienda, elegi los productos que desees y agregalos al carrito de compra.</p>
                    </div>
                </div>

                <div className='icono-abajo'>
                    <div><SouthIcon style={{ fontSize: "50px" }} /></div>
                </div>

                <div className='segundos-pasos'>
                    <div className='paso'>
                        <PersonAddIcon style={{ fontSize: "40px", color: "#011187" }} />
                        <h4>04 | datos</h4>
                        <p>Una vez verificado los productos, completá el pedido con tus datos personales para realiar la facturación y enviar el producto.</p>
                    </div>
                    <div className=''>
                        <div><WestIcon  style={{ fontSize: "50px" }} /></div>
                    </div>
                    <div className='paso'>
                        <DiscountIcon style={{ fontSize: "40px", color: "#011187" }} />
                        <h4>03 | carrito de compras</h4>
                        <p>Verificá los productos seleccionados y agregados al carrito antes de finalizar el pedido.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ComoComprar