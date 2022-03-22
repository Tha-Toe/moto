import React, { useEffect } from "react";
import "./brand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link} from "react-router-dom";

const Brand = () => {
    const {ref: choiseBrandRef,inView: choiseBrandVisible} = useInView();
    const {ref: brandContainerRef,inView: brandContainerVisible} = useInView();

    const choiseBrandAnimation = useAnimation();
    const brandContainerAnimation = useAnimation();

    useEffect(() => {
        if (choiseBrandVisible) {
            choiseBrandAnimation.start(() => ({
                opacity: 1,
                scale: 1,
                transition: {
                    type: "all",
                    duration: 1.5, }
            }))
        }
    },[choiseBrandVisible, choiseBrandAnimation])
    useEffect(() => {
        if (brandContainerVisible) {
            brandContainerAnimation.start(() => ({
                left : 0,
                opacity: 1,
                transition: {
                    type: "all",
                    duration: 1.5,
                }
            }))
        }
    },[brandContainerVisible, brandContainerAnimation])

    return (
        <div className="choiseContainer">
            <motion.div className="choiseBrand" 
            ref={choiseBrandRef}
            initial = {{scale: 0, opacity: 0}}
            animate = {choiseBrandAnimation}
            >
                <span className="choiseText">Choice One</span>
                <FontAwesomeIcon icon={faArrowTurnDown} className="choiseArrow"/>
            </motion.div>
            <motion.div className="brandContainer" 
                ref={brandContainerRef}
                animate = {brandContainerAnimation}
                initial = {{left: -200, opacity: 0,}}
            >
                <Link to={`/yamaha`}>
                    <motion.div className="brandName brandNameYamaha"  whileHover = {{
                                    position: "relative",
                                    scale: [1,1.2,1.1],
                                    transation: {duration: .1}
                    }}><div>Yamaha</div></motion.div>
                </Link >

                <Link to={`/ducati`}>
                    <motion.div className="brandName brandNameDucati" whileHover = {{
                                    position: "relative",
                                    scale: [1,1.2,1.1],
                                    transation: {duration: .1}
                    }}><div>Ducati</div></motion.div>
                </Link>

                <Link to={`/honda`}>
                    <motion.div className="brandName brandNameHonda" whileHover = {{
                                    position: "relative",
                                    scale: [1,1.2,1.1],
                                    transation: {duration: .1}
                    }}><div>Honda</div></motion.div>
                </Link>


                <Link to={`/kawasaki`}>
                    <motion.div className="brandName brandNameKawasaki" whileHover = {{
                                    position: "relative",
                                    scale: [1,1.2,1.1],
                                    transation: {duration: .1}
                    }}><div>Kawasaki</div></motion.div>
                </Link>

            </motion.div>

        </div>
    )
}

export default Brand;