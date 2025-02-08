import './Home.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import axios from 'axios'

function Home() {

    return (
        <>
            <Header/>
            <div className="home">
            <SideMenu/>
                <div>
            <h2>Dit is de homepage</h2>
                </div>
            </div>
        </>
    )
}

export default Home;