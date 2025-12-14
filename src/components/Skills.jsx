import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">

            {/* Heading */}
            <div className="skills-heading">
                <h2>Skills</h2>
                <p>My technical level</p>
            </div>

            {/* Centered Card */}
            <div className="skills-center">
                <div className="skills-card">

                    <h3>Frontend Developer</h3>

                    <div className="skills-grid">
                        <Skill title="HTML" level="Advanced" />
                        <Skill title="Bootstrap" level="Advanced" />
                        <Skill title="CSS" level="Advanced" />
                        <Skill title="Git" level="Intermediate" />
                        <Skill title="JavaScript" level="Intermediate" />
                        <Skill title="React" level="Intermediate" />
                    </div>

                </div>
            </div>
        </section>
    );
}

function Skill({ title, level }) {
    return (
        <div className="skill-item">
            <FaCheckCircle />
            <div>
                <h4>{title}</h4>
                <span>{level}</span>
            </div>
        </div>
    );
}
