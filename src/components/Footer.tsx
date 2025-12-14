import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Brainmass</h3>
                        <p>Expert Travel Solutions for Business & Leisure.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="icon" />
                            <span>Asuoyeboa, Kumasi, Ghana</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="icon" />
                            <span>0202982466</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="icon" />
                            <span>info@brainmass.com</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/packages">Packages</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Brianmass Travel Consult. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
