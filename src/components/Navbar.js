import React from "react"

import world from "../images/world-icon.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navLogo" src={world} />
            <h5>my travel journal.</h5>
        </nav>
    )
}