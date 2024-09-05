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
                                <h3 className="skills__name">Fullstack Development</h3>
                                <span className="skills__number">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Fullstack Development</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div>
                                <span className="skills__number">80%</span>
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