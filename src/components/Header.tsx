import {Container, Nav, Navbar} from "react-bootstrap";
import './styles/style.css'
import profilephoto from '../assets/images/profilephoto.jpeg'
import {SocialMediaLinksList} from "./SocialMediaLinksList";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md"
                className="flex-md-column flex-row align-items-center py-2 text-center sticky-top" id="sidebar">
            <Container className="text-center p-3">
                <div className="text-center p-3">
                    <img src={profilephoto}
                         alt="profile " className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
                    <Navbar.Brand href="#" className="mx-0 font-weight-bold text-nowrap ">
                        Ghenadie Bujag
                    </Navbar.Brand>
                </div>
            </Container>
            <Navbar.Toggle aria-controls="nav" className="border-0 order-1"/>
            <Navbar.Collapse id="nav" className="order-last">
                <Nav className="flex-column w-100 justify-content-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#aboutme">About me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <SocialMediaLinksList/>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}


