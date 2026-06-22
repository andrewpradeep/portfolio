import React from "react";
import Logo from "../../Components/Logo";
import findemLogo from "../../assets/company/findem.svg";
import zomentumLogo from "../../assets/company/zomentum.svg";
import zohoLogo from "../../assets/company/zoho.svg";
import "./index.css";

const ExperienceSection: React.FC = () => {
    return (
        <section
            className="exp-section"
            id="experience"
            aria-labelledby="experience-heading"
        >
            <div className="exp-header">
                <h2 id="experience-heading">Experience</h2>
                <p>
                    Impact across AI-driven features, agentic workflows,
                    micro-frontends, async operations, REST APIs, real-time
                    communication, and frontend performance.
                </p>
            </div>
            <div className="exp-container">
                <article className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.findem.ai/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Findem"
                        >
                            <Logo
                                logoUrl={findemLogo}
                                alt="Findem logo"
                                className="exp-logo findem"
                                width={48}
                                height={48}
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <h3>Senior Software Engineer</h3>
                        <p className="exp-company">Findem</p>
                        <p className="exp-date">Apr 2024 - Present</p>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Collaborated within a cross-functional,
                                international team to design and ship high-impact
                                AI-driven features and tracking frameworks.
                            </li>
                            <li>
                                Engineered an MCP-based agentic workflow to
                                securely expose internal applicant tracking data
                                to LLMs, optimizing candidate screening.
                            </li>
                            <li>
                                Integrated acquired SaaS product via route-based
                                micro-frontends and built cross-stack data sync,
                                directly increasing upsell by 15%.
                            </li>
                            <li>
                                Architected a centralized asynchronous operations
                                UI framework to track high-volume workflows,
                                eliminating a major category of support tickets.
                            </li>
                            <li>
                                Built end-to-end logic for core ATS features and
                                onboarding workflows, streamlining candidate
                                progression and data accuracy.
                            </li>
                            <li>
                                Embedded custom debugging instructions into local
                                Claude markdown skills to resolve candidate match
                                scoring issues.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list" aria-label="Technologies used at Findem">
                        <li className="exp-tech-item">React</li>
                        <li className="exp-tech-item">Node.js</li>
                        <li className="exp-tech-item">Scala</li>
                        <li className="exp-tech-item">MCP</li>
                        <li className="exp-tech-item">Micro-frontends</li>
                        <li className="exp-tech-item">Claude Skills</li>
                    </ul>
                </article>

                <article className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zomentum.com/"
                            aria-label="Zomentum"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Logo
                                logoUrl={zomentumLogo}
                                alt="Zomentum logo"
                                className="exp-logo zomentum"
                                width={144}
                                height={48}
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <h3>Software Developer</h3>
                        <p className="exp-company">Zomentum</p>
                        <p className="exp-date">Aug 2021 - Mar 2024</p>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Built and scaled Scala-based REST APIs using a BFF
                                architecture to optimize data aggregation,
                                minimizing payload overhead and accelerating
                                integration.
                            </li>
                            <li>
                                Optimized PDF generation latency, slashing
                                rendering times by 66% (from 3s to under 1s) with
                                dynamic headers, footers, and page numbering.
                            </li>
                            <li>
                                Reduced digital signature process failures by 33%
                                and raised satisfaction metrics by replacing
                                internal logic with a stable PDFTron integration.
                            </li>
                            <li>
                                Engineered an interactive, high-performance
                                quoting and proposal module with drag-and-drop
                                capabilities and real-time editing.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list" aria-label="Technologies used at Zomentum">
                        <li className="exp-tech-item">Scala</li>
                        <li className="exp-tech-item">React</li>
                        <li className="exp-tech-item">TypeScript</li>
                        <li className="exp-tech-item">PDFTron</li>
                        <li className="exp-tech-item">REST APIs</li>
                    </ul>
                </article>

                <article className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zoho.com/salesiq/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Zoho SalesIQ"
                        >
                            <Logo
                                logoUrl={zohoLogo}
                                alt="Zoho logo"
                                className="exp-logo zoho"
                                width={96}
                                height={48}
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <h3>Software Developer</h3>
                        <p className="exp-company">Zoho SalesIQ</p>
                        <p className="exp-date">May 2018 - Jul 2021</p>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Engineered client-side logging and caching using
                                IndexedDB with automated data expiry, reducing API
                                traffic by 90% (10x).
                            </li>
                            <li>
                                Architected a real-time communication engine via
                                WebSockets and a PubSub pattern to power live chat
                                updates and dynamic modular listeners.
                            </li>
                            <li>
                                Optimized application builds via Webpack chunk
                                splitting and tree shaking, cutting load latency by
                                60% to drop render times from 5s to under 2s.
                            </li>
                            <li>
                                Led and mentored a team of 3 engineers to deliver
                                enterprise file sharing and audio calling features,
                                boosting velocity by 10%.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list" aria-label="Technologies used at Zoho SalesIQ">
                        <li className="exp-tech-item">JavaScript</li>
                        <li className="exp-tech-item">Vue</li>
                        <li className="exp-tech-item">WebSocket</li>
                        <li className="exp-tech-item">Webpack</li>
                        <li className="exp-tech-item">IndexedDB</li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default ExperienceSection;
