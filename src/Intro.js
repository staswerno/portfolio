import {
	Grid,
	Box,
	Paper,
	Card,
	CardMedia,
	Typography,
	Fade,
	Grow,
	Zoom,
} from "@mui/material";
import portrait from "./images/portrait.png";

export default function Intro() {
	return (
		<section id="about">
			<Box
				mt={{ xs: 10, sm: 12, md: 20, lg: 20, xl: 24 }}
				sx={{
					width: "90%",
					//	height: "100%",
					display: "flex",
					backgroundColor: "primary",
					mx: "auto",
				}}
			>
				<Grid
					container
					justifyContent="space-around"
					alignItems="center"
					//	rowSpacing={{ xs: 0, sm: 4, md: 6, lg: 0 }}
					mb={{ xs: 6, md: 12, lg: 16, xl: 18 }}
				>
					<Grid item xs={9} sm={8} md={5} lg={4} xl={3} m={4}>
						<Grow in={true} timeout={900}>
							<Card sx={{ maxWidth: 527 }}>
								<CardMedia
									component="img"
									height="100%"
									image={portrait}
									alt="portrait"
								/>
							</Card>
						</Grow>
					</Grid>

					<Grid item xs={9} sm={8} md={5} lg={6} m={4}>
						<Grow in={true} timeout={1200}>
							<Paper>
								<Box p={4}>
									<Typography variant="h6" mb={2}>
										hi, i’m staś. <br />
										i’m a full stack web and app developer.
										<br />
									</Typography>
									<Typography variant="body2" color="text.secondary" mb={2}>
										Motivated as much by self development as software
										development, I am an engaged and creative worker, and a
										curious and fast, but precise, learner. My experience
										working with development teams and tools in the music
										industry has nurtured a decisive and organised work ethic.{" "}
									</Typography>
									<Typography variant="body2" color="text.secondary" mb={2}>
										Considerate, patient and reflective in nature, I place great
										importance on authentic relationships, a principle that has
										guided my additional experience with team leadership and
										diversity and inclusion.
									</Typography>
								</Box>
							</Paper>
						</Grow>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
