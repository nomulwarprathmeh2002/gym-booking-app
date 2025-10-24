import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png'; // your logo path

const AppNavbar = () => {
    return (
        <Navbar
            expand="lg"
            bg="white"
            className="position-absolute top-0 start-50 translate-middle-x shadow-sm py-2 px-4"
            style={{
                width: '85%',
                maxWidth: '1150px',
                marginTop: '25px',
                borderRadius: '3rem',
                zIndex: 1050,
                boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
            }}
        >
            <Container fluid className="d-flex justify-content-between align-items-center px-0">
                {/* Brand */}
                <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            width: '55px',
                            height: '55px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                    </div>
                    <span
                        style={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#000',
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        GymBook
                    </span>
                </Navbar.Brand>

                {/* Nav Links */}
                <Nav className="ms-auto d-flex align-items-center gap-3">
                    <Button
                        variant="outline-dark"
                        className="px-4 py-2 rounded-pill fw-semibold"
                        style={{ fontSize: '15px' }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="danger"
                        className="px-4 py-2 rounded-pill fw-semibold text-white"
                        style={{
                            backgroundColor: '#f04e4e',
                            border: 'none',
                            fontSize: '15px',
                        }}
                    >
                        Get Started
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
