import React from "react";
import "./index.css";
import creamBoardIcon from "../../assets/projects/cream-board.svg";
import Logo from "../../Components/Logo";

const ProjectSection: React.FC = () => {
    return (
        <section
            className="prj-section"
            id="projects"
            aria-labelledby="projects-heading"
        >
            <div className="prj-header">
                <h2 id="projects-heading">Projects</h2>
                <p className="prj-header-desc">
                    A collaborative whiteboard application built with React and
                    TypeScript to explore canvas-driven product interactions.
                </p>
            </div>
            <div className="prj-container">
                <article className="prj-box">
                    <div className="prj-box-header">
                        <Logo
                            logoUrl={creamBoardIcon}
                            className="editor-logo"
                            alt="CreamBoard icon"
                            width={68}
                            height={68}
                        />
                        <h3 className="prj-title">
                            <a
                                href="https://creamboard.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CreamBoard
                            </a>
                        </h3>
                    </div>
                    <p className="prj-desc">
                        React/TypeScript whiteboard app featuring multi-workspace
                        management, drawing tools, IndexedDB persistence, and
                        PDF/PNG export.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default ProjectSection;
