import {
	Grid,
	Box,
	Paper,
	Card,
	CardMedia,
	Typography,
	Grow,
} from "@mui/material";
import portrait from "./images/portrait.png";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Intro({ anchorFuncA }) {
	const [inViewA, setInViewA] = useState(false);
	const [inViewB, setInViewB] = useState(false);

	const visibilityFuncA = (isVisible) => {
		isVisible ? setInViewA(true) : setInViewA(false);
	};
	const visibilityFuncB = (isVisible) => {
		isVisible ? setInViewB(true) : setInViewB(false);
	};

	return (
		// <section id="about">
		<Box
			mt={{ xs: 8, sm: 10, md: 18, lg: 21, xl: 24 }}
			sx={{
				width: { xs: "90%", lg: "80%" },

				display: "flex",
				backgroundColor: "primary",
				mx: "auto",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				mb={{ xs: 6, md: 12, lg: 16, xl: 18 }}
			>
				<Grid item xs={9} sm={8} md={5} lg={4} xl={3} m={4}>
					<Grow in={inViewA} timeout={900}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<VisibilitySensor onChange={anchorFuncA} partialVisibility={true}>
								<VisibilitySensor
									onChange={visibilityFuncA}
									partialVisibility={true}
								>
									<CardMedia
										component="img"
										height="100%"
										image={portrait}
										alt="portrait drawing"
									/>
								</VisibilitySensor>
							</VisibilitySensor>
						</Card>
					</Grow>
				</Grid>

				<Grid item xs={9} sm={8} md={5} lg={6} m={4} mb={{ xs: 3, sm: 4 }}>
					<Grow in={inViewB} timeout={1200}>
						<Paper elevation={4}>
							<VisibilitySensor
								onChange={visibilityFuncB}
								partialVisibility={true}
							>
								<Box p={4}>
									<Typography variant="h6" mb={2}>
										hi, i’m staś. <br />
										i’m a frontend web and app developer.
										<br />
									</Typography>
									<Typography variant="body1" color="text.secondary" mb={2}>
										Creatively minded and passionate about coding, I have
										invaluable experience working with development teams and
										tools in the music industry and beyond.
									</Typography>
									<Typography variant="body1" color="text.secondary" mb={2}>
										I am motivated by social change, mental health and
										scientific progress, but I also truly believe in the
										importance of coding simply for curiosity and joy.
									</Typography>
								</Box>
							</VisibilitySensor>
						</Paper>
					</Grow>
				</Grid>
			</Grid>
		</Box>
		// </section>
	);
}
