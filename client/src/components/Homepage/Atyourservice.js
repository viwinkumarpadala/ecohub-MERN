import React from "react";

const Atyourservice = () => {
	return (
		<>
			<section className="page-section" style={{ backgroundColor: "white" }}>
				<div className="container px-4 px-lg-5">
					<hr className="divider" />
					<h2 className="text-center mt-0">
						<b>At Your Service</b>
					</h2>
					<hr className="divider" />

					<div className="row gx-4 gx-lg-5">
						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<i className="bi bi-headset fa-3x"></i>
								</div>
								<h3
									className="h4 mb-2"
									style={{ color: "black" }}>
									24/7 customer support
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<i className="bi bi-truck fa-3x"></i>
								</div>
								<h3
									style={{ color: "black" }}
									className="h4 mb-2">
									Super Fast delivery
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<i className="bi bi-arrow-up-right fa-3x"></i>
								</div>

								<h3
									style={{ color: "black" }}
									className="h4 mb-2">
									Easy Return
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-0">
									<i className="bi-heart fa-3x"></i>
								</div>
								<br />
								<br />
								<h3
									style={{ color: "black" }}
									className="h4 mb-2">
									Made with Love
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Atyourservice;
