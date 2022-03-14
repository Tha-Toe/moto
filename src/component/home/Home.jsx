import React from "react";
import {useRef} from 'react';
import Bike from "../bike/Bike";
import logoImage from "../photoStore/ymhLogoWhite.jfif";
import homeImage from "../photoStore/homeImage.jpg"
import './home.css';
import {useInView} from "react-intersection-observer";
import BikeAbout from "../bike/BikeAbout";
import Contact from "../bike/Contact";
import {motion} from "framer-motion"

const Home = () => {
    const {ref: logoContainerRef, inView: yamahaVisible} = useInView();
    const {ref: homeBottomContainerRef, inView: homeBottomVisible} = useInView();

    return (
        <div>
            <div className="homeMainContainer">
                <div className="homeContainer">
                    <div className = "homeChildLeft" >
                        <div className = "homeChildLeftBaby">
                            <div className = "logoContainer"  ref={logoContainerRef}>
                                <img className = "imgLogo" src={logoImage}/>
                                <span className = {`${"yamahaText"} ${yamahaVisible? "yamahaTextAnimation": ""}`}>YAMAHA</span>
                                <span className = "motoTextContainer"  ><span className = "motoText">moto</span></span>
                            </div>
                            <div className = {`${"homeTextNode"} ${yamahaVisible? "homeTextNodeAnimation" : ""}`}>
                                <div className = "homeTextNodeChild">Hi, this web is for big bike YAMAHA crazy.</div>
                                <div className = "homeTextNodeChild" >You can watch some popular YAMAHA bike.</div>
                            </div>
                        </div>
                        <div className = {`${"homeTextNodeMobile"} ${yamahaVisible? "homeTextNodeAnimation" : ""}`}>
                                <div className = "homeTextNodeChild">Hi, this web is for big bike YAMAHA crazy.</div>
                                <div className = "homeTextNodeChild" >You can watch some popular YAMAHA bike.</div>
                        </div>  
                    </div>
                    <div className = "homeChildRight">
                        <div className = {`${"homeImageCard"} ${yamahaVisible? "homgImageCardAnimation": ""}`}>
                            <motion.img whileHover = {{
                                position: "relative",
                                zIndex: 1,
                                scale: 1.2,
                                transation: {duration: .2}
                            }}src = {homeImage} className = "homeImage"/>
                        </div>
                    </div>
                </div>
                <div className="homeBottomContainer" ref={homeBottomContainerRef}>
                    <div className={`${"homeBottomText"} ${homeBottomVisible? "homeBottomAnimation": ""}`}>Developer &raquo; Tha Toe(Frontend Developer)</div>
                </div>
            </div>
            <Bike />
            <BikeAbout />
            <Contact />
        </div>
    )
};

export default Home;