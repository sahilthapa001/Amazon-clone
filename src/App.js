import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Layout from "./Layout";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51MABSoCbVoghWUkpn9KPQFalaIhUSCo8WyHgDVTCayMkekmB1D7HONqZeAOdPNroWim1ZOBEpcDPMwT2MzNqgQsT00KoNYEYdT"
);
function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//will only run once when the app component loads...
		onAuthStateChanged(auth, (authUser) => {
			console.log("the user is >>> ", authUser);
			if (authUser) {
				//the user jsut logged in / the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Elements stripe={promise}>
					<Routes>
						<Route path="/Login" element={<Login />}></Route>

						<Route path="/" element={<Layout />}>
							<Route path="/checkout" element={<Checkout />}></Route>

							<Route path="/" element={<Home />}></Route>

							<Route path="/payment" element={<Payment />}></Route>
						</Route>
					</Routes>
				</Elements>
			</div>
		</Router>
	);
}

export default App;
