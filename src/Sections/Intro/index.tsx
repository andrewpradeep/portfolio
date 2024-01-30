import React from "react";
import "./index.css";
import portfolio from "../../assets/portfolio.webp";

const IntroSection: React.FC = () => {
    return (
        <section className="intro-section">
            <div className="intro-partition">
                <img
                    className="intro-portfolio-img"
                    src={portfolio}
                    alt="intro-image"
                ></img>
            </div>
            <div className="intro-partition">
                <h2 className="mb1">Hi, I'm</h2>
                <h1 className="mb1">Pradeep Jawahar</h1>
                <h2 className="mb1">I build things and try to write 😅</h2>

                <p className="intro-content">
                    Frontend Engineer with 5 years of experience in building
                    scalable, responsive, and maintainable web applications.
                    Proficient in HTML, CSS, JavaScript, and various frontend
                    frameworks and libraries.
                </p>

                <p className="intro-content">stay tuned...</p>
            </div>
        </section>
    );
};

export default IntroSection;
