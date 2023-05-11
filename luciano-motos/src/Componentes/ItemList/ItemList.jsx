import "./ItemList.css";
<<<<<<< HEAD


const ItemList = ({ productos }) => {
    return (
        <div className="contenedor-tarjetita" >
            <div class="card">
                <div class="card-content">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWUUiRLKVaITVOWqT_wDn5mwc6Lh_6MBEEA&usqp=CAU" alt="Moto"/>
                       
                </div>
                <h3>HONDA WAVE</h3>
                <p class="price">$0</p>
                <p></p>
                <button>Ver detalle</button>
            </div>

        </div>
    )
=======
import { Box } from "@mui/material";

const ItemList = ( data ) => {
    const products = data.data;
    if(products != null && products.length > 0) {
        return (
            <Box sx={{height: "-webkit-fill-available"}}>
                <div className="cards_container">
            {products.map((product) => (
                
                <div class="card">
                    <div className="card-content">
                        <img src={product.thumb_url} alt="Moto"/>
                           
                    </div>
                    <h3>{product.brand} {product.model} </h3>
                    <p>{product.year} | {product.is_0km}</p>
                    <p class="price">$0</p>
                    <p></p>
    
            </div>
              ))}
              </div>
            </Box>
            
        )
    }
    
>>>>>>> tomas
}

export default ItemList