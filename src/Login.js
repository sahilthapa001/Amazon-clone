import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {

				navigate("/");
			})
			.catch((error) => alert(error.message));

		///som fancy firebase login
	};
	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));

		///som fancy firebase REGISTER
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
					alt="img"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login__signInButton" onClick={signIn}>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to Amazon's Fake clone Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Intrest Based Ads Notice.
				</p>
				<button className="login__registerButton" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
