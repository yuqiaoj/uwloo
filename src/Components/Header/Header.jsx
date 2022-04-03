import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    UWLoo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;