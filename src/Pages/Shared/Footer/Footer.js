import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import logo from '../../../images/logo/logo-1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container pt-4">
                    <div className="row text-color">
                        <div className="col-md-4">
                            <img width="150px" src={logo} alt="" />
                            <p>
                                Tangail District Park is the biggest park in Bangladesh. Here you find world best ride for your enjoyment and the qality service we provide is commandable.
                            </p>
                            <p>
                                <i class="fas fa-map-marked-alt icon-color"></i> Tangail DC Lake,
                                Dhaka, Bangladesh
                            </p>
                            <p>
                                <i class="fas fa-phone-alt icon-color"></i> +8801112233334
                            </p>
                            <p>
                                <i class="far fa-envelope-open icon-color"></i>{" "}
                                tangaildistrictpark@gmail.com
                            </p>
                            <div className="d-flex align-items-center icon-color ms-5">
                                <i className="fab fa-facebook-f me-3"></i>
                                <i className="fab fa-twitte me-3r"></i>
                                <i className="fab fa-linkedin-in me-3"></i>
                                <i className="fab fa-instagram me-3"></i>
                                <i className="fab fa-github-alt me-3"></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{color:'white'}} className="mt-5">Our Services</h3>
                            <p>Best Ride With Discount Offer</p>
                            <p>Food Cort</p>
                            <p>Transpotation Facalities</p>
                            <p>Catage facilities</p>
                            <p>Water Park</p>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{color:'white'}} className="mt-5">Newsletter</h3>
                            <p>
                                If you have any query about our park plase let us
                                know about
                            </p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="your message"
                                    aria-label="your message"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className='btn btn-secondary' id="basic-addon2">
                                    Text Us
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid copyright'>
                <div className="row">
                    <div className="col-md-12">
                        <p style={{color:'white'}} className='text-center mt-4'>Copyrights © 2022 by Tangail District Park. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;