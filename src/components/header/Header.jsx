import {useEffect, useState} from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import ButtonHeader from '../buttonHeader/ButtonHeader.jsx'
import ButtonHome from '../buttonHome/ButtonHome.jsx'
import ButtonProfile from '../buttonProfile/ButtonProfile.jsx'
import SearchBar from '../searchBar/SearchBar.jsx'
import {Plus, MagnifyingGlass, User} from '@phosphor-icons/react'

function Header({searchQueryInput, setSearchQueryInput}) {
    const navigate = useNavigate();
    const [searchbar, toggleSearchbar] = useState(false)

    const profileId = localStorage.getItem('profileId')

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("q")) {
            toggleSearchbar(true);
        }
    }, [location.search]);

    return (<>
            <header className="header">
                <ButtonHome/>
                {searchbar && <SearchBar
                    searchQueryInput={searchQueryInput}
                    setSearchQueryInput={setSearchQueryInput}
                />}
                <ButtonHeader
                    icon=<Plus size={32}/>
                clickfunction= {() => navigate('/nieuwepost')}
                />
                <ButtonHeader
                    icon=<MagnifyingGlass size={32}/>
                clickfunction= {() => toggleSearchbar(!searchbar)}
                />
                {/*Notificaties gaan niet meer lukken. Dit zou de button zijn om ze aan of uit te zetten:*/}
                {/*<ButtonHeader*/}
                {/*    icon=<Bell size={32}/>*/}
                {/*clickfunction= {() => toggleNotifications(!notifications)}*/}
                {/*/>*/}
                <ButtonProfile
                    icon=<User size={122} color="var(--color-secondary)"/>
                route={`/profiel/${profileId}`}/>
            </header>
        </>)
}

export default Header;