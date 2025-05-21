import './SidemenuProfile.css';
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ButtonTab from "../buttonTab/ButtonTab.jsx";
import {useState} from "react";
import ProfileUploadGallery from "../profileUploadGallery/ProfileUploadGallery.jsx";

function SideMenuProfile({showPublicPosts, toggleShowPublicPosts, profileId}){

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization'];
        navigate('/')
    }

    return (
        <div className="sideMenuProfile">
            <div className="sideMenuTab">
                <ButtonTab
                text="Mijn Posts"
                clickfunction={()=> toggleShowPublicPosts(true)}/>
                <ButtonTab
                    text="Mijn profiel"
                    clickfunction={() => toggleShowPublicPosts(false)}/>
            </div>
            {showPublicPosts && <p>Dit is de posts weergave</p>}
            {!showPublicPosts && <p>Dit is de profiel weergave</p>}
            {!showPublicPosts && <div>
                {/*<ProfileUploadGallery*/}
                {/*profileId={profileId}*/}
                {/*/>*/}
                <p>Hier komt de upload logica. Uitgecomment voor debugging en herschrijven</p>
            </div>}

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