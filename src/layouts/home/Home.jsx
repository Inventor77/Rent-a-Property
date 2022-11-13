import React from 'react'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import Card from '../../components/Card/Card'
import {
    Container,
} from "@mui/material";
import "./Home.scss"
import Data from "../../demo_data";

function Home() {
    return (
        <div >
            <Header />
            <Container maxWidth='lg' disableGutters sx={{ marginTop: "36px" }}>
                <SubHeader />
            </Container>
        </div>
    )
}

export default Home