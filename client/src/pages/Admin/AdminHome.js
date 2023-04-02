import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const AdminHome = (props) => {
	const [allUsers, setAllUsers] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [allMessages, setAllMessages] = useState([]);

	const getAllProducts = async () => {
		const products = await fetch("http://localhost:5000/products");
		const productsJson = await products.json();
		// console.log(productsJson);
		setAllProducts(productsJson);
	};

	const getAllUsers = async () => {
		const users = await fetch("http://localhost:5000/users");
		const usersJson = await users.json();
		// console.log(usersJson);
		setAllUsers(usersJson);
	};

	const getAllMessages = async () => {
		const messages = await fetch("http://localhost:5000/messages");
		const messagesJson = await messages.json();
		console.log(messagesJson);
		setAllMessages(messagesJson);
	};

	useEffect(() => {
		getAllUsers();
		getAllProducts();
		getAllMessages();
	}, []);

	return (
		<>
			<AdminNavbar onLogout={props.onLogout} />
			<div style={{ paddingTop: "10%" }}>
				<center>
					<h1>Admin Dashboard</h1>
				</center>

				<div className="container" style={{ paddingTop: "5%" }}>
					<div className="row">
						<div className="col">
							<div
								className="card text-dark bg-info mb-3"
								style={{ maxWidth: "22rem" }}>
								<center>
									<div className="card-header">Customers</div>
								</center>
								<div className="card-body">
									<center>
										<h5 className="card-title">
											{allUsers.length}
										</h5>
									</center>
								</div>
							</div>
						</div>
						<div className="col">
							<div
								className="card text-dark bg-light mb-3"
								style={{
									maxWidth: "22rem",
									marginLeft: "13%",
								}}>
								<center>
									<div className="card-header">Products</div>
								</center>
								<div className="card-body">
									<center>
										<h5 className="card-title">
											{allProducts.length}
										</h5>
									</center>
								</div>
							</div>
						</div>
						<div className="col">
							<div
								className="card text-white bg-dark mb-3"
								style={{
									maxWidth: "22rem",
									marginLeft: "20%",
								}}>
								<center>
									<div className="card-header">Requests</div>
								</center>
								<div className="card-body">
									<center>
										<h5 className="card-title">
											{allMessages.length}
										</h5>
									</center>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminHome;
