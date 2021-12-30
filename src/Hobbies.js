import {
	Grid,
	Box,
	Paper,
	Card,
	CardMedia,
	CardHeader,
	Avatar,
	Typography,
	Fade,
	Grow,
} from "@mui/material";
import space from "./images/space.png";
import flohmarkt_icon from "./images/photo-flohmarkt-sm-ic.jpg";
import forest_icon from "./images/photo-forest-sm-ic.jpg";
import hajiali_icon from "./images/photo-hajiali-sm-ic.jpg";
import joponono_icon from "./images/photo-joponono-sm-ic.jpg";
import nepal_icon from "./images/photo-nepal-sm-ic.jpg";
import shan_icon from "./images/photo-shan-sm-ic.jpg";
import prayer_icon from "./images/photo-prayer-sm-ic.jpg";
import boudhanath_icon from "./images/photo-boudhanath-sm-ic.jpg";
import MediaCard from "./MediaCard";
import AudioPlayer from "material-ui-audio-player";

export default function Hobbies() {
	return (
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
					<Paper sx={{ width: 210 }}>
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
					<Grid item xs={9} sm={8} md={4} m={3} mb={{ xs: 3, md: 7 }}>
						<Fade in={true} timeout={1000}>
							<Card sx={{ maxWidth: 527 }}>
								<CardMedia
									component="img"
									height="100%"
									image={space}
									alt="portrait"
								/>
							</Card>
						</Fade>
					</Grid>
					<Grid item xs={9} sm={8} md={6} mb={{ xs: 3, md: 7 }}>
						<Grid container>
							<Grid container justifyContent="space-around">
								<Card sx={{ maxWidth: 80, margin: 2 }}>
									<CardMedia
										component="img"
										height="100%"
										image={shan_icon}
										alt="photo thumbnail"
									/>
								</Card>
								<Card sx={{ maxWidth: 80, margin: 2 }}>
									<CardMedia
										component="img"
										height="100%"
										image={flohmarkt_icon}
										alt="photo thumbnail"
									/>
								</Card>
								<Card sx={{ maxWidth: 80, margin: 2 }}>
									<CardMedia
										component="img"
										height="100%"
										image={hajiali_icon}
										alt="photo thumbnail"
									/>
								</Card>

								{/* <Box m={2}>
										<img
											className="small"
											src={boudhanath_icon}
											// onClick={this.handleShowDialog}
											alt="photo thumbnail"
											//  width="60"
										/>
									</Box>
									<Box m={2}>
										{" "}
										<img
											className="small"
											src={boudhanath_icon}
											// onClick={this.handleShowDialog}
											alt="photo thumbnail"
										/>
									</Box>
									<Box m={2}>
										{" "}
										<img
											className="small"
											src={boudhanath_icon}
											// onClick={this.handleShowDialog}
											alt="photo thumbnail"
										/>
									</Box> */}
								{/* <Box m={2}>
										{" "}
										<img
											className="small"
											src={boudhanath_icon}
											// onClick={this.handleShowDialog}
											alt="photo thumbnail"
										/>
									</Box> */}
							</Grid>
							<Grid container justifyContent="space-around">
								<Box m={2}>
									<img
										className="small"
										src={joponono_icon}
										// onClick={this.handleShowDialog}
										alt="photo thumbnail"
									/>
								</Box>
								<Box m={2}>
									{" "}
									<img
										className="small"
										src={nepal_icon}
										// onClick={this.handleShowDialog}
										alt="photo thumbnail"
									/>
								</Box>
								<Box m={2}>
									{" "}
									<img
										className="small"
										src={forest_icon}
										// onClick={this.handleShowDialog}
										alt="photo thumbnail"
									/>
								</Box>
								{/* <Box m={2}>
										{" "}
										<img
											className="small"
											src={boudhanath_icon}
											// onClick={this.handleShowDialog}
											alt="photo thumbnail"
										/>
									</Box> */}
							</Grid>
							<Grid container justifyContent="center" m={4}>
								{/* <AudioPlayer /> */}
								<MediaCard />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}
