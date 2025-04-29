import './Home.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import axios from '../../components/axiosInstance.jsx'
import {useEffect, useState} from "react";
import Post from "../../components/post/Post.jsx";
import qs from "qs";

function Home() {

    const [posts, setPosts] = useState([])
    const [selectedRegions, setSelectedRegions] = useState([])

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedRegions(prev => [...prev, value]);
        } else {
            setSelectedRegions(prev => prev.filter(r => r !== value));
        }
    };

    async function goFetch() {
        try {
            const response = await axios.get('http://localhost:8080/api/posts',{
                params: { region: selectedRegions },
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
            });
        setPosts(response.data);
        console.log(axios.defaults.headers);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {goFetch()}, [selectedRegions]);

    return (
        <>
            <Header/>
            <div className="home">
            <SideMenu
            selectedRegions={selectedRegions}
            onCheckboxChange={handleCheckboxChange}/>
                <div className="homeContent">
                    {posts.map(post => (
                        <Post postcontent={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;