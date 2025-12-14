import { Link } from 'react-router-dom';
import tropicalImage from '../assets/tropical.png';
import meetingImage from '../assets/meeting.png';
import familyImage from '../assets/family.png';
import './Packages.css';

const Packages = () => {
    return (
        <div className="packages">
            <div className="page-header">
                <div className="container text-center">
                    <h1 className="fade-in">Explore Our Travel Packages</h1>
                    <p className="fade-in">Curated experiences for business and leisure.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="packages-grid">

                        {/* Package 1 */}
                        <div className="package-card fade-in">
                            <div className="package-image">
                                <img src={meetingImage} alt="Business Retreat" />
                                <div className="package-badge">Business</div>
                            </div>
                            <div className="package-content">
                                <h3>Luxury Business Retreats</h3>
                                <p>UK & Abroad</p>
                                <div className="package-desc">
                                    Seamlessly planned corporate retreats focusing on productivity and team building in premium locations.
                                </div>
                                <Link to="/contact" className="btn btn-secondary full-width">Speak to a Consultant</Link>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="package-card fade-in">
                            <div className="package-image">
                                <img src={tropicalImage} alt="Leisure Vacation" />
                                <div className="package-badge leisure">Leisure</div>
                            </div>
                            <div className="package-content">
                                <h3>Custom Leisure Vacations</h3>
                                <p>Worldwide Destinations</p>
                                <div className="package-desc">
                                    From relaxing beach getaways to adventurous cultural explorations, we design the perfect holiday for you.
                                </div>
                                <Link to="/contact" className="btn btn-secondary full-width">Speak to a Consultant</Link>
                            </div>
                        </div>

                        {/* Package 3 */}
                        <div className="package-card fade-in">
                            <div className="package-image">
                                <img src={familyImage} alt="Family Vacation" />
                                <div className="package-badge family">Family</div>
                            </div>
                            <div className="package-content">
                                <h3>Family Travel Packages</h3>
                                <p>Kid-Friendly Resorts</p>
                                <div className="package-desc">
                                    Stress-free family holidays with activities for all ages. We handle the logistics so you can make memories.
                                </div>
                                <Link to="/contact" className="btn btn-secondary full-width">Speak to a Consultant</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packages;
