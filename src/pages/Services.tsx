import { Link } from 'react-router-dom';
import { Briefcase, Map, FileCheck, Shield, ChevronRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <div className="page-header">
                <div className="container text-center">
                    <h1 className="fade-in">Our Services</h1>
                    <p className="fade-in">Comprehensive travel solutions designed around your needs.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="services-grid">

                        {/* Service 1 */}
                        <div className="service-row fade-in">
                            <div className="service-icon-box">
                                <Briefcase size={40} />
                            </div>
                            <div className="service-details">
                                <h3>Business Travel Advisory</h3>
                                <p>
                                    We specialize in offering bespoke travel planning for businesses, ensuring that employees and
                                    executives travel seamlessly. From flight bookings to hotel accommodations and meeting arrangements,
                                    we handle the logistics so you can focus on business.
                                </p>
                                <div className="service-divider"></div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="service-row fade-in">
                            <div className="service-icon-box">
                                <Map size={40} />
                            </div>
                            <div className="service-details">
                                <h3>Leisure Travel Packages</h3>
                                <p>
                                    Tailored vacations for families, couples, and solo travelers to top destinations worldwide.
                                    Whether you dream of a tropical getaway or a cultural European tour, we craft the perfect itinerary.
                                </p>
                                <div className="service-divider"></div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="service-row fade-in">
                            <div className="service-icon-box">
                                <FileCheck size={40} />
                            </div>
                            <div className="service-details">
                                <h3>Visa Assistance</h3>
                                <p>
                                    Navigating visa requirements can be complex. We assist clients in obtaining travel visas for
                                    various destinations, guiding you through the documentation and application process.
                                </p>
                                <div className="service-divider"></div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="service-row fade-in">
                            <div className="service-icon-box">
                                <Shield size={40} />
                            </div>
                            <div className="service-details">
                                <h3>Travel Insurance</h3>
                                <p>
                                    Travel with peace of mind. We offer comprehensive travel insurance coverage to protect you
                                    against unforeseen circumstances during your journey.
                                </p>
                                <div className="service-divider"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="cta-strip">
                <div className="container text-center">
                    <h2>Let us help you with your travel plans.</h2>
                    <Link to="/contact" className="btn btn-primary mt-4">Get in Touch <ChevronRight size={18} style={{ verticalAlign: 'middle' }} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
