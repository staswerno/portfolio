import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
	return (
		<Box
			sx={{
				width: "100%",

				display: "flex",
				backgroundColor: "primary.main",
				mx: "auto",
			}}
			elevation={6}
		>
			<Grid
				container
				justifyContent={{ xs: "center", sm: "space-between" }}
				alignItems="center"
			>
				<Grid item m={3} mt={{ xs: 6, sm: 3 }}>
					<Typography variant="h6" align="center">
						<Link
							href="mailto:hello@staswerno.dev"
							color="inherit"
							underline="none"
						>
							hello@staswerno.dev
						</Link>{" "}
						| © 2022
					</Typography>
				</Grid>
				<Grid item m={3} mb={{ xs: 6, sm: 3 }}>
					<IconButton
						sx={{ mx: 2 }}
						href="https://github.com/staswerno"
						target="_blank"
						alt="github page"
					>
						<GitHubIcon fontSize="large" />
					</IconButton>
					<IconButton
						href="https://www.linkedin.com/in/staswerno/"
						target="_blank"
						alt="linkedin page"
					>
						<LinkedInIcon fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
}
