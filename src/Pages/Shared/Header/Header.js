import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='navber'>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container className='nav-items'>
                    <Navbar.Brand href="/home">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img
                                alt=""
                                src={logo}
                                width="40"
                                className="d-inline-block align-top"
                            />
                            <h4 className='ms-2'>TD Park</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className='fw-bold text-dark'>
                                Home
                            </Nav.Link>
                            {
                                user?.email ? <>
                                    <Nav.Link as={Link} to={`/myBooking/${user.uid}`} className='fw-bold text-dark'>
                                        My Booking
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/manageAllBooking' className='fw-bold text-dark'>
                                        Manage All Booking
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/addNewService' className='fw-bold text-dark'>
                                        Add New Service
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/home" onClick={logOut} >
                                        Logout
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/home">
                                        {user?.displayName}
                                    </Nav.Link>
                                </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login" className="btn btn-secondary rounded-pill px-4 border-0 me-2 ms-2 fw-bold text-white">
                                            Login
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/register" className="btn btn-primary rounded-pill text-light px-4 fw-bold">
                                            Sign up
                                        </Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;