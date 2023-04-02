import React from "react";

const Cabprices = () => {
	return (
		<>
			<section className="page-section" id="services">
				<div className="container px-4 px-lg-5">
					<h2 className="text-center mt-0">
						<b> Affordable prices</b> | <b> Safe and secure</b> |{" "}
						<b> Pollution free</b>
					</h2>

					<div className="row gx-4 gx-lg-5">
						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<img
										src="https://cdn-icons-png.flaticon.com/512/3089/3089803.png"
										className="cab_img"
										alt=""
									/>
								</div>
								<h3
									className="h4 mb-2_ev_list"
									style={{ color: "black" }}>
									<b> Standard</b>
								</h3>
								<h4
									style={{ color: "black" }}
									className="h4 mb-1">
									₹25 per km
								</h4>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<img
										src="https://cdn-icons-png.flaticon.com/512/3063/3063823.png"
										alt=""
										className="cab_img"
									/>
								</div>
								<h3
									style={{ color: "black" }}
									className="h4 mb-2_ev_list">
									<b>Minivan</b>
								</h3>
								<h4
									style={{ color: "black" }}
									className="h4 mb-1">
									₹50 per km
								</h4>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-5">
									<img
										src="https://cdn-icons-png.flaticon.com/512/744/744506.png"
										alt=""
										className="cab_img"
									/>
								</div>

								<h3
									style={{ color: "black" }}
									className="h4 mb-2_ev_list">
									<b>Business</b>
								</h3>
								<h4
									style={{ color: "black" }}
									className="h4 mb-1">
									₹75 per km
								</h4>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 text-center">
							<div className="mt-5">
								<div className="mb-lg-0">
									<img
										src="https://cdn-icons-png.flaticon.com/512/296/296216.png"
										alt=""
										className="cab_img"
									/>
								</div>
								<br />
								<br />
								<h3
									style={{ color: "black" }}
									className="h4 mb-2_ev_list">
									<b>VIP</b>
								</h3>
								<h4
									style={{ color: "black" }}
									className="h4 mb-1">
									₹100 per km
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default Cabprices;
