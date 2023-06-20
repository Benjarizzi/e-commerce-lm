import { Link } from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./BotonWhatsapp.css";

const BotonWhatsapp = () => {
  return (
    <div>
      <button class="whatsapp-button">
        <Link to="https://wa.me/5493471522202/?text=Hola!, me interesa comprar una moto" target="_blank" >
          <WhatsAppIcon />
        </Link>
      </button>
    </div>

  )
}
export default BotonWhatsapp