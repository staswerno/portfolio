import { createTheme, responsiveFontSizes } from "@mui/material";

const mode = "dark";

let theme = createTheme({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
			  }
			: {
					// palette values for dark mode
					primary: {
						main: "#c09da7",
						light: "#f3ced8",
						dark: "#8f6f78",
					},
					secondary: {
						main: "#bac3c9",
						light: "#ecf6fc",
						dark: "#8a9398",
					},
					error: {
						main: "#ffffff",
						light: "#ffffff",
						dark: "#ffffff",
					},
					background: {
						default: "#202020",
						paper: "#c09da7",
					},
					text: {
						primary: "#ffffff",
						secondary: "#000000",
					},
					action: {
						hoverOpacity: 0,
					},
			  }),
	},
	typography: {
		h1: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		h2: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		h3: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		h4: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		h5: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		h6: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		subtitle1: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		subtitle2: {
			fontFamily: ["Space Mono", "monospace"].join(","),
		},
		body1: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
		},
		body2: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
		},
		button: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
		},
		caption: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
		},
		overline: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
		},
	},
});
theme = responsiveFontSizes(theme);

export { theme };
