import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import Atyourservice from "../components/Homepage/Atyourservice";
import Ourservice from "../components/Homepage/Ourservice";
import Footer from "../components/Footer";
import "../components/Homepage/HomepageCSS.css";
import { useSelector } from "react-redux";

const Homepage = () => {
	const isLoggedIn = useSelector((state) => state.userIsLoggedIn);

	return (
		<div>
			<Navbar />
			<Header />
			<Atyourservice />
			{/* if not logged in, redirect to register */}
			<Ourservice isLoggedIn={isLoggedIn} />
			<Footer isLoggedIn={isLoggedIn}/>
		</div>
	);
};

export default Homepage;
