import React from "react";
import "./index.css";

export interface PersonalLogoProps {
    size?: "sm" | "md" | "hero";
    className?: string;
    alt?: string;
}

const PersonalLogo: React.FC<PersonalLogoProps> = ({
    size = "sm",
    className = "",
    alt = "Pradeep Jawahar",
}) => {
    return (
        <div
            className={`personal-logo-shell personal-logo-shell--${size} ${className}`.trim()}
        >
            <div
                className={`personal-logo personal-logo--${size}`.trim()}
                role="img"
                aria-label={alt}
            >
                <svg
                    className="personal-logo-svg"
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                >
                    <defs>
                        <linearGradient
                            id="personalLogoGradient"
                            x1="18"
                            y1="12"
                            x2="78"
                            y2="84"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#1D4ED8" />
                            <stop offset="1" stopColor="#0F172A" />
                        </linearGradient>
                    </defs>
                    <rect
                        width="96"
                        height="96"
                        rx="28"
                        fill="url(#personalLogoGradient)"
                    />
                    <path
                        d="M28 70V26h21.5c9.8 0 16.8 6.7 16.8 16.2S59.3 58.3 49.5 58.3H39.2V70H28Zm11.2-21.8h9.2c4.1 0 6.7-2.4 6.7-6s-2.6-6-6.7-6h-9.2v12Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M57.5 70V26H69v44H57.5Z"
                        fill="#BFDBFE"
                        opacity="0.92"
                    />
                </svg>
            </div>
        </div>
    );
};

export default PersonalLogo;
