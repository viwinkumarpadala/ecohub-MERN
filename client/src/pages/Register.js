import React, { useEffect } from "react";
import RegisterForm from "../components/Login_Signup/RegisterForm";
import "../components/Login_Signup/signup_css.css";
import RegisterFooter from "../components/Login_Signup/RegisterFooter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = (props) => {
	const isLoggedIn = useSelector((state) => state.userIsLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/");
		}
	});

	return (
		<>
			{/* props.onRegister = onRegister (App.js) */}
			<RegisterForm onSubmitForm={props.onRegister} />
			<RegisterFooter />
		</>
	);
};

export default Register;
