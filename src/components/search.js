import React from 'react'
import "./search.css"
function SearchBar({HandleInputChange}) {
    return (
        <div className="search-bar">
            <input placeholder="Enter Keywords" className="search-input" onChange={(event)=>HandleInputChange(event.target.value)} autoFocus/>
        </div>
    )
}

export default SearchBar
