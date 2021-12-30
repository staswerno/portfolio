// import { createTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { theme } from "./Theme";

// const muiTheme = createTheme({});



eport default function AudioPlayer() {
    return (
{/* <ThemeProvider theme={muiTheme}> */}
  <AudioPlayer  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
// </ThemeProvider>
    )
}