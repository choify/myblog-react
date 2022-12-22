import {Link} from 'react-router-dom';
import logo from "../../assets/logo_dragon.png";
import classes from './MainNavigation.module.css';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import InputBase from "@mui/material/InputBase";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#010101',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link to="/">
                <img className={classes.img} src={logo} alt="logo" />
            </Link>
            <Search>

                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </Search>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to='/Skills' activeClassName={classes.active}>
                            <Typography variant="subtitle1" gutterBottom fontWeight={"bold"}>
                                Skills
                            </Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Project' activeClassName={classes.active}>
                            <Typography variant="subtitle1" gutterBottom fontWeight={"bold"}>
                                Project
                            </Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Education' activeClassName={classes.active}>
                            <Typography variant="subtitle1" gutterBottom fontWeight={"bold"}>
                                Education
                            </Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Education' activeClassName={classes.active}>
                            <Typography variant="subtitle1" gutterBottom fontWeight={"bold"}>
                                About
                            </Typography>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;