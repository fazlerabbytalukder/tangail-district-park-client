import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import titleImg from '../../../images/logo/heading border.png';
import contactImg from '../../../images/banner/contactUs.jpg';

var sectionStyle = {
    backgroundImage: `url(${contactImg})`,
    overFlow: 'hidden',
    width: '100%',
    height:'auto'
};

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cac4nuf', 'template_ql04u2i', form.current, 'o3-uA0uz7P_V85DvY')
    };

    return (
        <div>
            <div style={sectionStyle} id='contact'>
                <div>
                <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <h1 style={{ color: 'white' }} className='fw-bold title mt-3'>Contact Us</h1>
                        <img src={titleImg} alt="" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <iframe title="our location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.3603026087503!2d89.92013201446574!3d24.264142774873992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe7957387ad%3A0x7b1957f22eefaace!2sDC%20Park!5e0!3m2!1sen!2sbd!4v1650532357987!5m2!1sen!2sbd" width="700" height="200" style={{ border: '4px solid #36C5D5' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div >
            <div className='container mt-5'>
            <div className="row text-center">
                    <div className="col-md-6">
                        <div>
                            <div className="card card-background mb-3">
                                <div className="card-body">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h5>Email</h5>
                                    <p>admin@tangaildistrictpark.com</p>
                                    <a href="mailto:talukderfazlerabby@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                                </div>
                            </div>
                            <div className="card card-background mb-3">
                                <div className="card-body">
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                    <h5>Messanger</h5>
                                    <p>TD Park</p>
                                    <a href="https://m.me/frtfazlerabby" target="_blank" rel="noreferrer">Send a message</a>
                                </div>
                            </div>
                            <div className="card card-background mb-3">
                                <div className="card-body">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <h5>WhatsApp</h5>
                                    <p>+8801739719796</p>
                                    <a href="https://wa.me/8801739719796" target="_blank" rel="noreferrer">Send a message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <form ref={form} onSubmit={sendEmail} className='all-inputs'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                                <input type="text" name='name' className="form-control from-design" id="exampleFormControlInput1" placeholder="Mr.X" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Your Email</label>
                                <input type="email" name='email' className="form-control from-design" id="exampleFormControlInput2" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control from-design" name='message' id="exampleFormControlTextarea3" rows="8" placeholder="Your Message"></textarea>
                            </div>
                            <button className='button2'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;