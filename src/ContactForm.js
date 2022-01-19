import {
	Button,
	Paper,
	Grid,
	Box,
	Typography,
	TextField,
	Grow,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("xqknebky");
	if (state.succeeded) {
		return (
			<>
				{" "}
				<Grid item xs={9} sm={8} md={5} lg={6} m={4} mb={{ xs: 3, sm: 4 }}>
					<Grow in={true} timeout={1200}>
						<Paper elevation={4}>
							<Box p={4}>
								<Typography variant="body1" color="text.secondary">
									thank you for your message
								</Typography>
							</Box>
						</Paper>
					</Grow>
				</Grid>
			</>
		);
	}

	return (
		<Grid
			container
			justifyContent="space-between"
			textAlign="right"
			alignItems="center"
			direction="column"
			mb={{ xs: 3 }}
		>
			<Box
				component="form"
				width={{ xs: "32ch", sm: "42ch" }}
				sx={{
					"& > :not(style)": { m: 2 },
				}}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<Grid item>
					{" "}
					<TextField
						fullWidth
						id="email"
						color="secondary"
						name="email"
						type="email"
						label="email"
						variant="outlined"
						InputLabelProps={{ style: { color: "#BAC3C9" } }}
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</Grid>
				<Grid item>
					{" "}
					<TextField
						fullWidth
						id="subject"
						name="subject"
						color="secondary"
						label="subject"
						variant="outlined"
						InputLabelProps={{ style: { color: "#BAC3C9" } }}
					/>
				</Grid>
				<Grid item>
					<TextField
						fullWidth
						id="message"
						name="message"
						label="message"
						color="secondary"
						multiline
						rows={8}
						defaultValue=""
						InputLabelProps={{ style: { color: "#BAC3C9" } }}
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</Grid>
				<Button
					variant="contained"
					type="submit"
					disabled={state.submitting}
					disableElevation
					color="secondary"
					target="_blank"
					alt="form submit"
					sx={{
						":hover": {
							bgcolor: "secondary.main",
						},
					}}
				>
					submit
				</Button>
			</Box>
		</Grid>
	);
}
