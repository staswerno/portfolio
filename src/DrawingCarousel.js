import { Card, CardMedia, Fade, Grow, Box, Paper } from "@mui/material";
import space from "./images/space.png";
import jono from "./images/jono.png";
import bell from "./images/bell.png";
import daisy from "./images/daisy.jpg";
import octavia from "./images/octavia.png";
import playing from "./images/playing.png";
import Carousel from "react-material-ui-carousel";

export default function DrawingCarousel({ inViewA }) {
	return (
		<Grow in={inViewA} timeout={900}>
			<Card sx={{ maxWidth: 527 }}>
				<Carousel
					animation={"slide"}
					duration={1000}
					interval={3000}
					indicators={false}
				>
					{/* <Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={playing}
						alt="space drawing"
						// sx={{ maxWidth: 527 }}
					/>
					{/* </Card>
					<Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={octavia}
						alt="space drawing"
					/>
					{/* </Card>
					<Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={space}
						alt="space drawing"
					/>
					{/* </Card>
					<Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={bell}
						alt="space drawing"
					/>
					{/* </Card>
					<Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={jono}
						alt="space drawing"
					/>
					{/* </Card>
					<Card sx={{ maxWidth: 527 }}> */}
					<CardMedia
						component="img"
						height="100%"
						image={daisy}
						alt="space drawing"
					/>
					{/* </Card> */}
				</Carousel>
			</Card>
		</Grow>
	);
}
