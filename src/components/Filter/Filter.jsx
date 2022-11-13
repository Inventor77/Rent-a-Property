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

const StyledSelect = styled(Select)(({ theme }) => ({
	border: "none",
	outline: "none",
	color: "#000000",
	fontSize: "14px",
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
	margin: "0px 4px",
	color: "#999999",
	fontWeight: "600",
	fontSize: "16px",
}));

const LOCATION = ["All"];
const PRICE_RANGE = ["All", 500, 1500, 2500];
const PROPERTY_TYPE = ["All", "Apartment", "Villa", "2-BHK"];

function Filter() {
	const [location, setLocation] = useState(LOCATION[0]);
	const [priceRange, setPriceRange] = useState(PRICE_RANGE[0]);
	const [propertyType, setPropertyType] = useState(PROPERTY_TYPE[0]);

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
				<StyledSelect
				// value={}
				// onChange={handleChange}
				></StyledSelect>
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
			<Button variant='contained' className='search_btn'>
				Search
			</Button>
		</Container>
	);
}

export default Filter;
