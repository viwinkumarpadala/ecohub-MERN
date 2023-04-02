import React from "react";
import { Link } from "react-router-dom";
import pic from "../Navbar/Animated Leaf Icon final.jpg";

const AdminNavbar = (props) => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light "
			style={{ backgroundColor: "#ffffff" }}>
			<div className="container-fluid">
				<img
					id="logo"
					src={pic}
					alt=""
					width="50"
					height="36"
					className="d-inline-block align-text-top"
				/>{" "}
				<Link
					to="/admin/home"
					style={{ textDecoration: "none", color: "black" }}>
					<b>ECOHUB</b>{" "}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/admin/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/admin/show-all-data">
								Show all Data
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/admin/messages">
								Messages
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/admin/announce">
								Announce
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/admin/home"
								onClick={props.onLogout}>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavbar;
