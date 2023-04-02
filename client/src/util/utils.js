// Aim is to get details entered in form -> userID, username, etc.
// Check if user already sent one kind of request.
// If request present, alert, else add to messages.

export const sendMessageToAdmin = async (messageDetails) => {
	let flag = false;
	// console.log(messageDetails);
	const allMessages = await fetch("http://localhost:5000/messages");
	const allMessagesJson = await allMessages.json();
	console.log(allMessagesJson);
	allMessagesJson.forEach((message) => {
		if (
			message.message_details.email === messageDetails.email &&
			message.message_details.type === messageDetails.type
		) {
			// already a message is there
			alert(
				`You have already kept a ${messageDetails.type} message. Please wait.`
			);
			flag = true;
		}
	});

	if (flag === false) {
		await fetch("http://localhost:5000/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(messageDetails),
		});

		console.log("Sent", messageDetails);
	}
};

// For lottie players -> required options.
export const generateDefaultOptions = (nameOfFile) => {
	return {
		loop: true,
		autoplay: true,
		animationData: nameOfFile,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid meet",
		},
	};
};