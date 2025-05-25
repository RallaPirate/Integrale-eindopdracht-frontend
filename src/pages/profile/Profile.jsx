import './Profile.css'
import {useLocation, useParams, useSearchParams} from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import {useEffect, useState} from "react";
import axios from '../../components/axiosInstance.jsx'
import qs from "qs";
import MyPosts from "../../components/myPosts/MyPosts.jsx";
import ProfileUploadForm from "../../components/profileUploadForm/ProfileUploadForm.jsx";
import ProfileUploadGallery from "../../components/profileUploadGallery/ProfileUploadGallery.jsx";
import Post from "../../components/post/Post.jsx";
import SideMenuProfile from "../../components/sideMenuProfile/SideMenuProfile.jsx";
import error from "eslint-plugin-react/lib/util/error.js";
import UploadContent from "../../components/uploadContent/UploadContent.jsx";

function Profile() {
    const [searchQueryInput, setSearchQueryInput] = useState("");
    const [myPosts, setMyPosts] = useState([])
    const token = localStorage.getItem("token");
    const {profileId} = useParams();
    const [showPublicPosts, toggleShowPublicPosts] = useState(false);
    const [profileUploads, setProfileUploads] = useState([]);


    console.log("token is nog present:" + token)
    console.log("profileId is geset op basis van de url:" + profileId);

    async function goFetch() {
        try {
            const response = await axios.get(`http://localhost:8080/api/profile/${profileId}/posts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setMyPosts(response.data);
            console.log(axios.defaults.headers);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        goFetch();
        getUploads();
    }, []);

    async function getUploads(){

        try {
            const response = await axios.get(`http://localhost:8080/api/profile/${profileId}/uploads`);
            setProfileUploads(response.data);
            console.log(response.data, " Succes!")
        }
        catch(error){
            console.log(error)
        }
    }

    return (<>
            <Header
                searchQueryInput={searchQueryInput}
                setSearchQueryInput={setSearchQueryInput}/>
            <div className="profile">
                <SideMenuProfile
                showPublicPosts={showPublicPosts}
                toggleShowPublicPosts={toggleShowPublicPosts}
                profileId={profileId}
                />
                <div className="profileContent">
                    {showPublicPosts && <div>{myPosts.map(post => (<Post postcontent={post}/>))}</div>}
                    {!showPublicPosts &&
                        <div>
                            {profileUploads.map(upload => (<UploadContent uploadcontent={upload}/>))}
                    </div>}
                </div>
            </div>
        </>)
}

export default Profile;