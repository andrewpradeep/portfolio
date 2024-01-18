import React from "react";
import "./index.css";
import textEditorSvg from "../../assets/projects/text-editor.svg";
import AudioVisualizer from "../../assets/projects/AudioVisualizer.jpeg";
import Logo from "../../Components/Logo";
import CreamBoardIcon from "../../assets/projects/CreamBoard.avif";

const ProjectSection: React.FC = () => {
    return (
        <section className="prj-section">
            <div className="prj-header">
                <h2>Projects</h2>
                <p className="prj-header-desc">
                    All my projects are involved with technologies that I want
                    to learn and some of them have been mentioned below. I will
                    adding a few in the future
                </p>
            </div>
            <div className="prj-container">
                <div className="prj-box">
                    <div className="prj-box-header">
                        <Logo
                            logoUrl={CreamBoardIcon}
                            className="editor-logo"
                        />
                        <h3 className="prj-title">
                            <a
                                href="https://creamboard.netlify.app/"
                                target="_blank"
                            >
                                Cream Board
                            </a>
                        </h3>
                    </div>
                    <div className="prj-desc">
                        Created an project similar to an white board using
                        canvas api. It contains basic shapes and line that you
                        can use to build a flow diagram of sort. Will be adding
                        new features and migrate it to webgl
                    </div>
                </div>

                <div className="prj-box">
                    <div className="prj-box-header">
                        <Logo
                            logoUrl={AudioVisualizer}
                            className="editor-logo"
                        />
                        <h3 className="prj-title">Audio Visualizer</h3>
                    </div>

                    <div className="prj-desc">
                        Worked on a audio visualizer which takes in real time
                        audio and converts them into waveform or blocks of data.
                        Audio is also recorded then converted into mp3 and can
                        be downloaded for listening
                    </div>
                </div>

                <div className="prj-box">
                    <div className="prj-box-header">
                        <Logo logoUrl={textEditorSvg} className="editor-logo" />
                        <h3 className="prj-title">NewGen Editor</h3>
                    </div>
                    <div className="prj-desc">
                        Building an editor that is different from the legacy
                        editor which made use of the execCommand currently
                        working on building it through tag appending for each
                        selection using the range api
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
