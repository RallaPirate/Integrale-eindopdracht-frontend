import './Profile.css'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'


function Profile() {
    const { user } = useParams()
    return (
        <>
            <Header/>
            <div className="profile">
            <SideMenu/>
                <div className="profileContent">
                <h2>Dit is je profielpagina</h2>
                <h3>jij bent gebruiker: {user}</h3>
                </div>
            </div>
        </>
    )
}

export default Profile;