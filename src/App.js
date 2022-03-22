import './App.css';
import {useState} from "react";
import Home from './component/home/Home';
import { Route, Switch } from "react-router-dom";
import YamahaBikeDetail from './component/bike/YamahaBikeDetail';
import DucatiBikeDetail from './component/bike/DucatiBikeDetail';
import HondaBikeDetail from './component/bike/HondaBikeDetail';
import KawasakiBikeDetail from './component/bike/KawasakiBikeDetail';

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
import YamahaBike from './component/bike/YamahaBike';
import DucatiBike from './component/bike/DucatiBike';
import HondaBike from './component/bike/HondaBike';
import KawasakiBike from './component/bike/KawasakiBike';

import cbr150r from "./component/photoStore/cbr150r.png";
import cbr300r from "./component/photoStore/cbr300r.webp";
import cbr500r from "./component/photoStore/cbr500r.jpg";
import cbr650r from "./component/photoStore/cbr650r.jpg";
import cbr1000rrr from "./component/photoStore/cbr1000rrr.avif";
import cb1000r from "./component/photoStore/cb1000r.webp";
import cb400sf from "./component/photoStore/cb400sf.jpg";
import cb150r from "./component/photoStore/cb150r.jpg";
import gl1800 from "./component/photoStore/gl1800.jfif";
import cbx1000 from "./component/photoStore/cbx1000.jpg";

import ducati916 from "./component/photoStore/ducati916.jpg";
import ducatiPanigaleV4 from "./component/photoStore/ducatiPanigaleV4.jpeg";
import ducatiMonster from "./component/photoStore/ducatiMonster.webp.crdownload";
import ducatiSportClassic from "./component/photoStore/ducatiSportClassic.jpg";
import ducatiHyperMotard950Sp from "./component/photoStore/ducatiHyperMotard950Sp.jpg";
import ducatiDesmosediciRR from "./component/photoStore/ducatiDesmosediciRR.jpg";
import ducatiScrambler from "./component/photoStore/ducatiScrambler.jpg";
import ducatiStreetFighterV4 from "./component/photoStore/ducatiStreetFighterV4.jpg";
import ducati899Panigale from "./component/photoStore/ducati899Panigale.jpg";
import ducati1299Panigale from "./component/photoStore/ducati1299Panigale.jpg";

import ninjaH2r from "./component/photoStore/ninjaH2r.jpg";
import kawasakiEr6f from "./component/photoStore/kawasakiEr6f.jpg";
import kawasakiZ1000 from "./component/photoStore/kawasakiZ1000.jpg";
import kawasakiZ900 from "./component/photoStore/kawasakiZ900.jpg";
import kawasakiZx10r from "./component/photoStore/kawasakiZx10r.jpg";
import kawasakiZx6r from "./component/photoStore/kawasakiZx6r.jpg";
import kawasakiZx14r from "./component/photoStore/kawasakiZx14r.jpg";
import kawasakiZx25r from "./component/photoStore/kawasakiZx25r.jpg";
import kawasakiNinja300 from "./component/photoStore/kawasakiNinja300.jpg";
import kawasakiZ650 from "./component/photoStore/kawasakiZ650.jpg";


