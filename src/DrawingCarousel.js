import { Card, CardMedia, Fade } from "@mui/material";
import space from "./images/space.png";

export default function DrawingCarousel() {
	return (
		<Fade in={true} timeout={1000}>
			<Card sx={{ maxWidth: 527 }}>
				<CardMedia
					component="img"
					height="100%"
					image={space}
					alt="space drawing"
				/>
			</Card>
		</Fade>
	);
}
