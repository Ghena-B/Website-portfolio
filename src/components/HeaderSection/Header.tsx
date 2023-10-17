import {Nav, Navbar} from "react-bootstrap";
import './Header.css';
import profilePhoto from '../../assets/images/profilephoto.jpeg';
import {SocialMediaLinksList} from "../SocialMediaLinksList";
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <Navbar variant="dark" expand="md"
                className="custom-navbar flex-md-column flex-row align-items-center p-2 text-center sticky-top"
                style={{zIndex: 1000, position: "fixed", width: "inherit"}}
                id="sidebar">
            <div className="text-center p-3"
                 data-aos="slide-down">
                <img src={profilePhoto}
                     alt="profile"
                     className="img-fluid my-4 p-1 d-none d-md-block  avatar-img "/>
                <Navbar.Brand href="#"
                              className="mx-0 font-weight-bold text-nowrap hover-enlarge">
                    <span>Ghenadie Bujag</span>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="nav"
                           className="border-0 order-1"/>
            <Navbar.Collapse id="nav"
                             className="order-last">
                <Nav className="flex-column w-100 justify-content-center">
                    <Link to="home"
                          smooth={true}
                          duration={300}
                          className="nav-link hover-enlarge"
                          data-aos="slide-right"
                          data-aos-delay="200">
                        <span>Home</span>
                    </Link>
                    <Link to="about"
                          smooth={true}
                          duration={300}
                          className="nav-link hover-enlarge"
                          data-aos-delay="600"
                          data-aos="slide-left">
                        <span>About me</span>
                    </Link>
                    <Link to="projects"
                          smooth={true} duration={300}
                          className="nav-link hover-enlarge"
                          data-aos="slide-right"
                          data-aos-delay="1000">
                        <span>Projects</span>
                    </Link>
                    <Link to="contact"
                          smooth={true}
                          duration={300}
                          className="nav-link hover-enlarge"
                          data-aos="slide-left"
                          data-aos-delay="1400">
                        <span>Contact</span>
                    </Link>
                    <div data-aos="slide-up"
                         data-aos-delay="1800">
                        <SocialMediaLinksList/>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
