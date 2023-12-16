import React from "react";
import Logo from "../../Components/Logo";
import personalLogo from "../../assets/personalLogo.svg";
import Linkedin from "../../assets/Social/linkedin.svg";
import Github from "../../assets/Social/github.svg";
import Mail from "../../assets/Social/mail.svg";
import "./index.css";

const ConclusionSection: React.FC = () => {
    return (
        <footer className="conclustion-section">
            <Logo className="conclustion-logo" logoUrl={personalLogo} />
            <h3 className="wisdom-class">
                Learn, Build, Fail and grow as you go in this path{" "}
            </h3>
            <div className="link-section">
                <ul className="link-list">
                    <li className="link-item">
                        <a
                            target="blank"
                            href="https://www.linkedin.com/in/andrew-pradeep-073495123/"
                        >
                            <Logo logoUrl={Linkedin} />
                        </a>
                    </li>
                    <li className="link-item">
                        <a
                            target="blank"
                            href="https://github.com/andrewpradeep"
                        >
                            <Logo logoUrl={Github} />
                        </a>
                    </li>
                    <li className="link-item">
                        <a href="mailto:andrewpradeep13@gmail.com">
                            <Logo logoUrl={Mail} />
                        </a>
                    </li>
                </ul>
            </div>
            <h3 className="conc-insp">
                Inspired by{" "}
                <a target="blank" href="https://mattfarley.ca/">
                    @mattfarly
                </a>
            </h3>
        </footer>
    );
};

export default ConclusionSection;
