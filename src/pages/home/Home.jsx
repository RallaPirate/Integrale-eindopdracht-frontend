import './Home.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import axios from 'axios'
import {useEffect, useState} from "react";
import Post from "../../components/post/Post.jsx";

function Home() {

    const [posts, setPosts] = useState([])
    async function goFetch() {
        try {
            const response = await axios.get('http://localhost:8080/api/posts');
        setPosts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {goFetch()}, []);

    return (
        <>
            <Header/>
            <div className="home">
            <SideMenu/>
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