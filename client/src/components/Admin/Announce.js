import { createStyles, Text, Container, Textarea, Button } from "@mantine/core";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const useStyles = createStyles((theme) => ({
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
		fontSize: 45,
	},
}));

export function Announce() {
	const navigate = useNavigate();

	const { classes } = useStyles();

	const announcementRef = useRef();

	const submitHandler = (event) => {
		console.log("Submit handler in action");
		event.preventDefault();
		const announcement = {
			announcementValue: announcementRef.current.value,
		};
		axios.post("http://localhost:5000/admins/announce", announcement);
		alert('Announcement Posted!');
		navigate("/admin/home");
	};

	return (
		<Container size="md" align="center">
			<Text className={classes.title}>Announce to all the Users</Text>
			<form onSubmit={submitHandler}>
				<Textarea
					placeholder=""
					label="Your comment"
					withAsterisk
					pt="md"
					pb="md"
					autosize
					size='lg'
					minRows={4}
					ref={announcementRef}
				/>
				<Button type="submit">Announce!</Button>
			</form>
		</Container>
	);
}
