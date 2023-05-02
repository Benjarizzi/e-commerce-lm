import "./ItemList.css";


const ItemList = ({ productos }) => {
    return (
        <div className="contenedor-tarjetita" >
            <div class="card">
                <div class="card-content">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWUUiRLKVaITVOWqT_wDn5mwc6Lh_6MBEEA&usqp=CAU" alt="Moto"/>
                        <div class="overlay">
                            <div class="modal">
                                <p>FICHA TÉCNICA:</p>
                                <ul>
                                    <li>Motor: 4 tiempos, 109,1 cc</li>
                                    <li>Potencia: 9,3 hp a 7.500 rpm</li>
                                    <li>Transmisión: 4 velocidades</li>
                                    <li>Velocidad Máxima: 85 km/h</li>
                                    <li>Alimentación: Carburador</li>
                                    
                                </ul>
                            </div>
                        </div>
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