import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import Propsellogo from '../assets/propsellogo.png';

const PropSelNavbar: React.FC = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);
    return (
        <Navbar
            expand="lg"
            variant="dark"
            className="py-4 border-bottom sticky-top shadow-sm w-100"
            style={{ backgroundColor: '#1C2531', position: 'relative', color: '#96999C' }}
        >
            <Container fluid className="px-4 d-flex justify-content-between align-items-center">

                {/* 1. Mobile Toggle & Left Side (Grouped for desktop) */}
                <div className="d-flex align-items-center border-white">
                    <Button 
                        variant="link" 
                        className="border-0 shadow-none me-2 p-0" 
                        style={{ color: 'white' }}
                        onClick={handleShow}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    
                    <Navbar.Collapse id="zillow-nav-content" className="d-lg-block">
                        <Nav className="mt-3 mt-lg-0 d-lg-flex">
                            <Nav.Link href="#" className="px-3 fw-normal text-light">Buy</Nav.Link>
                            <Nav.Link href="#" className="px-3 fw-normal text-light">Find an agent</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                {/* 2. Brand Logo (Absolute Center) */}
                <Navbar.Brand 
                    href="/" 
                    className="p-0 m-0"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000
                    }}
                >
                    <img
                        src={Propsellogo}
                        alt="PropSel Logo"
                        className='text-light'
                        height="35"
                    />
                </Navbar.Brand>

                {/* 3. Right Side (Sign In) */}
                <div className="d-flex align-items-center">
                  
                    
                    <Button
                        className="rounded-pill px-4 me-4 py-2 fw-bold"
                        style={{
                            backgroundColor: 'white',
                            color: '#006aff',
                            border: '2px solid #006aff',
                            fontSize: '14px'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#006aff';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#006aff';
                        }}
                    >
                        Sign In
                    </Button>
                </div>

            </Container>

            {/* Mobile Offcanvas Menu */}
            <Offcanvas 
                show={showOffcanvas} 
                onHide={handleClose} 
                placement="start"
                className="w-100"
                style={{ backgroundColor: '#1C2531', color: 'white' }}
            >
                <Offcanvas.Header className="border-bottom border-secondary">
                    <Offcanvas.Title>
                        <img
                            src={Propsellogo}
                            alt="PropSel Logo"
                            height="30"
                        />
                    </Offcanvas.Title>
                    <Button 
                        variant="link" 
                        onClick={handleClose}
                        className="text-white p-0 ms-auto"
                        style={{ fontSize: '24px', lineHeight: '1' }}
                    >
                        ×
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <Nav className="flex-column p-3">
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Buy</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Rent</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Sell</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Home Loans</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Find an Agent</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Manage Rentals</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3 border-bottom border-secondary" onClick={handleClose}>
                            <strong>Advertise</strong>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white py-3" onClick={handleClose}>
                            <strong>Help</strong>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
};

export default PropSelNavbar;