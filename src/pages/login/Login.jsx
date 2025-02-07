import './Login.css'
import HeaderLogin from "../../components/headerLogin/HeaderLogin.jsx";
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <HeaderLogin/>
        <h2>Dit is de Loginpagina</h2>
            <Link to="/profiel/testUser"> Link werkt alleen als je bent ingelogd</Link>
        </>
    )
}

export default Login;