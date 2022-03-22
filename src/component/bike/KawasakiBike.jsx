import React from "react";
import './bike.css';
import logoImage from "../photoStore/ymhLogoWhite.jfif"
import {useRef,useState} from 'react';
import {useInView} from "react-intersection-observer";
import KawasakiBikeTroop from "./KawasakiBikeTroop";
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


import ninjaH2r from "../photoStore/ninjaH2r.jpg";
import kawasakiEr6f from "../photoStore/kawasakiEr6f.jpg";
import kawasakiZ1000 from "../photoStore/kawasakiZ1000.jpg";
import kawasakiZ900 from "../photoStore/kawasakiZ900.jpg";
import kawasakiZx10r from "../photoStore/kawasakiZx10r.jpg";
import kawasakiZx6r from "../photoStore/kawasakiZx6r.jpg";
import kawasakiZx14r from "../photoStore/kawasakiZx14r.jpg";
import kawasakiZx25r from "../photoStore/kawasakiZx25r.jpg";
import kawasakiNinja300 from "../photoStore/kawasakiNinja300.jpg";
import kawasakiZ650 from "../photoStore/kawasakiZ650.jpg";



const KawasakiBike = () => {

    const [kawasakiBikeInfo] = useState([
        {id: 1, name: "Kawasaki Ninja H2R", model: "2015-2022", enginePower: "998CC", price: "$50000",img : ninjaH2r,maxPower: "310 HP @ 14000 rpm", maxTorque: "115lb-ft @ 12500 rpm", maxSpeed: "400 km/h", coolingSystem: "liquid cool", totalGear: "6-Speed ", fuelCapacity: "17 Litres",seatHeight: "830mm",kerbWeight: "215.9 Kg",},
        {id: 2, name: "Kawasaki Er-6F", model: "2006-2017", enginePower: "649CC", price: "$-",img : kawasakiEr6f, maxPower: "72.1 Hp @ 8500 rpm", maxTorque: "66 N⋅m @ 7,000 rpm", maxSpeed: "209 km/h", coolingSystem: "liquid-cool", totalGear: "6-Speed", fuelCapacity: "16 Litres",seatHeight: "805mm",kerbWeight: "211 kg",},
        {id: 3, name: "Kawasaki Z1000", model: "2003-2022", enginePower: "1043CC", price: "$11000",img : kawasakiZ1000,maxPower: "142 hp @ 10000 rpm", maxTorque: "111 N⋅m @ 7300 rpm", maxSpeed: "258 km/h", coolingSystem: "liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 Litres",seatHeight: "815.3mm",kerbWeight: "220kg",},
        {id: 4, name: "Kawasaki Z900", model: "2017-2022", enginePower: "948CC", price: "$8999",img : kawasakiZ900, maxPower: "125px @ 9500rpm", maxTorque: "98.6 N⋅m  @ 7700 rpm", maxSpeed: "253 km/h", coolingSystem: "Liquid Cool", totalGear: "6-Speed", fuelCapacity: "17 litres", seatHeight: "800mm", kerbWeight: "212 kg",},
        {id: 5, name: "Kawasaki Zx10r", model: "2004-2022", enginePower: "998 cc", price: "$17,699",img : kawasakiZx10r, maxPower: "203 PS @ 13200 rpm", maxTorque: "114.9 Nm @ 11400 rpm", maxSpeed: "299 km/h", coolingSystem: " liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 litres",seatHeight: "835 mm",kerbWeight: " 206 kg ",},
        {id: 6, name: "Kawasaki Zx6r", model: "1995-2022", enginePower: "600CC", price: "$10799",img : kawasakiZx6r, maxPower: "129.3 HP @ 13,500 rpm", maxTorque: "62.87 Nm @ 11,375 rpm", maxSpeed: "260 km/h", coolingSystem: "Liquid-cooled", totalGear: "6-Speed", fuelCapacity: "18 Litres",seatHeight: "830mm",kerbWeight: "192kg",},
        {id: 7, name: "Kawasaki Zx14r", model: "2006-2020", enginePower: "1441CC", price: "$18,099",img : kawasakiZx14r, maxPower: "200 Ps  @ 10,000 rpm", maxTorque: "158.2 Nm @ 7,500 rpm", maxSpeed: "299km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "22 Litres",seatHeight: "800 mm",kerbWeight: "269 kg",},
        {id: 8, name: "Kawasaki Zx25r", model: "2020-2022", enginePower: "249.8CC", price: "$10500",img : kawasakiZx25r, maxPower: "51 HP @ 15500 rpm", maxTorque: "22.9 N⋅m @ 14500 rpm", maxSpeed: "187 km/h", coolingSystem: "liquid cool", totalGear: "6 Speed", fuelCapacity: "15 Litres",seatHeight: "875 mm",kerbWeight: "182 kg",},
        {id: 9, name: "Kawasaki Ninja 300", model: "2013-2022", enginePower: "296CC", price: "$4999",img : kawasakiNinja300, maxPower: "39 HP @ 11000 rpm", maxTorque: "23.66 Nm @ 9750 rpm", maxSpeed: "192km/h", coolingSystem: "Liquid cool", totalGear: "6-Speed", fuelCapacity: "17 Liters",seatHeight: "785mm",kerbWeight: "174kg",},
        {id: 10, name: "Kawasaki Z650", model: "2017-2022", enginePower: "649CC", price: "$7249",img : kawasakiZ650, maxPower: "68 Ps @ 8000 rpm", maxTorque: "64 N m / 6700 rpm", maxSpeed: "200km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "15 litres",seatHeight: "790 mm",kerbWeight: "191 kg",},
    ]);


    return (
        <div className="kawasakiContainer">
            <div className = "bikeContainer">
                <div className = "bikeContainerBaby">
                    {kawasakiBikeInfo.map((eachBike) => <KawasakiBikeTroop eachBike={eachBike}/>)}
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
export default KawasakiBike;