import React from "react";
import RegisterFooter from "../components/Login_Signup/RegisterFooter";
import SigninForm from "../components/Login_Signup/SigninForm";

const Signin = (props) => {
	return (
		<>
			{/* onSignin = onSign (App.js) */}
			<SigninForm onSubmitForm = {props.onSignin} />
			<RegisterFooter />
		</>
	);
};

export default Signin;
