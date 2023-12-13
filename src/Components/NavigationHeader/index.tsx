import React from "react";
import "./index.css";
import Logo from "../Logo";
import personalLogo from "../../assets/personalLogo.svg";

const NavigationHeader: React.FC<any> = () => {
    return (
        <header className="nav-header">
            <div className="nav-header-block lhs">
                <Logo logoUrl={personalLogo} />
                <span className="logo-title">Pradeep Jawahar</span>
            </div>
            <ul className="nav-header-block rhs">
                <li className="nav-item">About</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Contact</li>
            </ul>
        </header>
    );
};

export default NavigationHeader;
