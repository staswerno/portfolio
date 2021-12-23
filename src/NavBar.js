import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
	Grid,
} from "@mui/material";

const pages = ["about", "skills", "projects", "hobbies", "contact"];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters enableColorOnDark>
					<Grid
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						container
					>
						<Grid item>
							<Typography
								variant="h5"
								noWrap
								component="div"
								sx={{ display: { xs: "none", sm: "flex" } }}
							>
								Staś Werno
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant="h5"
								noWrap
								component="div"
								sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
							>
								Staś Werno
							</Typography>
						</Grid>
						<Grid item>
							<Box
								mr="auto"
								sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}
							>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "left",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: "block", sm: "none" },
									}}
								>
									{pages.map((page) => (
										<MenuItem key={page} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
						</Grid>
						<Grid item>
							<Box
								mr="auto"
								sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
							>
								{pages.map((page) => (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: "inherit", display: "block" }}
									>
										{page}
									</Button>
								))}
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
