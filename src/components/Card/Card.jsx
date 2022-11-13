import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Grid,
    Divider
} from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import "./Card.scss"


function PropertyCard(props) {
    const { data } = props;
    // console.log(data);
    return (
        <Card sx={{ width: 345, maxWidth: 345, borderRadius: "10px" }}>
            <CardMedia
                component="img"
                height="200"
                image={data?.img}
                alt="Paella dish"
            />
            <CardContent >
                <Grid container spacing={-2} direction="row" sx={{ marginTop: "12px" }} >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        xs
                    >
                        <Grid>
                            <Typography className="card_price">{`$${data?.price}`}<span>/month</span></Typography>
                        </Grid>
                        <Grid>
                            <Typography className="card_title">{data?.title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid >
                        <IconButton aria-label="add to favorites" sx={{ border: "1px solid #ccc" }}>
                            <FavoriteBorderRoundedIcon sx={{ color: "#6F65EF" }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Typography className="card_desc">{data?.desc?.substring(0, 38)}...</Typography>
                </Grid>
            </CardContent>
            <Divider variant='middle' />
            <CardActions >
                <Grid container spacing={0}>
                    <Grid xs={2}>
                        <Typography>xs=8</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography>xs=4</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography>xs=4</Typography>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default PropertyCard;