import './ButtonProfile.css'
import {Link} from "react-router-dom";

function ButtonProfile({icon, route}) {
    return (
        <Link to={route}
        className="buttonProfile">
            {icon}
        </Link>
    )
}

export default ButtonProfile;