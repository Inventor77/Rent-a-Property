import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Grid,
    Divider,
    Paper,
    experimentalStyled as styled
} from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import GrassIcon from '@mui/icons-material/Grass';
import "./Card.scss"

const Item = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    padding: theme.spacing(2),
    color: "#999",
}));


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
                    <Grid xs={3}>
                        <Item elevation={1}>
                            <BedOutlinedIcon sx={{ color: "#6F65EF" }} />
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item elevation={1}>
                            <BathtubOutlinedIcon sx={{ color: "#6F65EF" }} />
                        </Item>
                    </Grid>
                    <Grid xs={3}>
                        <Item elevation={1}>
                            <GrassIcon sx={{ color: "#6F65EF" }} />
                        </Item>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default PropertyCard;