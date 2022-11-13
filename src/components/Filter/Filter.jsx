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

const PRICE_RANGE = ["All", 500, 1500, 2500];

function Filter() {
	const [priceRange, setPriceRange] = useState("All");

	return (
		<Container className='filter_container'>
			<FormControl size='small' sx={{ width: "25ch" }} variant='outlined'>
				<StyledFormHelperText>Location</StyledFormHelperText>
				<StyledSelect
				// value={}
				// onChange={handleChange}
				></StyledSelect>
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
				// value={}
				// onChange={handleChange}
				></StyledSelect>
			</FormControl>
			<Divider orientation='vertical' flexItem />
			<Button variant='contained' className='search_btn'>
				Search
			</Button>
		</Container>
	);
}

export default Filter;
