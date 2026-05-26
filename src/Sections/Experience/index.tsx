import React from "react";
import Logo from "../../Components/Logo";
import findemLogo from "../../assets/company/findem.svg";
import "./index.css";

const ExperienceSection: React.FC = () => {
    return (
        <section className="exp-section">
            <div className="exp-header">
                <h2>Experience</h2>
                <p>
                    Resume-backed impact across ATS workflows, MCP-enabled AI
                    systems, async operations, webhooks, document automation,
                    real-time communication, and frontend performance.
                </p>
            </div>
            <div className="exp-container">
                <div className="exp-box">
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
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <span>
                            <h2>Senior Software Engineer</h2>
                        </span>
                        <span>Apr 2024 - Present</span>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Engineered core Applicant Tracking System
                                features and onboarding workflows to improve
                                candidate progression and data accuracy.
                            </li>
                            <li>
                                Built an MCP-based agentic workflow to securely
                                expose internal applicant tracking data to LLMs
                                for candidate screening and shortlisting.
                            </li>
                            <li>
                                Architected an asynchronous operations framework
                                with real-time progress, automated error
                                tracking, and dynamic retries, eliminating stale
                                UI support tickets.
                            </li>
                            <li>
                                Designed high-throughput webhooks and automation
                                pipelines for an acquired SaaS integration,
                                contributing to a 15% upsell revenue increase.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list">
                        <li className="exp-tech-item">React</li>
                        <li className="exp-tech-item">Node.js</li>
                        <li className="exp-tech-item">MCP</li>
                        <li className="exp-tech-item">Webhooks</li>
                        <li className="exp-tech-item">Claude Skills</li>
                    </ul>
                </div>

                <div className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zomentum.com/"
                            aria-label="Zomentum"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Logo
                                logoUrl="https://assets-global.website-files.com/5d9c347f1416aefa5128c8c3/6391c7144eace998108cfaa7_Frame.svg"
                                alt="Zomentum logo"
                                className="exp-logo zomentum"
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <span>
                            <h2>Software Developer</h2>
                        </span>
                        <span>Aug 2021 - Mar 2024</span>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Engineered and enhanced a web-based quoting and
                                proposal management module for complex document
                                workflows.
                            </li>
                            <li>
                                Optimized PDF generation latency by 66%,
                                reducing customized document rendering from 3
                                seconds to under 1 second.
                            </li>
                            <li>
                                Reduced digital signature process failures by
                                33% by replacing unreliable internal logic with a
                                stable third-party solution.
                            </li>
                            <li>
                                Delivered intuitive, high-performance interfaces
                                for quoting, proposal, and customer signature
                                workflows.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list">
                        <li className="exp-tech-item">React</li>
                        <li className="exp-tech-item">Typescript</li>
                        <li className="exp-tech-item">Tailwind</li>
                        <li className="exp-tech-item">Jest</li>
                        <li className="exp-tech-item">React Testing Library</li>
                    </ul>
                </div>

                <div className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zoho.com/salesiq/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Zoho"
                        >
                            <Logo
                                logoUrl="https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg"
                                alt="Zoho logo"
                                className="exp-logo"
                            />
                        </a>
                    </div>

                    <div className="exp-title">
                        <span>
                            <h2>Frontend Developer</h2>
                        </span>
                        <span>May 2018 - Jul 2021</span>
                    </div>

                    <div className="exp-content">
                        <ul className="exp-highlight-list">
                            <li>
                                Led and mentored 3 junior engineers while
                                building enterprise communication features,
                                including file sharing, audio calling, message
                                threads, and dynamic chat invitations.
                            </li>
                            <li>
                                Architected a real-time communication engine
                                using WebSockets and a PubSub pattern for live
                                chat updates and modular listeners.
                            </li>
                            <li>
                                Reduced API traffic by 90% with an
                                IndexedDB-based client-side logging and caching
                                system with automated expiry.
                            </li>
                            <li>
                                Cut initial page load latency by more than 60%,
                                bringing render times from 5 seconds to under 2
                                seconds with Webpack chunk splitting and tree
                                shaking.
                            </li>
                        </ul>
                    </div>

                    <ul className="exp-tech-list">
                        <li className="exp-tech-item">Javascript</li>
                        <li className="exp-tech-item">Vue</li>
                        <li className="exp-tech-item">Less</li>
                        <li className="exp-tech-item">WebSocket</li>
                        <li className="exp-tech-item">Webpack</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
