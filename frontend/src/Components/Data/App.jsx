import {useState, useEffect} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import {UserContext} from "../frontend/src/UserContext";

import Index from "./Components/Index";
//
//
//
// import RequestQuote from "./Components/REquestQutoe/RequestQuote";
//
//
//
// import SignIn from "./Components/Signin/signin";
//
//
//
// import Signup from "./Components/Signup/Signup";
//
//
//
// import Checkout from "./Components/CheckoutComponent/Checkout";
//
//
//
// import ProductComponent from "./Components/ProductOverview/ProductComponent.jsx";
//
//
//
// import CartPopup from "./Components/CartPage/CartPopup";


import {Toaster} from "react-hot-toast";


import axios from "axios";
// import OrderHistory from "./Components/OrderHistory/OrderHistory";
//
// import CenteredIcon from "./Components/CenteredIcon/CenteredIcon";
import {products} from './Data/API.js'

function App() {
	const [id, setId] = useState('');
	const [ItemNo, setItemNo] = useState('');
	const [qnty, setQnty] = useState('');
	const [price, setPrice] = useState('');
	const [Description, setDescription] = useState('');
	const [Description2, setDescription2] = useState('');
	const [SearchDescription, setSearchDescription] = useState('');
	const [Blocked, setBlocked] = useState('');
	const [CompoundNumber, setCompoundNumber] = useState('');
	const [Material, setMaterial] = useState('');
	const [Durometer, setDurometer] = useState('');
	const [DurometerScale, setDurometerScale] = useState('');
	const [DurometerRange, setDurometerRange] = useState('');
	const [color, setColor] = useState('');
	const [LowTemperature, setLowTemperature] = useState('');
	const [FDACompliant, setFDACompliant] = useState('');
	const [MaterialSubtype, setMaterialSubtype] = useState('');
	const [brand, setBrand] = useState('');
	const [MaterialNotes, setMaterialNotes] = useState('');
	const [CrossSectionalGeometry, setCrossSectionalGeometry] = useState('');
	const [CrossSectionalDiameter, setCrossSectionalDiameter] = useState('');
	const [InsideDiameter, setInsideDiameter] = useState('');
	const [SizeAS568, setSizeAS568] = useState('');
	const [SizeMetric, setSizeMetric] = useState('');
	const [SizeJIS, setSizeJIS] = useState('');
	const [SizeStandard, setSizeStandard] = useState('');
	const [Online, setOnline] = useState('');
	const [page_size, setPageSize] = useState(10);
	const [url, setUrl] = useState(`api/products/?id=${id}&ItemNo=${ItemNo}&qnty=${qnty}&price=${price}&Description=${Description}&Description2=${Description2}&SearchDescription=${SearchDescription}&Blocked=${Blocked}&CompoundNumber=${CompoundNumber}&Material=${Material}&Durometer=${Durometer}&DurometerScale=${DurometerScale}&DurometerRange=${DurometerRange}&Color=${color}&LowTemperature=${LowTemperature}&FDACompliant=${FDACompliant}&MaterialSubtype=${MaterialSubtype}&Brand=${brand}&MaterialNotes=${MaterialNotes}&CrossSectionalGeometry=${CrossSectionalGeometry}&CrossSectionalDiameter=${CrossSectionalDiameter}&InsideDiameter=${InsideDiameter}&SizeAS568=${SizeAS568}&SizeMetric=${SizeMetric}&SizeJIS=${SizeJIS}&SizeStandard=${SizeStandard}&Online=${Online}&limit=${page_size}`)
	const [da, setDa] = useState('')

	const getData = async () => {
		const a = await products(url)
		setDa(a)
		console.log(a.data)
	}

	useEffect(() => {
		getData()
	}, []);

	return (
		<>
			<h1>HELLO</h1>
			<button onClick={async () => {
				setUrl(da.data.next)
				console.log(await products(url))

			}}>Click
			</button>
		</>
	)
}

export default App
