import { Button, Paper, Grid, Box, Typography, TextField } from "@mui/material";

import VisibilitySensor from "react-visibility-sensor";

export default function Contact({ anchorFuncE }) {
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
							<Box
								component="form"
								width={{ xs: "32ch", sm: "42ch" }}
								sx={{
									"& > :not(style)": { m: 2 },
								}}
								noValidate
								autoComplete="off"
							>
								<Grid item>
									{" "}
									<TextField
										fullWidth
										color="secondary"
										id="name"
										label="name"
										variant="outlined"
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid>
								<Grid item>
									{" "}
									<TextField
										fullWidth
										id="email"
										color="secondary"
										label="email"
										variant="outlined"
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid>
								<Grid item>
									{" "}
									<TextField
										fullWidth
										id="subject"
										color="secondary"
										label="subject"
										variant="outlined"
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										id="outlined-multiline-static"
										label="message"
										color="secondary"
										multiline
										rows={8}
										defaultValue=""
										InputLabelProps={{ style: { color: "#BAC3C9" } }}
									/>
								</Grid>
								<Button
									variant="contained"
									disableElevation
									color="secondary"
									target="_blank"
									alt="ghost lolly repo"
									sx={{
										":hover": {
											bgcolor: "secondary.main",
											// color: "text.primary",
										},
									}}
								>
									submit
								</Button>
							</Box>
						</VisibilitySensor>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
