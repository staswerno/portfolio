import {
	Grid,
	Box,
	Paper,
	CardContent,
	CardActions,
	Button,
	Card,
	CardMedia,
	Typography,
	Grow,
} from "@mui/material";
import spaceblog from "./images/project-spaceblog.png";
import whereami from "./images/project-whereami.png";
import ghostlolly from "./images/project-ghostlolly.png";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

export default function Projects({ anchorFuncC }) {
	const [inViewA, setInViewA] = useState(false);
	const [inViewB, setInViewB] = useState(false);
	const [inViewC, setInViewC] = useState(false);
	const [cardHover, setCardHover] = useState(false);
	const [cardHoverB, setCardHoverB] = useState(false);
	const [cardHoverC, setCardHoverC] = useState(false);

	const mouseOffStyle = { transition: "all ease-in-out .4s" };
	const mouseOnStyle = {
		transition: "all ease-in-out .4s",
		filter: "blur(4px)",
		// transform: "scale(1.15) ",
		opacity: 0.3,
	};
	const mouseOffStyleText = {
		transition: "all ease-in-out .4s",
		opacity: 0,
		position: "absolute",
		color: "#fff",
		top: 10,
		left: "50%",
		transform: "translateX(-50%)",
		margin: 0,
	};
	const mouseOnStyleText = {
		transition: "all ease-in-out .4s",
		opacity: 1,
		position: "absolute",
		color: "#fff",
		top: 10,
		left: "50%",
		transform: "translateX(-50%)",
		margin: 0,
	};

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
				mt={{ xs: 1, sm: 2, md: 9 }}
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
						<Paper sx={{ width: 210 }} elevation={4}>
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
							<Grid item m={3} mb={{ xs: 3, md: 10 }}>
								<VisibilitySensor
									onChange={visibilityFuncA}
									partialVisibility={true}
								>
									<VisibilitySensor
										onChange={anchorFuncC}
										partialVisibility={true}
									>
										<Grow in={inViewA} timeout={900}>
											<Card
												elevation={4}
												onMouseEnter={() => setCardHover(true)}
												onMouseLeave={() => setCardHover(false)}
												sx={{
													maxWidth: 260,
													height: 340,
												}}
											>
												<Box
													sx={{
														overflow: "hidden",
														backgroundColor: "#202020",
													}}
													style={{
														position: "relative",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={spaceblog}
														alt="space blog"
														style={cardHover ? mouseOnStyle : mouseOffStyle}
													/>
													<Box>
														<Typography
															variant="body1"
															width="100%"
															textAlign="center"
															style={
																cardHover ? mouseOnStyleText : mouseOffStyleText
															}
														>
															<br />
															<br />
															react | material ui | contentful
														</Typography>
													</Box>
												</Box>

												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														space blog
													</Typography>

													<Typography variant="body2" color="text.secondary">
														A space blog with a dark mode, making use of various
														API's, headless CMS and iFrame
														<br />
														<br />
													</Typography>
												</CardContent>

												<CardActions>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														visit
													</Button>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														code
													</Button>
												</CardActions>
											</Card>
										</Grow>
									</VisibilitySensor>
								</VisibilitySensor>
							</Grid>
							<Grid item m={3} mb={{ xs: 3, md: 10 }}>
								<VisibilitySensor
									onChange={visibilityFuncB}
									partialVisibility={true}
								>
									<VisibilitySensor
										onChange={anchorFuncC}
										partialVisibility={true}
									>
										<Grow in={inViewB} timeout={1200}>
											<Card
												elevation={4}
												onMouseEnter={() => setCardHoverB(true)}
												onMouseLeave={() => setCardHoverB(false)}
												sx={{ maxWidth: 250, height: 340 }}
											>
												<Box
													sx={{
														overflow: "hidden",
														backgroundColor: "#202020",
													}}
													style={{
														position: "relative",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={whereami}
														alt="where am i"
														style={cardHoverB ? mouseOnStyle : mouseOffStyle}
													/>
													<Box>
														<Typography
															variant="body1"
															width="100%"
															textAlign="center"
															style={
																cardHoverB
																	? mouseOnStyleText
																	: mouseOffStyleText
															}
														>
															<br />
															<br />
															react | material ui | leaflet
														</Typography>
													</Box>
												</Box>

												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														whereami
													</Typography>
													<Typography variant="body2" color="text.secondary">
														Track your IP and location with a time stamp using
														various APIs
														<br />
														<br />
														<br />
													</Typography>
												</CardContent>
												<CardActions>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														visit
													</Button>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														code
													</Button>
												</CardActions>
											</Card>
										</Grow>
									</VisibilitySensor>
								</VisibilitySensor>
							</Grid>
							<Grid item m={3} mb={{ xs: 3, md: 10 }}>
								<VisibilitySensor
									onChange={visibilityFuncC}
									partialVisibility={true}
								>
									<VisibilitySensor
										onChange={anchorFuncC}
										partialVisibility={true}
									>
										<Grow in={inViewC} timeout={1500}>
											<Card
												elevation={4}
												onMouseEnter={() => setCardHoverC(true)}
												onMouseLeave={() => setCardHoverC(false)}
												sx={{
													maxWidth: 260,
													height: 340,
												}}
											>
												<Box
													sx={{
														overflow: "hidden",
														backgroundColor: "#202020",
													}}
													style={{
														position: "relative",
													}}
												>
													<CardMedia
														component="img"
														height="140"
														image={ghostlolly}
														alt="ghost lolly"
														style={cardHoverC ? mouseOnStyle : mouseOffStyle}
													/>
													<Box>
														<Typography
															variant="body1"
															width="100%"
															textAlign="center"
															style={
																cardHoverC
																	? mouseOnStyleText
																	: mouseOffStyleText
															}
														>
															<br />
															<br />
															react | context
														</Typography>
													</Box>
												</Box>

												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														ghost lolly
													</Typography>
													<Typography variant="body2" color="text.secondary">
														A responsive lolly/ghost color/mood picker with a
														dark mode (both toggle and os/browser detection)
														<br />
													</Typography>
												</CardContent>
												<CardActions>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														visit
													</Button>
													<Button
														size="small"
														variant="contained"
														disableElevation
														color="secondary"
														href="https://github.com/staswerno/ghost-lolly"
														target="_blank"
														alt="ghost lolly repo"
														sx={{
															":hover": {
																bgcolor: "secondary.main",
																// color: "text.primary",
															},
														}}
													>
														code
													</Button>
												</CardActions>
											</Card>
										</Grow>
									</VisibilitySensor>
								</VisibilitySensor>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
}
