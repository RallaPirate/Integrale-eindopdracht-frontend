import './ButtonProfile.css'
import {Link} from "react-router-dom";

function ButtonProfile({icon}) {
    return (
        <Link to="/profiel/testUser">
            {icon}
        </Link>
    )
}

export default ButtonProfile;