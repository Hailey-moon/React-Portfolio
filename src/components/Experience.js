import React from "react"
import "../style/Experience.css"
import Cashmate from "../static/cashmate-mockup.png"
import BostonHacks from "../static/bhacks-mockup.png"
import Spark from "../static/spark-mockup.png"

export default function Experience({company, description, image}) {
    let img = ""
    let scrollId = ""
    if (company.includes("Cashmate")) {
        img = Cashmate
        scrollId = "work"
    } else if (company.includes("BostonHacks")) {
        img = BostonHacks
    } else if (company.includes("Spark")) {
        img = Spark
    } else {
        console.log("No image for this company is imported yet")
    }
    return (
        <div className="experience" id={scrollId}>
            <div className="exp--left">
                <h1 className="exp--company">{company}</h1>
                <p className="exp--description">{description}</p>
                <button className="exp--button">Read More</button>
            </div>
            <div className="exp--right">
                <img className="exp--img" src={img} alt={`${company} mockup`} />
            </div>
        </div>
    )
}