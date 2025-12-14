import React from "react";
import "./Contact.css";
import { Send } from "react-feather";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [Name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [project, setProject] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `New Project from ${Name}`;
        const body = `Name: ${Name}\nEmail: ${Mail}\nProject: ${project}`;
        const mailtoLink = `mailto:aryasajith504@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoLink, "_blank"); // opens email client
    };

    return (
        <section id="contact">
            {/* TOP BANNER */}
            <div className="contact-hero">
                <h1>Get In Touch</h1>

            </div>

            {/* MAIN CONTENT */}
            <div className="contact-container">
                {/* LEFT */}
                <div className="contact-left">
                    <h2>Connect Me</h2>

                    <div className="contact-card">
                        <Mail className="icon blue" />
                        <h3>Email</h3>
                        <p>aryasajith504@gmail.com</p>
                        <a href="mailto:aryasajith504@gmail.com">Write me →</a>
                    </div>


                    <div className="contact-card">
                        <Phone className="icon green" />
                        <h3>Let chat</h3>
                        <p>+91 8138860620</p>
                        <a
                            href="https://wa.me/918138860620"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Write me →
                        </a>
                    </div>

                    <div className="contact-card">
                        <MapPin className="icon red" />
                        <h3>Location</h3>
                        <p>Azhikode, Kannur 67009 – Kerala</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <h2>Write me your project</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>

                        <div className="input-group">
                            <label>Mail</label>
                            <input type="email" placeholder="Enter your email" value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                required />
                        </div>

                        <div className="input-group">
                            <label>Project</label>
                            <textarea rows="6" placeholder="Write your project" value={project}
                                onChange={(e) => setProject(e.target.value)}
                                required></textarea>
                        </div>

                        <button type="submit">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
