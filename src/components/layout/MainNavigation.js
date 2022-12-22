import {NavLink, Link} from 'react-router-dom';
import logo from "../../assets/logo_baby.png";

import classes from './MainNavigation.module.css';
import styled from "styled-components";


const MainNavigation = () => {
    const Image = styled.img`
      width: 100%;
      height: 4rem;
      object-fit: cover;
    `;


    return (
        <header className={classes.header}>
            <Link href="/">
                <Image src={logo} alt="main logo" />
            </Link>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/welcome' activeClassName={classes.active}>
                            All Quotes!!!!!!
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/welcome' activeClassName={classes.active}>
                            Add a Quote!!!!!!
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;