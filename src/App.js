import "./App.css";
import { CssBaseline, Typography, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<header className="App-header">
					<Paper color="primary">
						<Typography variant="h1" color="#f3f3f3">
							Hullo World
						</Typography>
					</Paper>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
