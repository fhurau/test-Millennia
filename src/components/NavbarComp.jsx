import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function NavbarComp() {
    const { totalUniqueItems } = useCart();
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>Millenia Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className='navbarr'>
                            <Button variant="dark" onClick={() => navigate("/cart")}>
                                Cart <Badge bg="secondary">{totalUniqueItems}</Badge>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                            <Button onClick={() => navigate("/login")} variant="dark">Masuk</Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComp;