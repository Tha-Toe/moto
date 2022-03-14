import './App.css';
import {useState} from "react";
import Home from './component/home/Home';
import { Route, Switch } from "react-router-dom";
import BikeDetail from './component/bike/BikeDetail';
import r15Img from "./component/photoStore/r15Img.webp";
import r3Img from "./component/photoStore/r3Img.jpg";
import r6Img from "./component/photoStore/r6Img.jpg";
import r7Img from "./component/photoStore/r7Img.jfif";
import r1Img from "./component/photoStore/r1Img.jpg";
import r1mImg from "./component/photoStore/r1mImg.jpg";
import mt09Img from "./component/photoStore/mt-09Img.jpg";
import fz1fazer from "./component/photoStore/fz-1fazer.webp";
import wr155rImg from "./component/photoStore/wr155rImg.jpg";
import xsrissImg from "./component/photoStore/xsrissImg.webp";

function App() {

  const [bikeInfoApp,setBikeInfoApp] = useState([
    {id: 1, name: "Yamaha YZF-R15", model: "2008-2022", enginePower: "155CC", price: "$2078",img : r15Img,maxPower: "18.6 HP @ 10,000 rpm", maxTorque: "14.1 Nm @ 8500 rpm", maxSpeed: "155 km/h", coolingSystem: "liquid cool", totalGear: "6-Speed ", fuelCapacity: "11 Litres",seatHeight: "815mm",kerbWeight: "142 Kg",},
    {id: 2, name: "Yamaha YZF-R3", model: "2015-2022", enginePower: "321CC", price: "$5299",img : r3Img, maxPower: "31 kW (42 hp) @ 10,750 rpm", maxTorque: "21.8 lb⋅ft (29.6 N⋅m) @ 9,000 rpm", maxSpeed: "180 km/h", coolingSystem: "liquid-cool", totalGear: "6-Speed", fuelCapacity: "14 Litres",seatHeight: "780mm",kerbWeight: "167 kg",},
    {id: 3, name: "Yamaha YZF-R6", model: "1999-2022", enginePower: "599CC", price: "$12,199",img : r6Img,maxPower: "87.1 kW (116.8 bhp) @ 14,500 rpm", maxTorque: "61.7 N⋅m (45.5 lb⋅ft) @ 10,500 rpm", maxSpeed: "260 km/h", coolingSystem: "liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 Litres",seatHeight: "850mm",kerbWeight: "190kg",},
    {id: 4, name: "Yamaha YZF-R7", model: "1999,2022", enginePower: "689CC", price: "$11,099",img : r7Img, maxPower: "72 bhp", maxTorque: "72 N⋅m (53 lbf⋅ft) @ 8,000 rpm", maxSpeed: "262 km/h", coolingSystem: "Liquid Cool", totalGear: "6-Speed", fuelCapacity: "13 litres", seatHeight: "835mm", kerbWeight: "189 kg",},
    {id: 5, name: "Yamaha YZF-R1", model: "1998-2022", enginePower: "998 cc", price: "$17,399",img : r1Img, maxPower: "200 PS @ 13500 rpm", maxTorque: "112.4 Nm @ 11500 rpm", maxSpeed: "293 km/h", coolingSystem: " liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 litres",seatHeight: "855 mm",kerbWeight: " 199 kg ",},
    {id: 6, name: "Yamaha YZF-R1M", model: "2015-2022", enginePower: "998CC", price: "$26,099",img : r1mImg, maxPower: "200 HP @ 13,500 rpm", maxTorque: "113.3 Nm @ 11,500 rpm", maxSpeed: "299 km/h", coolingSystem: "Liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17 Litres",seatHeight: "860mm",kerbWeight: "202kg",},
    {id: 7, name: "Yamaha MT-09", model: "2017-2022", enginePower: "890CC", price: "$8,999",img : mt09Img, maxPower: "85.7 kW (114.9 hp; 116.5 PS) @ 10,000 rpm", maxTorque: "88 N⋅m (65 lbf⋅ft) @ 8,500 rpm", maxSpeed: "225km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "14 Litres",seatHeight: "820 mm",kerbWeight: "188 kg",},
    {id: 8, name: "Yamaha FZ-1 Fazer", model: "2006-2015", enginePower: "988CC", price: "$8460",img : fz1fazer, maxPower: "148 Bhp @ 11000 rpm", maxTorque: "106.8 N⋅m (78.8 lbf⋅ft) @ 8,000 rpm", maxSpeed: "255 km/h", coolingSystem: "liquid cool", totalGear: "6 Speed", fuelCapacity: "18 Litres",seatHeight: "815 mm",kerbWeight: "214 kg",},
    {id: 9, name: "Yamaha WR 155R", model: "2020-2022", enginePower: "155CC", price: "$3100",img : wr155rImg, maxPower: "16.7 PS @ 10000 rpm", maxTorque: "14.3 Nm @ 6500 rpm", maxSpeed: "151km/h", coolingSystem: "Liquid cool", totalGear: "6-Speed", fuelCapacity: "8.1 Liters",seatHeight: "880mm",kerbWeight: "134kg",},
    {id: 10, name: "Yamaha XSRISS", model: "2019-2022", enginePower: "155CC", price: "$1970",img : xsrissImg, maxPower: "14.2 kW / 10000 rpm", maxTorque: "14.7 N m / 8500 rpm", maxSpeed: "135km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "10 litres",seatHeight: "810 mm",kerbWeight: "134 kg",},
]);

  return (
    <div className='aContainer'>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/detail/:id">
          <BikeDetail bikeInfoApp = {bikeInfoApp}/>
        </Route>
      </Switch> 
    </div>
  )
}

export default App;
