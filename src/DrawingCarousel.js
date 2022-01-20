import { Card, CardMedia, Grow, Box, IconButton } from "@mui/material";
import space from "./images/space.png";
import jono from "./images/jono.png";
import bell from "./images/bell.png";
import daisy from "./images/daisy.jpg";
import octavia from "./images/octavia.png";
import playing from "./images/playing.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function DrawingCarousel({ inViewA }) {
	const arrowStyles: CSSProperties = {
		position: "absolute",
		zIndex: 2,
		top: "calc(50% - 15px)",
		backgroundColor: "rgba(192,157,167,1)",
		cursor: "pointer",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
	};
	return (
		<Grow in={inViewA} timeout={900}>
			<Box>
				<Carousel
					autoPlay={false}
					infiniteLoop={true}
					showArrows={true}
					showIndicators={false}
					showStatus={false}
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<IconButton
								aria-label="back"
								onClick={onClickHandler}
								title={label}
								style={{ ...arrowStyles, left: 5 }}
								size="small"
							>
								<ArrowBackIosNewIcon />
							</IconButton>
						)
					}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<IconButton
								aria-label="forward"
								onClick={onClickHandler}
								title={label}
								style={{ ...arrowStyles, right: 5 }}
								size="small"
								backgroundColor="#000000"
							>
								<ArrowForwardIosIcon />
							</IconButton>
						)
					}
				>
					<Box p={3}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={playing}
								alt="siblings playing drawing"
							/>
						</Card>
					</Box>
					<Box p={2}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={octavia}
								alt="octavia butler drawing"
							/>
						</Card>
					</Box>
					<Box p={3}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={space}
								alt="space drawing"
							/>
						</Card>
					</Box>
					<Box p={3}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={bell}
								alt="bell hooks drawing"
							/>
						</Card>
					</Box>
					<Box p={3}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={jono}
								alt="team read the room drawing"
							/>
						</Card>
					</Box>
					<Box p={3}>
						<Card sx={{ maxWidth: 527 }} elevation={4}>
							<CardMedia
								component="img"
								height="100%"
								image={daisy}
								alt="daisy drawing"
							/>
						</Card>
					</Box>
				</Carousel>
			</Box>
		</Grow>
	);
}
