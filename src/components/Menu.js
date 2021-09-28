//import App from "../App";
import { Container, Navbar } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Yifei Chen</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Menu;