import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
         <header> 
                <Navbar bg="" variant="dark" expand="lg" collapseOnSelect id="mainNav">
                 <Container>
                    <Navbar.Brand href="/">Valenspe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
                </Navbar>
        </header>
    )
}

export default Header
