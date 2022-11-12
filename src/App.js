import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from "./pages/homePage";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6F65EF",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "##E8E8EF",
		},
	},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
		<div className='App'>
			<HomePage />
      </div>
    </ThemeProvider>
	);
}

export default App;