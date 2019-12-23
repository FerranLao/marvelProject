import React from 'react'
import { NavLink } from "react-router-dom"
import { withStyles } from '@material-ui/core'
import { navBarStyles } from "../styles"
function NavBar({ classes }) {
    return (
        <div className={classes.nav}>
            <NavLink activeClassName={classes.active} className={classes.link} to="/characters">Characters</NavLink>
            <NavLink activeClassName={classes.active} className={classes.link} to="/comics">Comics</NavLink>
            <NavLink activeClassName={classes.active} className={classes.link} to="/creators">Creators</NavLink>
        </div>
    )
}

export default withStyles(navBarStyles)(NavBar)
