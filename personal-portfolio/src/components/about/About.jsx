import React from "react";
import "./about.css";
import ImageAvatar from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About me</h2>

            <div className="about__container grid">
                <img src={ImageAvatar} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Goh Nicholas a fullstack developer from Singapore with extensive experience in both frontend and backend development.
                            I specialize in building scalable web applications, integrating complex backend systems, and delivering seamless user experiences.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    {/* Need to update this at a later date */}
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Frontend Development</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage frontend-skills"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Backend Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage backend-skills"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About