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
    experimentalStyled as styled,
    Box
} from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import GrassIcon from '@mui/icons-material/Grass';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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

const SideTag = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "225px",
    left: "-13px",
    background: "#6F65EF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'left',
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "16px",
    borderRadius: "10px 10px 10px 0px",
    "&::before": {
        position: "absolute",
        top: "34px",
        left: "0px",
        content: '""',
        display: "block",
        height: "0px",
        width: "0px",
        background: "",
        borderTop: "6.5px solid #69639A",
        borderRight: "6.5px solid #69639A",
        borderBottom: "6.5px solid transparent",
        borderLeft: "6.5px solid transparent",
        // borderRadius: "0px 0px 0px 100px",
    }
}));


function PropertyCard(props) {
    const { data } = props;
    // console.log(data);
    return (
        <Box sx={{ position: "relative" }}>
            <Card sx={{ width: 384, maxWidth: 384, borderRadius: "10px" }}>
            <CardMedia
                component="img"
                height="242"
                image={data?.img}
                alt="Paella dish"
            />
                <SideTag >
                    <AutoAwesomeIcon sx={{ color: "#FFFFFF", mr: "8px", fontSize: "medium" }} /> Popular
                </SideTag>
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
        </Box>
    );
}

export default PropertyCard;