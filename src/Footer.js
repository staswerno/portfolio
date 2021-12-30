import { Box, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
	return (
		<Box
			// mt={{ xs: 1, sm: 2, md: 6, lg: 6, xl: 3 }}
			sx={{
				width: "100%",
				//	height: "80vh",
				display: "flex",
				backgroundColor: "primary.main",
				mx: "auto",
			}}
		>
			<Grid
				container
				justifyContent={{ xs: "center", sm: "space-between" }}
				alignItems="center"

				//	rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 0 }}
			>
				<Grid item m={3} mt={{ xs: 6, sm: 3 }}>
					<Typography variant="h6" align="center">
						staswerno@gmail.com | © 2022
					</Typography>
				</Grid>
				<Grid item m={3} mb={{ xs: 6, sm: 3 }}>
					<GitHubIcon sx={{ mx: 2 }} fontSize="large" />
					<LinkedInIcon fontSize="large" />
				</Grid>
			</Grid>
		</Box>
	);
}
