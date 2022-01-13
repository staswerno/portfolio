import * as React from "react";
import { useState } from "react";
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
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [elevation, setElevation] = useState(2);

	return (
		<div>
			<Card
				onMouseEnter={() => setElevation(6)}
				onMouseLeave={() => setElevation(2)}
				elevation={elevation}
				sx={{
					maxWidth: 80,
					margin: 2,
					transition: "all ease-in-out .4s",
					"&:hover": {
						transform: "scale(1.12) ",
						opacity: 1,
						// shadows:
						// 	"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12),",
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
