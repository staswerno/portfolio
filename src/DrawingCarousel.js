import { Card, CardMedia, Fade, Grow } from "@mui/material";
import space from "./images/space.png";

export default function DrawingCarousel({ inViewA }) {
	return (
		<Grow in={inViewA} timeout={900}>
			<Card sx={{ maxWidth: 527 }}>
				<CardMedia
					component="img"
					height="100%"
					image={space}
					alt="space drawing"
				/>
			</Card>
		</Grow>
	);
}
