import './HeaderLogin.css'
import {Link} from "react-router-dom"
import ButtonHome from '../buttonHome/ButtonHome.jsx'
import { Plus } from '@phosphor-icons/react'

function HeaderLogin() {
    return (
        <header className= "headerLogin">
            <ButtonHome />
        <Link to="/wordlid" className="wordLid">Word lid <Plus className="plusIcon" size = {30} weight="bold" /></Link>
        </header>
    )
}

export default HeaderLogin;