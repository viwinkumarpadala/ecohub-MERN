import React from "react";

import RohithPhoto from "../../faces_photos/rohith.jpg";
import HiteshPhoto from "../../faces_photos/Hitesh.jpg";
import AbhishekPhoto from "../../faces_photos/abhishek.jpg";
import ViwinPhoto from "../../faces_photos/viwin.jpg";
import KarthikPhoto from "../../faces_photos/karthik.jpg";

import "./about_us.css";
import Navbar from "../../components/Navbar/Navbar";

const AboutUsPage = (props) => {
	// This function will generate socials.
	const generateSocials = () => {
		return (
			<div className="col-md-12 text-center">
				<ul className="social-network social-circle">
					<li>
						<a
							href="https://facebook.com"
							className="icoFacebook socialMediaLink"
							title="Facebook">
							<i className="fa fa-facebook"></i>
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com"
							className="icoTwitter socialMediaLink"
							title="Twitter">
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a
							href="https://github.com"
							className="icoGithub socialMediaLink"
							title="Github">
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com"
							className="icoLinkedin socialMediaLink"
							title="Linkedin">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
		);
	};

	// This function will generate Information for Each member. Takes in username and photo.

	const generateInformation = (info) => {
		return (
			<div className="col-lg-6">
				<div className="card shadow border-0 mb-4">
					<div className="row no-gutters">
						<div
							className="col-md-5 pro-pic"
							style={{
								backgroundImage: `url(${info.image_url})`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}></div>
						<div className="card-img-overlay">
							<ul className="list-inline position-relative text-center">
								<li className="list-inline-item">
									<a
										href="https://facebook.com"
										className="text-decoration-none d-block text-white px-1">
										<i className="icon-social-facebook"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://twitter.com"
										className="text-decoration-none d-block text-white px-1">
										<i className="icon-social-twitter"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://instagram.com"
										className="text-decoration-none d-block text-white px-1">
										<i className="icon-social-instagram"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://github.com"
										className="text-decoration-none d-block text-white px-1">
										<i className="icon-social-behance"></i>
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-7 bg-white">
							<div className="p-4">
								<h6 className="mb-3">{info.name}</h6>
								<p>
									Hi, I'm {info.name}, and I contributed in
									the frontend which includes homepage, etc
									and leanring a little bit of backend.
								</p>
								{generateSocials()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			<Navbar />
			<div className="bg-light">
				<div className="container py-5">
					<div className="row h-100 align-items-center py-5">
						<div className="col-lg-6">
							<h1 className="display-4">About us</h1>
							<p className="lead text-muted mb-0">
								We as a team wanted to make the world,
								beautifully green.
							</p>
							<p className="lead text-muted">
								Many have seen many electric product
								marketplace, but none has planned and organised
								as us.
							</p>
						</div>
						<div className="col-lg-6 d-none d-lg-block">
							<img
								src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-5">
				<div className="container py-5">
					<div className="row align-items-center mb-5">
						<div className="col-lg-6 order-2 order-lg-1">
							{/* <script src="https://cdn.lordicon.com/lusqsztk.js"></script> */}
							{/* <lord-icon src="https://cdn.lordicon.com/kbtmbyzy.json" trigger="loop"
                colors="primary:#121331,secondary:#30e849" style="width: 100px; height: 100px">
              </lord-icon> */}
							<h2 className="font-weight-light">
								When did we start working?
							</h2>
							<p className="font-italic text-muted mb-4">
								It took us more than an year to put our idea
								into implementation, but once we started, we
								ensured that there is no trouble to us.
							</p>
						</div>
						<div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
							<img
								src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
								alt=""
								className="img-fluid mb-4 mb-lg-0"
							/>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-5 px-5 mx-auto">
							<img
								src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
								alt=""
								className="img-fluid mb-4 mb-lg-0"
							/>
						</div>
						<div className="col-lg-6">
							<script src="https://cdn.lordicon.com/lusqsztk.js"></script>
							{/* <lord-icon src="https://cdn.lordicon.com/eqwebkyi.json" trigger="loop" style="width: 100px; height: 100px">
              </lord-icon> */}
							<h2 className="font-weight-light">
								What is the core idea?
							</h2>
							<p className="font-italic text-muted mb-4">
								We wanted a complete marketplace for electric
								products in which not only products, but also
								service for the electric products as well as
								vehicles is provided, that too in a systematic
								manner.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 bg-light members">
				<div className="container">
					<div className="row justify-content-center mb-3">
						<div className="col-md-7 text-center">
							<h1 className="display-5 mb-3">Meet Our Team</h1>
							<p className="lead">
								We, collectively as a team, worked in order to
								get this site working on wheels and brought it
								back to life.
							</p>
						</div>
					</div>
					<div className="row">
						{generateInformation({
							name: "Rohith Boppey",
							image_url: RohithPhoto,
						})}
						{generateInformation({
							name: "Hitesh Malla",
							image_url: HiteshPhoto,
						})}
						{generateInformation({
							name: "Karthik D",
							image_url: KarthikPhoto,
						})}
						{generateInformation({
							name: "Viwin Kumar Padala",
							image_url: ViwinPhoto,
						})}
						{generateInformation({
							name: "Abhishek D",
							image_url: AbhishekPhoto,
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
