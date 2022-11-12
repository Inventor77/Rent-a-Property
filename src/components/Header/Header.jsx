import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Menu,
    Typography,
    Container,
    Button,
    MenuItem,
} from "@mui/material";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./Header.scss";

const pages = ["Rent", "Buy", "Sell"];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static' sx={{ background: "#FBFAFF" }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <HouseRoundedIcon
                        fontSize='large'
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            mb: "4px",
                            color: "#6F65EF",
                        }}
                    />
                    <Typography
                        variant='h6'
                        noWrap
                        href=''
                        component='a'
                        className="logo"
                        sx={{
                            mr: 12,
                            display: { xs: "none", md: "flex" },
                        }}>
                        Estatery
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <HouseRoundedIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "#6F65EF", }}
                    />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href=''
                        className="logo"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                        }}>
                        Estatery
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page, idx) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: idx !== 0 ? "#000000" : "#6F65EF",
                                    background: idx !== 0 ? "transparent" : "#E5E3FD"
                                }}
                                className="tab btn">
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }} className="noWrap">
                        <Button variant='outlined' className='btn'>
                            Login
                        </Button>
                        <Button variant='contained' className='btn'>
                            Sign up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
