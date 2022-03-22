import React from "react";
import "./bikeAbout.css";
import logo from "../photoStore/ymhLogoWhite.jfif";
import {useInView} from "react-intersection-observer";

const BikeAbout = () => {
    const {ref: aboutRef, inView: aboutVisible} = useInView();

    return (
        <div className="bikeAboutContainer">
            <div className = {`${"aboutYamaha"} ${aboutVisible? "aboutYamahaAnimation": ""}`} ref={aboutRef}>About YAMAHA</div>
            <div className="aboutMainContainer">
                <div className="aboutContainer">
                    <div className="firstAbout">Native name</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">ヤマハ発動機株式会社</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Romanized</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Yamaha Hatsudōki</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">name</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Kabushiki-gaisha</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Type</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Public</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Industry</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Automotive</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Traded as</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">TYO: 7272</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Founded</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">1 May 1955; 66 years ago</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Headquarters</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">wata, Shizuoka, Japan</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Area served</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Worldwide</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Key people</div>
                    <div className="secondAbout">-</div>
                    <p className="thirdAbout">Hiroyuki Yanagi (Chairman & Representative Director)Yoshihiro Hidaka (President & Representative Director)</p>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Products</div>
                    <div className="secondAbout">-</div>
                    <p className="thirdAbout">Motorcycles, commuter vehicles & scooters, recreational vehicles, boats, marine engines, snowmobiles, small tractors, personal watercraft, electrically power assisted bicycles, automobile engines, unmanned aerial vehicles, golf carts, cycling components</p>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Owners</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">Yamaha Corporation (9.92%)Toyota (3.58%)</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Number of employees</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">52,664 (as of December 31, 2014)</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Subsidiaries</div>
                    <div className="secondAbout">-</div>
                    <div className="thirdAbout">MBK</div>
                </div>
                <div className="aboutContainer">
                    <div className="firstAbout">Website</div>
                    <div className="secondAbout">-</div>
                    <a className="thirdAbout" href="http://global.yamaha-motor.com/">global.yamaha-motor.com</a>
                </div>
            </div>
        </div>
    )
}

export default BikeAbout;