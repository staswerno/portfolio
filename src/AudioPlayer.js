import React, { useState, useEffect, useRef } from "react";

import { Grow, Slider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import albumart from "./images/albumart.png";
import S2Lichtenberg from "./sounds/StasWernoS2LichtenbergLoTrim.mp3";
import EyAlter from "./sounds/StasWernoEyAlterLoTrim.mp3";
import AudioControls from "./AudioControls";

const tracks = [
	{
		title: "S2 Lichtenberg",
		artist: "Staś Werno",
		audioSrc: S2Lichtenberg,
		image: albumart,
		color: "#c09da7",
	},
	{
		title: "Ey Alter",
		artist: "Staś Werno",
		audioSrc: EyAlter,
		image: albumart,
		color: "#bac3c9",
	},
];

export default function AudioPlayer({ inViewC }) {
	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const { title, artist, color, image, audioSrc } = tracks[trackIndex];

	const audioRef = useRef(new Audio(audioSrc));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const currentPercentage = duration
		? `${(trackProgress / duration) * 100}%`
		: "0%";
	const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

	const toPrevTrack = () => {
		if (trackIndex - 1 < 0) {
			setTrackIndex(tracks.length - 1);
		} else {
			setTrackIndex(trackIndex - 1);
		}
	};

	const toNextTrack = () => {
		if (trackIndex < tracks.length - 1) {
			setTrackIndex(trackIndex + 1);
		} else {
			setTrackIndex(0);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	useEffect(() => {
		audioRef.current.pause();

		audioRef.current = new Audio(audioSrc);
		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			// Set the isReady ref as true for the next pass
			isReady.current = true;
		}
	}, [trackIndex]);

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextTrack();
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	const onScrub = (value) => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};

	return (
		<Grow in={inViewC} timeout={1200}>
			<Card sx={{ display: "flex" }} elevation={4}>
				<CardMedia
					component="img"
					sx={{ width: 160 }}
					image={image}
					alt={`track artwork for ${title} by ${artist}`}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minWidth: "175px",
					}}
				>
					<CardContent sx={{ flex: "1 0 auto", width: "210px" }}>
						<Typography component="div" variant="h6" textAlign="center">
							{title}
						</Typography>
					</CardContent>
					<AudioControls
						isPlaying={isPlaying}
						onPrevClick={toPrevTrack}
						onNextClick={toNextTrack}
						onPlayPauseClick={setIsPlaying}
					/>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							pl: 1,
							pb: 1,
							width: "80%",
							mx: "auto",
						}}
					>
						{/* <input
							type="range"
							value={trackProgress}
							step="1"
							min="0"
							max={duration ? duration : `${duration}`}
							className="progress"
							onChange={(e) => onScrub(e.target.value)}
							onMouseUp={onScrubEnd}
							onKeyUp={onScrubEnd}
							style={{ background: trackStyling }}
						/> */}

						<Slider
							color="error"
							aria-label="time-indicator"
							size="small"
							value={trackProgress}
							min={0}
							step={1}
							max={duration}
							onChange={(e) => onScrub(e.target.value)}
							onMouseUp={onScrubEnd}
							onKeyUp={onScrubEnd}
							sx={{
								color: "#fff",
								height: 4,
								"& .MuiSlider-thumb": {
									width: 8,
									height: 8,
									transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
									"&:before": {
										boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
									},
									"&:hover, &.Mui-focusVisible": {
										boxShadow: `0px 0px 0px 8px ${"rgb(255 255 255 / 16%)"}`,
									},
									"&.Mui-active": {
										width: 20,
										height: 20,
									},
								},
								"& .MuiSlider-rail": {
									opacity: 0.28,
								},
							}}
						/>
					</Box>
					{/* <Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							pl: 1,
							pb: 1,
							width: "80%",
						}}
					>
						<Slider color="error" width="50%" />
					</Box> */}
				</Box>
			</Card>
		</Grow>
	);
}
