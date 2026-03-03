import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas } from 'react-bootstrap';
import Propsellogo from '../assets/propsellogo.png';
import './Navbar.css';

const PropSelNavbar: React.FC = () => {
    /* States */
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [showBuyDropdown, setShowBuyDropdown] = useState(false);
    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);
    const handleBuyMouseEnter = () => setShowBuyDropdown(true);
    const handleBuyMouseLeave = () => setShowBuyDropdown(false);

    return (
        <Navbar
            expand="lg"
            variant="dark"
            className="py-4  navbar-expand-lg shadow-sm w-100 "
            style={{
                backgroundColor: '#212529',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                color: '#96999C',
                zIndex: 1030
            }}
        >
            <Container fluid className="px-4 d-flex justify-content-between align-items-center">

                {/* 1. Mobile Toggle & Left Side (Grouped for desktop) */}
                <div className="d-flex align-items-center border-white ">
                    <Button
                        variant="link"
                        className="border-0 shadow-none me-2 p-0 d-lg-none"
                        style={{ color: 'white' }}
                        onClick={handleShow}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <Navbar.Collapse id="zillow-nav-content" className="d-lg-block">
                        <Nav className="mt-5 mt-lg-0 d-lg-flex mx-5">
                            <NavDropdown
                                title="Buy"
                                id="buy-nav-dropdown"
                                show={showBuyDropdown}
                                onMouseEnter={handleBuyMouseEnter}
                                onMouseLeave={handleBuyMouseLeave}
                                className="px-2 fw-normal text-white custom-nav-dropdown "
                                style={{ marginRight: '1rem' }}
                            >
                                <NavDropdown.Item href="/housing-society">Housing Society</NavDropdown.Item>
                                <NavDropdown.Item href="/high-rise">High Rise</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/find-agent" className="px-3 fw-normal text-light">Find an agent</Nav.Link>
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
                        href="https://propsel.com/register"
                        className="rounded-pill px-4 me-4 py-2 me-5  d-flex d-lg-block btn-success"
                        style={{
                            color: 'white',
                            fontSize: '12px'
                        }}

                    >
                        Register
                    </Button>
                </div>
            </Container>

            {/* Mobile Offcanvas Menu */}
            <Offcanvas
                show={showOffcanvas}
                onHide={handleClose}
                placement="start"
                className="w-100"
                style={{ backgroundColor: '#212529', color: 'white' }}
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
                    <Nav className="flex-column p-0"> {/* Padding zero ki taake full width click ho */}

                        {/* Clickable "Buy" Dropdown for Mobile */}
                        <NavDropdown
                            title={<strong>Buy</strong>}
                            id="offcanvas-buy-dropdown"
                            className="mobile-nav-dropdown border-bottom border-secondary text-white px-3 py-1"
                        >
                            <NavDropdown.Item href="/housing-society" onClick={handleClose}>
                                Housing Society
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/high-rise" onClick={handleClose}>
                                High Rise
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Normal Links */}
                        <Nav.Link
                            href="/find-agent"
                            className="text-white py-3 px-3 border-bottom border-secondary"
                            onClick={handleClose}
                        >
                            <strong>Find an Agent</strong>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
};

export default PropSelNavbar;