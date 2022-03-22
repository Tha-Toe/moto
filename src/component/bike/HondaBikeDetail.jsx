import React from "react";
import "./bikeDetail.css";
import {useParams} from "react-router";
import { useInView } from "react-intersection-observer";
import {Link} from "react-router-dom";

const HondaBikeDetail = ({bikeInfoApp}) => {

    const {ref: bikeLeftContainerRef, inView: bikeLeftDetailVisible} = useInView();
    const {ref: bikeRightContainerRef, inView: bikeRightDetailVisible} = useInView();


    let {id} = useParams();
    return (
        <div className="bikeDetailMainContainer">
            <div className="bikeDetailContainer"> 
                <div className="bikeDetailLeft" ref={bikeLeftContainerRef}>
                    <div className={`${"bikeName"} ${bikeLeftDetailVisible? "bikeNameAnimation": ""}`}>{bikeInfoApp[id-1].name}</div>
                    <div className="bikeNameUnderLine"></div>
                    <img className={`${"bikeImage"} ${bikeLeftDetailVisible? "bikeImageAnimation": ""}`}  src={bikeInfoApp[id-1].img}/>
                </div>
                <div className="bikeDetailRightContainer">
                    <div className={`${"bikeDetailRight"} ${bikeRightDetailVisible? "bikeDetailRightAnimation": ""}`} ref={bikeRightContainerRef}>
                        <div className="mainName">{bikeInfoApp[id-1].name}</div>
                        <div className="divContainer">
                            <div className="first">Name</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].name}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Model</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].model}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Engine Power</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].enginePower}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Price</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].price}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Max Power</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].maxPower}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Max Torque</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].maxTorque}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Top Speed</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].maxSpeed}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Cooling System</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].coolingSystem}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Total Gear</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].totalGear}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Fuel Capacity</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].fuelCapacity}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Seat hight</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].seatHeight}</div>
                        </div>
                        <div className="divContainer">
                            <div className="first">Weight</div>
                            <div className="mid">-</div>
                            <div className="end">{bikeInfoApp[id-1].kerbWeight}</div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="bikeDetailFooter">
                <Link to={'/honda'}>
                <button className="backButton">Back</button>
                </Link>
            </div>
        </div>
    )
}

export default HondaBikeDetail;