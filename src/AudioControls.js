import IconButton from "@mui/material/IconButton";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import StopOutlinedIcon from "@mui/icons-material/StopOutlined";
import { Box } from "@mui/material";

const AudioControls = ({
	isPlaying,
	onPlayPauseClick,
	onPrevClick,
	onNextClick,
}) => {
	return (
		<Box
			sx={{ display: "flex", alignItems: "center", pl: 1, pb: 0 }}
			mx="auto"
			mt={1}
		>
			<IconButton aria-label="previous" onClick={onPrevClick}>
				<SkipPreviousOutlinedIcon />
			</IconButton>
			{isPlaying ? (
				<IconButton
					aria-label="play/pause"
					onClick={() => onPlayPauseClick(false)}
				>
					<StopOutlinedIcon sx={{ height: 38, width: 38 }} />
				</IconButton>
			) : (
				<IconButton
					aria-label="play/pause"
					onClick={() => onPlayPauseClick(true)}
				>
					<PlayArrowOutlinedIcon sx={{ height: 38, width: 38 }} />
				</IconButton>
			)}
			<IconButton aria-label="next" onClick={onNextClick}>
				<SkipNextOutlinedIcon />
			</IconButton>
		</Box>
	);
};

export default AudioControls;
