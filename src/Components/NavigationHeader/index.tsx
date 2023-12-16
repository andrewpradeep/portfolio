import React from "react";
import "./index.css";
import Logo from "../Logo";
import personalLogo from "../../assets/personalLogo.svg";
import Resume from "../../assets/resume/Pradeep_Jawahar_Resume.pdf";

const NavigationHeader: React.FC<any> = () => {
    return (
        <header className="nav-header">
            <div className="nav-header-block lhs">
                <Logo logoUrl={personalLogo} />
                <span className="logo-title">Pradeep Jawahar</span>
            </div>

            <a className={`nav-header-block rhs`} href={Resume} download>
                <button className="resume-item">Resume</button>
            </a>
        </header>
    );
};

export default NavigationHeader;
