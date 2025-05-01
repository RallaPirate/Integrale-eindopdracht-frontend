import './Profile.css'
import {useLocation, useParams} from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import {useState} from "react";


function Profile() {
    const [searchQueryInput, setSearchQueryInput] = useState("");
    return (
        <>
            <Header
                searchQueryInput={searchQueryInput}
                setSearchQueryInput={setSearchQueryInput}/>
            <div className="profile">
            <SideMenu/>
                <div className="profileContent">
                <h2>Dit is je profielpagina</h2>
                <h3>jij bent gebruiker</h3>
                </div>
            </div>
        </>
    )
}

export default Profile;