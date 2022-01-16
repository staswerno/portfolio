import { Grid, Paper, Card, Typography, Grow } from "@mui/material";

import flohmarkt_icon from "./images/photo-flohmarkt-sm-ic.jpg";
import forest_icon from "./images/photo-forest-sm-ic.jpg";
import hajiali_icon from "./images/photo-hajiali-sm-ic.jpg";
import joponono_icon from "./images/photo-joponono-sm-ic.jpg";
import nepal_icon from "./images/photo-nepal-sm-ic.jpg";
import shan_icon from "./images/photo-shan-sm-ic.jpg";
import prayer_icon from "./images/photo-prayer-sm-ic.jpg";
import boudhanath_icon from "./images/photo-boudhanath-sm-ic.jpg";
import thailand_icon from "./images/photo-thailand-sm-ic.jpg";

import flohmarkt_photo from "./images/photo-flohmarkt-sm.jpg";
import forest_photo from "./images/photo-forest-sm.jpg";
import hajiali_photo from "./images/photo-hajiali-sm.jpg";
import joponono_photo from "./images/photo-joponono-sm.jpg";
import nepal_photo from "./images/photo-nepal-sm.jpg";
import shan_photo from "./images/photo-shan-sm.jpg";
import prayer_photo from "./images/photo-prayer-sm.jpg";
import boudhanath_photo from "./images/photo-boudhanath-sm.jpg";
import thailand_photo from "./images/photo-thailand-sm.jpg";

import AudioPlayer from "./AudioPlayer";
import DrawingCarousel from "./DrawingCarousel";
import ModalPhoto from "./ModalPhoto";

import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

export default function Hobbies({ anchorFuncD }) {
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
		<section id="hobbies">
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
								hobbies
							</Typography>
						</Paper>
					</Grid>
					<Grid
						container
						justifyContent="space-around"
						alignItems="center"
						//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
					>
						<Grid item xs={9} sm={8} md={5} xl={4} mb={-2}>
							<VisibilitySensor
								onChange={visibilityFuncA}
								partialVisibility={true}
							>
								<VisibilitySensor
									onChange={anchorFuncD}
									partialVisibility={true}
								>
									<DrawingCarousel inViewA={inViewA} />
								</VisibilitySensor>
							</VisibilitySensor>
						</Grid>
						<Grid item xs={9} sm={8} md={5}>
							<Grid
								container
								// direction="column"
								justifyContent="space-around"
								alignItems="center"
								mb={6}
							>
								<VisibilitySensor
									onChange={visibilityFuncB}
									partialVisibility={true}
								>
									<VisibilitySensor
										onChange={anchorFuncD}
										partialVisibility={true}
									>
										<Grow in={inViewB} timeout={1200}>
											<Grid
												container
												justifyContent="space-around"
												m={3}
												mt={{ xs: 0, md: 3 }}
												mb={{ xs: 0, sm: 3 }}
											>
												<ModalPhoto
													modalIcon={shan_icon}
													modalImage={shan_photo}
												/>

												<ModalPhoto
													modalIcon={thailand_icon}
													modalImage={thailand_photo}
												/>

												<ModalPhoto
													modalIcon={joponono_icon}
													modalImage={joponono_photo}
												/>
												{/* <ModalPhoto modalIcon={boudhanath_icon} /> */}
											</Grid>
										</Grow>
									</VisibilitySensor>
								</VisibilitySensor>
								<VisibilitySensor
									onChange={visibilityFuncB}
									partialVisibility={true}
								>
									<VisibilitySensor
										onChange={anchorFuncD}
										partialVisibility={true}
									>
										<Grow in={inViewB} timeout={1200}>
											<Grid
												container
												justifyContent="space-around"
												m={3}
												mt={{ xs: 0, sm: 3 }}
											>
												<ModalPhoto
													modalIcon={nepal_icon}
													modalImage={nepal_photo}
												/>
												<ModalPhoto
													modalIcon={hajiali_icon}
													modalImage={hajiali_photo}
												/>
												<ModalPhoto
													modalIcon={flohmarkt_icon}
													modalImage={flohmarkt_photo}
												/>
												{/* <ModalPhoto modalIcon={prayer_icon} /> */}
											</Grid>
										</Grow>
									</VisibilitySensor>
								</VisibilitySensor>
								<Grid
									container
									justifyContent="center"
									m={3}
									mb={{ xs: 1, md: 3 }}
									// mt={{ xs: 6, md: 3 }}
								>
									<VisibilitySensor
										onChange={visibilityFuncC}
										partialVisibility={true}
									>
										<VisibilitySensor
											onChange={anchorFuncD}
											partialVisibility={true}
										>
											{/* <AudioPlayer /> */}
											<AudioPlayer inViewC={inViewC} />
										</VisibilitySensor>
									</VisibilitySensor>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</section>
	);
}
