import React from 'react'
import './header.css'
import header from './../assets/header.svg';
function Header({title,HeaderExpanded}) {
    return (
        <div className="header-comp">
            <img src={header} alt="logo" className={`header-img ${HeaderExpanded?`header-img-expanded`:`header-img-compressed`}`}></img>
            <h1 className="header-text">{title}</h1>
        </div>
    )
}
export default Header
