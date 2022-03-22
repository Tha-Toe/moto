import React from "react"
import "./bikeTroop.css"
import { useInView } from "react-intersection-observer"
import { Link} from "react-router-dom";
import DucatiBikeDetail from "./DucatiBikeDetail";
import {motion} from "framer-motion"

const DucatiBikeTroop = ({eachBike}) => {
    const {ref: bikeTroopRef, inView: bikeTroopVisible} = useInView();


    return (
        <Link to={`/ducati/DucatiBikeDetail/${eachBike.id}`} >
            <motion.div className="bikeTroopContainer" ref={bikeTroopRef}  whileHover = {{
                                position: "relative",
                                zIndex: 1,
                                scale: [1,1.2,1.1],
                                transation: {duration: .1}
             }} >              
                    <div className={`${"bikeTroopChild"} ${"ducatiBikeTroopContainer"} ${bikeTroopVisible? "bikeTroopAnimation": ""}`}>
                        <img src={eachBike.img} className = "bikeTroopImg"/>
                        <div className="bikeTroopText">
                            <div>{eachBike.name}</div>
                        </div>
                        <div className="viewDetailContainer">
                            <div>View Detail</div>
                            <div className="viewIcon">&raquo;</div>
                        </div> 
                    </div>
            </motion.div>
        </Link>  

    )
}

export default DucatiBikeTroop;