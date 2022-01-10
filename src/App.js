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
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";

import { useState } from "react";

function App() {
	const [pageAnchorHighlight, setPageAnchorHighlight] = useState("about");
	const offset = 0;
	// change set to true to test visibility

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
					<NavBar pageAnchorHighlight={pageAnchorHighlight} />
				</header>
				<main>
					{/* <VisibilitySensor
						onChange={anchorFuncA}
						partialVisibility={true}
						//	offset={{ bottom: -200 }}
						scrollCheck={true}
						resizeCheck={true}
					> */}
					<Intro anchorFuncA={anchorFuncA} />
					{/* </VisibilitySensor> */}
					{/* <VisibilitySensor
						onChange={anchorFuncB}
						partialVisibility={true}
						// offset={{ top: -50, bottom: -50 }}
						scrollCheck={true}
						resizeCheck={true}
					> */}
					<Skills anchorFuncB={anchorFuncB} />
					{/* </VisibilitySensor> */}
					{/* <VisibilitySensor
						onChange={anchorFuncC}
						partialVisibility={true}
						// offset={{ top: -50, bottom: -50 }}
						scrollCheck={true}
						resizeCheck={true}
					> */}
					<Projects anchorFuncC={anchorFuncC} />
					{/* </VisibilitySensor>
					<VisibilitySensor
						onChange={anchorFuncD}
						partialVisibility={true}
						// offset={{ top: -50, bottom: -50 }}
						scrollCheck={true}
						resizeCheck={true}
					> */}
					<Hobbies anchorFuncD={anchorFuncD} />
					{/* </VisibilitySensor>
					<VisibilitySensor
						onChange={anchorFuncE}
						partialVisibility={true}
						// offset={{ top: -50, bottom: -50 }}
						scrollCheck={true}
						resizeCheck={true}
					> */}
					<Contact anchorFuncE={anchorFuncE} />
					{/* </VisibilitySensor> */}
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
