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
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryInput, setSearchQueryInput] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.posttext.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedRegions(prev => [...prev, value]);
        } else {
            setSelectedRegions(prev => prev.filter(r => r !== value));
        }
    };

    const handleDropdownChange = (e) => {
        const { value } = e.target;
        setSortOrder(value);
    }

    async function goFetch() {
        try {
            const response = await axios.get('http://localhost:8080/api/posts',{
                params: { region: selectedRegions,
                sort: sortOrder },
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
            });
        setPosts(response.data);
        console.log(axios.defaults.headers);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {goFetch()}, [selectedRegions, sortOrder]);

    return (
        <>
            <Header
            searchQueryInput={searchQueryInput}
            setSearchQueryInput={setSearchQueryInput}
            setSearchQuery={setSearchQuery} />
            <div className="home">
            <SideMenu
            selectedRegions={selectedRegions}
            sortOrder={sortOrder}
            handleDropdownChange={handleDropdownChange}
            onCheckboxChange={handleCheckboxChange}/>
                <div className="homeContent">
                    {/*{posts.map(post => (*/}
                    {/*    <Post postcontent={post} />*/}
                    {/*))}*/}

                    {filteredPosts.map(post => (
                        <Post key={post.id} postcontent={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;