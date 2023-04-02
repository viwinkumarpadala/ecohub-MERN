import React from "react";

import "../CabService/CabServiceCSS.css";

import CabRequest from "../../components/Cab Service/CabRequest";
import CabPrices from "../../components/Cab Service/CabPrices";
import Navbar from "../../components/Navbar/Navbar";

const Cabservice = (props) => {
	return (
		<>
			<Navbar />
			<CabRequest />
			<CabPrices />
		</>
	);
};

export default Cabservice;
