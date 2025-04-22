import './HeaderLogin.css'
import {Link} from "react-router-dom"
import ButtonHome from '../buttonHome/ButtonHome.jsx'

function HeaderLogin() {
    return (
        <header className= "headerLogin">
            <ButtonHome />
        <Link to="/wordlid" className="wordLid">Word lid</Link>
        </header>
    )
}

export default HeaderLogin;