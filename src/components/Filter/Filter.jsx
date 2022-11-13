import React, { useState } from "react";
import {
	Container,
	Button,
	Divider,
	FormControl,
	FormHelperText,
	Select,
	MenuItem,
	experimentalStyled as styled,
} from "@mui/material";
import "./Filter.scss";
import Data from "../../demo_data";
import { useFilter } from "../../Context/FilterContext";

const StyledSelect = styled(Select)(({ theme }) => ({
	color: "#000000",
	fontSize: "16px",
	fontWeight: "700",
	boxShadow: "none",
	".MuiOutlinedInput-notchedOutline": { border: 0 },
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
	margin: "0px 4px",
	color: "#999999",
	fontWeight: "600",
	fontSize: "16px",
}));

const LOCATION = ["All", "India", "Foreign"];
const WHEN = ["All", "Today", "Tomorrow"];
const PRICE_RANGE = ["All", 500, 1500, 2500];
const PROPERTY_TYPE = ["All", "Apartment", "Villa", "2-BHK"];

function Filter() {
	const [location, setLocation] = useState(LOCATION[0]);
	const [when, setWhen] = useState(WHEN[0]);
	const [priceRange, setPriceRange] = useState(PRICE_RANGE[0]);
	const [propertyType, setPropertyType] = useState(PROPERTY_TYPE[0]);
	const [filter, setFilter] = useFilter();

	function filterLocation(data, value = location) {
		return value === "All" || data?.location === value;
	}
	function filterWhen(data, value = when) {
		return value === "All" || data?.when === value;
	}
	function filterPriceRange(data, value = priceRange) {
		return (
			value === "All" || (data?.price >= value && data?.price <= value + 1000)
		);
	}
	function filterPropertyType(data, value = propertyType) {
		return value === "All" || data?.category === value;
	}

	function filterData() {
		const filteredData = Data.filter(
			(data) =>
				filterLocation(data) &&
				filterWhen(data) &&
				filterPriceRange(data) &&
				filterPropertyType(data)
		);
		setFilter(filteredData);
	}

	return (
		<Container className='filter_container'>
			<FormControl size='small' sx={{ width: "25ch" }} variant='outlined'>
				<StyledFormHelperText>Location</StyledFormHelperText>
				<StyledSelect
					value={location}
					onChange={(e) => setLocation(e.target.value)}>
					{LOCATION.map((val) => (
						<MenuItem key={val} value={val}>
							{val}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
			<Divider orientation='vertical' flexItem />
			<FormControl size='small' sx={{ width: "25ch" }} variant='outlined'>
				<StyledFormHelperText>When</StyledFormHelperText>
				<StyledSelect value={when} onChange={(e) => setWhen(e.target.value)}>
					{WHEN.map((val) => (
						<MenuItem key={val} value={val}>
							{" "}
							{val}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
			<Divider orientation='vertical' flexItem />
			<FormControl size='small' sx={{ width: "25ch" }} variant='outlined'>
				<StyledFormHelperText>Price</StyledFormHelperText>
				<StyledSelect
					value={priceRange}
					onChange={(e) => setPriceRange(e.target.value)}>
					{PRICE_RANGE.map((val) => (
						<MenuItem value={val} key={val}>
							{val === "All" ? "All" : `$${val} - $${val + 1000}`}{" "}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
			<Divider orientation='vertical' flexItem />
			<FormControl size='small' sx={{ width: "25ch" }} variant='outlined'>
				<StyledFormHelperText>Property Type</StyledFormHelperText>
				<StyledSelect
					value={propertyType}
					onChange={(e) => setPropertyType(e.target.value)}>
					{PROPERTY_TYPE.map((val) => (
						<MenuItem key={val} value={val}>
							{val}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
			<Divider orientation='vertical' flexItem />
			<Button variant='contained' className='search_btn' onClick={filterData}>
				Search
			</Button>
		</Container>
	);
}

export default Filter;
