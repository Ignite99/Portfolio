import React from "react";
import { BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaHome, FaPoo } from 'react-icons/fa';
import "./sidebar.css"

const SideBar = () => {
    return (
        <aside className="aside">
            <div>
                <a href="#home">
                    <SideBarIcon icon={<FaHome size="38" />} text="Home " />
                </a>
                <Divider />
                <a href="#about">
                    <SideBarIcon icon={<RxQuestionMarkCircled size="39" />} text="About" />
                </a>
                <SideBarIcon icon={<BsFillLightningFill size="30" />} />
                <SideBarIcon icon={<FaPoo size="30" />} />
                <SideBarIcon icon={<BsGearFill size="32" />} />

            </div>
        </aside>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group relative flex items-center">
        {icon}
        <span className="tooltip-text group-hover:opacity-100 group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;