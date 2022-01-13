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
					background: {
						default: "#202020",
						paper: "#c09da7",
					},
					text: {
						primary: "#ffffff",
						secondary: "#000000",
					},
					action: {
						// focus: "rgba(255, 0, 132, 0.98)",
						// active: "rgba(255, 0, 132, 0.98)",
						// hover: "rgba(255, 0, 132, 0.98)",
						// selected: "rgba(255, 0, 132, 0.98)",
						// disabled: "rgba(255, 0, 132, 0.98)",
						// disabledBackground: "rgba(255, 0, 132, 0.98)",
						hoverOpacity: 0,
					},
			  }),
	},
	typography: {
		h1: {
			fontFamily: "Space Mono",
		},
		h2: {
			fontFamily: "Space Mono",
		},
		h3: {
			fontFamily: "Space Mono",
		},
		h4: {
			fontFamily: "Space Mono",
		},
		h5: {
			fontFamily: "Space Mono",
		},
		h6: {
			fontFamily: "Space Mono",
		},
		subtitle1: {
			fontFamily: "Space Mono",
		},
		subtitle2: {
			fontFamily: "Space Mono",
		},
		body1: {
			fontFamily: "Roboto",
		},
		body2: {
			fontFamily: "Roboto",
		},
		button: {
			fontFamily: "Roboto",
		},
		caption: {
			fontFamily: "Roboto",
		},
		overline: {
			fontFamily: "Roboto",
		},
	},
});
theme = responsiveFontSizes(theme);

export { theme };
