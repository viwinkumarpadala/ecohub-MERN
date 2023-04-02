import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { sendMessageToAdmin } from "../../util/utils";

import "./ContactSM.css";

import guyPhoto from "./guy.png";

const ContactSalesManager = (props) => {
	const queryRef = useRef();
	const fullnameRef = useRef();
	const phoneNumberRef = useRef();

	const navigate = useNavigate();

	const submitHandler = async (event) => {
		event.preventDefault();
		const details = {
			user_id: props.user.id,
			fullname: fullnameRef.current.value,
			type: "Contact Sales Manager",
			message: queryRef.current.value,
			email: props.user.email,
		};

		// sending the details to backend admin messages
		sendMessageToAdmin(details);
		alert("Message sent")
		navigate("/");
	};

	return (
		<div>
			<Navbar />
			<div className="column left">
				<h1 style={{ fontSize: 50, paddingTop: 60 }}>Get a demo</h1>
				<p className="p0">Fill in the following details: </p>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Name"
						defaultValue={props.user.fullname}
						id="name"
						ref={fullnameRef}
						name="name"
						className="input"
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Your query here"
						id="query"
						name="query"
						className="input"
						ref={queryRef}
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Email"
						id="email"
						name="email"
						className="input"
						readOnly="true"
						disabled="true"
						defaultValue={props.user.email}
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Phone"
						id="phone"
						name="phone"
						className="input"
						ref={phoneNumberRef}
						defaultValue={props.user.phone_number}
						autoComplete="off"
					/>
					<br />
					<br />
					<button type="submit" className="submit">
						Submit
					</button>
				</form>
			</div>
			<div
				className="column right"
				style={{ backgroundColor: "#c5ead8" }}>
				<p className="p1">
					You can contact our highly trained marketing and sales agent
					regarding queries about not only electric products and
					vehicles, but also services for electric products completely
					for free!
				</p>
				<div className="container-csm">
					<div className="row">
						<div className="col-md-4">
							<img
								src={guyPhoto}
								className="img1"
								alt="alt"></img>
						</div>
						<div className="col-md-8">
							<div className="row">
								<h4>Mikkel Smith</h4>
							</div>
							<h5>Sales Manager</h5>
						</div>
					</div>
				</div>
				<p className="p2">
					Make sure you ask all your doubts now and here and Welcome
					to the world of ECOHUB! 💖
				</p>
			</div>
		</div>
	);
};

export default ContactSalesManager;
