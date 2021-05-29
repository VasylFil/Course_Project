import React from "react";
import classes from "./navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return(
    <nav className={classes.nav}>
        <div className={`container ${classes.container}`}>
            <NavLink to="/" exact className={classes.logo}>Lightning Project</NavLink>
            <div>
                <NavLink to="/app1" exact className={classes.navLink} activeClassName={classes.active}>Про Нас</NavLink>
                <NavLink to="/app2" exact className={classes.navLink} activeClassName={classes.active}>Продукти</NavLink>
                {!props.guard
                    ?
                    <React.Fragment>
                        <NavLink to="/app3" exact className={classes.navLink} activeClassName={classes.active}>Послуги</NavLink>
                        <NavLink to="/login" exact className={classes.navLink} activeClassName={classes.active}>Вхід</NavLink>
                        <NavLink to="/register" exact className={classes.navLink} activeClassName={classes.active}>Реєстрація</NavLink>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <NavLink to="/project" exact className={classes.navLink} activeClassName={classes.active}>Прект</NavLink>
                        <NavLink to="/team" exact className={classes.navLink} activeClassName={classes.active}>Команда</NavLink>
                        <NavLink to="/profile/1" exact className={classes.navLink} activeClassName={classes.active}>Профіль</NavLink>
                    </React.Fragment>
                }
            </div>
        </div>
    </nav>
)}


export default Navbar