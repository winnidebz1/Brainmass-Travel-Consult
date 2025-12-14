import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Plane, FileText } from 'lucide-react';
import heroImage from '../assets/hero.png';
import consultationImage from '../assets/consultation.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in">Travel Advice You Can Trust — Wherever You’re Going</h1>
                    <p className="hero-subtitle fade-in">Professional travel consultation for business and leisure travel within the UK and abroad.</p>
                    <div className="hero-cta fade-in">
                        <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding intro-section">
                <div className="container">
                    <div className="grid-2">
                        <div className="intro-image-wrapper">
                            <img src={consultationImage} alt="Travel Consultant" className="intro-image" />
                        </div>
                        <div className="intro-content">
                            <h2 className="section-title">Expert Guidance for Seamless Journeys</h2>
                            <p>
                                Brianmass Travel Consult specializes in providing personalized travel advice for both business and leisure.
                                Whether you're organizing a corporate retreat or planning a relaxing vacation, we offer custom travel
                                packages and expert guidance to ensure your journey is smooth and successful.
                            </p>
                            <ul className="intro-list">
                                <li><CheckCircle size={18} className="intro-icon" /> Personalized Itineraries</li>
                                <li><CheckCircle size={18} className="intro-icon" /> Corporate Travel Management</li>
                                <li><CheckCircle size={18} className="intro-icon" /> Comprehensive Visa Support</li>
                            </ul>
                            <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="section-padding services-preview">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Core Services</h2>
                        <p className="section-subtitle">Tailored solutions for every traveler</p>
                    </div>

                    <div className="grid-3">
                        <div className="service-card">
                            <div className="icon-wrapper">
                                <Briefcase size={32} />
                            </div>
                            <h3>Business Travel</h3>
                            <p>Tailored travel solutions for corporations and executives, creating seamless business trips.</p>
                        </div>

                        <div className="service-card">
                            <div className="icon-wrapper">
                                <Plane size={32} />
                            </div>
                            <h3>Leisure Packages</h3>
                            <p>Custom-designed holiday experiences for individuals, families, or groups.</p>
                        </div>

                        <div className="service-card">
                            <div className="icon-wrapper">
                                <FileText size={32} />
                            </div>
                            <h3>Visa & Insurance</h3>
                            <p>Comprehensive travel insurance options and expert visa application support.</p>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/services" className="btn btn-secondary">View All Services <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding why-choose-us">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose Brianmass</h2>
                    <div className="grid-3 mt-5">
                        <div className="feature-item text-center">
                            <h3>Trustworthy Expertise</h3>
                            <p>Years of industry experience in both leisure and corporate travel planning.</p>
                        </div>
                        <div className="feature-item text-center">
                            <h3>Personalized Packages</h3>
                            <p>We don't do one-size-fits-all. Every solution is customized to your needs.</p>
                        </div>
                        <div className="feature-item text-center">
                            <h3>Seamless Experience</h3>
                            <p>From the first consultation to your return, we handle every detail with care.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-strip">
                <div className="container text-center">
                    <h2>Ready to book your next trip or explore business options?</h2>
                    <p>Let’s plan your next journey with clarity and confidence.</p>
                    <Link to="/contact" className="btn btn-primary mt-4">Get in Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
