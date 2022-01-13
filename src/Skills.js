import {
	Grid,
	Box,
	Paper,
	CardHeader,
	Avatar,
	Typography,
	Fade,
	Grow,
	Zoom,
} from "@mui/material";
import muiicon from "./images/icon-mui-dummy.png";
import htmlicon from "./images/icon-html-dummy.png";
import cssicon from "./images/icon-css-dummy.png";
import bootstrapicon from "./images/icon-bootstrap-dummy.png";
import expressicon from "./images/icon-express-dummy.png";
import githubicon from "./images/icon-github-dummy.png";
import jsicon from "./images/icon-js-dummy.png";
import mongoicon from "./images/icon-mongo-dummy.png";
import nodeicon from "./images/icon-node-dummy.png";
import reacticon from "./images/icon-react-dummy.png";
import sqlicon from "./images/icon-sql-dummy.png";
import uxicon from "./images/icon-ux-dummy.png";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
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
	return (
		<section id="skills">
			<Paper
				mt={{ xs: 10, sm: 12, md: 6, lg: 6, xl: 3 }}
				sx={{
					width: "90%",
					//	height: "80vh",
					display: "flex",
					backgroundColor: "#bac3c9",
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
								skills
							</Typography>
						</Paper>
					</Grid>

					<Grid
						container
						justifyContent="space-around"
						alignItems="center"
						//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
					>
						<Grid item xs={9} sm={8} item md={6} m={3} mb={{ xs: 3, md: 8 }}>
							<Grow in={inViewA} timeout={900}>
								<Paper elevation={4}>
									<Box px={4} py={2}>
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

													// rowSpacing={{ xs: 0, sm: 4, md: 6, lg: 0 }}
												>
													{" "}
													<Grid item>
														<Zoom in={inViewA} timeout={1000}>
															<CardHeader
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
														{/* </VisibilitySensor> */}
													</Grid>
													<Grid item>
														{/* <VisibilitySensor
														onChange={anchorFuncB}
														partialVisibility={true}
													> */}
														<Zoom in={inViewA} timeout={1000}>
															<CardHeader
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
																color="#000000"
																avatar={
																	<Avatar
																		alt="SQL Icon"
																		src={sqlicon}
																		variant="square"
																	/>
																}
																title={
																	<Typography
																		color="text.secondary"
																		variant="body2"
																	>
																		SQL/NoSQL
																	</Typography>
																}
															/>
														</Zoom>
														<Zoom in={inViewA} timeout={1300}>
															<CardHeader
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
																color="#000000"
																avatar={
																	<Avatar
																		alt="GitHub Icon"
																		src={githubicon}
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

						<Grid item xs={9} sm={8} item md={4} m={3} mb={8}>
							<Grow in={inViewB} timeout={1200}>
								<Paper elevation={4}>
									<Box px={4} py={2}>
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
													//	rowSpacing={{ xs: 3, sm: 4, md: 6, lg: 0 }}
												>
													{" "}
													<Grid item>
														<Zoom in={inViewB} timeout={1300}>
															<CardHeader
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<GroupsOutlinedIcon sx={{ fontSize: 36 }} />
																	</Avatar>
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
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<MemoryOutlinedIcon sx={{ fontSize: 36 }} />
																	</Avatar>
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
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<MusicNoteOutlinedIcon
																			sx={{ fontSize: 36 }}
																		/>
																	</Avatar>
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
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<GroupAddOutlinedIcon
																			sx={{ fontSize: 36 }}
																		/>
																	</Avatar>
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
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<EmojiObjectsOutlinedIcon
																			sx={{ fontSize: 36 }}
																		/>
																	</Avatar>
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
																avatar={
																	<Avatar
																		alt="Team Icon"
																		variant="rounded"
																		sx={{ bgcolor: "transparent" }}
																	>
																		<SmsOutlinedIcon sx={{ fontSize: 36 }} />
																	</Avatar>
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
