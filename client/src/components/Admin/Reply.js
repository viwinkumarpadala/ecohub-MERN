import { createStyles, Text, Container, Textarea, Button } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";

const useStyles = createStyles((theme) => ({
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 400,
		fontSize: 25,
	},
}));

export function Reply() {
	const [message, setMessage] = useState({});
	// const [id, setId] = useState('');
	const data = useParams();
	// setId(data.id);
	useEffect(() => {
		// console.log(data.id);
		const getDetails = async () => {
			const messageDetails = await fetch(
				`http://localhost:5000/messages/${data.id}`
			);
			const messageDetailsJSON = await messageDetails.json();
			console.log(messageDetailsJSON.message[0]);
			setMessage(messageDetailsJSON.message[0]);
		};
		getDetails();
	}, []);

	const navigate = useNavigate();

	const { classes } = useStyles();

	const replyRef = useRef();

	const submitHandler = (event) => {
		console.log(" submit handler in action");
		event.preventDefault();
		const reply = {
			replyValue: replyRef.current.value,
			// replyemail:messagecontent.email,
			email: message.email,
			message: message.message,
		};
		axios.post("http://localhost:5000/messages/reply", reply);
		navigate("/admin/messages");
	};

	return (
		<>
			<container style={{ margin: "5%", padding: "5%" }}>
				<Container size="md" align="center">
					<Text
						className={classes.title}
						style={{ margin: "1%", padding: "1%" }}>
						You are replying to a message
					</Text>
					<Textarea
						placeholder=""
						label="Message Details"
						withAsterisk
						pt="md"
						pb="md"
						autosize
						minRows={2}
						size="lg"
						readOnly
						defaultValue={message.message}
					/>
					<form onSubmit={submitHandler}>
						<Textarea
							placeholder=""
							label="Your Reply"
							withAsterisk
							pt="md"
							pb="md"
							autosize
							minRows={4}
							size="lg"
							ref={replyRef}
						/>
						<Button type="submit" size="lg">
							Reply
						</Button>
					</form>
				</Container>
			</container>
		</>
	);
}
