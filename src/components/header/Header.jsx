import {useState} from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import ButtonHeader from '../buttonHeader/ButtonHeader.jsx'
import ButtonHome from '../buttonHome/ButtonHome.jsx'
import ButtonProfile from '../buttonProfile/ButtonProfile.jsx'
import SearchBar from '../searchBar/SearchBar.jsx'
import Notifications from '../notifications/Notifications.jsx'
import { Bell, Plus, MagnifyingGlass, User } from '@phosphor-icons/react'

function Header({setSearchQuery, searchQueryInput, setSearchQueryInput}) {
    const navigate = useNavigate();
    const [searchbar, toggleSearchbar] = useState(false)
    const [notifications, toggleNotifications] = useState(false)

    return (
        <>
            <header className="header">
                <ButtonHome />
                {searchbar && <SearchBar
                    searchQueryInput={searchQueryInput}
                    setSearchQueryInput={setSearchQueryInput}
                    setSearchQuery={setSearchQuery}
                />}
                {notifications && <Notifications />}
                <ButtonHeader
                    icon=<Plus size={32}/>
                    clickfunction= {()=> navigate('/nieuwepost')}
                />
                <ButtonHeader
                    icon=<MagnifyingGlass size={32} />
                clickfunction= {()=>toggleSearchbar(!searchbar)}
                />
                <ButtonHeader
                    icon=<Bell size={32} />
                clickfunction= {()=>toggleNotifications(!notifications)}
                />
                <ButtonProfile
                    icon=<User size={122} color="var(--color-secondary)"/>
                    route="/profiel/testuser"/>
            </header>
        </>
    )
}

export default Header;