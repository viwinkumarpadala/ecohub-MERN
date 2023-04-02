import React, { useEffect, useState } from "react";

import Messages from "../../components/Admin/Messages";

const ShowAllMessages = (props) => {
	// Set messages as soon as page renderes
	const [allMessages, setAllMessages] = useState([]);

	/*
		1. Fetch all messages from json-server.
	*/
	const getAllMessages = async () => {
		const messages = await fetch("http://localhost:5000/messages");
		const messagesJson = await messages.json();
		console.log(messagesJson);
		setAllMessages(messagesJson);
	};

	const onRemoveMessage = async (id) => {
		await fetch(`http://localhost:5000/messages/${id}`, {
			method: "DELETE",
		});
		console.log('removed')
		window.location.reload("/admin/messages");
	};

	// as soon as page renders, execute this.
	useEffect(() => {
		getAllMessages();
	}, []);

	return (
		<div>
			{allMessages !== undefined && allMessages !== null && (
				<Messages messages={allMessages} onLogout={props.onLogout} onRemoveMessage = {onRemoveMessage}/>
			)}
		</div>
	);
};

export default ShowAllMessages;
