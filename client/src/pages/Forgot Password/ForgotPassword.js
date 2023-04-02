import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../../components/Login_Signup/signup_css.css";

const ForgotPassword = (props) => {
	// using refs

	const useremailRef = useRef();

	const navigate = useNavigate();

	const submitHandler = async (event) => {
		event.preventDefault();
		const email = useremailRef.current.value;
		if (email.length !== 0) {
			await fetch("http://localhost:5000/mailer/getotp", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});
			navigate("/verify-otp", {
				state: { email: useremailRef.current.value },
			});
		} else {
			alert("Please enter a non-empty email");
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
									Forgot Password
								</h5>

								<form
									autoComplete="off"
									onSubmit={submitHandler}>
									<div className="form-floating mb-3">
										<input
											type="email"
											className="form-control"
											id="floatingInputEmail"
											placeholder="name@example.com"
											name="email"
											ref={useremailRef}
										/>
										<label for="floatingInputEmail">
											Email address{" "}
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
											Send Email
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

export default ForgotPassword;
