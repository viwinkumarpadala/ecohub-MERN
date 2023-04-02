import React, { useRef } from "react";
import "./adLogin.css";
import AdminNavbar from "./Navbar/Navbar";

const AdminLogin = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
		const details = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};
		props.onSignin(details);
	};

	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<>
			<AdminNavbar onLogout={props.onLogout} />

			<form
				className="login-ad"
				onSubmit={submitHandler}
				autoComplete="off">
				{/* <div className="content-ad"> */}
				<div className="c-a">
					<div className="header-ad">
						{/* <div> */}
						<h2>Admin Login</h2>
					</div>
					<label>
						<h5>Email or Username</h5>
					</label>
					<br></br>
					<input
						className="input-ad"
						type="text"
						name="_email"
						placeholder="Email"
						ref={usernameRef}></input>
					<br></br>
					<br></br>
					<label>
						<h5>Password</h5>
					</label>
					<br></br>
					<input
						className="input-ad"
						type="password"
						name="_password"
						placeholder="Password"
						ref={passwordRef}></input>
					<button className="button-ad" type="submit">
						Login
					</button>
				</div>
			</form>
		</>
	);
};

export default AdminLogin;
