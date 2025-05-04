import './Profile.css'
import {useLocation, useParams, useSearchParams} from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import {useEffect, useState} from "react";
import axios from 'axios';
import qs from "qs";
import MyPosts from "../../components/myPosts/MyPosts.jsx";
import ProfileUploadForm from "../../components/ProfileUploadForm/ProfileUploadForm.jsx";
import ProfileUploadGallery from "../../components/ProfileUploadGallery/ProfileUploadGallery.jsx";

function Profile() {
    const [searchQueryInput, setSearchQueryInput] = useState("");
    const [myPosts, setMyPosts] = useState([])
    const token = localStorage.getItem("token");
    const { profileId}  = useParams();

    console.log("token is nog present:" + token)
    console.log("profileId is geset op basis van de url:" + profileId);

    async function goFetch() {
        try {
            const response = await axios.get(`http://localhost:8080/api/profile/${profileId}/posts`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }});
            setMyPosts(response.data);
            console.log(axios.defaults.headers);
        }
        catch (error) {
            console.log(error);
        }
    }


    // async function uploadProfileImage(profileId, file, description) {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('description', description);
    //
    //     try {
    //         const response = await axios.post(`/api/profile/${profileId}/upload`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //
    //         console.log('Upload successful:', response.data);
    //         return response.data;
    //     } catch (error) {
    //         console.error('Upload failed:', error);
    //         throw error;
    //     }
    // }
    // async function fetchProfileUploads(profileId) {
    //     try {
    //         const response = await axios.get(`/api/profile/${profileId}/uploads`);
    //         console.log('Fetched uploads:', response.data);
    //         return response.data;
    //     } catch (error) {
    //         console.error('Fetching uploads failed:', error);
    //         throw error;
    //     }
    // }

    useEffect(() => {
        goFetch();
    }, []);

    return (
        <>
            <Header
                searchQueryInput={searchQueryInput}
                setSearchQueryInput={setSearchQueryInput}/>
            <div className="profile">
                <div className="profileContent">
                <h2>Dit is je profielpagina</h2>
                <h3>jij bent gebruiker</h3>
                        {myPosts.map(myPosts => (
                            <MyPosts mypostcontent={myPosts} />
                        ))}
                    <ProfileUploadGallery
                        profileId={profileId}  />
                    </div>
            </div>
        </>
    )
}

export default Profile;