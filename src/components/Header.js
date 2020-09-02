import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        textDecoration: 'none',
        flexGrow: 1,
        fontFamily: "Roboto",
        color: 'white',
    },
}));


const Header = () => {

    const classes = useStyles();
    return (
        <AppBar color="primary" className={classes.root} position="static">
            <Toolbar>
                <Link to={'/'} className={classes.title} >
                    <Typography   color={"inherit"} variant="h6"  >
                        Streamy
                    </Typography>
                </Link>
                <Button style={{marginRight:'10px'}} variant="contained" component={Link} to={'/'}>Streams</Button>
                <GoogleAuth/>
            </Toolbar>
        </AppBar>
    )
}



export default Header;