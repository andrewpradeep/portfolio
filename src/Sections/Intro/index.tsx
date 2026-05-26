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
                <p className="intro-eyebrow">Senior Software Engineer</p>
                <h2 className="mb1">Hi, I'm</h2>
                <h1 className="mb1">Pradeep Jawahar</h1>
                <h2 className="mb1">
                    I architect scalable web applications and automation
                    workflows.
                </h2>

                <p className="intro-content">
                    Senior Engineer with 8+ years of experience combining a deep
                    frontend foundation with full-stack and backend execution. I
                    design robust REST APIs, event-driven webhooks, agentic MCP
                    workflows, and scalable process automations while mentoring
                    engineers and driving complex projects to delivery.
                </p>
                <ul className="intro-skill-list" aria-label="Core skills">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Microfrontends</li>
                    <li>Tailwind</li>
                    <li>Jest</li>
                    <li>AWS</li>
                    <li>MCP</li>
                    <li>Claude Skills</li>
                </ul>
            </div>
        </section>
    );
};

export default IntroSection;
