import "./ItemList.css";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ItemList = ( data ) => {
    const payload = data.payload;
    const products = payload.products;
    const navigate = useNavigate();

    const goDetail = (product_id) => {
        console.log(product_id);
        navigate('/moto/',{state:product_id});
    }

    if(products != null && products.length > 0) {
        if(payload.product_type == "moto") {
            return (
                <Box sx={{height: "-webkit-fill-available"}}>
                    <div className="cards_container">
                {products.map((product) => (
                    
                    <div className="card" product-id={product.moto_id} onClick={()=> goDetail(product.moto_id)}>
                        <div className="card-content">
                            <img src={product.thumb_url ? `$${product.thumb_url}` : '/icons/default_moto_thumb.png'} alt="Moto"/>
                               
                        </div>
                        <h3>{product.brand} {product.model} </h3>
                        <p>{product.year} | {product.kilometers}km</p>
                        <p class="price">$0</p>
                        <p></p>
        
                </div>
                  ))}
                  </div>
                </Box>
                
            )
        }
        
    }
    
}

export default ItemList