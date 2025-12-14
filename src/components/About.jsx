import React from "react";
import { FaAward, FaFolderOpen, FaHeadset, FaDownload } from "react-icons/fa";
import "./About.css";

export default function About() {
    return (
        <section id="about" className="about-section">

            {/* Section Heading */}
            <div className="about-heading">
                <h2>About Me</h2>
                <p>My Introduction</p>
            </div>

            {/* Content */}
            <div className="about-container">

                {/* Image */}
                <div className="about-image">
                    <img src="aboutarya.jpg" alt="Profile" />
                </div>

                {/* Right Content */}
                <div className="about-content">

                    {/* Stats */}
                    <div className="about-stats">
                        <div className="stat">
                            <FaAward />
                            <h3>0</h3>
                            <p>Years<br />Experience</p>
                        </div>

                        <div className="stat">
                            <FaFolderOpen />
                            <h3>04+</h3>
                            <p>Completed<br />Projects</p>
                        </div>

                        <div className="stat">
                            <FaHeadset />
                            <h3>24/7</h3>
                            <p>Online<br />Support</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="about-text">
                        Hi, I’m Arya, an aspiring Java Full Stack Developer currently building my expertise in full-stack development. I’ve already completed the front-end development track, gaining strong skills in React, JavaScript, HTML, CSS, and responsive UI design. As I continue progressing through the full-stack journey, I’m expanding my knowledge of Java, Spring Boot, REST APIs, MySQL, and backend architecture.
                        <br />
                        I’m passionate about creating clean, intuitive, and user-friendly web applications that balance both functionality and design. I enjoy turning ideas into real projects and constantly learning new tools, frameworks, and best practices that help me grow as a developer.
                        <br />
                        My goal is to become a well-rounded full stack engineer capable of building scalable applications from the ground up — from designing smooth user interfaces to implementing powerful backend systems.
                        <br />
                        When I’m not coding, I enjoy exploring new tech trends, working on personal projects, and improving my problem-solving skills.
                    </p>

                    {/* Button */}
                    <a
                        href="/Resume_Arya_MK.pdf.pdf"
                        download
                        className="about-btn"
                    >
                        Download Resume <FaDownload />
                    </a>
                </div>
            </div>
        </section>
    );
}
