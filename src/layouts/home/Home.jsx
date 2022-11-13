import React from 'react'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import { Container, Grid } from "@mui/material";
import "./Home.scss"
import Data from "../../demo_data";

function Home() {
    return (
			<div>
				<Header />
				<Container maxWidth='lg' disableGutters sx={{ marginTop: "36px" }}>
					<SubHeader />
					<Filter />
					<Grid container className='card_container'>
						{Data.map((data) => (
							<Card data={data} />
						))}
					</Grid>
				</Container>
			</div>
		);
}

export default Home