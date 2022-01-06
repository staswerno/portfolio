import "./App.css";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./Theme";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Footer from "./Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<header>
					<NavBar />
				</header>
				<main>
					<Intro />
					<Skills />
					<Projects />
					<Hobbies />
					<Contact />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
