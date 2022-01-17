import {
	Button,
	Paper,
	Grid,
	Box,
	Typography,
	TextField,
	Modal,
	Grow,
	Backdrop,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import VisibilitySensor from "react-visibility-sensor";
import ContactForm from "./ContactForm";

export default function Contact({ anchorFuncE }) {
	const [state, handleSubmit] = useForm("xqknebky");
	if (state.succeeded) {
		return (
			<>
				{" "}
				<Grid item xs={9} sm={8} md={5} lg={6} m={4} mb={{ xs: 3, sm: 4 }}>
					<Grow in={true} timeout={1200}>
						<Paper elevation={4}>
							<Box p={4}>
								<Typography variant="h6" mb={2}>
									thank you for your message! <br />
									i’m a full stack web and app developer.
									<br />
								</Typography>
							</Box>
						</Paper>
					</Grow>
				</Grid>
			</>
		);
	}

	return (
		<section id="contact">
			<Box
				mt={{ xs: 1, sm: 2, md: 6, lg: 6, xl: 3 }}
				sx={{
					width: "90%",
					//	height: "80vh",
					display: "flex",
					backgroundColor: "transparent",
					mx: "auto",
				}}
			>
				<Grid
					container
					justifyContent="center"
					alignItems="center"

					//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
				>
					<Grid item m={3} mt={6}>
						<Paper sx={{ width: 210 }} elevation={4}>
							<Typography variant="h5" align="center" px={4} py={2}>
								contact
							</Typography>
						</Paper>
					</Grid>

					<Grid
						container
						justifyContent="space-between"
						textAlign="right"
						alignItems="center"
						direction="column"
						mb={{ xs: 6, md: 6 }}
						//	rowSpacing={{ xs: 3, sm: 4, md: 6, lg: 0 }}
					>
						<VisibilitySensor onChange={anchorFuncE} partialVisibility={false}>
							{/* <Box
								component="form"
								width={{ xs: "32ch", sm: "42ch" }}
								sx={{
									"& > :not(style)": { m: 2 },
								}}
								noValidate
								autoComplete="off"
								onSubmit={handleSubmit}
							> */}
							{/* <form onSubmit={handleSubmit}> */}
							{/* <Grid item>
									{" "}
									<TextField
										fullWidth
										color="secondary"
										id="name"
										label="name"
										variant="outlined"
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid> */}
							{/* <Grid item>
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
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
								</Grid>
								{/* <Grid item>
									{" "}
									<TextField
										fullWidth
										id="subject"
										color="secondary"
										label="subject"
										variant="outlined"
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid> */}
							{/* <Grid item>
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
											// color: "text.primary",
										},
									}}
								>
									submit
								</Button>{" "} */}

							<ContactForm />
							{/* </form> */}
							{/* </Box> */}
						</VisibilitySensor>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
