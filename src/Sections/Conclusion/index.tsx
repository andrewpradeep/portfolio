import React from "react";
import Logo from "../../Components/Logo";
import PersonalLogo from "../../Components/PersonalLogo";
import Linkedin from "../../assets/Social/linkedin.svg";
import Github from "../../assets/Social/github.svg";
import Mail from "../../assets/Social/mail.svg";
import Phone from "../../assets/Social/phone.svg";
import "./index.css";

const ConclusionSection: React.FC = () => {
    return (
        <footer className="conclusion-section" id="contact" aria-labelledby="contact-heading">
            <PersonalLogo size="md" className="conclusion-logo" alt="Pradeep Jawahar" />
            <h2 className="wisdom-class" id="contact-heading">
                Building thoughtful interfaces with a focus on clarity,
                performance, and user experience.
            </h2>
            <nav className="link-section" aria-label="Contact links">
                <ul className="link-list">
                    <li className="link-item">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/pradeep-jawahar-073495123/"
                            aria-label="LinkedIn profile"
                        >
                            <Logo logoUrl={Linkedin} alt="" width={52} height={52} loading="eager" />
                        </a>
                    </li>
                    <li className="link-item">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/andrewpradeep"
                            aria-label="GitHub profile"
                        >
                            <Logo logoUrl={Github} alt="" width={52} height={52} loading="eager" />
                        </a>
                    </li>
                    <li className="link-item">
                        <a
                            href="mailto:andrewpradeep13@gmail.com"
                            aria-label="Send email to andrewpradeep13@gmail.com"
                        >
                            <Logo logoUrl={Mail} alt="" width={52} height={52} loading="eager" />
                        </a>
                    </li>
                    <li className="link-item">
                        <a href="tel:+917708993399" aria-label="Call +91 77089 93399">
                            <Logo logoUrl={Phone} alt="" width={52} height={52} loading="eager" />
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="conc-insp">
                Inspired by{" "}
                <a target="_blank" rel="noreferrer" href="https://mattfarley.ca/">
                    @mattfarley
                </a>
            </p>
        </footer>
    );
};

export default ConclusionSection;
