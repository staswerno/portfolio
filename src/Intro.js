import {
	Grid,
	Box,
	Paper,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	Fade,
} from "@mui/material";
import { minHeight } from "@mui/system";
import portrait from "./images/portrait.png";

export default function Intro() {
	return (
		<Box
			mt={{ xs: 3, sm: 4, md: 6, lg: 6, xl: 0 }}
			sx={{
				width: "90%",
				height: "80vh",
				display: "flex",
				backgroundColor: "primary",
				mx: "auto",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				rowSpacing={{ xs: 3, sm: 4, md: 6, lg: 0 }}
			>
				<Grid item xs={9} sm={8} md={4} lg={4}>
					<Fade in={true} timeout={1000}>
						<Card sx={{ maxWidth: 700 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="100%"
									image={portrait}
									alt="portrait"
								/>
							</CardActionArea>
						</Card>
					</Fade>
				</Grid>

				<Grid item xs={9} sm={8} md={6} lg={6}>
					<Fade in={true} timeout={2000}>
						<Paper>
							<Box p={4}>
								<Typography variant="h6" mb={2}>
									hi, i’m staś. <br />
									i’m a full stack web and app developer.
									<br />
								</Typography>
								<Typography variant="body2" color="text.secondary" mb={2}>
									Motivated as much by self development as software development,
									I am an engaged and creative worker, and a curious and fast,
									but precise, learner. My experience working with development
									teams and tools in the music industry has nurtured a decisive
									and organised work ethic.{" "}
								</Typography>
								<Typography variant="body2" color="text.secondary" mb={2}>
									Considerate, patient and reflective in nature, I place great
									importance on authentic relationships, a principle that has
									guided my additional experience with team leadership and
									diversity and inclusion.
								</Typography>
							</Box>
						</Paper>
					</Fade>
				</Grid>
			</Grid>
		</Box>
	);
}
