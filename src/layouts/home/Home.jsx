import React from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import { Container, Grid } from "@mui/material";
import "./Home.scss";
import { useFilter } from "../../Context/FilterContext";

function Home() {
	const [filter, setFilter] = useFilter();

	return (
		<div>
			<Header />
			<Container maxWidth='lg' disableGutters sx={{ marginTop: "36px" }}>
				<SubHeader />
				<Filter />
				<Grid container className='card_container'>
					{filter?.map((data) => (
						<Card key={data.id} data={data} />
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default Home;
