import { Paper, Grid, Box, Typography } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import VisibilitySensor from "react-visibility-sensor";
import ContactForm from "./ContactForm";

export default function Contact({ anchorFuncE }) {
	return (
		<section id="contact">
			<Box
				mt={{ xs: 1, sm: 2, md: 6, lg: 6, xl: 3 }}
				sx={{
					width: "90%",
					display: "flex",
					backgroundColor: "transparent",
					mx: "auto",
				}}
			>
				<Grid container justifyContent="center" alignItems="center">
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
					>
						<VisibilitySensor onChange={anchorFuncE} partialVisibility={false}>
							<ContactForm />
						</VisibilitySensor>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
