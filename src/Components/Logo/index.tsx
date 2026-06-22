import React from "react";

import "./index.css";

export interface LogoProps {
    logoUrl: string;
    className?: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: "lazy" | "eager";
}

const Logo: React.FC<LogoProps> = ({
    logoUrl,
    className = "",
    alt,
    width = 64,
    height = 64,
    loading = "lazy",
}) => {
    return (
        <div className={`logo ${className}`}>
            <img
                className="logo-img"
                src={logoUrl}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                decoding="async"
            />
        </div>
    );
};

export default Logo;
