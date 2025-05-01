import './SearchBar.css'
import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar({setSearchQuery, searchQueryInput, setSearchQueryInput}) {
    const handleSearch= () => {
        setSearchQuery(searchQueryInput);
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
                onClick={()=>console.log("Ik ga op zoek")}>
                <MagnifyingGlass size={38}/>
            </button>
        </div>
    )
}

export default SearchBar;