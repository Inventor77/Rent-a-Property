import React, { useState, useContext, createContext } from "react";
import Data from "../demo_data";

const FilterContext = createContext();
const UpdateFilterContext = createContext();

export function useFilter() {
	return [useContext(FilterContext), useContext(UpdateFilterContext)];
}

export function FilterProvider({ children }) {
	const [filteredData, setFilteredData] = useState(Data);

	return (
		<FilterContext.Provider value={filteredData}>
			<UpdateFilterContext.Provider value={setFilteredData}>
				{children}
			</UpdateFilterContext.Provider>
		</FilterContext.Provider>
	);
}
