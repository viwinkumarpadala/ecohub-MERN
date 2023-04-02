import React from "react";
import "./showdata.css";


const ShowProductData = (props) => {

	return (
		<>
			<br></br>
			<br></br>

			<h2 className="h2-sd">Product Details :</h2>
			<br></br>
			<div className="alcenter2">
				<table border="2px black" className="table-sd table-hover">
					<tr className="tr-sd">
						<th className="th-sd">
							<b className="b-sd">Serial Number</b>
						</th>
						<th className="th-sd">
							<b className="b-sd">Product Name</b>
						</th>
						<th className="th-sd">
							<b className="b-sd">Discounted Price</b>
						</th>
						<th className="th-sd">
							<b className="b-sd">Actual Price</b>
						</th>
					</tr>

					{props.products.length !== 0 &&
						props.products.map((product, pos) => {
							return (
								<tr className="tr-sd">
									<th className="th-sd">{pos}</th>
									<th className="th-sd">{product.name}</th>

									<th className="th-sd">{product.d_price}</th>

									<th className="th-sd">{product.a_price}</th>
								</tr>
							);
						})}
					{/* <tr className="tr-sd">
						<th className="th-sd">1</th>
						<th className="th-sd">Phillips electric kettle</th>

						<th className="th-sd">400.00</th>

						<th className="th-sd">369.68</th>
					</tr>
					<tr className="tr-sd">
						<th className="th-sd">2</th>
						<th className="th-sd">Philips Coffee Maker</th>

						<th className="th-sd">225.62</th>

						<th className="th-sd">223.68</th>
					</tr>
					<tr className="tr-sd">
						<th className="th-sd">3</th>
						<th className="th-sd">Dr. Fit Body Massager</th>

						<th className="th-sd">899.00</th>

						<th className="th-sd">649.00</th>
					</tr>
					<tr className="tr-sd">
						<th className="th-sd">4</th>
						<th className="th-sd">IBell Electric Screwdriver</th>

						<th className="th-sd">315.00</th>

						<th className="th-sd">369.68</th>
					</tr> */}
				</table>
			</div>
		</>
	);
};

export default ShowProductData;
