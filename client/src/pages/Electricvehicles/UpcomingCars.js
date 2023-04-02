import React, { useEffect, useState } from "react";
import Nexon from "./nexon.jpg";
import E20 from "./e20.jpg";
import Volvo from "./volvo.jpg";
import XC40 from "./xc40.jpg";
import { Link } from "react-router-dom";

const UpcomingCars = () => {
	const [allvehicle, setAllvehicles] = useState([]);

	useEffect(() => {
		const getAllvehicles = async () => {
		const temp = await fetch("http://localhost:5000/allvehicles/");
		const tempJson = await temp.json();
		console.log(tempJson)
		setAllvehicles(tempJson);
		};
		getAllvehicles();
	}, []);
	let img,expand_link;
	return (
		<>
			<br />
			<br />
			<div className="section1">
				<h1>Upcoming Electric Cars</h1>

				<p>
					Here are all upcoming electric cars which are expected to
					launch in India in the year 2022-2023. The popular upcoming
					electric cars include Tata Altroz EV, Haima Bird Electric
					EV1 and Tesla Cybertruck.
				</p>
				<div className="grid">
					{allvehicle.map((vehicle) => {
						if(vehicle.title =='Tata Nexon'){
							img=Nexon;
							expand_link="/tata-nexon"
						}
						else if(vehicle.title =='Mahindra E20 Plus'){
							img=E20;
							expand_link="/mahindra-e20"
						}
						else if(vehicle.title =='Mercedes Benz EQS'){
							img=Volvo;
							expand_link="/benz-eqs"
						}
						else{
							img=XC40;
							expand_link="/xc40-recharge"
						}
						return (
						<figure className="effect-sarah">
							<img className="image__img" src={img} alt="service" />
							<figcaption>
								<h2>
									<span className="newCar">{vehicle.title}</span>
								</h2>
								<p>
									{vehicle.desc}
								</p>
								<Link to={"/ev_cars"+expand_link}>View more</Link>
							</figcaption>
						</figure>
						);
					})}
				</div>
				<br />
				<br />
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default UpcomingCars;
