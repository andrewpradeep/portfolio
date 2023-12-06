import React from "react";
import "./index.css";
import Logo from "../Logo";

const NavigationHeader: React.FC<any> = () => {
    return (
        <div className="nav-header">
            <div className="nav-header-block lhs">
                <Logo />
                <span className="logo-title">Portfolio</span>
            </div>
            <ul className="nav-header-block rhs">
                <li className="nav-item">About</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Contact</li>
            </ul>
        </div>
    );
};

export default NavigationHeader;
