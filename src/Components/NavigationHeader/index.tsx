import React from "react";
import "./index.css";
import PersonalLogo from "../PersonalLogo";
import Resume from "../../assets/resume/Pradeep_Jawahar_Resume.pdf";

const NavigationHeader: React.FC = () => {
    return (
        <header className="nav-header">
            <div className="nav-header-block lhs">
                <PersonalLogo size="sm" alt="Pradeep Jawahar" />
                <span className="logo-title">Pradeep Jawahar</span>
            </div>

            <a
                className="nav-header-block rhs resume-item"
                href={Resume}
                download="Pradeep_Jawahar_Resume.pdf"
            >
                Resume
            </a>
        </header>
    );
};

export default NavigationHeader;
