import './Home.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'

function Home() {
    return (
        <>
            <Header/>
            <div className="home">
            <SideMenu/>
            <h2>Dit is de homepage</h2>
            </div>
        </>
    )
}

export default Home;