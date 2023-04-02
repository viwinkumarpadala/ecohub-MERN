import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import electriccab from "../../lotties/electric-cab.json";
import { generateDefaultOptions } from "../../util/utils";
import { Dialog, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Cabrequest = () => {
	const [opened, { toggle, close }] = useDisclosure(false);

	// const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		toggle();
		// alert("Please check your email for confirmation");
		// if(opened === false){
		// 	navigate("/");
		// }
	};

	return (
		<>
			<section className="container">
				<div className="row main-cab">
					<div className="text col col-lg-20 col-md-20 col-12 w-50 mx-auto cabformclass">
						<form className=" form-card" onSubmit={submitHandler}>
							<div className="row USER-DETAILS justify-content-between text-left">
								<div className="input-box col-sm-6 flex-column d-flex">
									{" "}
									<label className="form-control-label px-3">
										From:<span className="details"> *</span>
									</label>{" "}
									<input
										type="text"
										placeholder="Enter your pickup location"
										required
										className="cab_input"
									/>{" "}
								</div>
								<div className="input-box col-sm-6 flex-column d-flex">
									{" "}
									<label className="form-control-label px-3">
										To:<span className="details"> *</span>
									</label>{" "}
									<input
										type="text"
										placeholder="Enter your drop location"
										required
										className="cab_input"
									/>{" "}
								</div>
							</div>
							<div className="row USER-DETAILS justify-content-between text-left">
								<div className="input-box col-sm-6 flex-column d-flex">
									{" "}
									<label className="form-control-label px-3">
										Phone number:
										<span className="details"> *</span>
									</label>{" "}
									<input
										type="text"
										placeholder="Enter phone number:"
										required
										id="phone"
										className="cab_input"
									/>{" "}
								</div>
								<div className="input-box col-sm-6 flex-column d-flex">
									{" "}
									<label className="form-control-label px-3">
										Date and Time:
										<span className="details"> *</span>
									</label>{" "}
									<input
										type="datetime-local"
										className="cab_input"
										required
									/>
								</div>
							</div>

							<br />
							<br />
							<div>
								<div className="category">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input cab_form_input "
											type="radio"
											name="Cab"
											id="Radios"
											value="Standard"
											required
										/>
										<label
											className="form-check-label"
											for="inlineRadio1">
											Standard{" "}
										</label>
									</div>

									<div className="form-check form-check-inline">
										<input
											className="form-check-input cab_form_input"
											type="radio"
											name="Cab"
											id="Radios"
											value="Minivan"
										/>
										<label
											className="form-check-label"
											for="inlineRadio1">
											Minivan{" "}
										</label>
									</div>

									<div className="form-check form-check-inline">
										<input
											className="form-check-input cab_form_input"
											type="radio"
											name="Cab"
											id="Radios"
											value="Business"
										/>
										<label
											className="form-check-label"
											for="inlineRadio1">
											Business{" "}
										</label>
									</div>

									<div className="form-check form-check-inline">
										<input
											className="form-check-input cab_form_input"
											type="radio"
											name="Cab"
											id="Radios"
											value="VIP"
										/>
										<label
											className="form-check-label"
											for="inlineRadio1">
											VIP{" "}
										</label>
									</div>
								</div>
							</div>

							<br />
							<br />
							<br />

							<div className="mx-auto d-grid gap-2 col-6">
								<button
									className="btn1 btn-secondary btn-lg cab_button"
									type="submit"
									value="Get Taxi">
									Get Taxi
								</button>
							</div>
						</form>
					</div>

					{/* <div className="img col d-none d-md-flex" data-aos="fade-up">
                      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
                          var anim; var elem = document.getElementById('bodymovin2')
                          var animData = {container: elem, renderer: 'svg', loop: true, autoplay: true, rendererSettings: {progressiveLoad: false, preserveAspectRatio: 'xMaxYMax slice' }, path: 'data4.json' }; anim = bodymovin.loadAnimation(animData);
                      </script>
                      <div className="container" style="height: 500px;  transition:0.5s;">
                          <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_hsabbeks.json"
                              background="rgba(255, 255, 255, 1.0)" speed="1" loop autoplay id="bodymovin2"></lottie-player>
                      </div>
                  </div> */}
					<Lottie
						options={generateDefaultOptions(electriccab)}
						height={500}
						width={550}></Lottie>
				</div>
			</section>
			<Dialog
				opened={opened}
				withCloseButton
				onClose={close}
				size="lg"
				position={{ top: 20, right: 20 }}
				radius="md">
				<Text size="sm" weight={500}>
					Booking Successful! You will receive an email for your
					booking! Please look at it
				</Text>
			</Dialog>
			<br /> <br />
			<br />
		</>
	);
};

export default Cabrequest;
