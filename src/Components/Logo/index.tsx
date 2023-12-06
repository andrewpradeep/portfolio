import React from "react";
import stallion from "../../assets/runningStallion.svg";
import "./index.css";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img
                className="logo-img"
                src={stallion}
                alt="my-own-logo-created-with-ai"
            />
        </div>
    );
};

export default Logo;
