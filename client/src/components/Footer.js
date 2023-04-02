import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
	const userIsLoggedIn = useSelector((state) => state.userIsLoggedIn);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				{!userIsLoggedIn && <a href="/register">
					<button
						style={{
							textAlign: "center",
							color: "whitesmoke",
							fontSize: "2rem",
							fontWeight: "600",
							backgroundColor: "greenyellow",
							padding: "0 1rem",
							borderRadius: "30px",
						}}
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Join us
					</button>
				</a>}
			</div>
			<br />
			<br />
			<h1 style={{ color: "black", textAlign: "center" }}>
				<b>Visit our socials</b>
			</h1>
			<br />
			<div id="contact-info">
				<div className="links">
					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noreferrer">
						<div>
							<span>
								<i className="fab fa-linkedin-in"></i>
							</span>
						</div>
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						className="orange-shadow">
						<div>
							<span>
								<i className="fab fa-github"></i>
							</span>
						</div>
					</a>
					<a
						href="https://www.facebook.com"
						className="orange-border"
						target="_blank"
						rel="noreferrer">
						<div>
							<span></span>
							<span>
								<i className="fab fa-facebook-f"></i>
							</span>
						</div>
					</a>
					<a
						href="https://www.instagram.com"
						className="orange-background"
						target="_blank"
						rel="noreferrer">
						<div>
							<span></span>
							<span>
								<i className="fab fa-instagram"></i>
							</span>
						</div>
					</a>
				</div>
			</div>
			<br /> <br />
			<br />
		</>
	);
};

export default Footer;
