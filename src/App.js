import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import NavBar from "./NavBar";
import Intro from "./Intro";

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
				</main>
				<footer></footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
