import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";

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
				</main>
				<footer></footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
