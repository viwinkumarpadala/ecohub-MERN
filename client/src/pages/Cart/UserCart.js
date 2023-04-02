import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import "./Cart.css";

const UserCart = (props) => {
	const userDetails = useSelector((state) => state.userDet);
	// console.log(userDetails);
	const tempCart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	let cart = [];

	tempCart.forEach((cartItem) => {
		cart.push({ ...cartItem, count: 1 });
	});

	// console.log(cart);

	const calculateTotal = () => {
		let t = 0;
		finalCart.forEach((cartItem) => {
			t += cartItem.d_price * cartItem.count;
		});
		setTotal(t);
	};

	const [total, setTotal] = useState(0);

	const [finalCart, setFinalCart] = useState(cart);

	const getCartDetails = async () => {
		let temp = await Axios.post("http://localhost:5000/users/get-cart", {
			email: userDetails.email,
		});
		console.log(temp)
		const data = temp.data.results[0];
		const tempCart = data.cart;
		const cart = [];
		tempCart.forEach((cartItem) => {
			cart.push({ ...cartItem, count: 1 });
		});
		// console.log(cart);
		setFinalCart(cart);
	};

	useEffect(() => {
		getCartDetails();
		calculateTotal();
	}, []);

	/*eslint-disable no-array-constructor*/
	const inputRef = useRef(new Array());

	const changeHandler = (id) => {
		setFinalCart((prevCartItems) => {
			const index = prevCartItems.findIndex((obj) => id === obj._id.$oid);
			// console.log(index);
			// console.log(inputRef);
			if (index !== -1) {
				prevCartItems[index].count = parseInt(
					inputRef.current[index].value
				);
				calculateTotal();
				// console.log(prevDishes)
			}
			return prevCartItems;
		});
	};

	const purchase = async () => {
		const text = `\n\nYour bill is: $${total}\n\nYour items are: \n${finalCart.map(
			(cartItem) => {
				return `${cartItem.name} - ${cartItem.count}\n`;
			}
		)}\nThank you for shopping with us!\nHoping to see you soon Customer.`;
		alert(text);
		dispatch({ type: "clear-cart" });
		setFinalCart([]);
		await Axios.post("http://localhost:5000/users/empty-cart", {
			user_id: userDetails._id,
		});
		navigate("/show-cart");
	};

	const removeItemFromCart = async (id) => {
		const response = await Axios.post(
			"http://localhost:5000/users/remove-from-cart",
			{
				product_id: id,
				user_id: userDetails._id,
			}
		);
		navigate("/electric-products");
	};

	const getDetails = (detail) => {
		// console.log(detail);
		return (
			<div className="cart-items">
				<div className="cart-row">
					<div className="cart-item cart-column">
						<span className="cart-item-title">
							{" "}
							{detail.name} &nbsp;
							<span
								style={{ fontSize: 12, fontStyle: "oblique" }}>
								({detail._id})
							</span>{" "}
						</span>
					</div>

					<span className="cart-price cart-column">
						₹ {parseFloat(detail.d_price).toFixed(2)}{" "}
					</span>

					<div className="cart-quantity cart-column">
						<input
							className="cart-quantity-input"
							type="number"
							defaultValue={detail.count}
							min={1}
							onChange={() => changeHandler(detail._id.$oid)}
							ref={(element) => inputRef.current.push(element)}
						/>
						<button
							className="btn btn-danger"
							type="button"
							onClick={() => {
								// props.removeFromCart(detail.id);
								removeItemFromCart(detail._id);
								setFinalCart((prevCart) => {
									console.log(prevCart);
									return prevCart.filter(
										(cartItem) =>
											cartItem._id.$oid !==
											detail._id.$oid
									);
								});

								navigate("/show-cart");
							}}>
							REMOVE
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div>
				<Navbar />
				<h2 className="section-header">Welcome to Cart!</h2>

				{finalCart.length !== 0 ? (
					<>
						<div style={{ padding: 20 }}>
							<div className="cart-row">
								<span className="cart-item cart-header cart-column">
									ITEM
								</span>

								<span className="cart-price cart-header cart-column">
									PRICE
								</span>
								<span className="cart-quantity cart-header cart-column">
									QUANTITY
								</span>
							</div>

							{finalCart.map((cartItem) => getDetails(cartItem))}

							<div className="cart-total">
								<strong className="cart-total-title">
									Total
								</strong>
								<span
									className="cart-total-price"
									id="finalPrice">
									₹{total.toFixed(2)}
								</span>
							</div>
							<div
								style={{
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
								}}>
								<button
									className="btn-primary"
									type="button"
									onClick={() =>
										navigate("/electric-products")
									}
									style={{
										width: 230,
										height: 60,
										fontSize: 20,
									}}>
									Continue shopping
								</button>
							</div>

							<button
								className="btn btn-primary btn-purchase"
								type="button"
								onClick={purchase}>
								PURCHASE
							</button>
						</div>
					</>
				) : (
					<>
						<div className="middle">
							<p>
								Maybe your cart is empty, add elements and visit
								here again.
							</p>
						</div>
						<button
							className="btn btn-primary btn-purchase"
							type="button"
							onClick={() => navigate("/electric-products")}>
							Start Shopping
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default UserCart;
