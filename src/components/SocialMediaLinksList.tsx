import socialMediaLinks from '../data/socialMediaLinks';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css'

export const SocialMediaLinksList = () => {
    return (
        <div className="social-media-links-list d-flex justify-content-center ">
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <i className={`bi ${link.iconClass} social-icon`} aria-label={`${link.platform} logo`}></i>
                </a>
            ))}
        </div>
    );
}
