import React from "react";
import { Link } from "react-router-dom";

const Ourservice = (props) => {
	return (
		<>
			<br />
			<br />
			<hr className="divider" />
			<br />
			<h1 style={{ color: "black", textAlign: "center" }}>
				<b>Our Services</b>
			</h1>
			<br />
			<hr className="divider" />
			<section className="section services-section" id="services">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={
										props.isLoggedIn
											? `/electric-products`
											: `/register`
									}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-bolt"></i>
									</div>
									<div className="feature-content">
										<h5>Electric products</h5>
										<p>
											Check out Link wide range of
											electric products which are
											verified, safe to use and
											environment friendly.
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={
										props.isLoggedIn
											? `/ev_cars`
											: `/register`
									}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-car"></i>
									</div>
									<div className="feature-content">
										<h5>Electric Vehicles</h5>
										<p>
											Check out the electric vehicles
											section here, which are proved to
											reduce the pollution by <b>72%</b>
											and is eco-friendly.
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={
										props.isLoggedIn
											? `/cabservice`
											: `/register`
									}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-taxi"></i>
									</div>
									<div className="feature-content">
										<h5>Electric Cab Service</h5>
										<p>
											Why use regular cabs when you can
											shift to Electric Cabs for lesser
											rate? Cheaper. Affordable. On Time
											pickup and dropping.
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={
										props.isLoggedIn
											? `/contact_sm`
											: `/register`
									}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-comments-o"></i>
									</div>
									<div className="feature-content">
										<h5>Contact Sales Manager</h5>
										<p>
											Not sure what electric product or
											vehicle to buy? Contact our sales
											manager who is 24/7 available for
											your doubts and queries.
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={
										props.isLoggedIn
											? `/productservice`
											: `/register`
									}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-wrench"></i>
									</div>
									<div className="feature-content">
										<h5>Electric Product Service</h5>
										<p>
											Oops! Did something happened to your
											electric pproduct? Don't worry, we
											got you covered. Just contact us
											with the query, and we will respond
											in no time.
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<Link
									to={`/articles`}
									rel="noopener noreferrer">
									<div className="icon">
										<i className="fa fa-newspaper-o"></i>
									</div>
									<div className="feature-content">
										<h5>Articles</h5>
										<p>
											Keep yourself updated with our daily
											newsletter which covers new electric
											products and vehicles launched in
											the market or in the making.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
		</>
	);
};

export default Ourservice;
