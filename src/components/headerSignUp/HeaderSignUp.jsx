import './HeaderSignUp.css'
import ButtonHome from '../buttonHome/ButtonHome.jsx';
import ButtonProfile from '../buttonProfile/ButtonProfile.jsx';
import {User} from '@phosphor-icons/react'

function HeaderSignUp() {
    return (<header className="headerSignUp">
            <ButtonHome/>
            <ButtonProfile
                icon=<User size={122} color="var(--color-secondary)"/>
            route="/" />
        </header>)
}

export default HeaderSignUp