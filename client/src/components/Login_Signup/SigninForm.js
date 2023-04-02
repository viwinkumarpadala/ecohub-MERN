import React, { useRef } from "react";

import "../../components/Login_Signup/signup_css.css";

const SigninForm = (props) => {
	// using refs

	const useremailRef = useRef();
	const passwordRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		// onSubmitForm = onSign (App.js)
		props.onSubmitForm({
			email: useremailRef.current.value,
			password: passwordRef.current.value,
		});
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
									Login
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

									<div className="form-floating mb-3">
										<input
											type="password"
											className="form-control"
											id="floatingPassword"
											placeholder="Password"
											name="password"
											ref={passwordRef}
										/>
										<label
											for="floatingPassword"
											required
											pattern=".{8,}"
											title="Minimum 8 required">
											Password{" "}
											<span className="span_login">
												*
											</span>
										</label>
									</div>

									<div className="d-grid mb-2">
										<button
											className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
											type="submit">
											Login
										</button>
									</div>

									<a
										className="d-block text-center mt-2 small"
										href="/register">
										Don't Have an account? Register
									</a>
									<a
										className="d-block text-center mt-2 small"
										href="/forgot-password">
										Forgot Password?
									</a>
									<hr className="my-4" />

									{/* <div className="d-grid mb-2">
										<button
											className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
											type="submit">
											<i className="fab fa-google me-2"></i>{" "}
											Log in with Google
										</button>
									</div>

									<div className="d-grid">
										<button
											className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
											type="submit">
											<i className="fab fa-facebook-f me-2"></i>{" "}
											Log in with Facebook
										</button>
									</div> */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninForm;
