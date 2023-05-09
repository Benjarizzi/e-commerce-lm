import { Link } from "react-router-dom"
import {MdOutlineWhatsapp} from "react-icons/md"
import "./BotonWhatsapp.css";

const BotonWhatsapp = () => {
  return (
    <div>
      <Link to="https://api.whatsapp.com/send?phone=123456789" className="whatsapp-button" target="_blank">
      <MdOutlineWhatsapp sx={{width:"24px",height:"24px"}} /> 
      </Link>
    </div>
  )
}

export default BotonWhatsapp