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
	Collapse,
} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Carousel from "react-material-ui-carousel";

const pages = ["about", "skills", "projects", "hobbies", "contact"];

export default function NavBar({ pageAnchorHighlight }) {
	const [anchorElNav, setAnchorElNav] = useState(null);
	// const [pageAnchorHighlight, setPageAnchorHighlight] = useState(true);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	console.log(pageAnchorHighlight);

	return (
		<AppBar position="fixed">
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
								sx={{ display: { xs: "flex", sm: "none" } }}
							>
								Staś Werno
							</Typography>
						</Grid>
						<Grid item>
							<Box
								mr="auto"
								sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
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

								<Box>
									<Collapse in={true} timeout={8000}>
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
											{pages.map((page) => {
												const pageAnchor = `#${page}`;
												return (
													<MenuItem
														key={pageAnchor}
														onClick={handleCloseNavMenu}
													>
														<AnchorLink
															style={{ textDecoration: "none" }}
															offset="100"
															href={pageAnchor}
														>
															<Typography
																textAlign="center"
																color="text.primary"
															>
																{page}
															</Typography>
														</AnchorLink>
													</MenuItem>
												);
											})}
										</Menu>
									</Collapse>
								</Box>
							</Box>
						</Grid>
						<Grid item>
							<Box
								mr="auto"
								sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
							>
								{pages.map((page) => {
									const pageAnchor = `#${page}`;
									return (
										<AnchorLink
											offset="100"
											underline="none"
											style={{ textDecoration: "none" }}
											href={pageAnchor}
										>
											<Button
												key={page}
												onClick={handleCloseNavMenu}
												style={
													pageAnchorHighlight === page
														? {
																//
																backgroundColor: "rgba(32, 32, 32, 0.05)",
														  }
														: { textDecoration: "none" }
												}
												sx={{
													my: 2,
													color: "text.primary",

													display: "block",
												}}
											>
												{page}
											</Button>
										</AnchorLink>
									);
								})}
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
