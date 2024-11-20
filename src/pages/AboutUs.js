// src/pages/AboutUs.js
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-section">
                <div className="about-title-section">
                    <h1 className="about-title">
                        About<br />
                        <span className="about-us-line">Us</span>
                    </h1>
                    <div className="title-line"></div>
                </div>
                <p className="about-description">
                    At Forztek, we specialize in engineering solutions for rotating applications, offering customized bearing
                    arrangements for gearboxes, fans, blowers, and high-speed drives. Our expertise includes advanced simulations
                    (FEA, CFD, CAE) and high-speed shaft mode analysis to ensure performance and durability. We also provide
                    comprehensive CAD and CAE services, covering 3D modeling, manufacturing drawings, and component strength
                    analysis.
                </p>
            </div>

            <div className="projects-section">
                <div className="projects-title">
                    <h2>
                        Our Projects<br />
                        <span className="projects-line">& Missions</span>
                    </h2>
                    <div className="title-line"></div>
                </div>
                <div className="projects-content">
                    <div className="cards">
                        <div className="card">
                            <h3>Vision</h3>
                            <p>A future where
                                our </p>
                            <p>solutions contribute to
                                a </p>
                            <p>reliable and sustainable</p>
                            <p>green world</p>
                        </div>
                        <div className="card">
                            <h3>Mission</h3>
                            <p>To help customers
                                & be the leader in
                                innovative and sustainable
                                solutions for
                                rotating equipment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
