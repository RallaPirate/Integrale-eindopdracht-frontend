import './SidemenuProfile.css';
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ButtonTab from "../buttonTab/ButtonTab.jsx";
import {useState} from "react";
import ProfileUploadGallery from "../profileUploadGallery/ProfileUploadGallery.jsx";
import UploadForm from "../uploadForm/UploadForm.jsx";

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
                    text="Mijn profiel"
                    clickfunction={() => toggleShowPublicPosts(false)}/>
                <ButtonTab
                    text="Mijn Posts"
                    clickfunction={() => toggleShowPublicPosts(true)}/>
                <br/>
                <br/>
                <br/>
            </div>
            {!showPublicPosts &&
                <UploadForm
                    axiosDestination={`profile/${profileId}/upload`}
                    acceptedFileType="image/*"
                    profileId={profileId} />

            }

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