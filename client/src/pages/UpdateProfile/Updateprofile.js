import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateProfile.css";

const Updateprofile = (props) => {
	const navigate = useNavigate();
	const cityRef = useRef();
	const fullnameRef = useRef();
	const usernameRef = useRef();
	const phoneNumberRef = useRef();
	const emailRef = useRef();
	const imageRef = useRef();
	const addressRef = useRef();
	const passwordRef = useRef();

	const updatehandler = async (event) => {
		event.preventDefault();
		const details = {
			id: props.user._id,
			fullname: fullnameRef.current.value,
			username: usernameRef.current.value,
			city: cityRef.current.value,
			phoneNumber: phoneNumberRef.current.value,
			email: props.user.email,
			image_url: imageRef.current.value,
			address: addressRef.current.value,
			password: passwordRef.current.value,
		};

		await axios.post("http://localhost:5000/users/update-profile", details);
		alert("Successfully updated profile");
		navigate("/");
	};

	return (
		<>
			<Navbar />
			<br />
			<div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
				<div class="wrapper wrapper--w680">
					<div class="card card-4">
						<div class="card-body">
							<b>
								<h1>Update profile</h1>
							</b>
							<br />
							<form onSubmit={updatehandler}>
								<div className="row row-space">
									<div className="col-2">
										<div className="input-group">
											<label className="label">
												Username:
											</label>
											<input
												type="text"
												placeholder="Name"
												defaultValue={
													props.user.username
												}
												id="username"
												ref={usernameRef}
												name="username"
												className="input"
												autoComplete="off"
												required
											/>
										</div>
									</div>
									<div className="col-2">
										<div className="input-group">
											<label className="label">
												Full Name:
											</label>
											<input
												type="text"
												placeholder="Name"
												defaultValue={
													props.user.fullname
												}
												id="name"
												ref={fullnameRef}
												name="name"
												className="input"
												autoComplete="off"
												required
											/>
										</div>
									</div>
								</div>

								<div className="row row-space">
									<div className="col">
										<div className="input-group">
											<label className="label">
												Email ID:
											</label>
											<input
												type="text"
												placeholder="Email"
												id="email"
												name="email"
												className="input"
												defaultValue={props.user.email}
												ref={emailRef}
												autoComplete="off"
												required
												disabled
											/>
										</div>
									</div>
								</div>

								<div className="row row-space">
									<div className="col">
										<div className="input-group">
											<label className="label">
												Password:
											</label>
											<input
												type="text"
												placeholder="Email"
												id="password"
												name="password"
												className="input"
												defaultValue={
													props.user.password
												}
												ref={passwordRef}
												autoComplete="off"
												required
											/>
										</div>
									</div>
								</div>

								<div className="row row-space">
									<div className="col-2">
										<div className="input-group">
											<label className="label">
												Phone Number:
											</label>
											<input
												type="text"
												placeholder="Phone"
												id="phone"
												name="phone"
												className="input"
												ref={phoneNumberRef}
												defaultValue={
													props.user.phone_number
												}
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="col-2">
										<div className="input-group">
											<label className="label">
												City:
											</label>
											<input
												type="text"
												defaultValue={props.user.city}
												id="city"
												name="city"
												className="input"
												ref={cityRef}
												autoComplete="off"
												required
											/>
										</div>
									</div>
								</div>
								<div className="row row-space">
									{/* <div className="col">
                                      <div className="input-group">
                                          <label className="label">Password:</label>
                                          <input className="input--style-4" type="password" name="password" value="<%= user.password %>" required pattern=".{8,}" title="Minimum 8 required"/>
                                      </div>
                                  </div> */}
									<div className="row row-space">
										<div className="col">
											<div className="input-group">
												<label className="label">
													Address:
												</label>
												<input
													type="text"
													defaultValue={
														props.user.address
													}
													id="address"
													name="address"
													className="input"
													ref={addressRef}
													autoComplete="off"
													required
												/>
											</div>
										</div>
									</div>
									<div className="row row-space">
										<div className="col">
											<div className="input-group">
												<label className="label">
													Link for Profile Image:{" "}
												</label>
												<input
													type="text"
													placeholder="image url"
													id="imageurl"
													name="imageurl"
													className="input"
													defaultValue={
														props.user.img_url
													}
													ref={imageRef}
													autoComplete="off"
												/>
											</div>
										</div>
									</div>
								</div>
								<div class="p-t-15">
									<button className="button-43" type="submit">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	);
};

export default Updateprofile;
