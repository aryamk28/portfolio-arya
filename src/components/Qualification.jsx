import React from "react";
import "./Qualification.css";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Qualification() {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personal journey</span>

            {/* Tabs */}
            <div className="qualification-tabs">
                <div className="qualification-button">
                    <FaGraduationCap /> Education
                </div>

            </div>

            {/* Timeline */}
            <div className="qualification-container container">
                <div className="qualification-content">

                    {/* EXPERIENCE - TOP RIGHT */}
                    <div className="qualification-data">
                        <div></div>

                        <div className="qualification-center">
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div className="qualification-text">
                            <h3 className="qualification-title">Bachelor Of Computer Applications - BCA</h3>
                            <span className="qualification-subtitle">
                                Kannur University
                            </span>
                            <div className="qualification-calendar">
                                <FaCalendarAlt /> Aug 2022 – Apr 2025
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION - LEFT */}
                    <div className="qualification-data">
                        <div className="qualification-text qualification-left">
                            <h3 className="qualification-title">
                                Java Full Stack Development - Intern
                            </h3>
                            <span className="qualification-subtitle">
                                B-Learn <br /> Banglore
                            </span>
                            <div className="qualification-calendar qualification-left">
                                <FaCalendarAlt /> May-2025
                            </div>
                        </div>

                        <div className="qualification-center">
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div></div>
                    </div>




                </div>
            </div>
        </section>
    );
}
