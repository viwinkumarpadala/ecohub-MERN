import React, { useRef, useState } from "react";
import Axios from "axios";

const AutoCapitalizeWords = (givenString) => {
	const words = givenString.split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	const newWord = words.join(" ");
	console.log(newWord);
	return newWord;
};

const RegisterForm = (props) => {
	const [file, setFile] = useState();

	// Using Refs for input tags
	const usernameRef = useRef();
	const fullnameRef = useRef();
	const useremailRef = useRef();
	const passwordRef = useRef();
	const phoneNumberRef = useRef();
	const cityRef = useRef();
	const addressRef = useRef();
	const genderRef = useRef();
	const avatarRef = useRef();

	const send = async () => {
		// event.preventDefault();
		console.log(file);
		if (file !== undefined && file !== null) {
			const data = new FormData();
			data.append("testImage", file);
			data.append("email", useremailRef.current.value);
			console.log(...data);
			await Axios.post("http://localhost:5000/image/", data);
		} else {
			// alert("Please enter a file!");
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const details = {
			username: usernameRef.current.value,
			email: useremailRef.current.value,
			fullname: AutoCapitalizeWords(fullnameRef.current.value),
			phone_number: phoneNumberRef.current.value,
			password: passwordRef.current.value,
			city: AutoCapitalizeWords(cityRef.current.value),
			address: addressRef.current.value,
			gender: genderRef.current.checked ? "Male" : "Female",
			img_url: avatarRef.current.value,
		};

		// For radio -> ref.current.checked

		// console.log(details);

		/* props.onSubmitForm = onRegister (App.js) */

		props.onSubmitForm(details);
		if (file !== undefined && file !== null) {
			send();
		}
	};

	return (
		<>
			<div className="container signup_body">
				<div className="row">
					<div className="col-lg-10 col-xl-9 mx-auto">
						<div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
							<div className="card-img-left d-none d-md-flex"></div>
							<div className="card-body p-4 p-sm-5">
								<h5 className="card-title text-center mb-5 fw-light fs-9">
									Register
								</h5>

								<form
									onSubmit={submitHandler}
									autoComplete="off">
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="floatingInputUsername"
											placeholder="myusername"
											required
											autofocus
											name="username"
											ref={usernameRef}
										/>
										<label htmlFor="floatingInputUsername">
											Username{" "}
											<span className="span_login">
												*
											</span>{" "}
											(Will be shown publicly)
										</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="floatingInputFullName"
											placeholder="myinputname"
											required
											autofocus
											autoCapitalize={true}
											name="fullname"
											ref={fullnameRef}
										/>
										<label htmlFor="floatingInputFullName">
											Fullname{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="email"
											className="form-control"
											id="email"
											placeholder="name@example.com"
											name="email"
											required
											ref={useremailRef}
										/>
										<label htmlFor="floatingInputEmail">
											Email address{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<hr />
									<div className="form-floating mb-3">
										<input
											type="password"
											className="form-control"
											id="pass"
											placeholder="Password"
											name="password"
											required
											pattern=".{8,}"
											title="Minimum 8 required"
											ref={passwordRef}
										/>
										<label htmlFor="pass">
											Password{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="phonenumber"
											placeholder="Phone Number"
											name="phonenumber"
											required
											pattern="[0-9]{10}"
											title="10 numbers has to be there"
											ref={phoneNumberRef}
										/>
										<label htmlFor="phonenumber">
											Phone Number{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="city"
											placeholder="City"
											name="city"
											required
											autoCapitalize={true}
											ref={cityRef}
										/>
										<label htmlFor="city">
											City{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="address"
											placeholder="Address"
											name="address"
											required
											ref={addressRef}
										/>
										<label htmlFor="address">
											Address{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<br />
									<label className="label">
										Gender
										<span className="span_login">
											*
										</span>{" "}
										&nbsp;&nbsp;
									</label>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="gender"
											id="Radios"
											value="Male"
											required
											checked
											ref={genderRef}
										/>
										<label
											className="form-check-label"
											htmlFor="inlineRadio1">
											Male{" "}
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="gender"
											id="Radios"
											value="Female"
											required
										/>
										<label
											className="form-check-label"
											htmlFor="inlineRadio1">
											Female{" "}
										</label>
									</div>
									<br />
									<br />
									<div>
										<label htmlFor="file-input">
											Profile Photo ({`< 50kb`})
										</label>
										<input
											type="file"
											id="file-input"
											accept=".jpg; .png"
											onChange={(event) => {
												setFile(event.target.files[0]);
											}}
										/>
									</div>
									<br />
									<span style={{ fontSize: 16 }}>or</span>
									<br />
									<br />
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="floatingimglink"
											placeholder="myimgurl"
											autofocus
											name="img_url"
											ref={avatarRef}
										/>
										<label htmlFor="floatingimglink">
											URL for profile image
										</label>
									</div>
									<br></br>
									<div className="d-grid mb-2">
										<button
											type="submit"
											className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase">
											Register
										</button>
									</div>
								</form>

								<a
									className="d-block text-center mt-2 small"
									href="/signin">
									Have an account? Sign In
								</a>

								<hr className="my-4" />

								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default RegisterForm;
