import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios.js";
function Payment() {
	const navigate = useNavigate();
	const [{ basket, user }, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		//generate the special stripe secret which allowws us to charge a customer
		async function getClientSecret() {
			const response = await axios({
				method: "post",
				//stripe expects the total in a currencies subunits
				url: `/payment/create?total=${ getBasketTotal(basket) * 100 }`,
			});

			setClientSecret(response.data.clientSecret);
		}
		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		//do all the fancy stuff
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//payment intent =payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				navigate.replace("/orders");
			});
	};

	const handleChange = (e) => {
		// listen for changes in the different in the CArd Element
		// and display any errors as the customers types their card details

		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user.email}</p>
						<p>123 React lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* payment Method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<p>
									Order Total({basket.length} items):
									<strong>${getBasketTotal(basket)}</strong>
								</p>
								<small className="subtotal__gift">
									<input type="checkbox" />
									This order contains a gift
								</small>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy now"}</span>
								</button>
							</div>

							{/* ERRORS */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;


