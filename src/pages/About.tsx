/* import removed */
import meetingImage from '../assets/meeting.png';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="page-header">
                <div className="container text-center">
                    <h1 className="fade-in">About Us</h1>
                    <p className="fade-in">Your trusted partner for personalized travel solutions.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2">
                        <div className="about-content">
                            <h2>Who We Are</h2>
                            <p>
                                Brianmass Travel Consult is a premier travel advisory firm located in Asuoyeboa, Kumasi,
                                dedicated to providing both business and leisure travel solutions. We don't just book tickets;
                                we design experiences.
                            </p>
                            <p>
                                With a commitment to delivering personalized, stress-free travel arrangements backed by years
                                of industry experience, our team of experts ensures that every trip—whether a high-stakes
                                corporate meeting or a dream family vacation—is perfectly planned and executed.
                            </p>

                            <div className="mission-box mt-4">
                                <h3>Our Mission</h3>
                                <p>
                                    To be the most trusted travel partner for businesses and individuals seeking exceptional
                                    and tailored travel experiences, guiding our clients through every decision with professionalism,
                                    care, and expertise.
                                </p>
                            </div>
                        </div>

                        <div className="about-image-wrapper">
                            <img src={meetingImage} alt="Our Team Strategy Meeting" className="about-image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding values-section">
                <div className="container">
                    <h2 className="text-center section-title">Our Values</h2>
                    <div className="grid-3 mt-5">
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>We provide honest, transparent advice you can rely on.</p>
                        </div>
                        <div className="value-card">
                            <h3>Excellence</h3>
                            <p>We strive for perfection in every itinerary we craft.</p>
                        </div>
                        <div className="value-card">
                            <h3>Personalization</h3>
                            <p>Your journey is unique, and your travel plan should be too.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
