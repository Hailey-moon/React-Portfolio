import React from "react"
import "../style/Footer.css"
import linkedIn from "../static/linkedin.svg"
import gitHub from "../static/github.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer--text">Questions? Comments? Coffee chat? Contact me at hmoon@bu.edu</p>
            
            <div className="footer--icons">
                <a className="footer--icon" href="https://www.linkedin.com/in/hailey-moon-/" target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="linkedIn" />
                </a>

                <a className="footer--icon" href="https://github.com/Hailey-moon" target="_blank" rel="noreferrer">
                    <img src={gitHub} alt="GitHub" />
                </a>
            </div>
        </footer>
    )
}