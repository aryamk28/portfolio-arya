import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
    {
        id: 1,
        title: "Double C&B",
        category: "Web",
        img: "db.png",
        demo: "https://aryamk28.github.io/cheese/",
        code: "https://github.com/aryamk28/cheese"
    },
    {
        id: 2,
        title: "StarBucks",
        category: "Web",
        img: "star.png",
        demo: "https://aryamk28.github.io/starbucks/",
        code: "https://github.com/aryamk28/starbucks",
    },
    {
        id: 3,
        title: "Expense Tracker",
        category: "App",
        img: "exp.png",
        code: "https://github.com/aryamk28/expense-tracker",
        demo: "https://aryamk28.github.io/expense-tracker/"
    },
    {
        id: 4,
        title: "Plant UI",
        category: "Web",
        img: "plant.png",
        code: "https://github.com/aryamk28/plants",
        demo: "https://aryamk28.github.io/plants/"
    },
    {
        id: 5,
        title: "Todo App",
        category: "App",
        img: "todo.png",
        code: "https://github.com/aryamk28/todo",
        demo: "https://aryamk28.github.io/todo/"
    },

    {
        id: 6,
        title: "Portfolio",
        category: "Web",
        img: "portfolio.png",
        code: "https://github.com/aryamk28/portfolio",
        demo: "https://aryamk28.github.io/portfolio/"
    },
];

export default function Projects() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === active);

    return (
        <section id="projects" className="projects">
            {/* Heading */}
            <div className="projects-header">
                <h2>Projects</h2>
                <p>Most recent works</p>
            </div>

            {/* Filters */}
            <div className="projects-filters">
                {["All", "Web", "App"].map((item) => (
                    <button
                        key={item}
                        className={active === item ? "active" : ""}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="projects-grid">
                {filtered.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.img} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div style={{ display: "flex", gap: "100px" }}>
                                <div>
                                    <a href={project.demo}>
                                        Demo <span>→</span>
                                    </a>
                                </div>
                                <div>
                                    <a href={project.code}>
                                        Code <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
