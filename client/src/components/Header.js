import React from "react";
import Lottie from "react-lottie";
import windmill from "../lotties/windmill.json";
import solar_car from "../lotties/solar-env.json";
import { generateDefaultOptions } from "../util/utils";
const Header = () => {
	return (
		<>
			<header style={{ backgroundColor: "white" }}>
				<div style={{ backgroundColor: "white" }}>
					<Lottie
						options={generateDefaultOptions(windmill)}
						height={750}
						width={750}></Lottie>
				</div>

				<div style={{ backgroundColor: "white" }}>
					<div className="container px-4 px-lg-5 h-100">
						<div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
							<div className="col-lg-8 align-self-end">
								<h2
									style={{
										color: "black",
										transition: "0.5s",
									}}>
									The best online marketplace where you can
									find Ecofriendly products
								</h2>
								<hr className="divider" />
							</div>
							<div className="embed-responsive col-lg-8 align-self-baseline">
								<a
									className="btn btn-secondary btn-xl"
									href="/register">
									Find Out More
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<br />
			<br />
			<br />
			<br />
			<br />
			<section className="about container">
				<div className="row">
					<div className="text col-lg-6 col-md-6 col-12 w-50">
						<p
							style={{
								color: "black",
								fontSize: "25px",
								transition: "0.5s",
								transformOrigin: "left",
								transform: "scaleX(1)",
								dataOas: "fade-up",
							}}>
							ECOHUB helps you to find products of best quality
							that are Ecofriendly, and use alternative energy
							resources and helps the world to reduce pollution
						</p>
					</div>
					<div
						className="img col-lg-6 col-md-6 col-12 w-50"
						data-aos="fade-up">
						{/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
                            var anim; var elem = document.getElementById('bodymovin2')
                            var animData = {container: elem, renderer: 'svg', loop: true, autoplay: true, rendererSettings: {progressiveLoad: false, preserveAspectRatio: 'xMaxYMax slice' }, path: 'data4.json' }; anim = bodymovin.loadAnimation(animData);
                        </script>
                        <div className="container" style="height: 500px;  transition:0.5s;">
                            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_DEjwMw.json"
                                background="rgba(255, 255, 255, 1.0)" speed="1" loop autoplay id="bodymovin2"></lottie-player>
                        </div> */}
						<Lottie
							options={generateDefaultOptions(solar_car)}
							height={500}
							width={500}></Lottie>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
