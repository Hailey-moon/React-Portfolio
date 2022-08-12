import React from "react"
import "../style/Navbar.css"

export default function Navbar() {


    return (
        <nav className="navbar">
            {/* Commented out About in the Navbar, add in future if you want */}
            {/* <a href="#">
                <button className="nav--item">About</button>
            </a> */}

            <a href="#work">
                <button className="nav--item">Work</button>
            </a>
        </nav>
    )
}