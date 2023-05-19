import { Link } from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./BotonWhatsapp.css";

const BotonWhatsapp = () => {
  return (
    <div>
       <button class="whatsapp-button">
      <Link to="https://api.whatsapp.com/send?phone=123456789"  target="_blank" >
      <WhatsAppIcon /> 
      </Link>
    </button>
    </div>
    
  )
}
export default BotonWhatsapp