function App() {

  const [yamahaBikeInfoApp] = useState([
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
const [ducatiBikeInfoApp] = useState([
  {id: 1, name: "Ducati 916", model: "1994-1998", enginePower: "966CC", price: "$11768",img : ducati916,maxPower: "114 HP @ 9,000 rpm", maxTorque: "67lb-ft @ 6900 rpm", maxSpeed: "257 km/h", coolingSystem: "liquid cool", totalGear: "6-Speed ", fuelCapacity: "14 Litres",seatHeight: "790mm",kerbWeight: "194.5 Kg",},
  {id: 2, name: "Ducati Panigale V4", model: "2018-2022", enginePower: "1103CC", price: "$26290",img : ducatiPanigaleV4, maxPower: "211.2hp @ 13000 rpm", maxTorque: "91 lb⋅ft @ 10,000 rpm", maxSpeed: "374 km/h", coolingSystem: "liquid-cool", totalGear: "6-Speed", fuelCapacity: "16 Litres",seatHeight: "830mm",kerbWeight: "175 kg",},
  {id: 3, name: "Ducati Monster", model: "1993-", enginePower: "937CC", price: "$13640",img : ducatiMonster,maxPower: "111hp @ 19250 rpm", maxTorque: "69  lb⋅ft @ 65,00 rpm", maxSpeed: "226 km/h", coolingSystem: "liquid-cooled", totalGear: "6-Speed", fuelCapacity: "17.5 Litres",seatHeight: "770mm",kerbWeight: "166kg",},
  {id: 4, name: "Sport 1000 Classic", model: "2006-", enginePower: "992CC", price: "$12500",img : ducatiSportClassic, maxPower: "91hp @ 8000rpm", maxTorque: "67 lbf⋅ft @ 6,000 rpm", maxSpeed: "217 km/h", coolingSystem: "Liquid Cool", totalGear: "6-Speed", fuelCapacity: "15 litres", seatHeight: "825mm", kerbWeight: "179 kg",},
  {id: 5, name: "Hypermotard 950 SP", model: "2019-2022", enginePower: "937 cc", price: "$19620",img : ducatiHyperMotard950Sp, maxPower: "114hp @ 9000 rpm", maxTorque: "71pf-ft @ 7250 rpm", maxSpeed: "223 km/h", coolingSystem: " liquid-cooled", totalGear: "6-Speed", fuelCapacity: "14.5 litres",seatHeight: "870 mm",kerbWeight: " 200 kg ",},
  {id: 6, name: "Desmosedici RR", model: "2007-2008", enginePower: "989CC", price: "$72500",img : ducatiDesmosediciRR, maxPower: "197.3 HP @ 13,800 rpm", maxTorque: "85lb-ft @ 10,500 rpm", maxSpeed: "303 km/h", coolingSystem: "Liquid-cooled", totalGear: "6-Speed", fuelCapacity: "15 Litres",seatHeight: "830mm",kerbWeight: "193kg",},
  {id: 7, name: "Ducati Scrambler", model: "2015-2022", enginePower: "1079CC", price: "$14,440",img : ducatiScrambler, maxPower: "86 HP @ 75000 rpm", maxTorque: "61 lbf⋅ft @ 4750 rpm", maxSpeed: "209km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "15 Litres",seatHeight: "810 mm",kerbWeight: "189 kg",},
  {id: 8, name: "StreetFighter V4", model: "2020-2022", enginePower: "1103CC", price: "$19995",img : ducatiStreetFighterV4, maxPower: "208 @ 13000 rpm", maxTorque: "123 N⋅m @ 115,00 rpm", maxSpeed: "289 km/h", coolingSystem: "liquid cool", totalGear: "6 Speed", fuelCapacity: "16 Litres",seatHeight: "845 mm",kerbWeight: "178 kg",},
  {id: 9, name: "Ducati 899 Panigale", model: "2013-2015", enginePower: "898CC", price: "$15000",img : ducati899Panigale, maxPower: "148 Hp @ 10750 rpm", maxTorque: "99 Nm @ 9000 rpm", maxSpeed: "287km/h", coolingSystem: "Liquid cool", totalGear: "6-Speed", fuelCapacity: "17 Liters",seatHeight: "830mm",kerbWeight: "169kg",},
  {id: 10, name: "Ducati 1299 Panigale", model: "2015-", enginePower: "1285CC", price: "$19295",img : ducati1299Panigale, maxPower: "205hp @ 10500 rpm", maxTorque: "106.71 lb-ft / 8750 rpm", maxSpeed: "296km/h", coolingSystem: "liquid cool", totalGear: "6-Speed", fuelCapacity: "17 litres",seatHeight: "830 mm",kerbWeight: "191 kg",},
]);
const [hondaBikeInfoApp] = useState([
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
const [kawasakiBikeInfoApp] = useState([
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
    <div className='aContainer'>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>

        <Route  path="/yamaha" exact>
          <YamahaBike />
        </Route>
          <Route path="/yamaha/YamahaBikeDetail/:id">
            <YamahaBikeDetail bikeInfoApp = {yamahaBikeInfoApp}/>
          </Route>

        <Route  path="/ducati" exact>
          <DucatiBike />
        </Route>
          <Route path="/ducati/DucatiBikeDetail/:id">
            <DucatiBikeDetail bikeInfoApp = {ducatiBikeInfoApp}/>
          </Route>

        <Route  path="/honda" exact>
          <HondaBike />
        </Route>
          <Route path="/honda/HondaBikeDetail/:id">
            <HondaBikeDetail bikeInfoApp = {hondaBikeInfoApp}/>
          </Route>

        <Route  path="/kawasaki" exact>
          <KawasakiBike />
        </Route>
          <Route path="/kawasaki/KawasakiBikeDetail/:id">
            <KawasakiBikeDetail bikeInfoApp = {kawasakiBikeInfoApp}/>
          </Route>
      </Switch> 
    </div>
  )
}

export default App;
