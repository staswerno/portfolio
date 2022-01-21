import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Footer from "./Footer";
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";

import { useState } from "react";

function App() {
	const [pageAnchorHighlight, setPageAnchorHighlight] = useState("about");

	const anchorFuncA = (isVisible) => {
		if (isVisible) {
			setPageAnchorHighlight("about");
		}
	};

	const anchorFuncB = (isVisible) => {
		if (isVisible) {
			setPageAnchorHighlight("skills");
		}
	};

	const anchorFuncC = (isVisible) => {
		if (isVisible) {
			setPageAnchorHighlight("projects");
		}
	};

	const anchorFuncD = (isVisible) => {
		if (isVisible) {
			setPageAnchorHighlight("hobbies");
		}
	};

	const anchorFuncE = (isVisible) => {
		if (isVisible) {
			setPageAnchorHighlight("contact");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<header>
					<section id="about">.</section>
					<NavBar pageAnchorHighlight={pageAnchorHighlight} />
				</header>
				<main>
					<Intro anchorFuncA={anchorFuncA} />
					<Skills anchorFuncB={anchorFuncB} />
					<Projects anchorFuncC={anchorFuncC} />
					<Hobbies anchorFuncD={anchorFuncD} />
					<Contact anchorFuncE={anchorFuncE} />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
