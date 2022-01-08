import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: "100vh",

	bgcolor: "#000",
	border: "0px solid #000",
	boxShadow: 24,
	p: 0,
};

export default function ModalPhoto({ modalIcon, modalImage }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Card
				sx={{
					maxWidth: 80,
					margin: 2,
					transition: "all ease-in-out .4s",
					"&:hover": {
						transform: "scale(1.15) ",
						opacity: 1,
					},
				}}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						image={modalIcon}
						alt="photo thumbnail"
						onClick={handleOpen}
						// sx={{
						// transition: "all ease-in-out .4s",
						// "&:hover": {
						// 	transform: "scale(1.15) ",
						// 	opacity: 0.3,
						// },
						// }}
					/>
				</CardActionArea>
			</Card>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<CardMedia
							component="img"
							height="100%"
							image={modalImage}
							alt="photo"
						/>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
