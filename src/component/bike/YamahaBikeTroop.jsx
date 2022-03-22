import React from "react"
import "./bikeTroop.css"
import { useInView } from "react-intersection-observer"
import { Link} from "react-router-dom";
import BikeDetail from "./YamahaBikeDetail";
import {motion} from "framer-motion"

const BikeTroop = ({eachBike}) => {
    const {ref: bikeTroopRef, inView: bikeTroopVisible} = useInView();


    return (
        <Link to={`/yamaha/YamahaBikeDetail/${eachBike.id}`} >
            <motion.div className="bikeTroopContainer" ref={bikeTroopRef}  whileHover = {{
                                position: "relative",
                                zIndex: 1,
                                scale: [1,1.2,1.1],
                                transation: {duration: .1}
             }} >              
                    <div className={`${"bikeTroopChild"} ${bikeTroopVisible? "bikeTroopAnimation": ""}`}>
                        <img src={eachBike.img} className = "bikeTroopImg"/>
                        <div className="yamahaBikeTroopText bikeTroopText">
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

export default BikeTroop;