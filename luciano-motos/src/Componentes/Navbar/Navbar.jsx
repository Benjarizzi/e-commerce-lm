
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="container">
            <div className="contenedor-nav">

                <div className="logo-nav">
                    <img src="" alt="LOGO" />
                </div>

                <div className="nav-izquierda">
                    <ul>
                        <li><a href="">Bicicletas</a></li>
                        <li><a href="">Motos</a></li>
                        <li><a href="">Cascos</a></li>
                        <li><a href="">Equipamiento</a></li>
                        <li><a href="">Indumentaria</a></li>
                    </ul>

                </div>

                <div className="nav-derecha">
                    <ul>
                        <li><a href="">L</a></li>
                        <li><a href="">LI</a></li>
                        <li> <a href="">C</a></li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Navbar