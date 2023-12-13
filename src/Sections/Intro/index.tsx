import React from "react";
import "./index.css";
import portfolio from "../../assets/portfolio.webp";

const IntroSection: React.FC = () => {
    return (
        <section className="intro-section">
            <div className="intro-partition">
                <img className="intro-portfolio-img" src={portfolio}></img>
            </div>
            <div className="intro-partition">
                <h2 className="mb1">Hi, I'm</h2>
                <h1 className="mb1">Pradeep Jawahar</h1>
                <h2 className="mb1">I build things and try to write 😅</h2>

                <p className="intro-content">
                    I am a Frontend Engineer with 5 years of experience in
                    building scalable, responsive, and maintainable web
                    applications. Proficient in HTML, CSS, JavaScript, and
                    various frontend frameworks and libraries. I like to work on
                    different technologies and things that intrigue me. My
                    latest endeavor is three.js. Soon be adding some 3d models
                    or projects based on three.js or webgl.
                </p>

                <p className="intro-content">stay tuned...</p>
            </div>
        </section>
    );
};

export default IntroSection;
