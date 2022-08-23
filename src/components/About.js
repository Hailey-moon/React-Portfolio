import React from "react"
import "../style/About.css"
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
    return (
        <div className="about">
            <Navbar />
            <div className="about--wrapper">
                <div className="about--left">
                    <img className="about--img" src={process.env.PUBLIC_URL + "/Hailey-Moon.jpg"} alt="Hailey Moon"/>
                </div>
                
                <div className="about--right">
                    <h1 className="about--heading">
                        Hello!
                    </h1>
                    <p className="about--text">
                        I'm a junior at Boston University studying computer science and visual arts (exp. graduation at May 2024).
                    </p>
                    <p className="about--text">
                        I didn't always know that I wanted to do design as a career. Not until the March of 2020, specifically. A UI/UX designathon at my school drew me in, and I instantly fell in love.
                    </p>
                    <p className="about--text">
                        I'm passionate about the intersection of brilliant and beautiful design. I’m curious how the maximum utility can be boiled down to the minimal visual cues.
                    </p>
                    <p className="about--text">
                        My interests include rock climbing; hyperpop and rock music; culinary arts; and modern art. If you have any questions or comments, let me know at hmoon@bu.edu
                    </p>
                    <p className="about--text">
                        Relevant courses include: Intro to Computer Science (Python), Data Structures and Algorithms (Java), Combinatoric Structures, Geometric Algorithms, Computer Systems (x64, C), Probability in Computing, Drawing I
                    </p>
                    <p className="about--text">
                        Current GPA (out of 4.0): 3.79
                    </p>
                </div>
                <div className="blob"></div>
            </div>

            <Footer />
        </div>
    )
}