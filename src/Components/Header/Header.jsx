import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

import useStyles from './styles';

const Header = ({ setOpen }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Box display="flex" alignItems="flex-end" >
                    <Typography variant="h4" className={classes.title}>
                        UWLoo
                    </Typography>
                    <Typography component="legend" className={classes.title}>Beta</Typography>
                    <IconButton aria-label="warning" className={classes.icon} onClick={() => { setOpen(true) }}>
                        <ErrorIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;