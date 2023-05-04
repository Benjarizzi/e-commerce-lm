import "./ItemList.css";


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
}

export default ItemList