import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from "./pages/homePage";
import { FilterProvider } from "./Context/FilterContext";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6F65EF",
		},
		secondary: {
			main: "##E8E8EF",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<FilterProvider>
				<div className='App'>
					<HomePage />
				</div>
			</FilterProvider>
		</ThemeProvider>
	);
}

export default App;