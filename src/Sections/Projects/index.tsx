import React from "react";
import "./index.css";
import textEditorSvg from "../../assets/projects/text-editor.svg";
import AudioVisualizer from "../../assets/projects/AudioVisualizer.jpeg";
import Logo from "../../Components/Logo";

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
