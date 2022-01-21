import {
	Grid,
	Box,
	Paper,
	CardHeader,
	Avatar,
	Typography,
	Grow,
	Zoom,
} from "@mui/material";
import muiicon from "./images/icon-mui.png";
import htmlicon from "./images/icon-html.png";
import cssicon from "./images/icon-css.png";
import bootstrapicon from "./images/icon-bootstrap.png";
import expressicon from "./images/icon-express.png";
import giticon from "./images/icon-git.png";
import jsicon from "./images/icon-js.png";
import mongoicon from "./images/icon-mongo.png";
import nodeicon from "./images/icon-node.png";
import reacticon from "./images/icon-react.png";
import sqlicon from "./images/icon-sql.png";
import uxicon from "./images/icon-ux.png";

import teamicon from "./images/icon-team.png";
import digitalicon from "./images/icon-digital.png";
import musicicon from "./images/icon-music.png";
import diversityicon from "./images/icon-diversity.png";
import bulbicon from "./images/icon-bulb.png";
import commicon from "./images/icon-comm.png";

import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Skills({ anchorFuncB }) {
	const [inViewA, setInViewA] = useState(false);
	const [inViewB, setInViewB] = useState(false);

	const visibilityFuncA = (isVisible) => {
		isVisible ? setInViewA(true) : setInViewA(false);
	};
	const visibilityFuncB = (isVisible) => {
		isVisible ? setInViewB(true) : setInViewB(false);
	};
	const pTop = 1.5;
	const pBot = 1.5;

	return (
		<section id="skills">
			<Paper
				mt={{ xs: 10, sm: 12, md: 6, lg: 6, xl: 3 }}
				sx={{
					width: { xs: "90%", lg: "80%" },

					display: "flex",
					backgroundColor: "#bac3c9",
					mx: "auto",
				}}
			>
				<Grid container justifyContent="space-around" alignItems="center">
					<Grid item m={3} mt={6}>
						<Paper sx={{ width: 210 }} elevation={4}>
							<Typography variant="h5" align="center" px={4} py={2}>
								skills
							</Typography>
						</Paper>
					</Grid>

					<Grid
						container
						justifyContent="space-around"
						alignItems="center"
						px={{ xs: 0, lg: 4 }}
					>
						<Grid item xs={9} sm={8} md={6} m={3} mb={{ xs: 3, md: 7 }}>
							<Grow in={inViewA} timeout={900}>
								<Paper elevation={4}>
									<Box px={4} py={3}>
										<Typography variant="h6" align="center" mb={2}>
											tech skills
										</Typography>
										<VisibilitySensor
											onChange={visibilityFuncA}
											partialVisibility={true}
										>
											<VisibilitySensor
												onChange={anchorFuncB}
												partialVisibility={true}
											>
												<Grid
													container
													justifyContent="space-around"
													alignItems="center"
												>
													{" "}
													<Grid item ml={{ xs: 0, lg: 2 }}>
														<Zoom in={inViewA} timeout={1000}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="HTML5 Icon"
																		src={htmlicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		HTML5
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1100}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="CSS3 Icon"
																		src={cssicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		CSS3
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1200}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="JavaScript Icon"
																		src={jsicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		JavaScript
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1300}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="React Icon"
																		src={reacticon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		React
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1400}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="Material-UI Icon"
																		src={muiicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Material-UI
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1500}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="Bootstrap Icon"
																		src={bootstrapicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Bootstrap 5
																	</Typography>
																}
															/>
														</Zoom>
													</Grid>
													<Grid item mr={{ xs: 0, lg: 2 }}>
														<Zoom in={inViewA} timeout={1000}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="Node Icon"
																		src={nodeicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Node.js
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1100}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="Express Icon"
																		src={expressicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Express
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1200}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="PostgreSQL Icon"
																		src={sqlicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		PostgreSQL
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1300}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="MongoDB Icon"
																		src={mongoicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		MongoDB
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1400}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="Git Icon"
																		src={giticon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Git/GitHub
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1500}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																color="#000000"
																avatar={
																	<Avatar
																		alt="UX Icon"
																		src={uxicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		UX/UI
																	</Typography>
																}
															/>
														</Zoom>
													</Grid>
												</Grid>
											</VisibilitySensor>
										</VisibilitySensor>
									</Box>
								</Paper>
							</Grow>
						</Grid>

						<Grid item xs={9} sm={8} md={4} m={3} mb={7}>
							<Grow in={inViewB} timeout={1200}>
								<Paper elevation={4}>
									<Box px={4} py={3}>
										<Typography variant="h6" align="center" mb={2}>
											other skills
										</Typography>
										<VisibilitySensor
											onChange={visibilityFuncB}
											partialVisibility={true}
										>
											<VisibilitySensor
												onChange={anchorFuncB}
												partialVisibility={true}
											>
												<Grid
													container
													justifyContent="space-around"
													alignItems="center"
												>
													{" "}
													<Grid item>
														<Zoom in={inViewB} timeout={1300}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Team Icon"
																		src={teamicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Team Leadership
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewB} timeout={1400}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Digital Icon"
																		src={digitalicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Digital Distribution
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewB} timeout={1500}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Music Icon"
																		src={musicicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Music Industry
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewB} timeout={1600}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Diversity Icon"
																		src={diversityicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Diversity & Inclusion
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewB} timeout={1700}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Bulb Icon"
																		src={bulbicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Creative Thinking
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewB} timeout={1800}>
															<CardHeader
																sx={{ paddingTop: pTop, paddingBottom: pBot }}
																avatar={
																	<Avatar
																		alt="Communication Icon"
																		src={commicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		Communication
																	</Typography>
																}
															/>
														</Zoom>
													</Grid>
												</Grid>
											</VisibilitySensor>
										</VisibilitySensor>
									</Box>
								</Paper>
							</Grow>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</section>
	);
}
