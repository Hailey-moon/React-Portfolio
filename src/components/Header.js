import React from "react"
import "../style/Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header--divs">
                <div className="header--top">
                    <h1 className="header--name">HAILEY MOON</h1>
                    <h3 className="header--date">SINCE 2001</h3>
                </div>
                <div className="header--bottom">
                <h2 className="header--title">UI/UX DESIGN FOR YOU & I</h2>
                </div>
            </div>
            <div className="header--wrapper">
                <div className="blob"></div>
                <div className="blob blob-two"></div>
                <div className="blob blob-three"></div>
            </div>
        </div>
    )
}