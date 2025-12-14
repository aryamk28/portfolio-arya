import React from "react";
import { motion } from "framer-motion";
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaPaperPlane,
} from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";
import { BsChevronDown } from "react-icons/bs";
import "./Home.css";

export default function Home() {
    return (
        <>

            {/* Hero Section */}
            <section className="home" id="home">
                {/* Social Icons */}
                <div className="socials">
                    <a href="https://www.linkedin.com/in/arya-m-k-1998aa320/"><FaLinkedinIn /></a>
                    <a href="https://github.com/aryamk28/html_example"><FaGithub /></a>
                    <a href="https://www.instagram.com/__aryyyaa/?hl=en"><FaInstagram /></a>
                </div>

                {/* Content */}
                <div className="home-content">
                    <h1>
                        Arya M K <span className="wave">
                            👋
                        </span>
                    </h1>

                    <h3>Frontend Developer</h3>

                    <p>
                        Hi, I’m Arya — a passionate Java Full Stack Developer currently
                        pursuing full-stack development with a strong foundation in
                        modern front-end technologies like React and JavaScript. I’m also
                        expanding my backend skills with Java, Spring Boot, and REST APIs.
                    </p>
                    <br /><br /><br />
                    <a href="https://wa.me/918138860620?text=Hi%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." className="btn-primary">
                        Say Hello <FaPaperPlane />
                    </a>
                </div>

                {/* Profile Image */}
                <div className="profile-wrapper">
                    <div className="animated-border">
                        <div className="border-mask"></div>
                    </div>

                    <img
                        src="arya.jpg"
                        alt="profile"
                        className="profile-image"
                    />
                </div>


            </section>
        </>
    );
}