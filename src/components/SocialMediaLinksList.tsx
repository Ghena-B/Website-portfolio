import socialMediaLinks from '../data/socialMediaLinks';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css';
import React from "react";

type PropsType = {
    alternateColor?: boolean
}

export const SocialMediaLinksList: React.FC<PropsType> = ({alternateColor}) => {
    return (
        <div className="social-media-links-list d-flex justify-content-center">
            {socialMediaLinks.map((link, index) => (
                <a key={index}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover-enlarge">
                    <i className={`bi ${link.iconClass} social-icon ${alternateColor ? 'alternate-color' : ''}`}
                       aria-label={`${link.platform} logo`}></i>
                </a>
            ))}
        </div>
    );
}

