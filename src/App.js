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
	const [pageAnchorHighlight, setPageAnchorHighlight] = useState(false);

	console.log(pageAnchorHighlight);

	// change set to true to test visibility

	const anchorFuncA = (isVisible) => {
		isVisible ? setPageAnchorHighlight(false) : setPageAnchorHighlight(false);
	};

	// const anchorFuncB = (isVisible) => {
	// 	isVisible
	// 		? setPageAnchorHighlight("skills")
	// 		: setPageAnchorHighlight(pageAnchorHighlight);
	// };

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<header>
					<NavBar pageAnchorHighlight={pageAnchorHighlight} />
				</header>
				<main>
					<VisibilitySensor
						onChange={anchorFuncA}
						partialVisibility={true}
						// offset={{ bottom: 10 }}
						scrollCheck={true}
					>
						<Intro />
					</VisibilitySensor>
					{/* <VisibilitySensor
						onChange={anchorFuncB}
						partialVisibility={true}
						scrollCheck={true}
						// offset={{ top: 10 }}
					> */}
					<Skills />
					{/* </VisibilitySensor> */}
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
