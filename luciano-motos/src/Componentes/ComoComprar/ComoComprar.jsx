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
                    <div>
                       <PersonAddIcon />
                        <h4>01 | crear cuenta</h4>
                        <p>Ingresa en este enlace y completá con tus datos.</p>
                    </div>
                    <div>
                    <DiscountIcon />
                        <h4>01 | Seleccionar productos</h4>
                        <p>Visita nuestra tienda, elegi los productos que desees y agregalos al carrito de compra.</p>
                    </div>
                </div>
                <div className='iconos'><SouthIcon style={{textAlign:"end", display:"flex"}}/></div>
                
            </div>
        </div>
    )
}

export default ComoComprar