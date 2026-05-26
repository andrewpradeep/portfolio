import React from "react";
import "./index.css";
import creamBoardIcon from "../../assets/projects/cream-board.svg";
import Logo from "../../Components/Logo";

const ProjectSection: React.FC = () => {
    return (
        <section className="prj-section">
            <div className="prj-header">
                <h2>Projects</h2>
                <p className="prj-header-desc">
                    A selected personal project from my resume, focused on
                    building canvas-driven product interactions without AI
                    assistance.
                </p>
            </div>
            <div className="prj-container">
                <div className="prj-box">
                    <div className="prj-box-header">
                        <Logo
                            logoUrl={creamBoardIcon}
                            className="editor-logo"
                            alt="cream board Icon"
                        />
                        <h3 className="prj-title">
                            <a
                                href="https://creamboard.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Cream Board
                            </a>
                        </h3>
                    </div>
                    <div className="prj-desc">
                        A Miro-inspired whiteboard project built with the Canvas
                        API. It supports limited but practical functionality,
                        including shapes, lines, and drag interactions, and was
                        implemented without the help of AI.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
