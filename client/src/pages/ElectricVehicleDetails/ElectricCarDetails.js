import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleFullDetails from "./VehicleFullDetails";

const ElectricCarDetails = () => {
	// useParams = extract name from URL

	const { name } = useParams();
	console.log(name);

	const [vehicleDetails, setVehicleDetails] = useState();

	/*
		1. Compare the slug to entered slug
		2. Matched and Set the details.
	*/

	// get details from backend and set state
	useEffect(() => {
		const getDetails = async () => {
			const allVehicles = await fetch("http://localhost:5000/vehicles/");
			console.log(allVehicles);
			const allVehiclesJSON = await allVehicles.json();
			console.log(allVehiclesJSON);
			const requriedVehicle = allVehiclesJSON.filter(
				(veh) => veh.expand_link === '/'+name
			);
			// console.log(requriedVehicle[0]);
			// console.log(name);
			setVehicleDetails(requriedVehicle[0]);
		};
		getDetails();
	});

	const vehDetails =
		vehicleDetails === undefined ? (
			<>Loading</>
		) : (
			<VehicleFullDetails vehicle={vehicleDetails} />
		);
	// return <VehicleFullDetails vehicle={vehicleDetails} />;
	// return <>hello</>;
	return vehDetails;
};

export default ElectricCarDetails;
