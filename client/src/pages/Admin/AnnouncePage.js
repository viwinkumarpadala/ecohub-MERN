import React from "react";
import { Announce } from "../../components/Admin/Announce";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const AnnouncePage = (props) => {
	return (
		<div>
			<AdminNavbar onLogout={props.onLogout} />
			<Announce />
		</div>
	);
};

export default AnnouncePage;
