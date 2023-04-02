import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../components/Login_Signup/signup_css.css";

const VerifyOTP = () => {
	// using refs

	const OTPRef = useRef();
	const navigate = useNavigate();

	const { state } = useLocation();

	const [email, setEmail] = useState("");

	useEffect(() => {
		if (state !== null && state !== undefined) {
			const { email: enteredEmail } = state;
			console.log(enteredEmail);
			setEmail(enteredEmail);
		} else {
			alert("Invalid request");
			navigate("/signin");
		}
	}, []);

	const submitHandler = async (event) => {
		event.preventDefault();
		const otp = OTPRef.current.value;
		if (otp.length !== 0) {
			const response = await fetch(
				"http://localhost:5000/mailer/verifyotp",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, otp }),
				}
			);
			const responseJson = await response.json();
			alert(responseJson.message);
			if (responseJson.status === true) {
				alert(
					"Password has been reset to default password, please change it soon!"
				);
				await fetch("http://localhost:5000/users/change-to-default", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				});
				navigate("/");
			}
		} else {
			alert("Please enter a valid OTP");
		}
	};

	return (
		<div>
			<div className="container signup_body">
				<div className="row">
					<div className="col-lg-10 col-xl-9 mx-auto">
						<div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
							<div className="card-img-left d-none d-md-flex"></div>
							<div className="card-body p-4 p-sm-5">
								<h5 className="card-title text-center mb-5 fw-light fs-5">
									Verify the OTP from your email
								</h5>

								<form
									autoComplete="off"
									onSubmit={submitHandler}>
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											id="floatingInputEmail"
											placeholder="123456"
											name="otp"
											ref={OTPRef}
										/>
										<label for="floatingInputEmail">
											OTP{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>
									<hr />

									<div className="d-grid mb-2">
										<button
											className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
											type="submit">
											Verify OTP
										</button>
									</div>

									<a
										className="d-block text-center mt-2 small"
										href="/signin">
										Remember the Password? Sign In
									</a>
									<hr className="my-4" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyOTP;
