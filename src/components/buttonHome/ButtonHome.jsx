import './ButtonHome.css'
import {Link} from "react-router-dom";
import SpLogo from '../../assets/splogo.svg?react'

function ButtonHome() {
    return (
<Link to="/home" className="buttonHome"><SpLogo /></Link>
    )
}

export default ButtonHome;