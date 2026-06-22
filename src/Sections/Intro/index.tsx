import React from "react";
import "./index.css";
import PersonalLogo from "../../Components/PersonalLogo";

const IntroSection: React.FC = () => {
    return (
        <section className="intro-section" id="about" aria-labelledby="intro-heading">
            <div className="intro-partition intro-partition-visual">
                <PersonalLogo size="hero" />
            </div>
            <div className="intro-partition intro-partition-content">
                <p className="intro-eyebrow">Senior Full-Stack Engineer</p>
                <p className="intro-greeting">Hi, I&apos;m</p>
                <h1 className="intro-name" id="intro-heading">
                    Pradeep Jawahar
                </h1>
                <p className="intro-tagline">
                    I architect high-performance web applications with
                    full-stack depth.
                </p>

                <p className="intro-content">
                    Senior Full-Stack Engineer with 8+ years of experience
                    architecting high-performance web applications, combining a
                    deep frontend foundation with robust backend execution. Expert
                    in client-server architectures, scalable REST APIs, agentic
                    workflows, event-driven systems, and micro-frontends. Proven
                    technical leader skilled in mentoring engineers, establishing
                    technical best practices, and driving complex, end-to-end
                    product delivery.
                </p>
                <div className="intro-skill-groups">
                    <div className="intro-skill-group">
                        <p className="intro-skill-label">
                            Languages &amp; Frameworks
                        </p>
                        <ul
                            className="intro-skill-list"
                            aria-label="Languages and frameworks"
                        >
                            <li>React</li>
                            <li>Node.js</li>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>Scala</li>
                            <li>NextJS</li>
                            <li>Vue</li>
                            <li>Microservices</li>
                            <li>LangChain</li>
                        </ul>
                    </div>
                    <div className="intro-skill-group">
                        <p className="intro-skill-label">
                            Tools &amp; Infrastructure
                        </p>
                        <ul
                            className="intro-skill-list"
                            aria-label="Tools and infrastructure"
                        >
                            <li>AWS</li>
                            <li>MongoDB</li>
                            <li>IndexedDB</li>
                            <li>MCP</li>
                            <li>Claude Skills</li>
                            <li>WebSockets</li>
                            <li>Webpack</li>
                            <li>Vite</li>
                            <li>Jest</li>
                            <li>SpecKit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
