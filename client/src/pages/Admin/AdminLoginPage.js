import React from "react";

import AdminLogin from "../../components/Admin/AdminLogin";

const AdminLoginPage = (props) => {
	// console.log(props)
	return (
		<div>
			<AdminLogin onSignin = {props.onSignin} onLogout = {props.onLogout}/>
		</div>
	);
};

export default AdminLoginPage;
