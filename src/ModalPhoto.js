import * as React from "react";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Card, CardMedia, CardActionArea } from "@mui/material";

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
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [elevation, setElevation] = useState(2);

	return (
		<div>
			<Card
				onMouseEnter={() => setElevation(4)}
				onMouseLeave={() => setElevation(2)}
				elevation={elevation}
				sx={{
					maxWidth: { xs: 70, sm: 80 },
					margin: 1,
					transition: "all ease-in-out .4s",
					"&:hover": {
						transform: "scale(1.075) ",
						opacity: 1,
					},
				}}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						image={modalIcon}
						alt={modalIcon}
						onClick={handleOpen}
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
							alt={modalImage}
						/>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
