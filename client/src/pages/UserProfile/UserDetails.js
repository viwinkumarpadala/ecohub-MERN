import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import "./user-profile.css";

import Axios from "axios";

const UserDetails = (props) => {
	// console.log(props.user)
	const userIsLoggedIn = useSelector((state) => state.userIsLoggedIn);
	const navigate = useNavigate();

	// const [userImage, setUserImage] = useState([]);
	const [imageURL, setImageURL] = useState("");

	useEffect(() => {
		if (!userIsLoggedIn) {
			navigate("/register");
		}
		const getUserPhoto = async () => {
			const response = await Axios.post(
				"http://localhost:5000/image/sendImage",
				{
					email: props.user.email,
				}
			);
			console.log(response.data.allImages[0].img);
			if (response.data.allImages.length !== 0) {
				const img = response.data.allImages[0].img;
				const base64String = btoa(
					String.fromCharCode(...new Uint8Array(img.data.data))
				);
				// console.log(base64String);
				setImageURL(`data:image/png;base64,${base64String}`);
			}
		};
		getUserPhoto();
	}, []);

	const updateHandler = () => {
		navigate("/update-profile");
	};

	return (
		<div>
			<Navbar />
			<div className="container-up middle">
				<div className="outer">
					<div
						id="userprofilepage"
						className="profile-nav col-md-14 middle">
						<div className="panel">
							<div className="container-up user-heading round">
								<a href="/user-profile">
									<img
										src={
											imageURL.length === 0
												? props.user.img_url
												: imageURL
										}
										alt="User"
										className="profileImage"
									/>
								</a>

								<h1 style={{ fontSize: 28 }}>
									<br />
									{props.user.fullname}
								</h1>
								<p>
									<b>Your Unique User ID: </b> &nbsp;&nbsp;{" "}
									{props.user._id}
								</p>
							</div>
						</div>

						<div>
							<h1 style={{ textAlign: "center", fontSize: 50 }}>
								<b>User details</b>
							</h1>
							<div className="row">
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.username}
									</h5>
								</div>
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.fullname}
									</h5>
								</div>
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.city}, India.
									</h5>
								</div>

								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.email}
									</h5>
								</div>

								<div style={{ textAlign: "center" }}>
									<br />
									<button
										onClick={updateHandler}
										type="button"
										className="btn btn-outline-primary">
										Update Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="bg-light pb-5">
				<div className="container-up text-center">
					<p className="font-italic text-muted mb-0">
						&copy; Ecohub.com All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default UserDetails;
