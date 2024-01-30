import React from "react";
import Logo from "../../Components/Logo";
import "./index.css";

const ExperienceSection: React.FC = () => {
    return (
        <section className="exp-section">
            <div className="exp-header">
                <h2>Experience</h2>
                <p>
                    In these 5 years I got to work with 2 great companies and
                    highly talented co-workers. If I had to do it all over again
                    I will pick these guys over anything.
                </p>
            </div>
            <div className="exp-container">
                <div className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zoho.com/salesiq/"
                            target="_blank"
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
                            <h2> Frontend Developer</h2>
                        </span>
                        <span>May 2018 - Jul 2021</span>
                    </div>

                    <div className="exp-content">
                        <p>
                            Developed a Customer Engagement platform from
                            scratch. Lead a team of 3 engineers in building an
                            all in one live chat modern communication features
                            such as file sharing, audio/video call, reply,
                            invite and chat transfer. Worked on live updates for
                            chats and visitor tracking system.
                        </p>
                    </div>

                    <ul className="exp-tech-list">
                        <li className="exp-tech-item">Javascript</li>
                        <li className="exp-tech-item">Vue</li>
                        <li className="exp-tech-item">less</li>
                    </ul>
                </div>

                <div className="exp-box">
                    <div className="logo-container">
                        <a
                            className="link"
                            href="https://www.zomentum.com/"
                            aria-label="Zomentum"
                            target="_blank"
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
                            <h2>Software Engineer</h2>
                        </span>
                        <span>Aug 2021 - current</span>
                    </div>

                    <div className="exp-content">
                        <p>
                            Managed and enhanced a web-based quoting and
                            proposal management system with a focus on
                            streamlining the quoting process and providing a
                            user-friendly interface. Implemented responsive web
                            design strategies to ensure optimal user experience
                            across multiple devices for the Proposal Document.
                        </p>
                    </div>

                    <ul className="exp-tech-list">
                        <li className="exp-tech-item">React</li>
                        <li className="exp-tech-item">Typescript</li>
                        <li className="exp-tech-item">Tailwind</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
