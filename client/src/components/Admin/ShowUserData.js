import React from "react";
import "./showdata.css";

const ShowUserData = (props) => {
	const Rows = [
		"Username",
		"Full Name",
		"Email",
		"Gender",
		"Mobile Number",
		"Address",
		"City",
		"Delete",
	];

	const generateRows = () => {
		const allRows = Rows.map((row) => {
			return (
				<th className="th-sd">
					<b className="b-sd">{row}</b>
				</th>
			);
		});
		return allRows;
	};

	const onDeleteHandler = async (id) => {
		await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
		window.location.reload();
	};

	return (
		<>
			<br></br>
			<br></br>
			<h2 className="h2-sd">Customer Details :</h2>
			<br></br>
			<div className="alcenter">
				<table border="2px black" className="table-sd table-hover">
					<tr className="tr-sd">{generateRows()}</tr>
					{props.users.map((user) => {
						return (
							<tr className="tr-sd">
								<th className="th-sd">{user.username}</th>
								<th className="th-sd">{user.fullname}</th>
								<th className="th-sd">{user.email}</th>
								<th className="th-sd">{user.gender}</th>
								<th className="th-sd">{user.phone_number}</th>
								<th className="th-sd">{user.address}</th>
								<th className="th-sd">{user.city}</th>
								<th className="th-sd">
									<center>
										<button
											onClick={() =>
												onDeleteHandler(user._id)
											}
											name="delete"
											type="submit"
											className="btn btn-outline-primary button-sd">
											Delete
										</button>
									</center>
								</th>
							</tr>
						);
					})}
				</table>
			</div>
		</>
	);
};

export default ShowUserData;
