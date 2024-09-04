import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-briefcase"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Internships Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">27</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">5363</h3>
                    <span className="about__subtitle">Cups of Coffee</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox