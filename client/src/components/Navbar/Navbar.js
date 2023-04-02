import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
	const navigate = useNavigate();

	const userDetails = useSelector((state) => state.userDet);
	const userIsLoggedIn = useSelector((state) => state.userIsLoggedIn);

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch({ type: "logout" });
		navigate("/");
	};

	return (
		<>
			{/* {classes.navbar + classeses.navbar-expand + className} */}
			<nav className="navbar navbar-expand-lg navbar-dark defaultNavbar">
				<NavLink className="navbar-brand" to="/">
					ECOHUB
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/about_us">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/#services">
								Our services
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/faq">
								FAQ's
							</NavLink>
						</li>
						{userIsLoggedIn ? (
							<li className="dropdown">
								<NavLink
									to="#"
									data-toggle="dropdown"
									className="dropdown-toggle user-action">
									<b className="caret">
										{userDetails.username}
									</b>
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<NavLink to="/user-profile">
											<i className="fa fa-user-o"></i>{" "}
											Profile
										</NavLink>
									</li>
									<li>
										<NavLink to="/show-cart">
											<i className="fa fa-shopping-cart"></i>{" "}
											Your Cart
										</NavLink>
									</li>
									<li className="divider"></li>
									<li>
										<NavLink to="/" onClick={logoutHandler}>
											<i className="fas fa-door-open"></i>{" "}
											Logout
										</NavLink>
									</li>
								</ul>
							</li>
						) : (
							<div></div>
						)}
					</ul>
					{!userIsLoggedIn && (
						<NavLink to="/register" className="nav-link">
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit">
								Join us
							</button>
						</NavLink>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
