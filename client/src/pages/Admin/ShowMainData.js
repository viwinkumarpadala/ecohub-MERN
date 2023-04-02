import React, { useEffect, useState } from "react";
import ShowProductData from "../../components/Admin/ShowProductData";
import ShowUserData from "../../components/Admin/ShowUserData";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const ShowMainData = (props) => {

	const [allUsers, setAllUsers] = useState([]);
	const [allProducts, setAllProducts] = useState([]);

	const getAllProducts = async () => {
		const products = await fetch("http://localhost:5000/products");
		const productsJson = await products.json();
		console.log(productsJson);
		setAllProducts(productsJson);
	};

	const getAllUsers = async () => {
		const users = await fetch('http://localhost:5000/users');
		const usersJson = await users.json();
		console.log(usersJson);
		setAllUsers(usersJson)
	}

	useEffect(() => {
		getAllUsers();
		getAllProducts();
	}, [])

	return (
		<>
			<AdminNavbar onLogout={props.onLogout}/>
			<ShowUserData users = {allUsers} />
			<ShowProductData products = {allProducts}/>
		</>
	);
};

export default ShowMainData;
