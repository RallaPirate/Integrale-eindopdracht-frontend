import './SearchBar.css'
import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar() {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Zoeken..." />
            <button onClick={()=>console.log("Ik ga op zoek")}>
                <MagnifyingGlass />
            </button>
        <h3>Dit is de SearchBar</h3>
        </div>
    )
}

export default SearchBar;