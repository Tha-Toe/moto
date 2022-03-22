import React from "react";
import './bike.css';
import logoImage from "../photoStore/ymhLogoWhite.jfif"
import {useRef,useState} from 'react';
import {useInView} from "react-intersection-observer";
import DucatiBikeTroop from "./DucatiBikeTroop";
import r15Img from "../photoStore/r15Img.webp";
import r3Img from "../photoStore/r3Img.jpg";
import r6Img from "../photoStore/r6Img.jpg";
import r7Img from "../photoStore/r7Img.jfif";
import r1Img from "../photoStore/r1Img.jpg";
import r1mImg from "../photoStore/r1mImg.jpg";
import mt09Img from "../photoStore/mt-09Img.jpg";
import fz1fazer from "../photoStore/fz-1fazer.webp";
import wr155rImg from "../photoStore/wr155rImg.jpg";
import xsrissImg from "../photoStore/xsrissImg.webp";
import { Link } from "react-router-dom";


import ducati916 from "../photoStore/ducati916.jpg";
import ducatiPanigaleV4 from "../photoStore/ducatiPanigaleV4.jpeg";
import ducatiMonster from "../photoStore/ducatiMonster.webp";
import ducatiSportClassic from "../photoStore/ducatiSportClassic.jpg";
import ducatiHyperMotard950Sp from "../photoStore/ducatiHyperMotard950Sp.jpg";
import ducatiDesmosediciRR from "../photoStore/ducatiDesmosediciRR.jpg";
import ducatiScrambler from "../photoStore/ducatiScrambler.jpg";
import ducatiStreetFighterV4 from "../photoStore/ducatiStreetFighterV4.jpg";
import ducati899Panigale from "../photoStore/ducati899Panigale.jpg";
import ducati1299Panigale from "../photoStore/ducati1299Panigale.jpg";






const DucatiBike = () => {

    const [DucatiBikeInfo] = useState([
        {id: 1, name: "Ducati 916", model: "1994-1998", enginePower: "966CC", price: "$11768",img : ducati916,maxPower: "114 HP @ 9,000 rpm", maxTorque: "67lb-ft @ 6900 rpm", maxSpeed: "257 km/h", coolingSystem: "liquid cool", totalGear: "6-Speed ", fuelCapacity: "14 Litres",seatHeight: "790mm",kerbWeight: "194.5 Kg",},
        {id: 2, name: "Ducati Panigale V4", model: "2018-2022", enginePower: "1103CC", price: "$26290",img : ducatiPanigaleV4, maxPower: "211.2hp @ 13000 rpm", maxTorque: "91 lb⋅ft @ 10,000 rpm", maxSpeed: "374 km/h", coolingSystem: "liquid-cool", totalGear: "6-Speed", fuelCapacity: "16 Litres",seatHeight: "830mm",kerbWeight: "175 kg",},
        {id: 3, name: "Ducati Monster", model: "1993-", enginePower: "937CC", price: "$13640",img : ducatiMonster,maxPower: "111hp @ 19250 rpm", maxTorque: "69  lb⋅ft @ 65,00 rpm", maxSpeed: "226 km/h", coolingSystem: "liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17.5 Litres",seatHeight: "770mm",kerbWeight: "166kg",},
        {id: 4, name: "Sport 1000 Classic", model: "2006-", enginePower: "992CC", price: "$12500",img : ducatiSportClassic, maxPower: "91hp @ 8000rpm", maxTorque: "67 lbf⋅ft @ 6,000 rpm", maxSpeed: "217 km/h", coolingSystem: "Liquid Cool", totalGear: "6-Speed", fuelCapacity: "15 litres", seatHeight: "825mm", kerbWeight: "179 kg",},
        {id: 5, name: "Hypermotard 950 SP", model: "2019-2022", enginePower: "937 cc", price: "$19620",img : ducatiHyperMotard950Sp,maxPower: "114hp @ 9000 rpm", maxTorque: "71pf-ft @ 7250 rpm", maxSpeed: "223 km/h", coolingSystem: " liquid-cooled", totalGear: "6-Speed", fuelCapacity: "14.5 litres",seatHeight: "870 mm",kerbWeight: " 200 kg ",},
        {id: 6, name: "Desmosedici RR", model: "2007-2008", enginePower: "989CC", price: "$72500",img : ducatiDesmosediciRR, maxPower: "197.3 HP @ 13,800 rpm", maxTorque: "85lb-ft @ 10,500 rpm", maxSpeed: "303 km/h", coolingSystem: "Liquid-cooled", totalGear: "6-Speed", fuelCapacity: "15 Litres",seatHeight: "830mm",kerbWeight: "193kg",},
        {id: 7, name: "Ducati Scrambler", model: "2015-2022", enginePower: "1079CC", price: "$14,440",img : ducatiScrambler, maxPower: "86 HP @ 75000 rpm", maxTorque: "61 lbf⋅ft @ 4750 rpm", maxSpeed: "209km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "15 Litres",seatHeight: "810 mm",kerbWeight: "189 kg",},
        {id: 8, name: "StreetFighter V4", model: "2020-2022", enginePower: "1103CC", price: "$19995",img : ducatiStreetFighterV4, maxPower: "208 @ 13000 rpm", maxTorque: "123 N⋅m @ 115,00 rpm", maxSpeed: "289 km/h", coolingSystem: "liquid cool", totalGear: "6 Speed", fuelCapacity: "16 Litres",seatHeight: "845 mm",kerbWeight: "178 kg",},
        {id: 9, name: "Ducati 899 Panigale", model: "2013-2015", enginePower: "898CC", price: "$15000",img : ducati899Panigale, maxPower: "148 Hp @ 10750 rpm", maxTorque: "99 Nm @ 9000 rpm", maxSpeed: "287km/h", coolingSystem: "Liquid cool", totalGear: "6-Speed", fuelCapacity: "17 Liters",seatHeight: "830mm",kerbWeight: "169kg",},
        {id: 10, name: "Ducati 1299 Panigale", model: "2015-", enginePower: "1285CC", price: "$19295",img : ducati1299Panigale, maxPower: "205hp @ 10500 rpm", maxTorque: "106.71 lb-ft / 8750 rpm", maxSpeed: "296km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "17 litres",seatHeight: "830 mm",kerbWeight: "191 kg",},
    ]);


    return (
        <div className="ducatiContainer">
            <div className = "bikeContainer">
                <div className = "bikeContainerBaby">
                    {DucatiBikeInfo.map((eachBike) => <DucatiBikeTroop eachBike={eachBike}/>)}
                </div>
            </div>
            <div className="bikeFooter">
                <Link to={'/'}>
                <button className="backButton">Back</button>
                </Link>
            </div>
        </div>
    )
}
export default DucatiBike;