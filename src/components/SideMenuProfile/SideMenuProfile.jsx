import './SidemenuProfile.css';
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SideMenuProfile(){

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization'];
        navigate('/')
    }

    return (
        <div className="sideMenuProfile">
            <div className="sideMenuTab">
            <button>Mijn Posts</button>
            <button>Mijn Profiel</button>
            </div>
            <ButtonSubmit
                size='small'
                text='Uitloggen →'
                id='sideMenuButtonSubmit'
                clickfunction={() => handleLogout()}
            />
        </div>
    )
}

export default SideMenuProfile;