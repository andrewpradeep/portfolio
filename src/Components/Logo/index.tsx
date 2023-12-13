import React from "react";

import "./index.css";

export interface logoProps {
    logoUrl: string;
    className?: string;
    alt?: string;
}
const Logo: React.FC<logoProps> = ({ logoUrl, className = "", alt }) => {
    return (
        <div className={`logo ${className}`}>
            <img
                className="logo-img"
                src={logoUrl}
                alt={alt || "my-own-logo-created-with-ai"}
            />
        </div>
    );
};

export default Logo;
