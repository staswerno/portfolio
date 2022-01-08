import {
	Grid,
	Box,
	Paper,
	CardContent,
	CardActions,
	Button,
	Card,
	CardMedia,
	CardActionArea,
	Typography,
	Fade,
	Grow,
} from "@mui/material";
import spaceblog from "./images/project-spaceblog.png";
import whereami from "./images/project-whereami.png";
import ghostlolly from "./images/project-ghostlolly.png";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Projects() {
	const [inViewA, setInViewA] = useState(false);
	const [inViewB, setInViewB] = useState(false);
	const [inViewC, setInViewC] = useState(false);

	const visibilityFuncA = (isVisible) => {
		isVisible ? setInViewA(true) : setInViewA(false);
	};
	const visibilityFuncB = (isVisible) => {
		isVisible ? setInViewB(true) : setInViewB(false);
	};
	const visibilityFuncC = (isVisible) => {
		isVisible ? setInViewC(true) : setInViewC(false);
	};

	return (
		<section id="projects">
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
					justifyContent="space-around"
					alignItems="center"
					//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
				>
					<Grid item m={3} mt={6}>
						<Paper sx={{ width: 210 }}>
							<Typography variant="h5" align="center" px={4} py={2}>
								projects
							</Typography>
						</Paper>
					</Grid>
					<Grid
						container
						justifyContent="space-around"
						alignItems="center"
						//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
					>
						<Grid
							container
							justifyContent="space-around"
							alignItems="center"
							mb={{ xs: 3, md: 6 }}
							//	rowSpacing={{ xs: 3, sm: 4, md: 6, lg: 0 }}
						>
							<Grid item m={3} mb={{ xs: 3, md: 3 }}>
								<VisibilitySensor
									onChange={visibilityFuncA}
									partialVisibility={true}
								>
									<Grow in={inViewA} timeout={900}>
										<Card
											sx={{
												maxWidth: 260,
												height: 340,
											}}
										>
											<CardActionArea
												sx={{
													backgroundColor: "#121212",
												}}
											>
												<Box
													sx={{
														overflow: "hidden",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={spaceblog}
														alt="space blog"
														sx={{
															transition: "all ease-in-out .4s",
															"&:hover": {
																transform: "scale(1.15) ",
																opacity: 0.3,
															},
														}}
													/>
												</Box>
											</CardActionArea>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													space blog
												</Typography>

												<Typography variant="body2" color="text.secondary">
													A space blog with a dark mode, built with React and
													M-UI, making use of various API's, headless CMS and
													iFrame.
												</Typography>
											</CardContent>

											<CardActions>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		bgcolor: "primary.main",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													visit
												</Button>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		bgcolor: "primary.main",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													code
												</Button>
											</CardActions>
										</Card>
									</Grow>
								</VisibilitySensor>
							</Grid>
							<Grid item m={3} mb={{ xs: 3, md: 3 }}>
								<VisibilitySensor
									onChange={visibilityFuncB}
									partialVisibility={true}
								>
									<Grow in={inViewB} timeout={1200}>
										<Card sx={{ maxWidth: 250, height: 340 }}>
											<CardActionArea
												sx={{
													backgroundColor: "#121212",
												}}
											>
												<Box
													sx={{
														overflow: "hidden",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={whereami}
														alt="where am i"
														sx={{
															transition: "all ease-in-out .4s",
															"&:hover": {
																transform: "scale(1.15) ",
																opacity: 0.3,
															},
														}}
													/>
												</Box>
											</CardActionArea>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													whereami
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Track your IP and location with a time stamp using
													various APIs.
													<br />
													<br />
													<br />
												</Typography>
											</CardContent>
											<CardActions>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		bgcolor: "primary.main",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													visit
												</Button>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		bgcolor: "primary.main",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													code
												</Button>
											</CardActions>
										</Card>
									</Grow>
								</VisibilitySensor>
							</Grid>
							<Grid item m={3} mb={{ xs: 3, md: 3 }}>
								<VisibilitySensor
									onChange={visibilityFuncC}
									partialVisibility={true}
								>
									<Grow in={inViewC} timeout={1500}>
										<Card sx={{ maxWidth: 250, height: 340 }}>
											<CardActionArea
												sx={{
													backgroundColor: "#121212",
												}}
											>
												<Box
													sx={{
														overflow: "hidden",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={ghostlolly}
														alt="ghost lolly"
														sx={{
															transition: "all ease-in-out .4s",
															"&:hover": {
																transform: "scale(1.15) ",
																opacity: 0.3,
															},
														}}
													/>
												</Box>
											</CardActionArea>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													ghost lolly
												</Typography>
												<Typography variant="body2" color="text.secondary">
													A responsive lolly/ghost color/mood picker with a dark
													mode (both toggle and os/browser detection).
													<br />
												</Typography>
											</CardContent>
											<CardActions>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		bgcolor: "primary.main",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													visit
												</Button>
												<Button
													size="small"
													variant="contained"
													color="secondary"
													// sx={{
													// 	":hover": {
													// 		// bgcolor: "secondary.dark",
													// 		color: "text.primary",
													// 	},
													// }}
												>
													code
												</Button>
											</CardActions>
										</Card>
									</Grow>
								</VisibilitySensor>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
