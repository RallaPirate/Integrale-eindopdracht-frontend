import './Home.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import axios from '../../components/axiosInstance.jsx'
import {useEffect, useState} from "react";
import Post from "../../components/post/Post.jsx";
import qs from "qs";
import {useParams, useSearchParams} from "react-router-dom";

function Home() {

    const [posts, setPosts] = useState([])
    const [selectedRegions, setSelectedRegions] = useState([])
    const [searchQueryInput, setSearchQueryInput] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [searchParams] = useSearchParams();
    const searchQueryFromUrl = searchParams.get("q");
    const userId = localStorage.getItem("userId");

    const handleCheckboxChange = (e) => {
        const {value, checked} = e.target;
        if (checked) {
            setSelectedRegions(prev => [...prev, value]);
        } else {
            setSelectedRegions(prev => prev.filter(r => r !== value));
        }
    };

    const handleDropdownChange = (e) => {
        const {value} = e.target;
        setSortOrder(value);
    }

    async function goFetch() {
        try {
            const response = await axios.get('http://localhost:8080/api/posts', {
                params: {
                    region: selectedRegions, sort: sortOrder, query: searchQueryFromUrl || "", userId: userId
                }, paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'})
            });
            setPosts(response.data);
            console.log(axios.defaults.headers);
            console.log("De opgeslagen userID is: " + userId)
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     if (searchQueryFromUrl) {
    //         setSearchQuery(searchQueryFromUrl);
    //     }
    // }, [searchQueryFromUrl]);
    useEffect(() => {
        goFetch()
    }, [selectedRegions, sortOrder, searchQueryFromUrl]);


    return (<>
            <Header
                searchQueryInput={searchQueryInput}
                setSearchQueryInput={setSearchQueryInput}/>
            <div className="home">
                <SideMenu
                    selectedRegions={selectedRegions}
                    sortOrder={sortOrder}
                    handleDropdownChange={handleDropdownChange}
                    onCheckboxChange={handleCheckboxChange}/>
                <div className="homeContent">
                    {posts.map(post => (<Post postcontent={post}/>))}

                    {/*{filteredPosts.map(post => (*/}
                    {/*    <Post key={post.id} postcontent={post} />*/}
                    {/*))}*/}
                </div>
            </div>
        </>)
}

export default Home;