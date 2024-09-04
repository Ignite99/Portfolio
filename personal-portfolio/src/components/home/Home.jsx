import React from "react";
import "./home.css";
import MyAvatar from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import Scroll from './Scroll';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={MyAvatar} alt="" className="home__img" />
                <h1 className="home__name">Goh Nicholas</h1>
                <span className="home__education">I am a Fullstack Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Hire me</a>
                <Scroll />
            </div>
        </section>
    )
}

export default Home