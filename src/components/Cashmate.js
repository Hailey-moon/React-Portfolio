import React from "react"
import "../style/Cashmate.css"
import Case from "./Case"
import Navbar from "./Navbar"
import Footer from "./Footer"
import data from "../static/data.json"

export default function Cashmate() {
    const caseStudy = data[0].caseStudy

    return (
        <div className="cashmate">
            <Navbar />
            <Case
                description={caseStudy.description}
                role={caseStudy.role}
                method={caseStudy.method}
            />
            <Footer />
        </div>
    )
}