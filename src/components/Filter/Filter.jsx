import React from "react";
import { Container, Button } from "@mui/material";
import "./Filter.scss";

function Filter() {
	return (
		<Container className='filter_container'>
			<Button variant='contained' className='btn'>
				Search
			</Button>
		</Container>
	);
}

export default Filter;
