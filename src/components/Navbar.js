import React from "react";
import globe from "../images/fill_globe.png";

export default function Navbar() {
    return (
        <nav className="nav-title">
            <img className="nav-globe" src={globe} alt="globe outline"></img>
            <h3 className="nav-text">my travel journal.</h3>
        </nav>
        
    )
}