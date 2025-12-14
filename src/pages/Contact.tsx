import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="page-header">
                <div className="container text-center">
                    <h1 className="fade-in">Contact Us</h1>
                    <p className="fade-in">Plan your journey with us today.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-wrapper fade-in">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p className="mb-5">
                                We'd love to hear from you! Whether you're interested in booking a trip or need expert travel advice, we're here to help.
                            </p>

                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Asuoyeboa, Kumasi</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>0202982466</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>info@brainmass.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock className="info-icon" />
                                <div>
                                    <h4>Working Hours</h4>
                                    <p>Monday to Friday, 9 AM to 5 PM</p>
                                </div>
                            </div>

                            <div className="social-links mt-5">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href="#" className="social-icon-link"><Facebook size={24} /></a>
                                    <a href="#" className="social-icon-link"><Twitter size={24} /></a>
                                    <a href="#" className="social-icon-link"><Linkedin size={24} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h3>Send us a Message</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+233 20 000 0000" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={5} placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary full-width">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
