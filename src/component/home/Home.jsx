import React, { useEffect,useState } from "react";
import {useRef} from 'react';
import Bike from "../bike/YamahaBike";
import logoImage from "../photoStore/ymhLogoWhite.jfif";
import homeImage from "../photoStore/homeImage.jpg"
import './home.css';
import {useInView} from "react-intersection-observer";
import BikeAbout from "../bike/BikeAbout";
import Contact from "../bike/Contact";
import {motion, useAnimation} from "framer-motion"
import logoEngineImage from "../photoStore/homeTyreLogo.jfif";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMotorcycle} from "@fortawesome/free-solid-svg-icons";
import Brand from "../brand/Brand"



const Home = () => {
    const {ref: logoContainerRef, inView: yamahaVisible} = useInView();
    const {ref: homeBottomContainerRef, inView: homeBottomVisible} = useInView();

    const [yTextInView,setYTextInView] = useState(false);

    const yamahaVisibleAnimation = useAnimation();
    const homeBottomAnimation = useAnimation();
    const webAboutAnimation = useAnimation();

    useEffect(() => {
        if(yamahaVisible) {
            setYTextInView(true);
            yamahaVisibleAnimation.start(() => ({
                opacity: 1,
                left: 0,
                transition: {
                    type: "all",
                    duration: 1,
                }

            }))
        }
        if(yamahaVisible) {
            webAboutAnimation.start(() => ({
                opacity: 1,
                left: 0,
                transition: {
                    type: "all",
                    duration: 1,
                }

            }))
        }
    },[yamahaVisible,yamahaVisibleAnimation,webAboutAnimation])

    useEffect(() => {
        if(homeBottomVisible) {
            homeBottomAnimation.start(() => ({
                opacity: 1,
                left: 0,
                transition: {
                    type: "all",
                    duration: .5,
                }

            }))
        }
    },[homeBottomVisible,homeBottomAnimation])

    return (
        <div>
            <div className="homeMainContainer">
                <div className="homeContainer">
                    <div className = "homeChildLeft" >
                        <div className = "homeChildLeftBaby">
                            <div className = "logoContainer"  ref={logoContainerRef}>
                                { /* <img className = "imgLogo" src={logoEngineImage}/> */}
                                <span><FontAwesomeIcon icon={faMotorcycle}  className = {`${"imgLogo"} ${yTextInView? "imgLogoAnimation": ""}`}/></span>
                                <span className = {`${"yamahaText"} ${yTextInView? "yamahaTextAnimation": ""}`}>BIKE CRAZY</span>
                                <span className = "motoTextContainer"  ><span className = {`${"motoText"} ${yTextInView? "imgLogoAnimation": ""}`}>moto</span></span>
                            </div>
                            <motion.div className = {`${"homeTextNode"} `}
                            initial = {{opacity: 0, left: -200}}
                            animate = {webAboutAnimation}>
                                <div className = "homeTextNodeChild">Hi, this web is for big bike crazy.</div>
                                <div className = "homeTextNodeChild" >You can watch some popular bike.</div>
                            </motion.div>
                        </div>
                        <motion.div className = {`${"homeTextNodeMobile"}`}
                            initial = {{opacity: 0, left: -200}}
                            animate = {webAboutAnimation}>
                                <div className = "homeTextNodeChild">Hi, this web is for big bike crazy.</div>
                                <div className = "homeTextNodeChild" >You can watch some popular bike.</div>
                        </motion.div> 
                    </div>
                    <div className = "homeChildRight">
                        <motion.div className = {`${"homeImageCard"} `}
                        animate = {yamahaVisibleAnimation}
                        initial = {{opacity: 0,left: 100}}
                        >
                            <motion.img whileHover = {{
                                position: "relative",
                                zIndex: 1,
                                scale: 1.2,
                                transation: {duration: .2}
                            }}src = {homeImage} className = "homeImage"/>
                        </motion.div>
                    </div>
                </div>
                <div className="homeBottomContainer" ref={homeBottomContainerRef}>
                    <motion.div className={`${"homeBottomText"}`}
                        animate = {yamahaVisibleAnimation}
                        initial = {{opacity: 0,left: -100}}
                    >Developer &raquo; Tha Toe(Frontend Developer)</motion.div>
                </div>
            </div>
            <Brand />
            {/* <Bike />
            <BikeAbout /> */} 
            <Contact />
        </div>
    )
};

export default Home;