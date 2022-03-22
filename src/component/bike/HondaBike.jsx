import React from "react";
import './bike.css';
import logoImage from "../photoStore/ymhLogoWhite.jfif"
import {useRef,useState} from 'react';
import {useInView} from "react-intersection-observer";
import HondaBikeTroop from "./HondaBikeTroop";
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

import cbr150r from "../photoStore/cbr150r.png";
import cbr300r from "../photoStore/cbr300r.webp";
import cbr500r from "../photoStore/cbr500r.jpg";
import cbr650r from "../photoStore/cbr650r.jpg";
import cbr1000rrr from "../photoStore/cbr1000rrr.avif";
import cb1000r from "../photoStore/cb1000r.webp";
import cb400sf from "../photoStore/cb400sf.jpg";
import cb150r from "../photoStore/cb150r.jpg";
import gl1800 from "../photoStore/gl1800.jfif";
import cbx1000 from "../photoStore/cbx1000.jpg";


const HondaBike = () => {

    const [hondaBikeInfo] = useState([
        {id: 1, name: "CBR 150R", model: "2002-2022", enginePower: "149CC", price: "$2235",img : cbr150r,maxPower: "17.1 PS @ 9000 rpm", maxTorque: "14.4 Nm @ 7000 rpm", maxSpeed: "146 km/h", coolingSystem: "liquid cool", totalGear: "6-Speed ", fuelCapacity: "12 Litres",seatHeight: "782 mm",kerbWeight: "142 Kg",},
        {id: 2, name: "CBR 300R", model: "2013-2022", enginePower: "286CC", price: "$4799",img : cbr300r, maxPower: "	30.4 HP @ 8500 rpm", maxTorque: "	27.1 Nm @ 7250 rpm", maxSpeed: "157.716 kmh", coolingSystem: "liquid-cool", totalGear: "6-Speed", fuelCapacity: "13 Litres",seatHeight: "785 mm",kerbWeight: "164 kg",},
        {id: 3, name: "CBR 500R", model: "2012-2022", enginePower: "471CC", price: "$6999",img : cbr500r,maxPower: "35 kW @ 8600 rpm", maxTorque: "43 N⋅m @ 6500 rpm", maxSpeed: "180 km/h", coolingSystem: "liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 Litres",seatHeight: "785mm",kerbWeight: "192kg",},
        {id: 4, name: "CBR 650R", model: "2013-2022", enginePower: "649CC", price: "$9699",img : cbr650r, maxPower: "70 kW (94 hp) at 12,000 rpm", maxTorque: "63 N⋅m (46 lbf⋅ft) at 8,500 rpm", maxSpeed: "240 km/h", coolingSystem: "Liquid Cool", totalGear: "6-Speed", fuelCapacity: "15.4 litres", seatHeight: "810mm", kerbWeight: "211 kg",},
        {id: 5, name: "CBR 1000RR-R", model: "2020-2022", enginePower: "1000 cc", price: "$28500",img : cbr1000rrr, maxPower: "160Kw @ 14,500rpm", maxTorque: "113Nm @ 12,500rpm", maxSpeed: "297 km/h", coolingSystem: " liquid-cooled", totalGear: "6-Speed", fuelCapacity: "16.1 litres",seatHeight: "830 mm",kerbWeight: " 201Kg ",},
        {id: 6, name: "CB 1000R", model: "2015-2022", enginePower: "998CC", price: "$12999",img : cb1000r, maxPower: "143 HP @ 10,500 rpm", maxTorque: "	104 Nm @ 8,250 rpm", maxSpeed: "241 km/h", coolingSystem: "Liquid-cooled", totalGear: "6-Speed", fuelCapacity: "16.2 Litres",seatHeight: "830 mm",kerbWeight: "213kg",},
        {id: 7, name: "CB 400SF", model: "1992-2022", enginePower: "399CC", price: "$12300",img : cb400sf, maxPower: "41 kW (55 hp) @ 11,000 rpm", maxTorque: "	39 N⋅m (29 lbf⋅ft) @ 9,500 rpm", maxSpeed: "193km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "18 Litres",seatHeight: "755 mm",kerbWeight: "200 kg",},
        {id: 8, name: "CB 150R", model: "2018-2022", enginePower: "149CC", price: "$2000",img : cb150r, maxPower: "20HP", maxTorque: "14.5 Nm @ 5500rpm.", maxSpeed: "128 km/h", coolingSystem: "liquid cool", totalGear: "6 Speed", fuelCapacity: "8.5 Litres",seatHeight: "795 mm",kerbWeight: "123 kg",},
        {id: 9, name: "GL 1800", model: "2001-2017", enginePower: "1833CC", price: "$48000",img : gl1800, maxPower: "900 kW / 5.500 rpm", maxTorque: "170 Nm / 4.500 rpm", maxSpeed: "225km/h", coolingSystem: "Liquid cool", totalGear: "6-Speed", fuelCapacity: "21 Liters",seatHeight: "745mm",kerbWeight: "390kg",},
        {id: 10, name: "CBX 1000", model: "1978-1982", enginePower: "1047CC", price: "$14200",img : cbx1000, maxPower: "105 hp (78 kW)@ 9,000 rpm ", maxTorque: "85 N m / 8000 rpm", maxSpeed: "225km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "20 litres",seatHeight: "810 mm",kerbWeight: "272 kg",},
      ]);


    return (
        <div className="hondaContainer">
            <div className = "bikeContainer">
                <div className = "bikeContainerBaby">
                    {hondaBikeInfo.map((eachBike) => <HondaBikeTroop eachBike={eachBike}/>)}
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
export default HondaBike;