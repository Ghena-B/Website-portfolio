import {SocialMediaLinksList} from "../SocialMediaLinksList";
import {ContactForm} from "./ContactForm";

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