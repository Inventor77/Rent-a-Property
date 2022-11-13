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
    textAlign: 'left',
    padding: `${theme.spacing(2)} ${theme.spacing(0)}`,
    color: "#999",
    fontSize: "15px"
}));


function PropertyCard(props) {
    const { data } = props;
    // console.log(data);
    return (
        <Card sx={{ width: 384, maxWidth: 384, borderRadius: "10px" }}>
            <CardMedia
                component="img"
                height="242"
                image={data?.img}
                alt="Paella dish"
            />
            <CardContent >
                <Grid container spacing={-2} direction="row" sx={{ marginTop: "16px" }} >
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
                    <Grid xs>
                        <Item elevation={0}>
                            <BedOutlinedIcon sx={{ color: "#6F65EF", mr: "8px" }} /> {`${data?.beds} Beds`}
                        </Item>
                    </Grid>
                    <Grid xs>
                        <Item elevation={0}>
                            <BathtubOutlinedIcon sx={{ color: "#6F65EF", mr: "8px" }} /> {`${data?.bathrooms} Bathrooms`}
                        </Item>
                    </Grid>
                    <Grid xs>
                        <Item elevation={0}>
                            <GrassIcon sx={{ color: "#6F65EF", mr: "8px" }} /> {`${data?.area}m`}<sup>2</sup>
                        </Item>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default PropertyCard;