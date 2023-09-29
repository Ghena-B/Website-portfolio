import {ContactForm} from "./ContactForm";
import {SocialMediaLinksList} from "./SocialMediaLinksList";

export const Contact = () => {
    return (
        <div id={"contact"}>
            <div>Contact</div>
            <ContactForm/>
            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    Follow
                </div>
                <SocialMediaLinksList/>
            </div>
        </div>
    )
}