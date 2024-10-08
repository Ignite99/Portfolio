import React from "react";

const Scroll = () => {
    return (
        <div className="scroll__down">
            <a href="#about" className="mouse__wrapper" aria-label="Scroll to next section"></a>
            <span className="home__scroll-name">Scroll Down here</span>
            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </div>
    )
}

export default Scroll