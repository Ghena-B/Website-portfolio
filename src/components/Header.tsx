import {Container, Nav, Navbar} from "react-bootstrap";
import './styles/style.css'
import profilephoto from '../assets/images/profilephoto.jpeg'
import {SocialMediaLinksList} from "./SocialMediaLinksList";
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md"
                className="flex-md-column flex-row align-items-center py-2 text-center sticky-top" id="sidebar">
            <Container className="text-center p-3">
                <div className="text-center p-3">
                    <img src={profilephoto} alt="profile" className="img-fluid my-4 p-1 d-none d-md-block  avatar-img"/>
                    <Navbar.Brand href="#" className="mx-0 font-weight-bold text-nowrap ">
                        Ghenadie Bujag
                    </Navbar.Brand>
                </div>
            </Container>
            <Navbar.Toggle aria-controls="nav" className="border-0 order-1"/>
            <Navbar.Collapse id="nav" className="order-last">
                <Nav className="flex-column w-100 justify-content-center">
                    <Link to="home" smooth={true} duration={300} className="nav-link">Home</Link>
                    <Link to="about" smooth={true} duration={300} className="nav-link">About me</Link>
                    <Link to="projects" smooth={true} duration={300} className="nav-link">Projects</Link>
                    <Link to="contact" smooth={true} duration={300} className="nav-link">Contact</Link>
                    <SocialMediaLinksList/>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}


