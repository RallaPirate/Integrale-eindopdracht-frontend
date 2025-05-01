import './SearchBar.css'
import { MagnifyingGlass } from "@phosphor-icons/react";
import {useNavigate} from "react-router-dom";

function SearchBar({searchQueryInput, setSearchQueryInput}) {

    const navigate = useNavigate();
    const handleSearch= () => {
        navigate(`/home?q=${searchQueryInput}`);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="searchBar">
            <input
                className="searchField"
                type="text"
                placeholder="Zoeken..."
                value={searchQueryInput}
                onChange={(e) => setSearchQueryInput(e.target.value)}
                onKeyDown={handleKeyDown}/>
            <button
                className="searchButton"
                onClick={()=>{
                handleSearch()}}>
                <MagnifyingGlass size={38}/>
            </button>
        </div>
    )
}

export default SearchBar;